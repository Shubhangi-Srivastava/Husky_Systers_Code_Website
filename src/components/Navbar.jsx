import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/2154_Husky_Systers_Code.rev.1607348983 (1).png";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div> */}
      <ul className="nav-list">
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            About
          </Link>
        </li>
        <li>
          <Link to="/events" className="link">
            Events
          </Link>
        </li>
        <li>
          <Link to="/eboard" className="link">
            Eboard
          </Link>
        </li>
        <li>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
