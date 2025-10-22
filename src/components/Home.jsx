import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";

import SkillsCards from './SkillsCards';
import { auth } from "../firebase";
import './home.css'; 

// Small helper to render initials if no photoURL
function getInitials(nameOrEmail) {
  if (!nameOrEmail) return "U";
  const name = nameOrEmail.split("@")[0];
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function Home() {
  const [user, setUser] = useState(auth.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return unsub;
  }, []);

  const displayNameOrEmail = useMemo(
    () => user?.displayName || user?.email || "",
    [user]
  );

  const leftControl = user ? (
    <div className="user-controls">
      {/* Avatar with hover title */}
      {user.photoURL ? (
        <img
          src={user.photoURL}
          alt="profile"
          title={displayNameOrEmail}
          className="avatar"
        />
      ) : (
        <div title={displayNameOrEmail} className="avatar initials">
          {getInitials(displayNameOrEmail)}
        </div>
      )}
      <button
        onClick={() => signOut(auth)}
        className="logout-btn"
      >
        Logout
      </button>
    </div>
  ) : (
    <button
      onClick={() => navigate("/signin")}
      className="signin-btn"
    >
      Sign in
    </button>
  );

  return (
    <div className="home-container">
      {/* Top bar with left controls */}
      <header className="navbar">
        <div className="navbar-left">
          {leftControl}
        </div>
      </header>

      {/* Main content */}
      <main>
        <h2 className="heading">Home (Public)</h2>
        {user ? (
          <p>Welcome back, <b>{displayNameOrEmail}</b>!</p>
        ) : (
          <p>You’re browsing as a guest.</p>
        )}

        <div className="details-btn-container">
          <button
            onClick={() => navigate("/details")}
            className="details-btn"
          >
            Go to Details (protected)
          </button>
        </div>
        <section className="skills-cards-section">
          <h3>Popular Skills</h3>
          <SkillsCards /> {/* Display the SkillsCards component */}
        </section>
      </main>
    </div>
  );
}
