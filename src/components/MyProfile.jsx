import React, { useState, useEffect } from "react";

import "./myProfile.css";

import "animate.css";

import { auth } from "../firebase";

import { updateProfile, onAuthStateChanged } from "firebase/auth";


import { toast } from "react-hot-toast";
const MyProfile = () => {
  const [user, setUser] = useState(auth.currentUser);
  const [name, setName] = useState(user?.displayName || "");


  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
 


  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setName(u?.displayName || "");
      setPhotoURL(u?.photoURL || "");
    });
    return unsub;
  }, []);


 const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  
  const [editMode, setEditMode] = useState(false);


  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await updateProfile(user, { displayName: name, photoURL });

      setEditMode(false);
      toast.success("Profile updated successfully!");


      
    }
    
    catch (error) {
      toast.error("Error updating profile: " + error.message);
    } 
    
    finally {
      setLoading(false);
    }
  };

  if (!user) return <p className="center-text">Please log in to view profile.</p>;

  return (
   <div
 className="userinfo animate__animated animate__fadeInUp"
  style={{ animationDuration: "1s" }}
>
      <h2>My Profile
        
      </h2>

      <div className="persoonal">
        <div className="profile-header">
          {user.photoURL ? (


            <img src={user.photoURL} alt="" 
            
            className="dp" />
          ) : (
            <div className="profile-placeholder">

              {user?.displayName?.slice(0, 2)?.toUpperCase() || "U"}
            </div>
          )}
          <div>
            <p><b>Name:
              
              </b> 
            {user.displayName}
            </p>


            <p><b>Email:</b> {user.email}
            </p></div>
          
        </div>
      </div>



      {!editMode ? (
        <button onClick={() => setEditMode(true)} className="edit-btn">
          Edit Profile
        </button>


      ) : (
        <form onSubmit={handleProfileUpdate} 
        className="updates">


          <div className="fgss">

            <label>Name

            </label>
            <input
              type="text"   value={name}
            
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name........"
            />
          </div>

          <div className="fgss">
            <label>Profile Image URL

            </label>


            <input
              type="text"  value={photoURL}
             
              onChange={(e) => setPhotoURL(e.target.value)}

              placeholder="Enter image URL........"
            />
          </div>

          {error && <p className="error-text">{error}</p>}

          <div className="form-actions">
            <button type="button" 
            className="cancel-btn" onClick={() => setEditMode(false)}>
              Cancel
            </button>
            <button type="submit" 
            className="save-btn" 
            
            disabled={loading}>
              {loading ? "Updating..." : "Save Changes"}
            </button>  </div>
         
        </form>
      )}
    </div>
  );
};

export default MyProfile;
