import React from "react";
import "../styles/Prenav.css";

const Prenav = () => {
  return (
    <nav id="upperNav">
      <ul className="leftPrenav">
        <li>
          <a className="first" href="https://www.mi.com/in/">
            Xiaomi india
          </a>
          <span></span>
        </li>
        <li>
          <a href="https://in.event.mi.com/in/install-mi-store">
            get mi store app
          </a>
          <span></span>
        </li>
        <li>
          <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">
            online help
          </a>
          <span></span>
        </li>
        <li>
          <a href="https://www.mi.com/in/service/authorized_stores/" id="expandMore">
            <span>retail store</span>
            <span className="material-symbols-outlined" id="expandMoreIcon">
              expand_more
            </span>
          </a>
        </li>
      </ul>

      <ul className="rightPrenav">
        <li>
          <a href="https://store.mi.com/in/site/login">sign in</a>
          <span></span>
        </li>
        <li>
          <a href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">
            sign up
          </a>
          <span></span>
        </li>
        <li>
          <a href="https://store.mi.com/in/cart" id="cartItem">
            <span className="material-symbols-outlined " id="cartIcon">
              shopping_cart
            </span>
            <span>cart ( {0} )</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Prenav;
