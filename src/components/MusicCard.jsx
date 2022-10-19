import React from "react";
import "./MusicCard.css";
import SpotifyLogo from "../assets/Spotify_logo_with_text.svg";

function MusicCard({ artistName, songName, songCover }) {
  return (
    <div class="horizontal__card">
      <div class="horizontal__card--wrapper">
        <div class="song__img--wrapper">
          <img class="song__img" src={songCover} alt="" />
        </div>
        <div class="text__container">
          <h1 class="song__title--text">{songName}</h1>
          <h2 class="artist__name--text">{artistName}</h2>
          <div class="spotify__text--container">
            <a href={"/"} class="spotify__song--link">
              <h1 class="listen__on--text">Listen on</h1>
              <img class="spotify__logo" src={SpotifyLogo} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicCard;
