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
        breakpoint: 1160,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
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
            Github Repository Link
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
            Github Repository Link
            <img className="github-logo" src={github} />
          </a>
        </div>
        <div className="project-card">
          <h2 className="project-name">Future Seekers LK</h2>
          <p className="project-description">
            As part of an agile group project, Future Seekers LK was developed
            to facilitate job seeking and hiring processes for applicants and
            employers.
            <br /> This platform was built using the CodeIgniter framework
            alongside HTML, CSS, JavaScript, PHP, and MySQL. Throughout the
            project, I gained valuable experience in understanding client
            requirements, crafting user stories and personas, and utilizing
            project management software (Asana).
            <br /> The project involved working through sprints, providing
            insight into agile methodologies and teamwork in a dynamic
            environment.
          </p>
          <p>Associated with University of Staffordshire</p>
        </div>
        <div className="project-card">
          <h2 className="project-name">Inventory Management System</h2>
          <p className="project-description">
            The Inventory Management System is a comprehensive application
            designed to manage inventory operations effectively.
            <br /> Initially developed as a command-line interface (CLI)
            application, it emphasized clean coding principles and implemented
            software design patterns, including Singleton, Command, Factory,
            Builder, and Facade.
            <br /> The project transitioned into a Java Servlet Application
            using the MVC architecture, with user interfaces built using HTML
            and JSP.
            <br /> Key features included concurrency handling to ensure smooth
            client-server interactions, enhancing the application's efficiency
            and usability.
          </p>
          <p>Associated with University of Staffordshire</p>
          <a
            className="github-link"
            href="https://github.com/FaiqueMZM/Inventory-Management-System-Java-Servlet-Application"
            target="_blank"
          >
            Github Repository Link
            <img className="github-logo" src={github} />
          </a>
        </div>
        <div className="project-card">
          <h2 className="project-name">EduBlog 360</h2>
          <p className="project-description">
            EduBlog360 is a blog web application designed for multiple users to
            share articles, with an admin review system for publishing content.
            <br />
            The project was developed using the Laravel framework, incorporating
            HTML, CSS, Blade, PHP, and SQLite. This application facilitates a
            streamlined content management system, allowing for efficient
            submission, review, and publication processes, ideal for multi-user
            environments.
          </p>
          <p>Associated with University of Staffordshire</p>
          <a
            className="github-link"
            href="https://github.com/FaiqueMZM/EduBlog360-SSP2-CB008515"
            target="_blank"
          >
            Github Repository Link
            <img className="github-logo" src={github} />
          </a>
        </div>
        <div className="project-card">
          <h2 className="project-name">Get-A-Ride Cab Service</h2>
          <p className="project-description">
            Get-A-Ride Cab Service is a Java-based application designed to
            manage cab service operations using Object-Oriented Programming
            (OOP) principles and the Model View Controller (MVC) architecture.
            <br />
            The project provided hands-on experience in creating UML diagrams,
            including Activity, Sequence, and Class Diagrams.
            <br /> In addition, it involved documenting detailed test cases for
            each use case in the system, ensuring comprehensive coverage of
            functionality and robustness in design.
          </p>
          <p>Associated with University of Staffordshire</p>
        </div>
        <div className="project-card">
          <h2 className="project-name">MS SQL Database Solution</h2>
          <p className="project-description">
            This project involved designing and implementing a Microsoft SQL
            database solution tailored to the operational requirements of a
            hospital.
            <br /> The development process included creating an Entity
            Relationship Diagram (ERD) at a high level, normalizing the
            relational schema to 3NF, and conducting comprehensive testing
            through predefined test cases.
            <br /> The solution provided a robust data management framework
            ensuring the hospital's operational efficiency.
          </p>
          <p>Associated with University of Staffordshire</p>
        </div>
      </Slider>
    </section>
  );
};

export default Projects;
