import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaLinkedin, FaInstagram } from "react-icons/fa";
// import { FiTeams } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

// import { BsFillPersonLinesFill } from "react-icons/bs";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTeams } from "@fortawesome/free-brands-svg-icons";
// import logo from "../assets/2154_Husky_Systers_Code.rev.1607348983 (1).png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <nav className="relative z-10 bg-[rgb(65,38,29)] flex justify-end items-right py-4 px-6 ">
      <div className="">
        <ul className="font-bold text-lg hidden md:flex list-none m-0 p-0 text-[#fff]">
          <li> Home </li>
          <li> About </li>
          <li> Events </li>
          <li> Eboard </li>
          <li> Contact </li>
        </ul>
      </div>
      {/* Hamburger menu bars */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 text-[#fff] justify-start items-left"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <nav
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[rgb(65,38,29)]"
        }
      >
        <ul className="font-bold text-lg list-none text-[#fff] flex flex-col justify-end items-left">
          <li className="py-6 text-4xl"> Home </li>
          <li className="py-6 text-4xl"> About </li>
          <li className="py-6 text-4xl"> Events </li>
          <li className="py-6 text-4xl"> Eboard </li>
          <li className="py-6 text-4xl"> Contact </li>
        </ul>
      </nav>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2]">
            <a
              className="flex justify-end items-center w-full text-gray-300"
              href="/"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-br from-yellow-500 via-red-500 to-purple-800">
            <a
              className="flex justify-end items-center w-full text-gray-300"
              href="/"
            >
              <FaInstagram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justtify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[gray]">
            <a
              className="flex justify-end items-center w-full text-gray-300"
              href="/"
            >
              <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       {/* <div className="navbar-logo">
//         <img src={logo} alt="Logo" />
//       </div> */}
//       <ul className="nav-list">
//         <li>
//           <Link to="/" className="link">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/about" className="link">
//             About
//           </Link>
//         </li>
//         <li>
//           <Link to="/events" className="link">
//             Events
//           </Link>
//         </li>
//         <li>
//           <Link to="/eboard" className="link">
//             Eboard
//           </Link>
//         </li>
//         <li>
//           <Link to="/contact" className="link">
//             Contact
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

export default Navbar;
