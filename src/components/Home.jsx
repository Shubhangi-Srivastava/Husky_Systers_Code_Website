import React from "react";
import Navbar from "./Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <Navbar />
      <div className="background-image"></div>
      <h1 className="home-title1">WELCOME TO</h1>
      <h1 className="home-title2">HUSKY SYSTERS CODE</h1>
    </div>
  );
};

export default Home;
