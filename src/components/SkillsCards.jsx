import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import skillsData from "../assets/skill.json";


import { onAuthStateChanged } from "firebase/auth";

import "./skillsCards.css";

import { auth } from "../firebase";



const SkillsCards = () => {
  const [skiiills, setSkills] = useState([]);


  const [user, setUser] = useState(null);


  const navigate = useNavigate();

  useEffect(() => {
    setSkills(skillsData);


    const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {

      setUser(loggedInUser || null);
    });
    return () => unsubscribe();
  }, []);


  const handleViewDetails = (skillId) => {
    if (user) 
      {
      navigate(`/details/${skillId}`);
    } 
    
    else {
      navigate("/signin", { state: { from: `/details/${skillId}` } });
    }
  };

  return (
    <div className="skills-cards-container">
      {skiiills.map((skill) => (

        <div className="skill-card" key={skill.skillId}>


          <img src={skill.image} alt="" 
          className="skill-image" />

          <h3 className="skill-name">{skill.skillName}</h3>

          <div className="rating">

             <span className="rating-value">({skill.rating})

             </span>
            <span className="stars">{"⭐"}</span>
           
          </div>
          <p className="skill-price">$ {skill.price}</p>


          <button
            className="view-details-btn"

            
            onClick={() => handleViewDetails(skill.skillId)}
          >
            View Details </button>  </div>
         
      
      ))}
    </div>
  );
};

export default SkillsCards;
