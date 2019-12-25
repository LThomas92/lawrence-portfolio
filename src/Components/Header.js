import React from "react";
import email from "../img/email.svg";
import github from "../img/github.svg";

const Header = () => {
  return (
    <React.Fragment>
      <div className="header-container">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Lawrence Thomas</span>
          <span className="heading-primary--sub">
            Web Developer | New York
          </span>{" "}
          <div className="heading-iconbox">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:lawrencegthomas@gmail.com"
            >
              <img className="header-icons" src={email} alt="email icon" />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.github.com/LThomas92"
            >
              <img className="header-icons" src={github} alt="github icon" />
            </a>
          </div>
        </h1>
      </div>
    </React.Fragment>
  );
};

export default Header;
