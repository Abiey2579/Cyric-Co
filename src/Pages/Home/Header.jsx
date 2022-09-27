import React from "react";
import "./css/Header.css";
import ReactTyped from "react-typed";

const Header = () => {
  return (
    <header className="MainHeader">
      <div className="Header-Overlay">
        <div className="col-md-8 text-center m-auto">
          <p className="Welcome-Msg">We specialize in</p>
          <h1 className="Slogan">
            <ReactTyped
              strings={[
                "",
                "Web Development",
                "Product Design",
                "QA / Testing",
              ]}
              typeSpeed={100}
              backSpeed={60}
              loop
            >
              <span className="SloganMaker typing">{""}</span>
            </ReactTyped>
          </h1>
          <p className="Intro">
            Join hundreds of companies and individuals who are already
            skyrocketing their businesses from the final product of our
            pixel-perfect developers.
          </p>
          <div className="ButtonGroup">
            <button>Start a Project</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
