import React from "react";
import "./AnalyzeMusic.css";
import { LinearProgress } from "@material-ui/core";
import AnalyzeMusicNav from "../components/AnalyzeMusicNav.jsx";

function AnalyzeMusic() {
  const [searched, setSearched] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("")
  const userSearched = (userData) => {
    console.log("line 12", userData);
    setSearched(userData);
  };

  const userSearchTerm = (userSearchKeyword) => {
    console.log("line 17", userSearchKeyword)
    setSearchTerm(userSearchKeyword)
  }

  // async function displaySearchResults(searchPhrase){
  //   console.log("Line 22 in displaySearch Results", searchPhrase)
  // }
  React.useEffect(() => {
    // displaySearchResults(searchTerm)
    const timer = setTimeout(() => {
      setSearched(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [searched, searchTerm]);
  return (
    <>
      <section id="analyze-music__topLanding">
        <AnalyzeMusicNav userSearched={userSearched}  userSearchTerm={userSearchTerm}/>
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
