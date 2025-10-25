import React from "react";
import "animate.css";

import "./common.css";

const HowItWorks = () => {
  return (
    <section className="how-guides animate__animated animate__fadeIn">


      <h2 className="how-title">How It Works</h2>

      <div className="guides-grid">
        <div className="guide-card animate__animated animate__fadeInUp">


          <div className="guide-icon">
            🖥️
            </div>
          <h3 className="guide-head">Sign Up!

          </h3>


          <p className="guide-text">
            Sign up and Explore curated topics and pick the path that fits your goals.
          </p>
        </div>

        <div className="guide-card animate__animated animate__fadeInUp animate__delay-1s">
          <div className="guide-icon">📜</div>


          <h3 className="guide-head">
            Choose a Skill

          </h3>
          <p className="guide-text">
            Browse and choose specific skill you want to learn </p>

         
        </div>

        <div className="guide-card animate__animated animate__fadeInUp animate__delay-2s">
          <div 
          className="guide-icon">🎯</div>


          <h3 className="guide-head">
            Book Session
            </h3>

          <p className="guide-text">
            Book session to learn that skill! </p>
         
        </div>



        <div className="guide-card animate__animated animate__fadeInUp animate__delay-3s">
          <div className="guide-icon">
            ▶️
            </div>
          <h3 className="guide-head">
           Join Workshops!
            </h3>
          <p className="guide-text">
            Join workshops and live lessons!

            
          </p> </div>
       
      </div>
    </section>
  );
};

export default HowItWorks;
