import React from "react";
import Slider from "react-slick";
import "./Projects.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 1, // Show 1 slide per view on mobile
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">PROJECTS</h2>
      <Slider {...settings}>
        <div className="project-card">Project 1</div>
        <div className="project-card">Project 2</div>
        <div className="project-card">Project 3</div>
        <div className="project-card">Project 4</div>
      </Slider>
    </section>
  );
};

export default Projects;
