import React from "react";
import { Link } from "react-router-dom";
import CyrixCo_Orange from "./../../Assets/Images/Cyrix-Co-Orange.svg";
import "./css/NavigationSideDrawer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavigationSideDrawer = (props) => {
  return (
    <React.Fragment>
      <div className={"SideDrawer " + props.SideDrawerToggle + "-SideDrawer"}>
        <header className="SideDrawer-Head">
          <div className="CyrixCo-Brand-Wrapper">
            <img
              src={CyrixCo_Orange}
              className="SideDrawer-CyrixCo"
              alt="Cyrix Co. Logo"
            />
            <span className="SideDrawer-CyrixCo-Brand">Cyrix Co.</span>
          </div>
          <div className="SideDrawer-Close" onClick={props.HideSideDrawer}>
            <span></span>
          </div>
        </header>
        <ul className="SideDrawer-Item-Container">
          {props.SideDrawerItems.map((MappedItem) => (
            <li className="SideDrawer-Item" key={MappedItem.Item}>
              <Link to={MappedItem.ItemLink} className="SideDrawer-Link">
                {MappedItem.Type === "fontisto" ? (
                  <i className={"SideDrawer-Icon " + MappedItem.Icon}></i>
                ) : (
                  <FontAwesomeIcon
                    className="SideDrawer-Icon "
                    icon={MappedItem.Icon}
                  />
                )}
                <span className="SideDrawer-Item-Label">{MappedItem.Item}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={"SideDrawer-Overlay " + props.SideDrawerToggle + "-Overlay"}
        onClick={props.HideSideDrawer}
      ></div>
    </React.Fragment>
  );
};

export default NavigationSideDrawer;
