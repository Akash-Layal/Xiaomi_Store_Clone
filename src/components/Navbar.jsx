import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, Route } from "react-router-dom";
import { logo } from "../data/data.json";
import NavCard from "./NavCard";

const Navbar = () => {
  // const [show, setShow] = useState(false);

  const [path, setPath] = useState(false);
  const showProduct = (e) => {
    return setPath(e.target.pathname);
  };

  return (
    <nav id="mainNav">
      <div id="navOption">
        <NavCard a pathname={path} />
      </div>
      <div className="logo">
        <Link to="/">
          <img src={logo} id="logoImg" alt="mi logo" />
        </Link>
      </div>
      <div className="navigation">
        <Link
          className="navLinks"
          id="nav-tag"
          to="/miphones"
          onMouseEnter={showProduct}
        >
          Xiaomi Phones
        </Link>
        <Link
          className="navLinks"
          id="nav-tag"
          to="/redmiphones"
          onMouseEnter={showProduct}
        >
          Redmi Phones
        </Link>
        <Link
          className="navLinks"
          id="nav-tag"
          to="/tv"
          onMouseEnter={showProduct}
        >
          TV
        </Link>
        <Link
          className="navLinks"
          id="nav-tag"
          to="/laptops"
          onMouseEnter={showProduct}
        >
          Laptops & Tablets
        </Link>
        <Link
          className="navLinks"
          id="nav-tag"
          to="/fitness"
          onMouseEnter={showProduct}
        >
          Fitness
        </Link>
        <Link
          className="navLinks"
          id="nav-tag"
          to="/home"
          onMouseEnter={showProduct}
        >
          Home
        </Link>
        <Link
          className="navLinks"
          id="nav-tag"
          to="/audio"
          onMouseEnter={showProduct}
        >
          Audio
        </Link>
      </div>

      <div className="search">
        <input type="search" placeholder="Search Products" />
        <span className="material-symbols-outlined searchIcon">search</span>
      </div>
    </nav>
  );
};

export default Navbar;
