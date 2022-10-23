import React from "react";
import "./Footer.css";
import logoWhite from "../assets/heardfrom text logo WHITE.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <img className="footer__image" src={logoWhite} alt="" />
        <div className="footer__links--container">
          <Link className="footer__link" to={"/"}>
            Home
          </Link>
          <Link className="footer__link" to={"/analyzeMusic"}>
            Analyze Music
          </Link>
          <Link className="footer__link" to={"/contact"}>
            Contact
          </Link>
        </div>
        <p className="copyright__text">Copyright &#169; 2022</p>
      </div>
    </footer>
  );
}

export default Footer;
