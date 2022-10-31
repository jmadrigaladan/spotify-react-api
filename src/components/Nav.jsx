import React from "react";
import { Link } from "react-router-dom";
import { Close } from "@material-ui/icons";
import "./Nav.css";
import logoPurple from "../assets/heardfrom text logo PURPLE.svg";
function Nav({ analyzeMusic }) {
  const [isClassToggled, setIsClassToggled] = React.useState(false);
  return (
    <nav>
      <div
        className={`nav__container ${analyzeMusic ? "analyze-music__nav" : ""}`}
      >
        <Link className="logo__container" to="/">
          <img className="logo" src={logoPurple} alt="" />
        </Link>
        <ul className="nav__links">
          <li>
            <Link to="/" className={`nav__link`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/analyzeMusic" className={`nav__link `}>
              Analyze Music
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`nav__link  `}>
              <button className="purple__btn contact__btn">Contact</button>
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
            <div data-v-48b363cf=""></div>
            <div data-v-48b363cf=""></div>
            <div data-v-48b363cf=""></div>
            <div data-v-48b363cf=""></div>
            <div data-v-48b363cf=""></div>
            <div data-v-48b363cf=""></div>
            <div data-v-48b363cf=""></div>
            <div data-v-48b363cf=""></div>
            <div data-v-48b363cf=""></div>
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
            <Link className="phone__nav--link" to="/contact">
              Contact
            </Link>
          </div>
        </div>
        {analyzeMusic ? (
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
        ) : (
          ""
        )}
      </div>
      {analyzeMusic ? <div className="overlay"></div> : ""}
    </nav>
  );
}
export default Nav;
