import React from "react";
import "./css/Header.css";
import ReactTyped from "react-typed";

const Header = () => {
  return (
    <header className="MainHeader">
      <div className="Header-Overlay">
        <div className="col-md-8 text-center m-auto">
          <p className="Welcome-Msg">WELCOME TO CYRIX CO.</p>
          <h1 className="Slogan">
            We do{" "}
            <ReactTyped
              strings={[
                "",
                "Web Design",
                "Web Development",
                "Graphic Design",
                "UI/UX Design",
              ]}
              typeSpeed={100}
              backSpeed={60}
              loop
            >
              <span className="SloganMaker typing">Web Design</span>
            </ReactTyped>
          </h1>
          <p className="Intro">
            Join hundreds of companies and individuals who are already
            skyrocketing their businesses with the help of our developers.
          </p>
          <div className="ButtonGroup">
            <button>Explore Our Services</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
