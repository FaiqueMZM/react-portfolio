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
import reactjs from "../assets/react.svg";
import nodejs from "../assets/node.svg";
import mysql from "../assets/mysql.svg";
import sqlite from "../assets/sqlite.svg";
import aws from "../assets/aws.svg";

const technologies = [
  {
    category: "Languages",
    items: [
      { name: "Java", logo: java },
      { name: "JavaScript", logo: javascript },
      { name: "TypeScript", logo: typescript },
      { name: "C++", logo: cpp },
      { name: "Python", logo: python },
      { name: "PHP", logo: php },
    ],
  },
  {
    category: "Web Development",
    items: [
      { name: "HTML", logo: html },
      { name: "CSS", logo: css },
      { name: "Bootstrap", logo: bootstrap },
      { name: "ReactJS", logo: reactjs },
      { name: "NodeJS", logo: nodejs },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", logo: mysql },
      { name: "SQLite", logo: sqlite },
    ],
  },
  {
    category: "Cloud Services",
    items: [{ name: "AWS", logo: aws }],
  },
];

const Technologies = () => {
  return (
    <section id="technologies" className="technologies">
      <h2 className="technologies-title">TECHNOLOGIES</h2>
      {technologies.map((category, categoryIndex) => (
        <div key={categoryIndex} className="technology-category">
          <h3 className="category-title">{category.category}</h3>
          <div className="technologies-grid">
            {category.items.map((tech, index) => (
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
      ))}
    </section>
  );
};

export default Technologies;
