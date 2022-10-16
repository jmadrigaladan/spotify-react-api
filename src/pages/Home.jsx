import React from "react";
import Hero from "../components/Hero.jsx";
import "./Home.css";

function Home() {
  return (
    <div className="landing">
      <Hero />
      <section className="features">
        <div className="text__container">
          <h1>
            Let your passion for music bring you new{" "}
            <span className="purpleText">discoveries</span>
          </h1>
        </div>
      </section>
    </div>
  );
}

export default Home;
