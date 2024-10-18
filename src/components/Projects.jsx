import React from "react";
import Slider from "react-slick";
import "./Projects.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import github from "../assets/github.svg";

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
          slidesToShow: 1,
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
        <div className="project-card">
          <h2 className="project-name">iCars</h2>
          <p className="project-description">
            The iCars project is a dynamic React web application designed for a
            car showroom, showcasing vehicles and services.
            <br /> Built with ReactJS and TypeScript, the application utilizes
            AWS Lambda functions to handle CRUD operations and interacts with
            REST APIs for seamless data management.
            <br /> AWS RDS and DynamoDB were implemented for efficient storage
            of inventory and car details, while AWS S3 was used for hosting the
            application, complemented by AWS CloudFront for optimized content
            delivery.
          </p>
          <p>Associated with University of Staffordshire</p>
          <a
            className="github-link"
            href="https://github.com/FaiqueMZM/iCars-AWS-Project"
            target="_blank"
          >
            Github
            <img className="github-logo" src={github} />
          </a>
        </div>
        <div className="project-card">
          <h2 className="project-name">Smart Surveilance System</h2>
          <p className="project-description">
            This final year project focuses on automating video surveillance to
            improve efficiency in violence detection.
            <br /> Utilizing deep learning techniques, the system employs VGG19
            for feature extraction and ConvLSTM for analyzing video frames. By
            leveraging properties such as motion, object interactions, and
            contextual cues, the model distinguishes between peaceful and
            violent activities.
            <br /> Trained on the Hockey Fight Dataset, it achieved a 70%
            accuracy rate. Tools used for development included Python, PyTorch,
            Jupyter Notebook, and OpenCV, showcasing the integration of AI in
            security solutions.
          </p>
          <p>Associated with University of Staffordshire</p>
          <a
            className="github-link"
            href="https://github.com/FaiqueMZM/Smart-Surveillance-System-Using-VGG19-and-ConvLSTM"
            target="_blank"
          >
            Github
            <img className="github-logo" src={github} />
          </a>
        </div>
      </Slider>
    </section>
  );
};

export default Projects;
