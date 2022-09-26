import React from "react";
import "./css/Services.css";

// import UIUXDesign from "./Images/Prototyping-process-amico.svg";
// import QATesting from "./Images/Software-code-testing-bro.svg";
// import WebDesignDevelopment from "./Images/Website-Creator-bro.svg";

const Services = () => {
  return (
    <div className="OurServices">
      <h2>Our Services</h2>
      <div className="ServicesGrid">
        <div className="Service">
          <span>01</span>
          <h4>Web Development</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quidem
            ipsa officia dolore fugit, corporis omnis consequatur blanditiis cum
            vitae commodi, voluptatem numquam, cupiditate aliquid repellendus
            non tempore excepturi soluta?
          </p>
        </div>
        <div className="Service">
          <span data>02</span>
          <h4>Product Design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quidem
            ipsa officia dolore fugit, corporis omnis consequatur blanditiis cum
            vitae commodi, voluptatem numquam, cupiditate aliquid repellendus
            non tempore excepturi soluta?
          </p>
        </div>
        <div className="Service">
          <span>03</span>
          <h4>QA & Testing</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quidem
            ipsa officia dolore fugit, corporis omnis consequatur blanditiis cum
            vitae commodi, voluptatem numquam, cupiditate aliquid repellendus
            non tempore excepturi soluta?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
