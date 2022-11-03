import React from "react";
import "./LoadingCard.css";

function LoadingCard() {
  return (
    <div className="musicCard__loading--container">
      <div className="musicCard__loading"></div>
      <div className="text__loading"></div>
    </div>
  );
}

export default LoadingCard;
