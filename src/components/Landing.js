import React from "react";
import "../styles/Landing.scss";

import {
  FaFacebookF,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaStackOverflow,
  FaLinkedinIn,
  FaCodepen,
} from "react-icons/fa";

const Landing = () => {
  return (
    <header id="home" className="landing">
      <div className="landing__body">
        <div className="landing__left">
          <div className="landing__logo">
            <img src="/images/MyLogo.svg" alt="Logo" />
          </div>
          <div className="landing__info">
            <h1>I'm Nilesh Samota.</h1>
            <p>
              Mumbai based <span>Self Taught Full-Stack Web Developer</span>.
            </p>
          </div>
        </div>

        <div className="landing__right">
          <div className="landing__links">
            <span></span>
            <span></span>
            <ul>
              <a href="https://www.facebook.com/profile.php?id=100018241488506">
                <li>
                  <FaFacebookF />
                </li>
              </a>
              <a href="https://github.com/NileshS236">
                <li>
                  <FaGithub />
                </li>
              </a>
              <a href="https://twitter.com/Nilesh15830364">
                <li>
                  <FaTwitter />
                </li>
              </a>
              <a href="https://www.instagram.com/nileshsamota/">
                <li>
                  <FaInstagram />
                </li>
              </a>
              <a href="https://stackoverflow.com/users/14390486/nilesh-samota">
                <li>
                  <FaStackOverflow />
                </li>
              </a>
              <a href="https://www.linkedin.com/in/nilesh-samota-98111a1b6/">
                <li>
                  <FaLinkedinIn />
                </li>
              </a>
              <a href="https://codepen.io/nileshs236">
                <li>
                  <FaCodepen />
                </li>
              </a>
            </ul>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Landing;
