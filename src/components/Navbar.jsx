import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { auth } from "../firebase";
import "./navbar.css";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return unsub;
  }, []);

  const displayNameOrEmail = user ? user.displayName || user.email : "";

  const leftControl = user ? (
    <div className="user-controls">
      {user.photoURL ? (
        <div className="profile-wrapper">
          <img
            src={user.photoURL}
            alt="profile"
            title={displayNameOrEmail}
            className="avatar"
          />
          <span className="profile-tooltip">{displayNameOrEmail}</span>
        </div>
      ) : (
        <div className="profile-wrapper">
          <div title={displayNameOrEmail} className="avatar initials">
            {displayNameOrEmail.slice(0, 2).toUpperCase()}
          </div>
          <span className="profile-tooltip">{displayNameOrEmail}</span>
        </div>
      )}
      <button onClick={() => signOut(auth)} className="logout-btn">
        Logout
      </button>
    </div>
  ) : (
    <div className="auth-buttons">
      <button onClick={() => navigate("/signin")} className="login-btn">
        Login
      </button>
      <button onClick={() => navigate("/signup")} className="signup-btn">
        Signup
      </button>
    </div>
  );

  return (
    <header className="navbar">
      <div className="navbar-left">
        <NavLink to="/" className="logo-text">
          SkillShare
        </NavLink>
      </div>

      <nav className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          My Profile
        </NavLink>
        <NavLink
          to="/workshops"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Workshops
        </NavLink>
      </nav>

      <div className="navbar-right">{leftControl}</div>
    </header>
  );
}
