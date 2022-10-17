import React from "react";
import Hero from "../components/Hero.jsx";
import "./Home.css";
import { Link } from "react-router-dom";
import { ArrowForward } from "@material-ui/icons";

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
          <p>
            Let passion take the wheel as you uncover new artists, songs, and
            genres. Our filters make it easy to find music that best suits your
            taste.
          </p>
          <Link>Start discovering </Link>
          <ArrowForward />
        </div>
      </section>
    </div>
  );
}

export default Home;
