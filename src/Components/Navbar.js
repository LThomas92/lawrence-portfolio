import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="header">
        <Link to="/">
          <img
            src={process.env.PUBLIC_URL + "img/LT-logo@2x.png"}
            alt="Lawrence Thomas Logo"
            className="logo"
          />
        </Link>
        <nav className="user-nav">
          <div className="user-nav__icon-box">
            <ul className="nav-items">
              <li>
                <Link to="/" data-hover="Home">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" data-hover="About">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" data-hover="Web Projects">
                  Web Projects
                </Link>
              </li>
              <li>
                <Link to="/email-projects" data-hover="Email Projects">
                  Email Projects
                </Link>
              </li>
              <li>
                <Link to="/gallery" data-hover="Gallery">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Navbar;
