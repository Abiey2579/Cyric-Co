import React from "react";
import "./css/AboutYahaya.css";
import AboutYahayaPicture from "./image/About-Yahaya-Picture.jpg";
import AboutYahayaPsychometric from "./documents/ABOUT-YAHAYA-MUHAMMAD-BELLO-Psychometric.pdf";

const AboutYahaya = () => {
  return (
    <div className="Xyshma-Founder container-fluid row">
      <div className="Founder-Image-Container col-md-5 mb-5">
        <img
          src={AboutYahayaPicture}
          className="Founder-Image"
          alt="Xyshma Founder Image"
        />
      </div>
      <div className="Founder-Info col-md-5">
        <h2 className="Founder-Info-Head">About Me</h2>
        <p className="Founder-Info-Preamble">
          I am a qualified Web Developer mostly deals with Frontend Web
          Development, with 5 years experience.This includes HTML5, CSS3,
          JavaScript, Bootstrap, Jquery, React JS, PHP, Python, MySQL.
        </p>
        <table className="Founder-Info-Table">
          <tr>
            <td>
              <i className="fi fi-person fi-fw Founder-Info-Icon"></i>
            </td>
            <td className="Founder-Info-Content">Yahaya Muhammad Bello</td>
          </tr>
          <tr>
            <td>
              <i className="fi fi-calendar fi-fw Founder-Info-Icon"></i>
            </td>
            <td className="Founder-Info-Content">
              3<sup>rd</sup> January, 2002
            </td>
          </tr>
          <tr>
            <td>
              <i className="fa fa-phone-alt fa-fw Founder-Info-Icon"></i>
            </td>
            <td className="Founder-Info-Content">+234 9039402857</td>
          </tr>
          <tr>
            <td>
              <i className="fi fi-email fi-fw Founder-Info-Icon"></i>
            </td>
            <td className="Founder-Info-Content">iiabba2579@gmail.com</td>
          </tr>
          <tr>
            <td>
              <i className="fi fi-home fi-fw Founder-Info-Icon"></i>
            </td>
            <td className="Founder-Info-Content">Borno State, Nigeria</td>
          </tr>
        </table>
        <a
          href={AboutYahayaPsychometric}
          className="x-btn x-btn-primary Founder-Info-Download"
          target="_blank"
        >
          <i className="fa fa-cloud-download-alt mr-2 fa-fw"></i>
          Download Psychometric
        </a>
      </div>
    </div>
  );
};

export default AboutYahaya;
