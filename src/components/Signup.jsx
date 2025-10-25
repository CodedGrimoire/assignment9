
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";



import { FaEye, FaEyeSlash } from "react-icons/fa";

import { signInWithPopup } from "firebase/auth";


import {useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";

import { auth, googleProvider } from "../firebase";

export default function Signup() {
 

    const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
const req1="Password must contain at least one uppercase letter."
const req2="Password must contain at least one lowercase letter."
const req3="Password must be at least 6 characters long."


   const location = useLocation();
const from = location.state?.from || "/";
  const [err, setErr] = useState("");


  const [busy, setBusy] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const validatePassword = (pwd) => {
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;


    const minLength = 6;
    if (!uppercase.test(pwd)) {

      setPasswordError(req1);
      return false;
    }
    if (!lowercase.test(pwd)) {

      setPasswordError(req2);
      return false;
    }
    if (pwd.length < minLength) {

      setPasswordError(req3);
      return false;
    }
    setPasswordError("");
    return true;
  };


  async function handleGoogle() {
    setErr("");
    setBusy(true);
    try {
      await signInWithPopup(auth, googleProvider);
       navigate(from, { replace: true });
    } 
    
    catch (e) {
      setErr(e.message);
      toast.error("Google login failed. Please try again!");
    } 
    finally {
      setBusy(false);
    }
  }

  const [email, setEmail] = useState("");


  const [photoURL, setPhotoURL] = useState("");

 const [displayName, setDisplayName] = useState("");

  async function handleSignup(e) {
    e.preventDefault();
    setErr("");
    setBusy(true);

 if (!displayName.trim()) {
    toast.error("Please enter your display name before signing up.");
    setBusy(false);
    return;
  }
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


      toast.success("Signup successful!");
      navigate(from, { replace: true });
    } 
    
    catch (e) 
    {
      setErr(e.message);
      
      toast.error("Signup failed. Please try again!");


    } 
    
    finally 
    {
      setBusy(false);
    }
  }

  return (
    <div
      style={{
        maxWidth: 420,  margin: "4rem auto", borderRadius: 12,
       

        
       
        background: "white",
        border: "solid #d4d0d0ff 1px ",
       
        padding: 24,
      
      }}
    >
      <h2 style={{ marginBottom: 16,
         textAlign: "center" }}>Sign up</h2>



      <form onSubmit={handleSignup} style={{ display: "grid", gap: 12 }}>
        <input
          type="text"       placeholder="Display Name"  value={displayName}
    
         
          onChange={(e) => setDisplayName(e.target.value)}
          style={{
             padding: "13px 15px",
            width: "100%",
           
           
            border: "1px solid #ccc6c6ff",
            outline: "none",

             borderRadius: 9,
          }}
          onFocus={(e) => (e.target.style.borderColor = "#2563eb")}

          onBlur={(e) => (e.target.style.borderColor = "#ddd")}
        />

        <input
          type="email"
          placeholder="Email"  value={email}
         
          required
          onChange={(e) => setEmail(e.target.value)}


          style={{   border: "1px solid #cac7c7ff",
            width: "100%",

             outline: "none",
            padding: "12px 15px",

            borderRadius: 8,
          
           
          }}
          onFocus={(e) => (e.target.style.borderColor = "#2563eb")}
          onBlur={(e) => (e.target.style.borderColor = "#ddd")}
        />

        <input
          type="text"  placeholder="Photo URL (optional)"  value={photoURL}
         
         
          onChange={(e) => setPhotoURL(e.target.value)}
          style={{
            width: "100%", padding: "10px 12px",
           
            borderRadius: 9, border: "1px solid #c9c6c6ff",
           
            outline: "none",
          }}


          onFocus={(e) => (e.target.style.borderColor = "#2563eb")}
          onBlur={(e) => (e.target.style.borderColor = "#ddd")}
        />

        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}


            placeholder="Password"   value={password}
          
            required
            onChange={(e) => setPassword(e.target.value)}


            style={{ 
              border: "1px solid #c9c6c6ff",padding: "10px 42px 10px 12px",
              width: "100%",
              
              borderRadius: 9,
             
              outline: "none",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#2563eb")}

            onBlur={(e) => (e.target.style.borderColor = "#d7d0d0ff")}
          />


          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",  display: "flex",
              right: 12,
             
              transform: "translateY(-50%)", top: "50%",
             
              fontSize: 18,
              color: "#535151ff",
            
              alignItems: "center",
            }}
          
          >

            {showPassword ? 
            <FaEyeSlash /> : <FaEye />}

          </span></div>
        

        {passwordError && (
          <p style={{
             color: "crimson", fontSize: 14,
              marginTop: 4 }}>
            {passwordError}


          </p>
        )}
        <p>
          <ul style={{color:"grey",fontSize:12}}>
             <li>{req1}</li>
    <li>{req2}</li>
    <li>{req3}</li>
          </ul>
        </p>

        <button
          disabled={busy}   type="submit"
        
          style={{
            width: "100%",  border: "none",
            padding: 10,
           
           
            color: "white",
            background:"#1f5e1bff",
           
           
            fontWeight: 600, borderRadius: 9,
          }}
        >
          {busy ? "Creating..." : "Register"} </button> </form>
       
     

      {err && (
        <p style={{
           color: "crimson", marginTop: 10, 


           fontSize: 14 }}>{err}</p>
      )}

      <p style={{ marginTop: 14, textAlign: "center" }}>
        Already have an account?{" "}


        <Link to="/signin" style={{ color: "#2563eb" }}>
          Sign in </Link> </p>

          <div style={{ marginTop: 12 }}>
        <button
          onClick={handleGoogle}
          style={{
            width: "100%",
            padding: 10,

              borderRadius: 9,

            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
          
            fontWeight: 600,
           
          }}
        >
          Continue with Google
        </button> </div>
     


       
     
    </div>
  );
}
