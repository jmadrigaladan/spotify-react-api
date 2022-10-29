import React from "react";
import "./Features.css";
import { Link } from "react-router-dom";
import { ArrowForward } from "@material-ui/icons";
import MusicCard from "./MusicCard.jsx";
import BadBunnyAlbumCover from "../assets/badBunny.jpg";
import harryStylesAlbumCover from "../assets/harryStyles.jpg";
import nickYoureAlbumCover from "../assets/sunroof.jpg";
import blob from "../assets/blob.svg";
import MusicCardHoriz from "./MusicCardHoriz.jsx";

function Features() {
  const featuresRef = React.useRef();
  const [isPageRefreshed, setIsPageRefreshed] = React.useState(false);
  const [isFeaturesVisible, setIsFeaturesVisible] = React.useState();
  React.useEffect(() => {
    console.log("Hi");
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log("entry", entry);
      setIsFeaturesVisible(entry.isIntersecting);
    });
    observer.observe(featuresRef.current);
    setIsPageRefreshed(true);
  }, []);

  return (
    <section className="features">
      <div
        ref={featuresRef}
        className={`features__wrapper hidden-rightSlide ${
          isFeaturesVisible && isPageRefreshed ? "show" : " "
        } `}
      >
        <div className="featuresText__container">
          <h1 className="features__mainText">
            Let your passion for music bring you new{" "}
            <span className="purpleText">discoveries</span>
          </h1>
          <p className="features__subText">
            Let passion take the wheel as you uncover new artists, songs, and
            genres. Our filters make it easy to find music that best suits your
            taste.
          </p>
          <div className="link__container">
            <Link className="discovering__link purple__text">
              Start discovering
              <ArrowForward className="arrow__link" />
            </Link>
          </div>
        </div>

        <div className="cards__container">
          <div className="deck__horiz">
            <MusicCardHoriz
              className="cardOne__deckHoriz"
              artistName={"Harry Styles"}
              songName={"As It Was"}
              songCover={harryStylesAlbumCover}
              songLink={
                "http://open.spotify.com/album/2pqdSWeJVsXAhHFuVLzuA8?highlight=spotify:track:4LRPiXqCikLlN15c3yImP7"
              }
            />
            <MusicCardHoriz
              className="cardTwo__deckHoriz"
              artistName={"Nick Youre"}
              songName={"Sunroof"}
              songCover={nickYoureAlbumCover}
              songLink={
                "http://open.spotify.com/album/0VaHnwzDug4AcDkejYDUl5?highlight=spotify:track:4h4QlmocP3IuwYEj2j14p8"
              }
            />
            <MusicCardHoriz
              className="cardThree__deckHoriz"
              artistName={"Bad Bunny"}
              songName={"Titi Me Pregunto"}
              songCover={BadBunnyAlbumCover}
              songLink={
                "http://open.spotify.com/album/3RQQmkQEvNCY4prGKE6oc5?highlight=spotify:track:1IHWl5LamUGEuP4ozKQSXZ"
              }
            />
          </div>
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
  );
}

export default Features;
