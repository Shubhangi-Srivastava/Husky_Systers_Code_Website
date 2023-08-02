import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

// import AboutUs from "./components/AboutUs";
const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Navbar />} />
    //     <Route path="/" element={<Home />} />
    //     <Route path="/" element={<Events />} />
    //   </Routes>
    // </Router>
    <div>
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
