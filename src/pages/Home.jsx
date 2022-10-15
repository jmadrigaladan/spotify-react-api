import React from "react";
import Hero from "../components/Hero.jsx";
import "./Home.css";

function Home() {
  return (
    <div className="landing">
      <Hero />
      <section className="features">
        <h1 className="discover__mainText">Discover</h1>
        <div className="text__container">
          <h1>Yeah</h1>
        </div>
      </section>
    </div>
  );
}

export default Home;
