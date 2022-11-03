import React from "react";
import "./AnalyzeMusic.css";
import { LinearProgress } from "@material-ui/core";
import AnalyzeMusicNav from "../components/AnalyzeMusicNav.jsx";
import { topTracks } from "../api_requests/spotifyApi.js";
import MusicCard from "../components/MusicCard.jsx";
import LoadingCard from "../components/LoadingCard";
import noSearchImage from "../assets/undraw_searching_re_3ra9.svg";
import Footer from "../components/Footer.jsx";

function AnalyzeMusic() {
  const [searched, setSearched] = React.useState();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [artistTopTracks, setArtistTopTracks] = React.useState();
  const [loading, setLoading] = React.useState(true);

  const userSearched = (userData) => {
    setSearched(userData);
  };

  const userSearchTerm = (userSearchKeyword) => {
    setSearchTerm(userSearchKeyword);
  };

  React.useEffect(() => {
    if (searched) {
      const timer = setTimeout(async () => {
        setArtistTopTracks(await topTracks(searchTerm));
        setSearched(false);
        setLoading(false);
      }, 1500);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [searched]);

  return (
    <>
      <div id="analyzeMusic">
        <section id="analyze-music__topLanding">
          <AnalyzeMusicNav
            userSearched={userSearched}
            userSearchTerm={userSearchTerm}
          />
        </section>
        {!searched ? "" : <LinearProgress color="primary" />}

        <section id="search-results">
          {searched}
          <div className="search-results--container">
            <div className="search-results__text-filter--wrapper">
              <h1 className="search__results--text">
                {searchTerm !== ""
                  ? `Search Results for "${searchTerm}"`
                  : `Search Results :`}
              </h1>
            </div>

            <div className="songs__search-result--container">
              <div className="horizonatal__cards--container">
                {searchTerm !== "" ? (
                  !loading ? (
                    artistTopTracks?.map((track) => (
                      <MusicCard
                        artistName={track.artists[0].name}
                        songName={track.name}
                        songLink={track.external_urls.spotify}
                        songCover={track.album.images[1].url}
                      />
                    ))
                  ) : (
                    <>
                      <LoadingCard />
                      <LoadingCard />
                      <LoadingCard />
                      <LoadingCard />
                      <LoadingCard />
                      <LoadingCard />
                      <LoadingCard />
                      <LoadingCard />
                      <LoadingCard />
                      <LoadingCard />
                    </>
                  )
                ) : (
                  <>
                    <div className="noSearch__container">
                      <img
                        className="noSearch__img"
                        src={noSearchImage}
                        alt=""
                      />
                      <h1 className="searchMain__text">
                        Waiting to Search...
                      </h1>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AnalyzeMusic;
