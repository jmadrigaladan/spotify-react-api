import React from "react";
import "./AnalyzeMusic.css";
import logoWhite from "../assets/heardfrom text logo WHITE.svg";
import { Link } from "react-router-dom";
import { Close } from "@material-ui/icons";
function AnalyzeMusic() {
  const [isClassToggled, setIsClassToggled] = React.useState(false);
  return (
    <>
      <section id="analyze-music__landing">
        <nav>
          <div className="nav__container analyze-music__nav">
            <div className="nav__container--wrapper">
              <Link className="logo__container" to="/">
                <img className="logo" src={logoWhite} alt="" />
              </Link>
              <ul className="nav__links">
                <li>
                  <Link to="/" className="nav__link white__text">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/analyzeMusic" className="nav__link white__text">
                    Analyze Music
                  </Link>
                </li>
                <li>
                  <Link href="" className="nav__link">
                    <button className="purple__btn contact__btn">
                      Contact
                    </button>
                  </Link>
                </li>
              </ul>

              <div
                className="phone__navbar"
                onClick={() => setIsClassToggled(!isClassToggled)}
              >
                <div
                  data-v-48b363cf=""
                  className={`bento-menu ${
                    isClassToggled ? "bento-menu--active" : " "
                  }`}
                >
                  <div data-v-48b363cfg="" className="white"></div>
                  <div data-v-48b363cfg="" className="white"></div>
                  <div data-v-48b363cfg="" className="white"></div>
                  <div data-v-48b363cfg="" className="white"></div>
                  <div data-v-48b363cfg="" className="white"></div>
                  <div data-v-48b363cfg="" className="white"></div>
                  <div data-v-48b363cfg="" className="white"></div>
                  <div data-v-48b363cfg="" className="white"></div>
                  <div data-v-48b363cfg="" className="white"></div>
                </div>
                <div
                  className={`close__btn-menu ${
                    isClassToggled ? "close__btn-menu--active" : " "
                  }`}
                >
                  <Close sx={{ fontSize: "40px" }} />
                </div>
                <div
                  className={`phone__menu ${
                    isClassToggled ? "phone__menu--active" : " "
                  }`}
                >
                  <Link className="phone__nav--link" to="/">
                    Home
                  </Link>
                  <Link className="phone__nav--link" to="/analyzeMusic">
                    Analyze Music
                  </Link>
                  <Link className="phone__nav--link" to="">
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            <div className="top__container--wrapper">
              <h1 className="analyze__music--main-text white__text">
                Browse our music library
              </h1>
              <div className="search__bar--container">
                <input
                  id="analyzeMusicSearchBar"
                  type="text"
                  placeholder="Search by Artist"
                  className="input__search-bar"
                />
                <button
                  id="analyzeMusicSearchBtn"
                  className="search__bar--wrapper__icon"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="overlay"></div>
        </nav>
      </section>
      <section id="search-results">
        <div className="search-results--container">
          <div className="search-results__text-filter--wrapper">
            <h1 className="search__results--text">Search Results:</h1>
            <div className="filter__container">
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
            </div>
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
