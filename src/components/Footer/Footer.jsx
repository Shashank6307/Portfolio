import React from "react";
import git from "../assets/logo.png";

import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_content">
        <p>Copyright © 2024. All rights are reserved</p>
        <div className="icon">
          <a href="https://github.com/Shashank6307" target="blank">
            <img src={git} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
