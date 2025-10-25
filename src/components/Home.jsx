import { useEffect, useMemo, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import SkillsCards from "./SkillsCards";
import { auth } from "../firebase";

import Wokii from "./UpcomingWorkshops";
import "./home.css";


import Hero from "./HeroSlider";

import Top from "./TopRatedProviders";
import HowWorks from "./HowItWorks";

export default function Home() {
  const [user, setUser] = useState(auth.currentUser);


  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return unsub;
  }, []);

  const dorE = useMemo(
    () => user?.displayName || user?.email || "",
    [user]
  );

  return (
    <div className="home-container">
      <main>
       

        {user ? (
          <p>
            Welcome back, <b>{dorE}</b>!
          </p>
        ) : (
          <p>You’re browsing as a guest.</p>
        )}
<section>
        <Hero />
</section>
       

        <section className="skills-cards-section">
          <h3>Popular Skills</h3>
          <SkillsCards />
        </section>
        <section>
          <Top />
        </section>
        <HowWorks/>
        <Wokii/>
  </main>
     
    
    </div>
  );
}
