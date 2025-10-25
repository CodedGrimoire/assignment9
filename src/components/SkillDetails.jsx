
import React, { useState, useEffect } from "react";

import { toast } from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";


import "./common.css";


import skillsData from "../assets/skill.json";

const SkillDetails = () => {
  const { skillId } = useParams();



  const [showForm, setShowForm] = useState(false);
 
  const [skilldeet, setSkill] = useState(null);
   const [formData, setFormData] = useState({ name: "", email: "" });
  
  const navigate = useNavigate();

  useEffect(() => {
    const selected = skillsData.find(

      (s) => s.skillId === parseInt(skillId, 10)
    );
    if (!selected) {
      navigate("/");
    } else {
      setSkill(selected);
    }
  }, [skillId, navigate]);

 

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Session booked successfully!");

    setFormData({ name: "", email: "" });

    setShowForm(false);
  };
   if (!skilldeet) {
    return (
      <div className="skill-details-container">
        <div style={{ padding: 24 }}>Loading…</div>
      </div>
    );
  }

  return (
    <div className="skill-details-container">
     
      <div className="skill-details-grid">
      
        <div className="left-col">
          <img src={skilldeet.image} alt=""
           className="skill-image-lg" />
        </div>

        {/* hfchg*/}
        <div className="right-col">

          <h2 className="skill-title">{skilldeet.skillName}

          </h2>

          <div className="infoz">


            <p><strong>Provider:</strong> {skilldeet.providerName}</p>


            <p>
              <strong>Description:</strong> {skilldeet.description}</p>

            <p><strong>Category:</strong> {skilldeet.category}</p>

            <p><strong>Rating:</strong> {skilldeet.rating} ⭐</p>
            <p><strong>Price:</strong> ${skilldeet.price}</p>


          
              <p><strong>Slots Available:</strong> {skilldeet.slotsAvailable}</p>
            
            {skilldeet.providerEmail && (
              <p><strong>Contact:</strong> {skilldeet.providerEmail}</p> )}
           
          </div>

        
          <button
            type="button"

            className="toog"

            onClick={() => setShowForm((v) => !v)}

          >
            {showForm ? "Close Booking Form" : "Book Session"} </button>
         

         
          {showForm && (
            <div className="sesh box">

              <h3 className="ttil"> Book a Session</h3>


              <form onSubmit={handleSubmit}
              className="seshfm">
                <div className="ffrr">
                  <label>Name

                  </label>
                  <input
                    type="text"
                    value={formData.name}

                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    placeholder="Your name"
                  />


                </div>
                <div className="ffrr">


                  <label>Email</label>
                  <input
                    type="email"   value={formData.email}
                  
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    placeholder="your@email.com"


                  /></div>
                
                <button type="submit" className="bsssm">Submit

                </button>  </form>
            
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;
