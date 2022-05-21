import React from "react";
import "./css/Xyshma.css";
import XyshmaImage from "./image/Xyshma.svg";
import SourceCode from "./image/SourceCode.svg";

const Xyshma = () => {
  return (
    <div className="About-Xyshma container-fluid row">
      <div className="Xyshma-Preamble col-md-5 mb-3">
        <h2 className="Xyshma-Preamble-Head">Xyshma</h2>
        <p>
          Discover the colorful world, Build your dream, and earn a certificate
          just by contributing.
        </p>
        <div className="Xyshma-Service-Categories">
          <span className="Xyshma-Service-Category x-btn mb-3">
            <i className="fi fi-github fi-fw Xyshma-Service-Icon mr-2"></i>
            Open-Source
          </span>
          <span className="Xyshma-Service-Category x-btn mb-3">
            <i className="fi fi-bug fi-fw Xyshma-Service-Icon mr-2"></i>
            Bug-Based
          </span>
          <span className="Xyshma-Service-Category x-btn mb-3">
            <img
              src={SourceCode}
              alt="Xyshma-Code-Logo"
              className="Xyshma-Service-Icon mr-2"
            />
            Source Code
          </span>
        </div>
      </div>
      <div className="Xyshma-Image-Container col-md-5">
        <img src={XyshmaImage} className="Xyshma-Image" alt="Xyshma Image" />
      </div>
    </div>
  );
};

export default Xyshma;
