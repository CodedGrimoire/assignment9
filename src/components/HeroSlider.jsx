// HeroSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import the base Swiper styles
import 'swiper/css/navigation'; // Import navigation styles
import 'swiper/css/pagination'; // Import pagination styles

const HeroSlider = () => {
  return (
    <div className="hero-section relative">
      <Swiper
        spaceBetween={50} // Space between slides
        slidesPerView={1} // Show one slide at a time
        navigation // Enable navigation arrows
        pagination={{ clickable: true }} // Enable clickable pagination dots
        loop // Loop the slider
        autoplay={{ delay: 3000 }} // Autoplay every 3 seconds
      >
        {/* First Slide */}
        <SwiperSlide className="relative">
          <img
            src="https://via.placeholder.com/1600x500?text=Slide+1"
            alt="Slide 1"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Welcome to Our Website</h2>
            <p className="text-xl">Explore amazing features and get started today.</p>
          </div>
        </SwiperSlide>

        {/* Second Slide */}
        <SwiperSlide className="relative">
          <img
            src="https://via.placeholder.com/1600x500?text=Slide+2"
            alt="Slide 2"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Amazing Features</h2>
            <p className="text-xl">Find out how our platform can help you grow.</p>
          </div>
        </SwiperSlide>

        {/* Third Slide */}
        <SwiperSlide className="relative">
          <img
            src="https://via.placeholder.com/1600x500?text=Slide+3"
            alt="Slide 3"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Start Your Journey</h2>
            <p className="text-xl">Get started with us today and achieve your goals.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
