import React from "react";
import "animate.css"; // Import Animate.css
import "./common.css"; // Import shared CSS

const HowItWorks = () => {
  return (
    <section className="how-it-works animate__animated animate__fadeIn">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step animate__animated animate__fadeInLeft">
          <h3>Step 1: Choose a Skill</h3>
          <p>Browse through a variety of skills offered by top-rated providers.</p>
        </div>
        <div className="step animate__animated animate__fadeInUp">
          <h3>Step 2: Book a Session</h3>
          <p>Select a provider and book a session at your preferred time slot.</p>
        </div>
        <div className="step animate__animated animate__fadeInRight">
          <h3>Step 3: Learn and Grow</h3>
          <p>Attend the session, learn new skills, and enhance your abilities.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
