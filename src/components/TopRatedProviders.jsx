// TopRatedProviders.jsx
import React from "react";
import "./common.css"; // Import shared CSS

const TopRatedProviders = () => {
  const providers = [
    {
      name: "Alex Martin",
      skill: "Beginner Guitar Lessons",
      rating: 4.9,
      image: "https://www.w3schools.com/html/pic_trulli.jpg",
    },
    {
      name: "Sara Hossain",
      skill: "Spoken English Practice",
      rating: 4.8,
      image: "https://www.w3schools.com/html/pic_woods.jpg",
    },
    {
      name: "Daniel Green",
      skill: "Web Development Bootcamp",
      rating: 4.7,
      image: "https://www.w3schools.com/html/pic_snow.jpg",
    },
  ];

  return (
    <section className="top-rated-providers">
      <h2>Top Rated Providers</h2>
      <div className="provider-cards">
        {providers.map((provider, index) => (
          <div key={index} className="provider-card">
            <img src={provider.image} alt={provider.name} className="provider-image" />
            <h3>{provider.name}</h3>
            <p>{provider.skill}</p>
            <p>Rating: {provider.rating} ⭐</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedProviders;
