import React from "react";
import logoWhite from "../assets/heardfrom text logo WHITE.svg";
import { Link } from "react-router-dom";
import { Close } from "@material-ui/icons";
import { Search } from "@material-ui/icons";



function AnalyzeMusicNav({ userSearched, userSearchTerm }) {
  const [input, setInput] = React.useState("");
  const [isClassToggled, setIsClassToggled] = React.useState(false);
  const search = (e) => {
    console.log("nav calls search function")
    e.preventDefault();
    if(input === ""){
      return
    }
    userSearched(true);
    userSearchTerm(input)
  };
  return (
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
          <form className="search__bar--container">
            <input
              id="analyzeMusicSearchBar"
              type="text"
              placeholder="Search by Artist"
              className="input__search-bar"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              id="analyzeMusicSearchBtn"
              className="search__bar--wrapper__icon"
              type="submit"
              onClick={search}
            >
              <Search />
            </button>
          </form>
        </div>
      </div>
      <div className="overlay"></div>
    </nav>
  );
}

export default AnalyzeMusicNav;
