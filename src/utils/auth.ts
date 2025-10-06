export const TOKEN_KEY = "lms_spinner_token";

type Payload = { sub: string; exp: number };

function b64(s: string) {
  return btoa(unescape(encodeURIComponent(s)));
}
function ub64(s: string) {
  return decodeURIComponent(escape(atob(s)));
}

async function hmacSHA256(message: string, secret: string) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
  const sigBuf = await crypto.subtle.sign("HMAC", key, enc.encode(message));
  const bytes = String.fromCharCode(...new Uint8Array(sigBuf));
  return btoa(bytes); // base64
}

export async function createToken(username: string) {
  const ttl = Number(import.meta.env.VITE_TOKEN_TTL_HOURS || 72);
  const exp = Date.now() + ttl * 60 * 60 * 1000;
  const payload: Payload = { sub: username, exp };
  const secret = String(import.meta.env.VITE_AUTH_SECRET || "dev-secret");

  const header = b64(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const body = b64(JSON.stringify(payload));
  const sig = await hmacSHA256(`${header}.${body}`, secret);
  const token = `${header}.${body}.${sig}`;
  localStorage.setItem(TOKEN_KEY, token);
  return token;
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY) || null;
}
export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export async function verifyToken(token: string | null) {
  if (!token) return false;
  const [header, body, sig] = token.split(".");
  if (!header || !body || !sig) return false;

  const secret = String(import.meta.env.VITE_AUTH_SECRET || "dev-secret");
  const expected = await hmacSHA256(`${header}.${body}`, secret);
  if (expected !== sig) return false;

  try {
    const payload = JSON.parse(ub64(body)) as Payload;
    return payload.exp > Date.now();
  } catch {
    return false;
  }
}