import React, { useEffect, useState } from "react";
import "./skillsCards.css";
import skillsData from "../assets/skill.json"; 


const SkillsCards = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsData); // Set the skills data when component mounts
  }, []);

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
          <button className="view-details-btn">View Details</button>
        </div>
      ))}
    </div>
  );
};

export default SkillsCards;
