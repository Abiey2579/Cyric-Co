import React from "react";
import "./css/Preloader.css";

const Preloader = () => {
  const fadeOut = () => {
    const loaderWrapper = document.querySelector(".PreloaderWrapper");
    loaderWrapper.classList.add("fade");
  };
  window.addEventListener("load", fadeOut);
  return (
    <div class="PreloaderWrapper">
      <div class="Preloader">
        <i class="fi fi-spinner-refresh fi-fw fi-spin"></i>
      </div>
    </div>
  );
};

export default Preloader;
