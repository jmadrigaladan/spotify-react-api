import React from "react";
import "./MusicCard.css";
import { PlayArrow } from "@material-ui/icons";
import { SkipPrevious } from "@material-ui/icons";
import { SkipNext } from "@material-ui/icons";

function MusicCard({ artistName, songName, songCover, songLink }) {
  return (
    <a
      className="musicCard__songLink"
      href={songLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="horizontal__card">
        <div className="horizontal__card--wrapper">
          <div className="song__img--wrapper">
            <img className="song__img" src={songCover} alt="" />
          </div>
          <div className="text__container">
            <h1 className="song__title--text">{songName}</h1>
            <h2 className="artist__name--text">{artistName}</h2>
            <div className="controls__container">
              <SkipPrevious />
              <PlayArrow />
              <SkipNext />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default MusicCard;
