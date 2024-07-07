import React from "react";
import about_img from "../assets/about_img.jpg";
import "./About.scss";
// import program from "../assets/programmer.png";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="left">
          <img className="about-img" src={about_img} alt="" />
        </div>
        <div className="right">
          <h2>About me</h2>
          <h3>Front-end React Developer</h3>
          <p className="desc_aboout">
            Hello, I'm Shashank, a frontend developer specializing in React.
            <br /> I bring creativity and technical expertise to build modern
            and responsive web applications.
            <p className="desc_aboout">
              I am passionate about creating intuitive user interfaces and
              leveraging the power of React to deliver seamless user
              experiences.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
