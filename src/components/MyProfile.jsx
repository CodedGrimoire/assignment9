import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const [user, setUser] = useState(auth.currentUser); // Store current user data
  const [name, setName] = useState(user?.displayName || ""); // Track name input
  const [photoURL, setPhotoURL] = useState(user?.photoURL || ""); // Track image URL input
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for auth state changes (useful when logging in/out)
    const unsub = auth.onAuthStateChanged((user) => {
      setUser(user);
      setName(user?.displayName || "");
      setPhotoURL(user?.photoURL || "");
    });
    return unsub;
  }, []);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset any previous errors

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });
      // On successful update, show a message or navigate to a different page
      alert("Profile updated successfully!");
      navigate("/profile"); // Optionally navigate to a different page after updating
    } catch (error) {
      setError("Error updating profile: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", fontFamily: "sans-serif", padding: 24 }}>
      <h2>My Profile</h2>
      <div style={{ marginBottom: 24 }}>
        <h3>User Info</h3>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* User Image */}
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt="profile"
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                objectFit: "cover",
                border: "1px solid #ddd",
              }}
            />
          ) : (
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: "#ececec",
                display: "grid",
                placeItems: "center",
                color: "#333",
                fontWeight: 600,
                border: "1px solid #ddd",
              }}
            >
              {user?.displayName?.slice(0, 2).toUpperCase()}
            </div>
          )}
          <div>
            <p><b>Name:</b> {user?.displayName}</p>
            <p><b>Email:</b> {user?.email}</p>
          </div>
        </div>
      </div>

      {/* Profile Update Form */}
      <h3>Update Profile</h3>
      <form onSubmit={handleProfileUpdate}>
        <div style={{ marginBottom: 12 }}>
          <label style={{ display: "block", marginBottom: 6 }}>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ddd" }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label style={{ display: "block", marginBottom: 6 }}>Profile Image URL</label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            placeholder="Enter image URL (or leave blank)"
            style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ddd" }}
          />
        </div>

        {error && <p style={{ color: "crimson", marginBottom: 12 }}>{error}</p>}

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "8px 12px",
            borderRadius: 6,
            cursor: "pointer",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            marginTop: 12,
          }}
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default MyProfile;
