import React, { useState, useEffect } from "react";
import "../styles/NavCard.css";
import data from "../data/data.json";

const NavCard = ({ pathname }) => {
  // Data from json
  const miPhones = data.miPhones;
  const redmiPhones = data.redmiPhones;
  const tv = data.tv;
  const laptops = data.laptop;
  const fitness = data.fitnessAndLifeStyle;
  const home = data.home;
  const audio = data.audio;

  // Hooks
  const [miPhoneToggle, setMiPhoneToggle] = useState(false);
  const [redmiPhoneToggle, setRedmiPhoneToggle] = useState(false);
  const [tvToggle, setTvToggle] = useState(false);
  const [laptopsToggle, setLaptopsToggle] = useState(false);
  const [fitnessToggle, setFitnessToggle] = useState(false);
  const [homeToggle, setHomeToggle] = useState(false);
  const [audioToggle, setAudioToggle] = useState(false);

  // For redmi phones
  useEffect(() => {
    if (pathname === "/redmiphones") {
      return setRedmiPhoneToggle(true);
    } else {
      return setRedmiPhoneToggle(false);
    }
  }, [pathname]);

  // For mi phones
  useEffect(() => {
    if (pathname === "/miphones") {
      return setMiPhoneToggle(true);
    } else {
      return setMiPhoneToggle(false);
    }
  }, [pathname]);

  // For Tvs
  useEffect(() => {
    if (pathname === "/tv") {
      return setTvToggle(true);
    } else {
      return setTvToggle(false);
    }
  }, [pathname]);

  // For laptops
  useEffect(() => {
    if (pathname === "/laptops") {
      return setLaptopsToggle(true);
    } else {
      return setLaptopsToggle(false);
    }
  }, [pathname]);

  // For fitness
  useEffect(() => {
    if (pathname === "/fitness") {
      return setFitnessToggle(true);
    } else {
      return setFitnessToggle(false);
    }
  }, [pathname]);

  // For home
  useEffect(() => {
    if (pathname === "/home") {
      return setHomeToggle(true);
    } else {
      return setHomeToggle(false);
    }
  }, [pathname]);

  // For audio
  useEffect(() => {
    if (pathname === "/audio") {
      return setAudioToggle(true);
    } else {
      return setAudioToggle(false);
    }
  }, [pathname]);

  return (
    <>
      {miPhoneToggle
        ? miPhones.map((mi, index) => (
            <div className="navcard" key={mi.image}>
              <img src={mi.image} alt="" />
              <p>{mi.name}</p>
              <span>{mi.price}</span>
            </div>
          ))
        : null}

      {redmiPhoneToggle
        ? redmiPhones.map((redmi, index) => (
            <div className="navcard" key={redmi.image}>
              <img src={redmi.image} alt={redmi.name} />
              <p>{redmi.name}</p>
              <span>{redmi.price}</span>
            </div>
          ))
        : null}

      {tvToggle
        ? tv.map((tv, index) => (
            <div className="navcard" key={tv.image}>
              <img src={tv.image} alt={tv.name} />
              <p>{tv.name}</p>
              <span>{tv.price}</span>
            </div>
          ))
        : null}

      {laptopsToggle
        ? laptops.map((laptops, index) => (
            <div className="navcard" key={laptops.image}>
              <img src={laptops.image} alt={laptops.name} />
              <p>{laptops.name}</p>
              <span>{laptops.price}</span>
            </div>
          ))
        : null}

      {fitnessToggle
        ? fitness.map((fitness, index) => (
            <div className="navcard" key={fitness.image}>
              <img src={fitness.image} alt={fitness.name} />
              <p>{fitness.name}</p>
              <span>{fitness.price}</span>
            </div>
          ))
        : null}

      {homeToggle
        ? home.map((home, index) => (
            <div className="navcard" key={home.image}>
              <img src={home.image} alt={home.name} />
              <p>{home.name}</p>
              <span>{home.price}</span>
            </div>
          ))
        : null}

      {audioToggle
        ? audio.map((audio, index) => (
            <div className="navcard" key={audio.image}>
              <img src={audio.image} alt={audio.name} />
              <p>{audio.name}</p>
              <span>{audio.price}</span>
            </div>
          ))
        : null}
    </>
  );
};

export default NavCard;
