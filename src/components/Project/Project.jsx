import React, { useRef } from "react";
// import img1 from "../assets/P_1_img_1.png";
import video from "../assets/Main_video.mp4";
import video2 from "../assets/main_video2.mp4";
import "./Project.css";

const Project = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const handleMouseEnter1 = () => {
    if (videoRef1.current) {
      videoRef1.current.play();
    }
    if (videoRef2.current) {
      videoRef2.current.pause();
    }
  };

  const handleMouseEnter2 = () => {
    if (videoRef2.current) {
      videoRef2.current.play();
    }
    if (videoRef1.current) {
      videoRef1.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef1.current) {
      videoRef1.current.pause();
    }
    if (videoRef2.current) {
      videoRef2.current.pause();
    }
  };
  // const technologies = ["React", "JavaScript", "HTML", "CSS"];

  return (
    <div className="workingarea" id="project">
      <div className="project">
        <h1 className="title">PROJECTS.</h1>

        <div className="project-1">
          <div className="discription">
            <h3>Flavour Fusion </h3>
            <p>
              FlavorFusion is an online platform for restaurants, allowing users
              to order food and reserve tables conveniently from home. It
              ensures a seamless experience for both customers and staff,
              facilitating efficient food delivery and table management.
            </p>
            <div className="btns">
              <a
                href="https://github.com/Shashank6307/FlavourFusion-restraunt-website-"
                target="blank"
              >
                <button>Github</button>
              </a>
              <a href="https://myflavourfusion.netlify.app/" target="blank">
                <button>Live Demo</button>
              </a>
            </div>
          </div>
          <a href="https://myflavourfusion.netlify.app/" target="blank">
            <div
              className="video-container active"
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave}
            >
              <video
                ref={videoRef1}
                src={video}
                className="video"
                autoPlay
                muted
                loop
              />
            </div>
          </a>
        </div>
        <hr />

        <div className="project-1">
          <div
            className="video-container active"
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave}
          >
            <a href="https://trendifyecommerce24.netlify.app" target="blank">
              {" "}
              <video
                ref={videoRef2}
                src={video2}
                className="video"
                autoPlay
                muted
                loop
              />
            </a>
          </div>
          <div className="discription">
            <h3>Ecommerce</h3>
            <p>
              "Trendify: My ecommerce project featuring fashion products.
              Developed using React.js, JavaScript, HTML, CSS.This Offers a
              seamless shopping experience .This ecommerce platform allows users
              to browse, buy, and order a wide range products.
            </p>
            <div className="btns">
              <a
                href="https://github.com/Shashank6307/Ecommerce-Trendify"
                target="blank"
              >
                <button>Github</button>
              </a>
              <a href="https://trendifyecommerce24.netlify.app" target="blank">
                <button>Live Demo</button>
              </a>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <h1>New Projects Coming Soon!!🤠</h1>
    </div>
  );
};

export default Project;
