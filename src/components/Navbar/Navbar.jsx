import React, { useRef } from "react";
import "./Navbar.css";
import ham_icon from "../assets/hamburger.png";

const Navbar = () => {
  const menuRef = useRef();
  const hamburger_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div id="navbar">
      <div className="left">
        <h3>Shashank.</h3>
      </div>
      <img
        className="nav-hamburger"
        onClick={hamburger_toggle}
        src={ham_icon}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      {/* <div className="right">
       
        </div> */}
    </div>
  );
};

export default Navbar;
