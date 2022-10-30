import React from "react";
import Nav from "../components/Nav.jsx";
import heroImage from "../assets/undraw_imagination_re_i0xi 1.svg";
import "./Hero.css";

function Hero() {
  const heroRef = React.useRef();
  const [isPageRefreshed, setIsPageRefreshed] = React.useState(false);
  React.useEffect(() => {
    setIsPageRefreshed(true);
  }, []);
  return (
    <div className="Hero">
      <Nav analyzeMusic={false} />
      <section
        ref={heroRef}
        className={`hero__container hidden-leftSlide ${
          isPageRefreshed ? "show" : ""
        }`}
      >
        <div className="hero__wrapper">
          <figure className="img__container">
            <img src={heroImage} alt="" className="heroImage" />
          </figure>
          <div className="heroText__container">
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
      </section>
      <div className="custom-shape-divider-bottom-1665813386">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Hero;
