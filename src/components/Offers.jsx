import React from "react";
import "../styles/Offers.css";

const Offers = ({ offerItem }) => {
  return (
    <div className="offerSection">
      {offerItem.map((item, index) => (
        <a key={index} className="offerLinks" href={item.url}>
          <img src={item.image} alt="" />
        </a>
      ))}
    </div>
  );
};

export default Offers;