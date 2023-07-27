import React from "react";
import Navbar from "./Navbar";
import backgroundImage from "../assets/Picture1.jpg";
import "../components/home.css";

const Home = () => {
  return (
    <div className="homeContainer">
      {/* Container */}
      <div className="max-w mx-auto flex flex-col justify-center h-full">
        <Navbar />
        <div className="background-image"></div>
        <h1 className="home-title1">WELCOME TO</h1>
        <h1 className="home-title2">HUSKY SYSTERS CODE</h1>
        <h5 className="home-subtitle">
          Connecting Minds, Elevating Tech: Your Path to Success!
        </h5>
        <div className="flex space-x-4 justify-center z-10 mt-20">
          <button className="px-4 py-2 bg-[rgb(65,38,29)] text-white rounded-md">
            Events
          </button>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded-md">
            Join US
          </button>
        </div>
      </div>
    </div>
    // <div className="relative p-20">
    //   <Navbar />
    //   <div
    //     className="absolute top-0 left- 0 right-0 bottom-0 w-full h-full bg-cover bg-center bg-no-repeat brightness-70 contrast-90"
    //     style={{
    //       backgroundImage: `url(${backgroundImage})`,
    //     }}
    //   ></div>
    //   <h1 className="text-white text-6xl sm:text-3xl md:text-6xl text-center">
    //     WELCOME TO
    //   </h1>
    //   <h1 className="text-yellow-500 text-6xl sm:text-3xl md:text-6xl text-center">
    //     HUSKY SYSTERS CODE
    //   </h1>
    // </div>
  );
};

export default Home;
