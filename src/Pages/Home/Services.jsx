import React from "react";
import "./css/Services.css";

import SMM from "./Images/Connected-world-bro.svg";
import GraphicDesign from "./Images/Design-team-bro.svg";
import UIUXDesign from "./Images/Prototyping-process-amico.svg";
import QATesting from "./Images/Software-code-testing-bro.svg";
import WebDesignDevelopment from "./Images/Website-Creator-bro.svg";
import ContentWriting from "./Images/Writing-a-letter-bro.svg";

const Services = () => {
  return (
    <div className="OurServices">
      <h2>Our Services</h2>
      <div className="ServiceCardGrid">
        <div className="ServiceCard">
          <img src={WebDesignDevelopment} alt="Web Design & Development SVG" />
          <span>Web Development</span>
        </div>
        <div className="ServiceCard">
          <img src={UIUXDesign} alt="UI/UX Design SVG" />
          <span>UI/UX Design</span>
        </div>
        <div className="ServiceCard">
          <img className="MoreWidth" src={QATesting} alt="QA & Testing SVG" />
          <span>QA & Testing</span>
        </div>
        <div className="ServiceCard">
          <img src={ContentWriting} alt="Content Writing SVG" />
          <span>Content Writing</span>
        </div>
        <div className="ServiceCard">
          <img src={GraphicDesign} alt="Graphic Design SVG" />
          <span>Graphic Design</span>
        </div>
        <div className="ServiceCard">
          <img src={SMM} alt="Social Media Management SVG" />
          <span>Social Media Managing</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
