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
          <h3 className="guide-head">Learn The Essential Skills

          </h3>


          <p className="guide-text">
            Explore curated topics and pick the path that fits your goals.
          </p>
        </div>

        <div className="guide-card animate__animated animate__fadeInUp animate__delay-1s">
          <div className="guide-icon">📜</div>


          <h3 className="guide-head">
            Earn Certificates & Badges

          </h3>
          <p className="guide-text">
            Complete sessions and add verified achievements to your profile. </p>

         
        </div>

        <div className="guide-card animate__animated animate__fadeInUp animate__delay-2s">
          <div className="guide-icon">🎯</div>
          <h3 className="guide-head">
            Get Ready For Your Next Step
            </h3>
          <p className="guide-text">
            Build portfolio-ready work and level up your opportunities. </p>
         
        </div>



        <div className="guide-card animate__animated animate__fadeInUp animate__delay-3s">
          <div className="guide-icon">
            ▶️
            </div>
          <h3 className="guide-head">
            Master Different Areas
            </h3>
          <p className="guide-text">
            Mix live workshops, practice, and feedback to master new skills.

            
          </p> </div>
       
      </div>
    </section>
  );
};

export default HowItWorks;
