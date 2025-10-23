import React, { useEffect, useState } from "react";
import "animate.css";
import providersData from "../assets/topProviders.json";

const TopRatedProviders = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    setProviders(providersData);
  }, []);

  return (
    <section
      className="animate__animated animate__fadeIn"
      style={{
        textAlign: "center",
        padding: "3rem 1rem",
        marginTop: "3rem",
        background: "#f9fafb",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "600",
          marginBottom: "2rem",
          color: "#111",
        }}
      >
        Top Rated Providers
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {providers.map((provider, index) => (
          <div
            key={index}
            className="animate__animated animate__fadeInUp"
            style={{
              width: "250px",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              overflow: "hidden",
              paddingBottom: "1rem",
              transition: "transform 0.3s ease",
            }}
          >
            <img
              src={provider.image}
              alt={provider.name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
              }}
            />
            <h3 style={{ marginTop: "1rem", fontSize: "1.2rem" }}>
              {provider.name}
            </h3>
            <p style={{ color: "#555", margin: "6px 0" }}>{provider.skill}</p>
            <p style={{ color: "#2563eb", fontWeight: "600" }}>
              ⭐ {provider.rating}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedProviders;
