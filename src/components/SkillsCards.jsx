// SkillsCards.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase"; // Firebase authentication import
import "./skillsCards.css";
import skillsData from "../assets/skill.json"; // Import skills data

const SkillsCards = () => {
  const [skills, setSkills] = useState([]);
  const [user, setUser] = useState(null); // To track if user is logged in
  const navigate = useNavigate();

  useEffect(() => {
    // Get skills data when the component mounts
    setSkills(skillsData);

    // Check if the user is logged in using Firebase Auth
    const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      if (loggedInUser) {
        setUser(loggedInUser); // Set the user if logged in
      } else {
        setUser(null); // Clear the user state if logged out
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleViewDetails = (skillId) => {
    if (user) {
      // If the user is logged in, navigate to SkillDetails page
      navigate(`/details/${skillId}`);
    } else {
      // If the user is not logged in, redirect to login page
      navigate("/signin");
    }
  };

  return (
    <div className="skills-cards-container">
      {skills.map((skill) => (
        <div className="skill-card" key={skill.skillId}>
          <img src={skill.image} alt={skill.skillName} className="skill-image" />
          <h3 className="skill-name">{skill.skillName}</h3>
          <div className="rating">
            <span className="stars">{"⭐".repeat(Math.round(skill.rating))}</span>
            <span className="rating-value">({skill.rating})</span>
          </div>
          <p className="skill-price">${skill.price}</p>
          <button
            className="view-details-btn"
            onClick={() => handleViewDetails(skill.skillId)} // Handle button click
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default SkillsCards;
