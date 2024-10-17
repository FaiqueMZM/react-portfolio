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
        <h1 className="hero-title">
          Hey,
          <br />
          I'm Faique Inaas
        </h1>
        <h2 className="hero-description">Software Engineer</h2>
      </div>
      <div className="shape-divider"></div> {/* Shape divider goes here */}
    </section>
  );
};

export default Hero;
