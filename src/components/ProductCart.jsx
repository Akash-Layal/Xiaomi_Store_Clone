import React from "react";
import "../styles/ProductCart.css";

const ProductCart = ({ price, name, src, index }) => {
  return (
      <li className="productCart">
        <img src={src} alt={`${index} product`} />
        <h4>{name}</h4>
        <span className="price">{price}</span>
      </li>
  );
};

export default ProductCart;
