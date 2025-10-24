import React, { useState } from "react";


import { toast } from "react-hot-toast";

import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [emailss, setEmail] = useState("");


  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (emailss) {
      toast.success("Password reset link sent to your email!");
      navigate("/home");
    } else {
      toast.error("Please enter a valid email address!");
    }
  };

  return (
    <div style={{ maxWidth: 360, margin: "4rem auto",
      
     }}>
      <h2>Forgot Password</h2>
      <form onSubmit={handleResetPassword}>
        <input
          type="email"
          placeholder="Email"  value={emailss}
         
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: "block", width: "100%", margin: "8px 0"  ,height: "35px", padding: "0 10px", borderRadius: "5px", border: "1px solid #c1bdbdff" 
           
          }}
        />
        <button type="submit" style={{ width: "100%", color: "white", backgroundColor: "#2563eb", borderRadius: 6, border: "none",
          
          padding: 8 }}>
          Reset Password</button>
        
      </form>
    </div>
  );
}