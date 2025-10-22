import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");  // State to hold the email input
  const [err, setErr] = useState("");      // To store error message
  const [success, setSuccess] = useState("");  // To store success message
  const [busy, setBusy] = useState(false);    // To track loading state
  const navigate = useNavigate();         // For navigation after success

  // Handle password reset
  async function handleResetPassword(e) {
    e.preventDefault();
    setErr(""); setSuccess(""); setBusy(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess("Password reset email sent! Please check your inbox.");
      setTimeout(() => navigate("/signin"), 3000); // Redirect to signin after 3 seconds
    } catch (e) {
      setErr("Error: " + e.message); // If error occurs, set it
    } finally {
      setBusy(false);
    }
  }

  return (
    <div style={{ maxWidth: 360, margin: "4rem auto", fontFamily: "sans-serif" }}>
      <h2>Forgot Password</h2>
      <form onSubmit={handleResetPassword}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: "block", width: "100%", margin: "8px 0" }}
        />
        <button disabled={busy} type="submit" style={{ width: "100%", padding: 8 }}>
          {busy ? "Sending..." : "Reset Password"}
        </button>
      </form>

      {err && <p style={{ color: "crimson" }}>{err}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
}
