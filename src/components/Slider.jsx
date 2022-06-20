import React from "react";
import "../styles/Slider.css";

import Navbar from "./Navbar";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const Slider = ({ start }) => {
  return (
    <div className="sliderBox">
      {/* Nav bar Imported here */}
      <Navbar />
      <Carousel fade className="slider" indicators={false}>
        {start.map((item, index) => (
          <Carousel.Item key={index} className="sliderImg" interval={5000}>
            <img src={item} alt="Banner image" />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
