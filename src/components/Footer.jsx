import React from "react";
import "../styles/Footer.css";


const Footer = ({ support, shopAndLearn, retailStore, aboutUS, contactUs }) => {
  return (
    <>
      <div className="main-footer">
        <ul className="support">
          <p className="">support</p>
          {support.map((item) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </ul>

        <ul className="shop-and-learn">
          <p className="">shop and learn</p>
          {shopAndLearn.map((item) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </ul>

        <ul className="retail-store">
          <p className="">retail store</p>
          {retailStore.map((item) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </ul>

        <ul className="about-us">
          <p className="">about us</p>
          {aboutUS.map((item) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </ul>

        <ul className="contact-footer-menu">
          <p className="">contact us</p>
          {contactUs.map((item) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </ul>

        <ul className="chat-box">
          <span>Chat with our Virtual AI Bot - Now in हिन्दी/English</span>
          <button type="button" className="chat-btn">
            chat now
          </button>
        </ul>
      </div>
      <div className="footer-border">
        <div>Copyright © 2010 - 2022 Xiaomi. All Rights Reserved</div>
      </div>
    </>
  );
};

export default Footer;
