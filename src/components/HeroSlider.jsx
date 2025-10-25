import React from "react";
import "./heroSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = () => {
  return (
    <>
      {/* Slider Section */}
      <section className="hero-section">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          className="swipyy"
        >
          <SwiperSlide className="slide">
            <img src="/1.jpg" alt="slide1" />
            <div className="caption">
              <h2>Learn Anything, Anytime, Anywhere</h2>
              <p>
                Learn, teach, and grow together with SkillShare — your gateway
                to expert-led workshops.
              </p>
              <div className="hero-buttons">
                <button className="btn-red">Get Enrolled</button>
                <button className="btn-outline">Watch Preview</button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slide">
            <img src="/1.jpg" alt="slide2" />
            <div className="caption">
              <h2>Learn from Top Providers</h2>
              <p>Access the best experts in every skill field worldwide.</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slide">
            <img src="/1.jpg" alt="slide3" />
            <div className="caption">
              <h2>Join Our Workshops</h2>
              <p>Hands-on learning experiences for everyone.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Feature Section */}
      <section className="features-section">
        <div className="feature-card">
          <div className="feature-icon">👩‍🏫</div>
          <h3>Expert Teachers</h3>
          <p>Learn from verified instructors with proven experience.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">💬</div>
          <h3>Easy Communication</h3>
          <p>Message instructors directly and get instant feedback.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🎓</div>
          <h3>Get Certificates</h3>
          <p>Earn shareable certificates after completing sessions.</p>
        </div>
      </section>
    </>
  );
};

export default HeroSlider;
