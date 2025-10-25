
import { useState } from "react";

import { toast } from "react-hot-toast";
import { Link, useNavigate,useLocation } from "react-router-dom";


import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { auth, googleProvider } from "../firebase";





export default function Signin() {
  const [email, setEmail] = useState("");


  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
 

  const navigate = useNavigate();
 const location = useLocation();
const from = location.state?.from || "/";

  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleEmailSignin(e) {
    e.preventDefault();
    setErr("");
    setBusy(true);


    try {
      await signInWithEmailAndPassword(auth, email, password);
       navigate(from, { replace: true });
    } catch (e) {
      setErr(e.message);
      toast.error("Login failed. Please try again!");
    } finally {
      setBusy(false);
    }
  }

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

  return (
    <div
      style={{
        maxWidth: 390,

        padding: 24,
        margin: "4rem auto",



       
        background: "white",
       
        borderRadius: 12,
        
       
      }}
    >


      <h2 style={{ marginBottom: 16, 
        textAlign: "center" }}>Login</h2>

      <form onSubmit={handleEmailSignin} 
      style={{ display: "grid", 
      gap: 12 }}>


        <input
          type="email"
          placeholder="Email"   value={email}

        
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ border:"solid #cdc7c7ff 2px",
            width: "100%",
            padding: "12px 15px",

           
            borderRadius: 9,


            
            outline: "none",
          }}

          onFocus={(e) => (e.target.style.borderColor = "#4676dcff")}

          onBlur={(e) => (e.target.style.borderColor = "#c6c2c2ff")}
        />

        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"  value={password}
           
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",

               outline: "none",

               borderRadius: 9,
              padding: "10px 42px 10px 12px",
             
              border: " #bdb7b7ff 1px solid",
             
            }}


            onFocus={(e) => (e.target.style.borderColor = "#5371b1ff")}
            onBlur={(e) => (e.target.style.borderColor = "#ddd")}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}


            style={{
              position: "absolute",
              right: 12,
              top: "50%",
               color: "#0f0a0aff",
            
justifyContent: "center",
               alignItems: "center",
             
              fontSize: 18,
             
              display: "flex",
             
            }}
           
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}  </span>
         
        </div>

        <button
          disabled={busy}
          type="submit"
          style={{   borderRadius: 10,
            width: "100%",

             color: "white",
            padding: 10,
         
            background: busy ? "#9ca3af" : "#2563eb",
           
            border: "none",
           
            fontWeight: 600,
          }}
        >
          {busy ? "Signing in..." : "Login"}
        </button>
      </form>

      {err && (
        <p style={{ color: "crimson", marginTop: 10,
           fontSize: 14 }}>{err}</p>
      )}

      <div style={{ marginTop: 12,
         textAlign: "right" }}> <Link to="/forgot-password" style={{ color: "#2563eb" }}>
       
          Forgot Password?
        </Link>  </div>
    

      <div style={{ marginTop: 12 }}>
        <button
          onClick={handleGoogle}
          style={{fontWeight: 600,
            width: "100%",
            padding: 10,

              borderRadius: 9,

            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
          
            
           
          }}
        >
          Continue with Google
        </button> </div>
     

      <p style={{ 

        marginTop: 14,
         textAlign: "center" }}>


        Do not have an account?{" "}


        <Link to="/signup" state={{ from: location.state?.from || "/" }}
        style={{ 
          color: "#2563eb" }}>
          Sign up </Link>


       
      </p> </div>
   
  );
}
