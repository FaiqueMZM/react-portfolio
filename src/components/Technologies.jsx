import React from "react";
import "./Technologies.css";
import java from "../assets/java.svg";
import javascript from "../assets/javascript.svg";
import typescript from "../assets/typescript.svg";
import cpp from "../assets/cpp.svg";
import python from "../assets/python.svg";
import php from "../assets/php.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import bootstrap from "../assets/bootstrap.svg";
import tailwind from "../assets/tailwind.svg";
import reactjs from "../assets/react.svg";
import nodejs from "../assets/node.svg";
import mysql from "../assets/mysql.svg";
import sqlite from "../assets/sqlite.svg";
import aws from "../assets/aws.svg";

const technologies = {
  languages: [
    { name: "Java", logo: java },
    { name: "JavaScript", logo: javascript },
    { name: "TypeScript", logo: typescript },
    { name: "C++", logo: cpp },
    { name: "Python", logo: python },
    { name: "PHP", logo: php },
  ],
  webDevelopment: [
    { name: "HTML", logo: html },
    { name: "CSS", logo: css },
    { name: "Bootstrap", logo: bootstrap },
    { name: "Tailwind", logo: tailwind },
    { name: "ReactJS", logo: reactjs },
    { name: "NodeJS", logo: nodejs },
  ],
  databases: [
    { name: "MySQL", logo: mysql },
    { name: "SQLite", logo: sqlite },
  ],
  cloudServices: [{ name: "AWS", logo: aws }],
};

const Technologies = () => {
  return (
    <section id="technologies" className="technologies">
      <h2 className="technologies-title">TECHNOLOGIES</h2>

      {/* Languages Section */}
      <div className="technology-category">
        <h3>Languages</h3>
        <div className="technologies-grid">
          {technologies.languages.map((tech, index) => (
            <div key={index} className="technology-item">
              <img
                src={tech.logo}
                alt={tech.name}
                className="technology-logo"
              />
              <p className="technology-name">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Web Development Section */}
      <div className="technology-category">
        <h3>Web Development</h3>
        <div className="technologies-grid">
          {technologies.webDevelopment.map((tech, index) => (
            <div key={index} className="technology-item">
              <img
                src={tech.logo}
                alt={tech.name}
                className="technology-logo"
              />
              <p className="technology-name">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Databases and Cloud Services Section in the same line */}
      <div className="databases-cloud-container">
        {/* Databases Section */}
        <div className="technology-category databases">
          <h3>Databases</h3>
          <div className="databases-grid">
            {technologies.databases.map((tech, index) => (
              <div key={index} className="technology-item-inline">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="technology-logo"
                />
                <p className="technology-name">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cloud Services Section */}
        <div className="technology-category cloud-services">
          <h3>Cloud Services</h3>
          <div className="technologies-grid">
            {technologies.cloudServices.map((tech, index) => (
              <div key={index} className="technology-item">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="technology-logo"
                />
                <p className="technology-name">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
