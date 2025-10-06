import { Navigate } from "react-router-dom";
import { getToken, verifyToken } from "../utils/auth";
import { useEffect, useState, type JSX } from "react";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const [ok, setOk] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => setOk(await verifyToken(getToken())))();
  }, []);

  if (ok === null) return null; // or a loader
  return ok ? children : <Navigate to="/spinner-login" replace />;
}
