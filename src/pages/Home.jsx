import React from "react";
import Hero from "../components/Hero.jsx";
import "./Home.css";
import { Link } from "react-router-dom";
import { ArrowForward } from "@material-ui/icons";
import MusicCard from "../components/MusicCard.jsx";
import BadBunnyAlbumCover from "../assets/badBunny.jpg";
import harryStylesAlbumCover from "../assets/harryStyles.jpg";
import nickYoureAlbumCover from "../assets/sunroof.jpg";
import cardBg from "../assets/cardbg.svg";
import blob from "../assets/blob.svg";

function Home() {
  return (
    <div className="landing">
      <Hero />
      <section className="features">
        <div className="features__wrapper">
          <div className="featuresText__container">
            <h1 className="features__mainText">
              Let your passion for music bring you new{" "}
              <span className="purpleText">discoveries</span>
            </h1>
            <p className="features__subText">
              Let passion take the wheel as you uncover new artists, songs, and
              genres. Our filters make it easy to find music that best suits
              your taste.
            </p>
            <div className="link__container">
              <Link className="discovering__link">
                Start discovering
                <ArrowForward className="arrow__link" />
              </Link>
            </div>
          </div>
          <div className="cards__container">
            <div className="deck">
              <div className="cardOne">
                <MusicCard
                  artistName={"Harry Styles"}
                  songName={"As It Was"}
                  songCover={harryStylesAlbumCover}
                  songLink={
                    "http://open.spotify.com/album/2pqdSWeJVsXAhHFuVLzuA8?highlight=spotify:track:4LRPiXqCikLlN15c3yImP7"
                  }
                />
                <div className="blob">
                  <img src={blob} alt="" />
                </div>
                <div className="cardBg">
                  <img src={cardBg} alt="" />
                </div>
                <div className="cardTwo">
                  <MusicCard
                    artistName={"Nick Youre"}
                    songName={"Sunroof"}
                    songCover={nickYoureAlbumCover}
                    songLink={
                      "http://open.spotify.com/album/0VaHnwzDug4AcDkejYDUl5?highlight=spotify:track:4h4QlmocP3IuwYEj2j14p8"
                    }
                  />
                  <div className="cardThree">
                    <MusicCard
                      artistName={"Bad Bunny"}
                      songName={"Titi Me Pregunto"}
                      songCover={BadBunnyAlbumCover}
                      songLink={
                        "http://open.spotify.com/album/3RQQmkQEvNCY4prGKE6oc5?highlight=spotify:track:1IHWl5LamUGEuP4ozKQSXZ"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
