import React from "react";
import "./AnalyzeMusic.css";
import { LinearProgress } from "@material-ui/core";
import AnalyzeMusicNav from "../components/AnalyzeMusicNav.jsx";
import { topTracks } from "../api_requests/spotifyApi.js";
import MusicCard from "../components/MusicCard.jsx";
import LoadingCard from "../components/LoadingCard";

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
        console.log("line 26 in the if statement, searched is true");
        console.log(searched);
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
              {/* {searched
                ? artistTopTracks?.map((track) => {
                    console.log(track.artists[0].name);
                  })
                : ""} */}
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
                ""
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AnalyzeMusic;
