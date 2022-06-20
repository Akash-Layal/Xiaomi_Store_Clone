import React from "react";
import "../styles/Starproduct.css";
import { Link } from "react-router-dom";

const Starproduct = ({ products }) => {
  return (
    <div className="Starproduct">
      <div className="rightStarProduct">
        <a href={products[0].url}>
          <img src={products[0].image} alt="products" />
        </a>
      </div>

      <div className="leftStarProduct">
        <a href={products[1].url}>
          <img src={products[1].image} alt="products" />
        </a>
        <a href={products[2].url}>
          <img src={products[2].image} alt="products" />
        </a>
        <a href={products[3].url}>
          <img src={products[3].image} alt="products" />
        </a>
      </div>
    </div>
  );
};

export default Starproduct;
