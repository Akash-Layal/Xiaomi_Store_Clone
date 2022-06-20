import React from "react";
import "../styles/ProductsReview.css";

const ProductsReview = ({ reviews }) => {
  return (
    <div className="reviewBox">
      {reviews.map((curEle, index) => (
        <div key={curEle.image} className="reviewCart">
          <a href={curEle.url} className="imgLink">
            <img src={curEle.image} alt={curEle.name} />
          </a>
          <div className="sho-summary">
            <a className="rev-link" href={curEle.url}>
              <span>{curEle.review}</span>
            </a>
            <div className="pInfo">
              <a href={curEle.url} className="rev-link">
                <span className="pName">{curEle.name}</span>
              </a>
              <span className="pPrice">{curEle.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsReview;
