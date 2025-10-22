// SkillDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import skillsData from "../assets/skill.json"; // Import the JSON data
import { toast } from "react-hot-toast"; // Import react-hot-toast

const SkillDetails = () => {
  const { skillId } = useParams(); // Get skillId from the URL
  const [skill, setSkill] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate();

  // Fetch the skill details using skillId from the URL
  useEffect(() => {
    const selectedSkill = skillsData.find((skill) => skill.skillId === parseInt(skillId)); // Find the selected skill
    if (!selectedSkill) {
      navigate("/"); // If skillId is not valid, navigate to home
    } else {
      setSkill(selectedSkill); // Set the skill data
    }
  }, [skillId, navigate]);

  if (!skill) return <div>Loading...</div>; // Show loading until the skill data is fetched

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Session booked successfully!"); // Show success toast
    setFormData({ name: "", email: "" }); // Clear the form fields
  };

  return (
    <div className="skill-details-container">
      <h2>{skill.skillName}</h2>
      <img src={skill.image} alt={skill.skillName} className="skill-image" />
      <p><strong>Provider:</strong> {skill.providerName}</p>
      <p><strong>Description:</strong> {skill.description}</p>
      <p><strong>Price:</strong> ${skill.price}</p>
      <p><strong>Rating:</strong> {skill.rating} ⭐</p>
      <p><strong>Category:</strong> {skill.category}</p>
      
      {/* Book Session Form */}
      <div className="book-session">
        <h3>Book a Session</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SkillDetails;
