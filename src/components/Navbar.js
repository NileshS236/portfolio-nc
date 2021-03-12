import { Button } from "@material-ui/core";
import React from "react";
import "../styles/Navbar.scss";

import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
  const showMenu = () => {
    document.querySelector(".navbar__links").classList.toggle("open");
  };

  return (
    <div className="navbar">
      <Button onClick={showMenu} className="navbar__menu">
        <HiOutlineMenuAlt4 />
      </Button>
      <div className="navbar__links">
        <ul>
          <li className="link">
            <a href="#home">Home</a>
          </li>
          <li className="link">
            <a href="#about">About</a>
          </li>
          <li className="link">
            <a href="#resume">Resume</a>
          </li>
          <li className="link">
            <a href="#work">Work</a>
          </li>
          <li className="link">
            <a href="#testimonials">Testimonials</a>
          </li>
          <li className="link">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
