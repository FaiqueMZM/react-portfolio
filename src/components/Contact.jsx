import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import email from "../assets/email.svg";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_4zg0uxa",
        "template_96yb6ab",
        formData,
        "aoszK2wPNpdzOsirR"
      )
      .then(
        (result) => {
          console.log("Message sent: ", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("Failed to send message: ", error.text);
          alert("Failed to send the message. Please try again.");
        }
      );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Left Box */}
        <div className="contact-left">
          <h2 className="contact-title">Contact Me</h2>
          <p>
            If you have any question or want to work together, feel free to send
            a message through the form.
            <br />
            <br />
            or
            <br />
            <br />
            Reach out to me on social media.
          </p>
          <div className="social-links">
            <a
              href="https://github.com/FaiqueMZM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/faique-inaas-mzm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="mailto:faiqueinaas@gmail.com">
              <img src={email} alt="Email" />
            </a>
          </div>
        </div>

        {/* Right Box (Form) */}
        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
