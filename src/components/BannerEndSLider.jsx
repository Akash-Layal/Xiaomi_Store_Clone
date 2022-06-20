import React from "react";
import "../styles/BannerEndSLider.css"
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const BannerEndSLider = ({ end }) => {
  return (
    <Carousel fade className="endSlider">
      {end.map((end, index) => (
        <Carousel.Item key={end.image} className="endSliderItem">
          <img src={end.image} alt={`${index} slide`} />
          <Carousel.Caption className="caption">
            <h3 className="bannerTitle">{end.name}</h3>
            <p>{end.description}</p>
            <p>Source : {end.source}</p>
            <a target="_blank" href={end.url}>Read more</a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BannerEndSLider;
