import React from "react";
import "./css/ContactUs.css";

const ContactUs = () => {
  return (
    <section className="Contact-Us">
      <div className="Container">
        <div className="About">
          <h4>About</h4>
          <p>
            Far far away, behind the world Mountains, far from the countries
            Volkalia and Consonantia, there live the blind texts.
          </p>
          <div className="Social-Handles">
            <a href="" className="Social-Hanlde-Link Twitter">
              <i className="fi fi-fw fi-twitter"></i>
            </a>
            <a href="" className="Social-Hanlde-Link Facebook">
              <i className="fi fi-fw fi-facebook"></i>
            </a>
            <a href="" className="Social-Hanlde-Link Instagram">
              <i className="fi fi-fw fi-instagram"></i>
            </a>
          </div>
        </div>
        <div className="Links">
          <h4>Links</h4>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Why Choose Us</a>
            </li>
            <li>
              <a href="">Our Services</a>
            </li>
            <li>
              <a href="">Our Mission</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="Services-We-Render">
          <h4>Services</h4>
          <ul>
            <li>
              <a href="">Web Design</a>
            </li>
            <li>
              <a href="">Product Design</a>
            </li>
            <li>
              <a href="">UI/UX Design</a>
            </li>
            <li>
              <a href="">QA & Testing</a>
            </li>
          </ul>
        </div>
        <div className="Contact-Info">
          <h4>Have a Questions?</h4>
          <ul>
            <li>
              <i className="fi fi-fw fi-map-marker-alt"></i>
              <span>
                203 Fake St. Mountain View, San Francisco, Calfornia, Nigeria
              </span>
            </li>
            <li>
              <i className="fi fi-fw fi-phone"></i>
              <span>+234 9039 4028 57</span>
            </li>
            <li>
              <i className="fi fi-fw fi-email"></i>
              <span>info@mydomain.com</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
