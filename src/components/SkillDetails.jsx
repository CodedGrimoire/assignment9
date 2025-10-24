// SkillDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import skillsData from "../assets/skill.json";
import { toast } from "react-hot-toast";
import "./common.css";

const SkillDetails = () => {
  const { skillId } = useParams();
  const [skill, setSkill] = useState(null);
  const [showForm, setShowForm] = useState(false);
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

  if (!skill) return <div style={{ padding: 20 }}>Loading...</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Session booked successfully!");
    setFormData({ name: "", email: "" });
    setShowForm(false);
  };

  return (
    <div className="skill-details-container">
      {/* Two-column layout */}
      <div className="skill-details-grid">
        {/* Left: Image */}
        <div className="left-col">
          <img src={skill.image} alt={skill.skillName} className="skill-image-lg" />
        </div>

        {/* Right: Info + Book button + (form when shown) */}
        <div className="right-col">
          <h2 className="skill-title">{skill.skillName}</h2>
          <div className="skill-meta">
            <p><strong>Provider:</strong> {skill.providerName}</p>
            <p><strong>Description:</strong> {skill.description}</p>
            <p><strong>Category:</strong> {skill.category}</p>
            <p><strong>Rating:</strong> {skill.rating} ⭐</p>
            <p><strong>Price:</strong> ${skill.price}</p>
            {typeof skill.slotsAvailable !== "undefined" && (
              <p><strong>Slots Available:</strong> {skill.slotsAvailable}</p>
            )}
            {skill.providerEmail && (
              <p><strong>Contact:</strong> {skill.providerEmail}</p>
            )}
          </div>

          {/* Toggle button */}
          <button
            type="button"
            className="book-toggle-btn"
            onClick={() => setShowForm((v) => !v)}
          >
            {showForm ? "Close Booking Form" : "Book Session"}
          </button>

          {/* Form (shown only when toggled) */}
          {showForm && (
            <div className="book-session box">
              <h3>Book a Session</h3>
              <form onSubmit={handleSubmit} className="book-form">
                <div className="form-row">
                  <label>Name</label>
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
                <div className="form-row">
                  <label>Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;
