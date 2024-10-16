import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/apple-touch-icon.png";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="brand-name">
        <img src={logo} alt="Brand Logo" className="logo" />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? (
          <FaTimes size={30} color="#fca311" />
        ) : (
          <FaBars size={30} color="#fca311" />
        )}{" "}
        {/* Hamburger icon */}
      </div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#technologies">Technologies</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
        <li>
          <a href="/path-to-cv" download className="cv-button">
            Download CV
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
