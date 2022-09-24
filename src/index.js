import React from "react";
import ReactDOM from "react-dom";
import Typed from "typed.js";

// JQUERY LIBRARY
import $ from "jquery";
import "jquery/dist/jquery";
// BOOTSTRAP LIBRARY
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// ROUTER
import CyrixCo from "./Router";
// PRELOADER
import Preloader from "./Components/Preloader/Preloader";

// FONTAWESOME LIBRARY
import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";

// FONTISTO LIBRARY
import "fontisto/css/fontisto/fontisto.min.css";

const icontList = Object.keys(Icons)
  .filter((key) => key !== "fas" && key !== "prefix")
  .map((icon) => Icons[icon]);

library.add(...icontList);

ReactDOM.render(
  <React.StrictMode>
    <CyrixCo />
    <Preloader />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
