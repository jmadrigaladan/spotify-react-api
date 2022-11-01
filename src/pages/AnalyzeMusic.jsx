import React from "react";
import "./AnalyzeMusic.css";
import { LinearProgress } from "@material-ui/core";
import { searched } from "../components/AnalyzeMusicNav.jsx";

import AnalyzeMusicNav from "../components/AnalyzeMusicNav.jsx";

function AnalyzeMusic() {
  const [searched, setSearched] = React.useState(false);
  const ChildToParent = (childData) => {
    console.log("Hello", childData);
    setSearched(childData);
  };
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setSearched(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [searched]);
  return (
    <>
      <section id="analyze-music__topLanding">
        <AnalyzeMusicNav ChildToParent={ChildToParent} />
      </section>
      {searched ? <LinearProgress color="primary" /> : ""}

      <section id="search-results">
        {searched}
        <div className="search-results--container">
          <div className="search-results__text-filter--wrapper">
            <h1 className="search__results--text">Search Results:</h1>
            {/* <div className="filter__container">
              <div className="slider">
                <div className="range-slider">
                  <div className="text__slider--wrapper">
                    <h1 className="tempo__text--slider">Tempo:</h1>
                    <span className="rangeValues"></span>
                  </div>
                  <input
                    className="tempo__slider"
                    value="0"
                    min="0"
                    max="300"
                    step="10"
                    type="range"
                  />
                  <input
                    className="tempo__slider"
                    value="300"
                    min="0"
                    max="300"
                    step="10"
                    type="range"
                  />
                </div>
              </div>
            </div> */}
          </div>

          <div className="songs__search-result--container">
            <div className="horizonatal__cards--container">
              <div id="loading">
                <i className="fa-solid fa-spinner"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AnalyzeMusic;
