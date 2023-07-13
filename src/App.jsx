import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

// import reactLogo from './assets/react.svg'
// import viteLogo from "/vite.svg";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add routes for other pages here */}
      </Routes>
    </Router>
  );
};

export default App;
