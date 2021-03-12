import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import "../styles/About.scss";

import { FaFileDownload } from "react-icons/fa";
import { BsCaretRight } from "react-icons/bs";

const About = () => {
  const addAnimations = () => {
    const aboutSection = document.querySelector(".about");
    const decorations = document.querySelectorAll(".about__decoration");
    const aboutTitle = document.querySelector(".about__title");
    const aboutRight = document.querySelector(".about__right");

    window.addEventListener("scroll", () => {
      const position = aboutSection.getBoundingClientRect();

      if (position.top < window.innerHeight && position.bottom >= 0) {
        for (let decoration of decorations) decoration.classList.add("animate");
        aboutTitle.classList.add("animate");
        aboutRight.classList.add("animate");
      } else {
        for (let decoration of decorations)
          decoration.classList.remove("animate");
        aboutTitle.classList.remove("animate");
        aboutRight.classList.remove("animate");
      }
    });
  };

  const downloadResume = () => {
    console.log("Download Resume");
  };

  useEffect(() => {
    addAnimations();
  }, []);

  return (
    <section className="about" id="about">
      <span className="about__decoration"></span>
      <span className="about__decoration"></span>
      <span className="about__decoration"></span>
      <div className="about__title">
        <h1>About Me</h1>
        <span></span>
      </div>
      <div className="about__body">
        <div className="about__left">
          <div className="about__leftBody">
            <div className="about__leftBody__details">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
                non incidunt minus aliquid reprehenderit ea iure veniam odit
                dicta expedita.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
                non incidunt minus aliquid reprehenderit ea iure veniam odit
                dicta expedita.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
                non incidunt minus aliquid reprehenderit ea iure veniam odit
                dicta expedita.
              </p>
            </div>
            <hr />
            <div className="about__left__techTitle">
              <p className="title">
                Here are a few technologies I've been working with recently:
              </p>
            </div>
            <div className="about__leftBody__techs">
              <span className="tech">
                <BsCaretRight className="pointer" /> HTML & (S)CSS
              </span>
              <span className="tech">
                <BsCaretRight className="pointer" /> JavaScript
              </span>
              <span className="tech">
                <BsCaretRight className="pointer" /> React & Redux
              </span>
              <span className="tech">
                <BsCaretRight className="pointer" /> Node & Express
              </span>
              <span className="tech">
                <BsCaretRight className="pointer" /> MongoDb
              </span>
              <span className="tech">
                <BsCaretRight className="pointer" /> Django
              </span>
            </div>
          </div>
        </div>
        <div className="about__right">
          <div className="about__image">
            <span className="rectangle"></span>
            <img src="/images/Nilesh.png" alt="Nilesh" />
            <span className="rectangle"></span>
          </div>
          <div className="about__resume">
            <Button onClick={downloadResume}>
              <span className="design">
                <FaFileDownload fontSize="large" /> Download Resume
              </span>
              <span className="design">
                <FaFileDownload fontSize="large" /> Download Resume
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
