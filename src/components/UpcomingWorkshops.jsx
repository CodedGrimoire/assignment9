// UpcomingWorkshops.jsx
import React from "react";
import "animate.css";

const workshops = [
  {
    id: 1,
    title: "Guitar Basics Workshop",
    date: "Nov 3, 2025",
    time: "5:00 PM - 7:00 PM",
    instructor: "Alex Martin",
    image: "https://images.pexels.com/photos/164936/pexels-photo-164936.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    title: "Intro to Data Science",
    date: "Nov 10, 2025",
    time: "6:00 PM - 8:00 PM",
    instructor: "John Doe",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    title: "Yoga for Mindfulness",
    date: "Nov 17, 2025",
    time: "7:00 AM - 8:30 AM",
    instructor: "Emma Liu",
    image: "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const UpcomingWorkshops = () => {
  return (
    <section
      className="animate__animated animate__fadeInUp"
      style={{
        textAlign: "center",
        padding: "3rem 1rem",
        marginTop: "3rem",
        background: "#f8fafc",
      }}
    >
      <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "2rem" }}>
        Upcoming Workshops
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {workshops.map((workshop) => (
          <div
            key={workshop.id}
            className="workshop-card"
            style={{
              width: "280px",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              overflow: "hidden",
              transition: "transform 0.3s ease",
            }}
          >
            <img
              src={workshop.image}
              alt={workshop.title}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <div style={{ padding: "1rem" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "600" }}>
                {workshop.title}
              </h3>
              <p style={{ color: "#555", margin: "6px 0" }}>
                📅 {workshop.date} <br />
                ⏰ {workshop.time}
              </p>
              <p style={{ color: "#666", fontStyle: "italic" }}>
                Instructor: {workshop.instructor}
              </p>
              <button
                style={{
                  marginTop: "10px",
                  padding: "8px 12px",
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingWorkshops;
