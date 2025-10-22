import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Navbar() {
  const [user, setUser] = useState(null); // No fallback, initial state is null
  const navigate = useNavigate();

  // Listen to auth state changes
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u)); 
    return unsub;
  }, []);

  // Get the display name or email (if available)
  const displayNameOrEmail = user ? user.displayName || user.email : "";

  const leftControl = user ? (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      {/* Avatar with hover title */}
      {user.photoURL ? (
        <img
          src={user.photoURL}
          alt="profile"
          title={displayNameOrEmail}
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            objectFit: "cover",
            border: "1px solid #ddd",
          }}
        />
      ) : (
        <div
          title={displayNameOrEmail}
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
            background: "#ececec",
            color: "#333",
            fontWeight: 600,
            border: "1px solid #ddd",
          }}
        >
          {displayNameOrEmail.slice(0, 2).toUpperCase()} {/* Show initials */}
        </div>
      )}
      <button
        onClick={() => signOut(auth)}
        style={{
          padding: "6px 10px",
          borderRadius: 6,
          cursor: "pointer",
          backgroundColor: "#f1f1f1",
          border: "none",
        }}
      >
        Logout
      </button>
    </div>
  ) : (
    <div>
      <button
        onClick={() => navigate("/signin")}
        style={{
          padding: "6px 10px",
          borderRadius: 6,
          cursor: "pointer",
          backgroundColor: "#f1f1f1",
          border: "none",
        }}
      >
        Login
      </button>
      <button
        onClick={() => navigate("/signup")}
        style={{
          padding: "6px 10px",
          borderRadius: 6,
          cursor: "pointer",
          backgroundColor: "#f1f1f1",
          border: "none",
          marginLeft: 8,
        }}
      >
        Signup
      </button>
    </div>
  );

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 16px",
        borderBottom: "1px solid #ddd",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <Link
          to="/"
          style={{
            fontWeight: 700,
            textDecoration: "none",
            color: "#111",
            fontSize: "1.5rem",
          }}
        >
          SkillShare
        </Link>
        <nav style={{ display: "flex", gap: 16 }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            My Profile
          </Link>
        </nav>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {leftControl}
      </div>
    </header>
  );
}
