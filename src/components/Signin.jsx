import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";

export default function Signin() {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr]           = useState("");
  const [busy, setBusy]         = useState(false);
  const navigate = useNavigate();

  async function handleEmailSignin(e) {
    e.preventDefault();
    setErr(""); setBusy(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home", { replace: true });
    } catch (e) {
      setErr(e.message);
    } finally {
      setBusy(false);
    }
  }

  async function handleGoogle() {
    setErr(""); setBusy(true);
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/home", { replace: true });
    } catch (e) {
      setErr(e.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div style={{ maxWidth: 360, margin: "4rem auto", fontFamily: "sans-serif" }}>
      <h2>Sign in</h2>
      <form onSubmit={handleEmailSignin}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
          style={{ display:"block", width:"100%", margin:"8px 0" }}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
          style={{ display:"block", width:"100%", margin:"8px 0" }}
        />
        <button disabled={busy} type="submit" style={{ width:"100%", padding:8 }}>
          {busy ? "Signing in…" : "Sign in"}
        </button>
      </form>

      <button disabled={busy} onClick={handleGoogle} style={{ width:"100%", padding:8, marginTop:8 }}>
        Continue with Google
      </button>

      {err && <p style={{ color:"crimson" }}>{err}</p>}

      <p style={{ marginTop: 12 }}>
        New here? <Link to="/signup">Create an account</Link>
      </p>
    </div>
  );
}
