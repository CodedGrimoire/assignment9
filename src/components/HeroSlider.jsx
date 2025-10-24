import React from "react";

import "./heroSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css/navigation";



const HeroSlider = () => {
  return (
    <section className="hero-section">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 1000, 
          disableOnInteraction: true }}
        className="swipyy"
      >
        
        <SwiperSlide className="slide">

          <img src="/slide1.png" 
          alt="" />
          <div className="caption">

            <h2 className="tt">Welcome to SkillShare

            </h2>

            <p>Learn, teach, and grow together.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide">
          <img src="/slide2.jpeg" alt="" />
          <div className="caption">

            <h2>Learn from Top Providers</h2>
            <p>Access the best experts in every skill.</p>
          </div>

        </SwiperSlide>

        <SwiperSlide className="slide">
          <img src="/slide3.jpeg" alt="" />
          <div className="caption">


            <h2>Join Our Workshops</h2>
            <p>Hands-on learning experiences for everyone.

            </p>  </div>
        
        </SwiperSlide>
      </Swiper> </section>
   
  );
};

export default HeroSlider;
