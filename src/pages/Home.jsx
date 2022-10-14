import React from "react";
import Nav from "../components/Nav.jsx";
import heroImage from "../assets/undraw_imagination_re_i0xi 1.svg";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <Nav />
      <div className="hero__container">
        <div className="hero__wrapper">
          <figure className="img__container">
            <img src={heroImage} alt="" className="heroImage" />
          </figure>
          <div className="text__container">
            <h1 className="hero__mainText">
              Analyze Music <span className="pinkText"> you enjoy</span> with no
              limits<span className="pinkText">.</span>
            </h1>
            <h3 className="hero__subText">
              Our extensive library makes it easy to unlock new discoveries
              around the artists and genres you enjoy listening to most.
            </h3>
            <button className="purple__btn exploring__btn">
              Start Exploring
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
