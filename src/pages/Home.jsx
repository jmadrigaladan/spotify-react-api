import React from "react";
import Hero from "../components/Hero.jsx";
import "./Home.css";
import Features from "../components/Features.jsx";
import Testimonials from "../components/Testimonials.jsx";

function Home() {
  return (
    <div className="landing">
      <Hero />
      <Features />
      <Testimonials />
    </div>
  );
}

export default Home;
