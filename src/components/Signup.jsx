import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";

export default function Signup() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail]             = useState("");
  const [password, setPassword]       = useState("");
  const [err, setErr]                 = useState("");
  const [busy, setBusy]               = useState(false);
  const navigate = useNavigate();

  async function handleSignup(e) {
    e.preventDefault();
    setErr(""); setBusy(true);
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      if (displayName) await updateProfile(cred.user, { displayName });
      navigate("/home", { replace: true });
    } catch (e) {
      setErr(e.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div style={{ maxWidth: 360, margin: "4rem auto", fontFamily: "sans-serif" }}>
      <h2>Sign up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="display name (optional)"
          value={displayName}
          onChange={(e)=>setDisplayName(e.target.value)}
          style={{ display:"block", width:"100%", margin:"8px 0" }}
        />
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
          {busy ? "Creating…" : "Create account"}
        </button>
      </form>

      {err && <p style={{ color:"crimson" }}>{err}</p>}

      <p style={{ marginTop: 12 }}>
        Already have an account? <Link to="/signin">Sign in</Link>
      </p>
    </div>
  );
}
