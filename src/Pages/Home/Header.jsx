import React from "react";
import { Link } from "react-router-dom";
import HeaderRight from "./Images/Header-Right-SVG.svg";
import "./css/Header.css";

const Header = () => {
  const handleMailTo = () => {
    return window.location.replace("mailto:mbyahya2579@gmail.com");
  };
  return (
    <header className="MainHeader">
      <div className="col-md-6">
        <h2 className="Slogan">
          Where imaginations turns into{" "}
          <span className="SloganMaker"> an experience</span>
        </h2>
        <p className="Intro">
          We're very happy to welcome you on board. Join hundreds of companies
          and individuals who are already skyrocketing their businesses with the
          help of our pixel-perfect developers.
        </p>
        <div className="ButtonGroup">
          <button onClick={handleMailTo}>Contact Us</button>
          <button onClick={handleMailTo}>Get In Touch</button>
        </div>
      </div>
      <div className="col-md-6 text-center HeaderRight">
        <img className="HeaderRightSvg" src={HeaderRight} />
      </div>
    </header>
  );
};

export default Header;
