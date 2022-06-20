import React from "react";
import "../styles/Heading.css";
import "../App.css";

const Heading = ({ title }) => {
  return (
    <div id="title">
      <div></div>
      <h2 className="heading">{title}</h2>
      <div></div>
    </div>
  );
};

export default Heading;
