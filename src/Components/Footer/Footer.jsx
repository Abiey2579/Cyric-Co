import React from "react";
import { Link } from "react-router-dom";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="Xyshma-Footer">
      <div className="row container-fluid Xyshma-Footer-Content">
        <div className="col-md-6 Copyright-Container">
          <p>
            Copyright &copy; 2022 All Rights Reserved | Developed by
            <a href="mailto:mbyahya2579@gmail.com"> Yahaya M. Bello</a>
          </p>
        </div>
        <div className="col-md-3 Social-Icon-Container">
          <a 
            href="https://wa.me/2349039402857"
            target="_blank"
            rel="noreferrer" 
            className="Whatsapp-Icon Social-Icon"></a>
          <a 
            href="mailto:mbyahya2579@gmail.com"
            target="_blank"
            rel="noreferrer" 
            className="Google-Icon Social-Icon"></a>
          <a
            href="https://web.facebook.com/Cyrix-Co-103043265848266"
            target="_blank"
            rel="noreferrer"
            className="Facebook-Icon Social-Icon"
          ></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
