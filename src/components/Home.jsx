import React from "react";
// import Navbar from "./Navbar";
import backgroundImage from "../assets/Picture1.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div className="">
      <div className="p-30 w-full h-full">
        {/* Container */}
        <div className="max-w mx-auto flex flex-col h-full">
          <div
            className="min-h-screen max-h-screen absolute top-0 left-0 w-full h-full bg-center bg-cover bg-no-repeat bg-fixed opacity-0.9 z-0 "
            style={{
              backgroundImage: `url(${backgroundImage})`,
              filter: "brightness(50%) contrast(100%)",
            }}
          ></div>
          <h1 className="text-white z-10 relative flex justify-center items-center text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-14 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28">
            WELCOME TO
          </h1>
          <h1 className="text-yellow-300 z-10 relative flex justify-center items-center text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-0 sm:mt-2 md:mt-4 lg:mt-6 xl:mt-8">
            HUSKY SYSTERS CODE
          </h1>
          <h5 className="text-white z-10 relative flex justify-center items-center text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 max-w-[90%] mx-auto">
            Connecting Minds, Elevating Tech: Your Path to Success!
          </h5>
          {/* Home page Buttons */}
          <div className="flex space-x-9 justify-center z-10 mt-20">
            <button className="group px-8 py-4 bg-[rgb(65,38,29)] text-white group text-xl rounded-md hover:bg-[rgb(92,54,41)] flex items-center">
              Events
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-2 " />
              </span>
            </button>
            <button className="px-8 py-4 bg-yellow-500 text-white text-xl rounded-md">
              Join US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
