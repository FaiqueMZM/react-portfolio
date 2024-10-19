import React, { useState } from "react";
import "./NavBar.css";
import logo from "../assets/apple-touch-icon.png";
import { FaTimes } from "react-icons/fa";
import { RiMenu5Fill } from "react-icons/ri";
import cv from "../assets/cv.pdf";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track menu open/close
  const [isClosing, setIsClosing] = useState(false); // State for closing animation

  const toggleMenu = () => {
    if (isOpen) {
      setIsClosing(true); // Trigger the closing animation
      setTimeout(() => {
        setIsOpen(false); // Close the menu after animation
        setIsClosing(false); // Reset closing animation state
      }, 500); // The timeout matches the closing animation duration
    } else {
      setIsOpen(true); // Open the menu immediately
    }
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
          <RiMenu5Fill size={30} color="#fca311" />
        )}
      </div>
      <ul
        className={`nav-links ${isOpen ? "active" : ""} ${
          isClosing ? "inactive" : ""
        }`}
      >
        <li>
          <a href="#aboutme">About Me</a>
        </li>
        <li>
          <a href="#technologies">Technologies</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
        <li>
          <a href={cv} download className="cv-button">
            Download CV
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
