import React from "react";
import "./css/Cards.css";
import PortfolioCardImage from "./../Images/PortfolioCardImage.jpg";

const PorfolioCard = (props) => {
  return (
    <div class="PorfolioCard">
      <img src={PortfolioCardImage} alt="PortfolioCardImage" />
      <div class="info">
        <strong>{props.Title}</strong>
        <span class="sub-title">{props.subTitle}</span>
        <hr />
        <div class="hide-info">
          <span class="text">
            {props.Description}
            <a href={props.urlLink}>Learn More</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PorfolioCard;
