import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-hot-toast"; // Import react-hot-toast

export default function Signup() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // For password visibility toggle
  const [passwordError, setPasswordError] = useState(""); // To store password validation error
  const navigate = useNavigate();

  // Password validation function
  const validatePassword = (password) => {
    // Password validation criteria
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;
    const minLength = 6;

    if (!uppercase.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
      return false;
    }
    if (!lowercase.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter.");
      return false;
    }
    if (password.length < minLength) {
      setPasswordError(`Password must be at least ${minLength} characters long.`);
      return false;
    }
    setPasswordError(""); // Clear password error if validation passes
    return true;
  };

  // Handle signup
  async function handleSignup(e) {
    e.preventDefault();
    setErr("");
    setBusy(true);

    // Validate the password before proceeding
    if (!validatePassword(password)) {
      toast.error("Password is invalid. Please follow the password guidelines.");
      setBusy(false);
      return;
    }

    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      if (displayName || photoURL) {
        await updateProfile(cred.user, { displayName, photoURL });
      }
      navigate("/home", { replace: true });
    } catch (e) {
      setErr(e.message);
      toast.error("Signup failed. Please try again!"); // Show error toast on signup failure
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
          placeholder="Display Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          style={{ display: "block", width: "100%", margin: "8px 0" }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: "block", width: "100%", margin: "8px 0" }}
        />
        <input
          type="text"
          placeholder="Photo URL (optional)"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
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

        {passwordError && <p style={{ color: "crimson" }}>{passwordError}</p>} {/* Display password error */}

        <button disabled={busy} type="submit" style={{ width: "100%", padding: 8 }}>
          {busy ? "Creating..." : "Register"}
        </button>
      </form>

      {err && <p style={{ color: "crimson" }}>{err}</p>} {/* Display general error */}

      <p style={{ marginTop: 12 }}>
        Already have an account? <Link to="/signin">Sign in</Link>
      </p>
    </div>
  );
}
