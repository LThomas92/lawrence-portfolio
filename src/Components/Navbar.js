import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="navbar-header">
        <Link to="/">
          <img src={logo} alt="Lawrence Thomas Logo" className="logo" />
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
                <Link to="/blog" data-hover="Blog">
                  Blog
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
