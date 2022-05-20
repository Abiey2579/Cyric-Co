import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// HOME PAGE COMPONENT
import XyshmaHome from "./home/Index";

// PROJECTS COMPONENT
import XyshmaProjects from "./projects/Index";

// ABOUT COMPONENT
import AboutXyshma from "./about/Index";

const Xyshma = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<XyshmaHome />} />
        <Route path="/projects" element={<XyshmaProjects />} />
        <Route path="/about" element={<AboutXyshma />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Xyshma;
