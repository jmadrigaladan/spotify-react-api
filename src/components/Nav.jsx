import React from "react";
import { Link } from "react-router-dom";
import { Close } from "@material-ui/icons";
import "./Nav.css";
import logoPurple from "../assets/heardfrom text logo PURPLE.svg";

function Nav() {
  const [isClassToggled, setIsClassToggled] = React.useState(false);
  return (
    <nav>
      <div className="nav__container">
        <Link className="logo__container" to="/">
          <img className="logo" src={logoPurple} alt="" />
        </Link>
        <ul className="nav__links">
          <li>
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/analyzeMusic" className="nav__link">
              Analyze Music
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav__link">
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
      </div>
    </nav>
  );
}
export default Nav;
