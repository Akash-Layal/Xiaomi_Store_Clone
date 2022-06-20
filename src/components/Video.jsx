import React from "react";
import "../styles/Video.css";
import VideoCart from "./VideoCart";

const Video = ({ videos }) => {
  return (
    <div className="videoBox">
      {videos.map((videos) => (
        <VideoCart key={videos.image} name={videos.name} image={videos.image} />
      ))}
    </div>
  );
};

export default Video;
