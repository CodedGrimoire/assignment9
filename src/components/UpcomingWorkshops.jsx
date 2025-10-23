import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";
import "animate.css";
import workshopsData from "../assets/workshops.json";
import "./upcomingWorkshops.css";

const UpcomingWorkshops = () => {
  const [workshops, setWorkshops] = useState([]);
  const [bookedWorkshops, setBookedWorkshops] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setWorkshops(workshopsData);
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return unsubscribe;
  }, []);

  const handleBooking = (id) => {
    if (!user) {
      toast.error("Please log in to book a workshop!");
      navigate("/signin");
      return;
    }

    if (bookedWorkshops.includes(id)) {
      setBookedWorkshops(bookedWorkshops.filter((item) => item !== id));
      toast("Booking cancelled", { icon: "❌" });
    } else {
      setBookedWorkshops([...bookedWorkshops, id]);
      toast.success("You have successfully booked this workshop!");
    }
  };

  return (
    <section
      className="animate__animated animate__fadeInUp workshops-section"
    >
      <h2 className="workshops-heading">Upcoming Workshops</h2>

      <div className="workshops-grid">
        {workshops.map((workshop) => {
          const isBooked = bookedWorkshops.includes(workshop.id);

          return (
            <div key={workshop.id} className="workshop-card">
              <img
                src={workshop.image}
                alt={workshop.title}
                className="workshop-image"
              />
              <div className="workshop-info">
                <h3 className="workshop-title">{workshop.title}</h3>
                <p className="workshop-details">
                  📅 {workshop.date} <br />
                  ⏰ {workshop.time}
                </p>
                <p className="workshop-instructor">
                  Instructor: {workshop.instructor}
                </p>
                <button
                  className={`book-btn ${isBooked ? "cancel-btn" : ""}`}
                  onClick={() => handleBooking(workshop.id)}
                >
                  {isBooked ? "Cancel Booking" : "Book Now"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default UpcomingWorkshops;
