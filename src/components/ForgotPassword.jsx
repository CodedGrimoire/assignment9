// ForgotPassword.jsx
import React, { useState } from "react";
import { toast } from "react-hot-toast"; // Import react-hot-toast
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Get the navigate function

  // Handle reset password
  const handleResetPassword = (e) => {
    e.preventDefault();
    if (email) {
      toast.success("Password reset link sent to your email!"); // Success toast

      // Navigate to the Home page immediately after showing the success toast
      navigate("/home"); // Redirect to Home page
    } else {
      toast.error("Please enter a valid email address!"); // Error toast if email is not provided
    }
  };

  return (
    <div style={{ maxWidth: 360, margin: "4rem auto", fontFamily: "sans-serif" }}>
      <h2>Forgot Password</h2>
      <form onSubmit={handleResetPassword}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: "block", width: "100%", margin: "8px 0" }}
        />
        <button type="submit" style={{ width: "100%", padding: 8 }}>
          Reset Password
        </button>
      </form>
    </div>
  );
}
