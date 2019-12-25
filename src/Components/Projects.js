import React from "react";
import MoM1 from "../img/MoM-1.jpg";
import MoM2 from "../img/MoM-2_1.jpg";
import Veganease from "../img/veganease-1.png";
import github from "../img/github.svg";
import website from "../img/website.svg";

import LazyLoad from "react-lazyload";

const Projects = () => {
  return (
    <React.Fragment>
      <div className="portfolio-container">
        <h3 className="portfolio-heading">Portfolio</h3>
        <hr className="small-line" />
        <div className="grid-projects">
          <div className="portfolio-card">
            <div className="portfolio-card-overlay"></div>
            <LazyLoad height={"100%"}>
              <img
                className="portfolio-card-image"
                src={MoM1}
                alt="Mind of A Millennial v1"
              />
            </LazyLoad>
            <div className="portfolio-card-details fadeIn-bottom">
              <h3 className="portfolio-card-title">Mind of A Millennial v1</h3>
              <p className="portfolio-card-text">
                Application Features: Built with Express, MongoDB and NodeJS
                Bootstrap for Styling + Responsive Includes CRUD functionality,
                Authentication System using PassportJS, Comment Section as well
              </p>
              <div className="portfolio-btn-container">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://agile-lowlands-23740.herokuapp.com"
                >
                  <img
                    src={website}
                    alt="Website logo"
                    className="portfolio-icon"
                  />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/LThomas92/Mind-of-A-Millennial-1.0"
                >
                  <img
                    src={github}
                    alt="Github logo"
                    className="portfolio-icon"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio-card">
            <div className="portfolio-card-overlay"></div>
            <LazyLoad height={"100%"}>
              <img
                className="portfolio-card-image"
                src={MoM2}
                alt="Mind of A Millennial v2"
              />
            </LazyLoad>
            <div className="portfolio-card-details fadeIn-bottom">
              <h3 className="portfolio-card-title">Mind of A Millennial v2</h3>
              <p className="portfolio-card-text">
                Application Features: Built with React, Express, MongoDB and
                NodeJS SASS for Styling + Responsive Authentication System using
                PassportJS, Redux for State Management
              </p>
              <div className="portfolio-btn-container">
                <a
                  target="_blank"
                  href="https://www.mindofmillennial.com/"
                  rel="noopener noreferrer"
                >
                  <LazyLoad height={"100%"}>
                    <img
                      src={website}
                      alt="Website logo"
                      className="portfolio-icon"
                    />
                  </LazyLoad>
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/LThomas92/mind-of-a-millennial-2.0"
                >
                  <img
                    src={github}
                    alt="Github logo"
                    className="portfolio-icon"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio-card">
            <div className="portfolio-card-overlay"></div>
            <LazyLoad height={"100%"}>
              <img
                className="portfolio-card-image"
                src={Veganease}
                alt="Veganease Website"
              />
            </LazyLoad>
            <div className="portfolio-card-details fadeIn-bottom">
              <h3 className="portfolio-card-title">Veganease</h3>
              <p className="portfolio-card-text">
                Application Features: Built with React, SASS for Styling +
                Responsive, StripeAPI for Payments, Redux for state management,
                Nodemailer for Email Orders
              </p>
              <div className="portfolio-btn-container">
                <a
                  target="_blank"
                  href="https://veganease-llc.herokuapp.com/"
                  rel="noopener noreferrer"
                >
                  <img
                    src={website}
                    alt="Website logo"
                    className="portfolio-icon"
                  />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/LThomas92/veganeasellc-full"
                >
                  <img
                    src={github}
                    alt="Github logo"
                    className="portfolio-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
