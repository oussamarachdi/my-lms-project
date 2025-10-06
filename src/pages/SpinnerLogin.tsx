import { useState } from "react";
import { createToken, verifyToken, getToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function SpinnerLogin() {
  const nav = useNavigate();
  const [u, setU] = useState("");
  const [p, setP] = useState("");
  const [err, setErr] = useState("");

  // If already logged in (valid token), jump to spinner
  (async () => {
    const t = getToken();
    if (await verifyToken(t)) nav("/spinner", { replace: true });
  })();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr("");

    const USER = String(import.meta.env.VITE_SPINNER_USER || "");
    const PASS = String(import.meta.env.VITE_SPINNER_PASS || "");

    if (u === USER && p === PASS) {
      await createToken(u);
      nav("/spinner", { replace: true });
    } else {
      setErr("Invalid credentials.");
    }
  }

  return (
    <section className="min-h-screen grid place-items-center bg-gradient-to-b from-slate-900 to-black text-white">
      <form onSubmit={onSubmit} className="w-full max-w-sm bg-white/10 backdrop-blur p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Organizer Login</h1>
        <label className="text-sm">Username</label>
        <input
          className="mt-1 w-full rounded-lg bg-white/90 text-gray-900 px-3 py-2 outline-none"
          value={u} onChange={(e)=>setU(e.target.value)}
        />
        <label className="text-sm mt-4 block">Password</label>
        <input
          type="password"
          className="mt-1 w-full rounded-lg bg-white/90 text-gray-900 px-3 py-2 outline-none"
          value={p} onChange={(e)=>setP(e.target.value)}
        />
        {err && <p className="mt-3 text-red-300 text-sm">{err}</p>}
        <button className="mt-5 w-full rounded-xl bg-white text-gray-900 font-semibold py-2 hover:bg-gray-200">
          Sign in
        </button>
      </form>
    </section>
  );
}
