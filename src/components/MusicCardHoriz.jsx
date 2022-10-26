import React from "react";
import "./MusicCardHoriz.css";
import { PlayArrow } from "@material-ui/icons";
import { SkipPrevious } from "@material-ui/icons";
import { SkipNext } from "@material-ui/icons";

function MusicCardHoriz({ artistName, songName, songCover, songLink }) {
  return (
    <>
      <div className="musicCardHoriz__container">
        <figure className="songImage__wrapper">
          <img className="songImage__musicCardHoriz" src={songCover} alt="" />
        </figure>
        <div className="songInfo__container">
          <h1 className="songTitle__text">{songName}</h1>
          <h1 className="artistName__text">{artistName}</h1>
          <div className="songControls__container">
            <SkipPrevious />
            <PlayArrow />
            <SkipNext />
          </div>
        </div>
      </div>
    </>
  );
}

export default MusicCardHoriz;
