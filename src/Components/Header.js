import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Lawrence Thomas</span>
          <span className="heading-primary--sub">Web Developer | New York</span>
        </h1>

        <a href="mailto:lawrencegthomas@gmail.com">
          <button className="btn">Contact Me</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
