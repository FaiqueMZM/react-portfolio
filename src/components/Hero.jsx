import React from "react";
import "./Hero.css";
import heroImage from "../assets/portrait.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image-container">
        <img src={heroImage} alt="Hero" className="hero-image" />
      </div>
      <div className="hero-content">
        <h2 className="hero-intro">HEY! MY NAME IS</h2>
        <h1 className="hero-title">FAIQUE INAAS</h1>
        <h2 className="hero-description">I'm a Software Engineer.... </h2>
      </div>
      <div className="shape-divider"></div> {/* Shape divider goes here */}
    </section>
  );
};

export default Hero;
