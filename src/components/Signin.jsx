// Signin.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-hot-toast"; // Import react-hot-toast for error toast

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // For password visibility toggle
  const navigate = useNavigate();

  // Handle email sign-in
  async function handleEmailSignin(e) {
    e.preventDefault();
    setErr(""); setBusy(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home", { replace: true }); // Redirect after login success
    } catch (e) {
      console.error("Login Error:", e); // Log the full error
      setErr(e.message); // Display the error message
      toast.error("Login failed. Please try again!"); // Show error toast
    } finally {
      setBusy(false);
    }
  }

  // Handle Google login
  async function handleGoogle() {
    setErr(""); setBusy(true);
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/home", { replace: true }); // Redirect after Google login success
    } catch (e) {
      console.error("Google Login Error:", e); // Log the full error
      setErr(e.message); // Display the error message
      toast.error("Google login failed. Please try again!"); // Show error toast
    } finally {
      setBusy(false);
    }
  }

  return (
    <div style={{ maxWidth: 360, margin: "4rem auto", fontFamily: "sans-serif" }}>
      <h2>Login</h2>
      <form onSubmit={handleEmailSignin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: "block", width: "100%", margin: "8px 0" }}
        />
        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ display: "block", width: "100%", margin: "8px 0" }}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: 10,
              top: 10,
              cursor: "pointer",
            }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button disabled={busy} type="submit" style={{ width: "100%", padding: 8 }}>
          {busy ? "Signing in..." : "Login"}
        </button>
      </form>

      {err && <p style={{ color: "crimson" }}>{err}</p>}

      <div style={{ marginTop: 12 }}>
        <Link to="/forgot-password">Forgot Password?</Link> {/* Link to ForgotPassword page */}
      </div>

      <div style={{ marginTop: 12 }}>
        <button
          onClick={handleGoogle}
          style={{
            width: "100%",
            padding: 8,
            backgroundColor: "#4285F4",
            color: "white",
            border: "none",
            borderRadius: 6,
          }}
        >
          Continue with Google
        </button>
      </div>

      <p style={{ marginTop: 12 }}>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}
