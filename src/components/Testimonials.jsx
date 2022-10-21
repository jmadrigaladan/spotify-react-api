import React from "react";
import "./Testimonials.css";
import testimonialsPattern from "../assets/testimonialsPattern.svg";
import { Link } from "react-router-dom";
import { ArrowForward } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import headshotOne from "../assets/headshot1.jpg";
import headshotTwo from "../assets/headshot2.jpg";
import testimonialCardBlobOne from "../assets/testimonialCardBlobOne.svg";
import testimonialCardBlobTwo from "../assets/testimonialCardBlobTwo.svg";
import openQMarks from "../assets/openQMarks.svg";
import closeQMarks from "../assets/closeQMarks.svg";
import testimonialCardBlobThree from "../assets/Ellipse 8.svg";
import testimonialCardBlobFour from "../assets/Ellipse 9.svg";

function Testimonials() {
  return (
    <>
      <section
        className="testimonials"
        style={{ backgroundImage: `url(${testimonialsPattern})` }}
      >
        <div className="testimonials__container">
          <div className="testimonial__rowOne">
            <div className="testimonial__cardOne">
              <img
                className="tc__blobOne"
                src={testimonialCardBlobOne}
                alt=""
              />
              <img
                className="tc__blobTwo"
                src={testimonialCardBlobTwo}
                alt=""
              />
              <img className="openQMarks" src={openQMarks} alt="" />
              <img className="closeQMarks" src={closeQMarks} alt="" />
              <Avatar className="avatar__testimonial" src={headshotOne} />
              <p className="testimonial__text">
                I never thought I would ever be into Spanish music, yet you can
                find me listening to Bad Bunny every car ride, all thanks to
                heardfrom! <i>- Michelle</i>
              </p>
            </div>
            <div className="testimonials__textContainer">
              <h1 className="testimonials__mainText">
                The best way to discover new{" "}
                <span className="pinkText">love</span> for music
              </h1>
              <Link className="discovering__link pink testimonialsLink">
                Start discovering
                <ArrowForward className="arrow__link" />
              </Link>
            </div>
          </div>
          <div className="testimonial__rowTwo">
            <div className="testimonial__cardOne">
              <img
                className="tc__blobThree"
                src={testimonialCardBlobThree}
                alt=""
              />
              <img
                className="tc__blobFour"
                src={testimonialCardBlobFour}
                alt=""
              />
              <img
                className="openQMarks open__testTwo"
                src={openQMarks}
                alt=""
              />
              <img
                className="closeQMarks close__testTwo"
                src={closeQMarks}
                alt=""
              />
              <p className="testimonial__text">
                EDM was a genre I always disliked, but after discovering it with
                heardfrom, I fell in love with it. I'll be going to my first
                rave next month. <i>- Karla</i>
              </p>
              <Avatar className="avatar__testimonial" src={headshotTwo} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
