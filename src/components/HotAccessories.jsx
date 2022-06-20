import React from "react";
import "../styles/HotAccessories.css";
import ProductCart from "./ProductCart";

const HotAccessories = ({ product, coverImage,coverUrl }) => {
  return (
    <div className="hotAccessories">
      <div className="list-left">
        <a href={coverUrl}>
          <img src={coverImage} alt="Cover Product" />
        </a>
      </div>
      <ul className="list-right">
        {product.map((item) => (
          <ProductCart
            key={item.id}
            name={item.name}
            price={item.price}
            src={item.image}
          />
        ))}
        <li className="productCart">
          <p className="moreInfo">
            <i className="browseMore">Browse</i>
            <i className="browseMore">More</i>
            <span className="material-symbols-outlined right-arrow">east</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default HotAccessories;
