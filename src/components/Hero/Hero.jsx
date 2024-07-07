import React from "react";
import "./Hero.css";
import cv from "../assets/FINAL_RESUME_Shashank.pdf";
import git from "../assets/github (1).png";
import linkedin from "../assets/linkedin.png";
import mail_1 from "../assets/mail (1).png";
import my_img from "../assets/Shashank_profile.png";
import html from "../assets/html-5.png";
import css from "../assets/css-3.png";
import tailwind from "../assets/tailwind.png";
import js from "../assets/js.png";
import react from "../assets/physics.png";

const Hero = () => {
  return (
    <div className="working_area" id="home">
      <div className="hero">
        <div className="text_img_container">
          <div className="text">
            <h1>
              Front-End React <br /> Developer
            </h1>
            <p>
              Hi, I'm Shashank Srivastava. A passionate Front-end React
              Developer🙋‍♂️{" "}
            </p>
            <div className="icon_button">
              <div className="icon_img">
                <a href="https://github.com/Shashank6307" target="blank">
                  <img className="git-img" src={git} alt="" />
                </a>

                <a href="www.linkedin.com/in/ss173" target="blank">
                  <img src={linkedin} alt="" />
                </a>
                <a href="mailto:ss1731493@gmail.com" target="blank">
                  <img src={mail_1} alt="" />
                </a>
              </div>

              <a href={cv} target="blank">
                <button>Download CV</button>
              </a>
            </div>
          </div>
          <div className="img_container">
            <img src={my_img} alt="" />
          </div>
        </div>
        <div className="tech_stack">
          <p>
            Tech Stack <span>|</span>
            <hr />
          </p>
          <div className="tech_icons">
            <div className="img1">
              <img src={html} alt="" />
              <img src={css} alt="" />
            </div>
            <div className="img1">
              <img src={js} alt="" />
              <img src={react} alt="" />
            </div>
            <div className="img1">
              <img src={tailwind} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
