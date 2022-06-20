import React from "react";
import "../styles/VideoCart.css";

const VideoCart = ({ name, image }) => {
  return (
    <div className="videoCart">
      <img src={image} alt={name} />
      <a href="/">
        <span className="material-symbols-outlined" id="playBtn">play_arrow</span>
        <p>{name}</p>
      </a>
    </div>
  );
};

export default VideoCart;
