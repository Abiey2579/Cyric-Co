import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// HOME PAGE COMPONENT
import HomePage from "./Pages/Home/Index";

const CyrixCo = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default CyrixCo;
