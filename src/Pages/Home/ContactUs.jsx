import React from "react";
import "./css/ContactUs.css";
import ContactUsSVG from "./Images/Get-in-touch-pana.svg";

const ContactUs = () => {
  return (
    <section className="ContactUs">
      <div className="row">
        <div className="col-md-6">
          <img
            src={ContactUsSVG}
            className="img-fluid ContactUsSVG"
            alt="Contact Us SVG"
            width={400}
          />
        </div>
        <div className="col-md-6">
          <h2>Get in touch</h2>
          <ul className="ContactUs-Handles">
            <li>
              <i className="fi fi-email fi-fw"></i>
              <span>cyrix.company@gmail.com</span>
            </li>
            <li>
              <i className="fi fi-phone fi-fw"></i>
              <span>+2349039402857</span>
            </li>
            <li>
              <i className="fi fi-facebook fi-fw"></i>
              <a href="">@cyrixco</a>
            </li>
            <li>
              <i className="fi fi-twitter fi-fw"></i>
              <a href="">@cyrixco</a>
            </li>
            <li>
              <i className="fi fi-instagram fi-fw"></i>
              <a href="">@cyrixco</a>
            </li>
            <li>
              <i className="fi fi-linkedin fi-fw"></i>
              <a href="">@cyrixco</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
