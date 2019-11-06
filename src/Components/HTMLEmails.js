import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const HTMLEmailsProjects = () => {
  document.title = "Lawrence Thomas | Projects";
  return (
    <div className="project-container">
      <h2 className="project-header u-center-text">
        HTML Email Development Projects
      </h2>
      <hr className="small-line" />
      <div className="row">
        <div className="columns">
          <div className="column-1">
            <img
              id="phone-img"
              alt="Gmail Preview"
              className="photo"
              src={process.env.PUBLIC_URL + "img/starbucks-html_1.png"}
            />
            <img
              alt="Responsive HTML Email Example"
              className="photo"
              src={process.env.PUBLIC_URL + "img/starbucks-html_2.GIF"}
            />
          </div>
        </div>

        <div className="columns">
          <div className="project-text">
            <h2 className="project-text__heading">
              Starbucks HTML Promotional Email
            </h2>
            <hr className="small-line small-line--black" />
            <p className="project-text__heading--2">Email Information:</p>
            <ul>
              <li>Built with HTML and Inline CSS styles </li>
              <li>Responsive</li>
              <li>Optimized and Hosted Images</li>
              <li>Gmail, Outlook and other email client support</li>
            </ul>
            <div className="project-btn-box">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/LThomas92/starbucks-promo-htmlemail"
              >
                <FontAwesomeIcon
                  className="project-btn-box__icon"
                  icon={faGithub}
                  size="3x"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column-1">
            <img
              id="phone-img"
              alt="Gmail Preview"
              className="photo"
              src={process.env.PUBLIC_URL + "img/udemy-html_1.png"}
            />
            <img
              alt="Responsive HTML Email Example"
              className="photo"
              src={process.env.PUBLIC_URL + "img/udemy-html_2.GIF"}
            />
          </div>
        </div>

        <div className="columns">
          <div className="project-text">
            <h2 className="project-text__heading">
              Udemy HTML Promotional Email
            </h2>
            <hr className="small-line small-line--black" />
            <p className="project-text__heading--2">Email Information:</p>
            <ul>
              <li>Built with HTML and Inline CSS styles </li>
              <li>Responsive</li>
              <li>CTA Button</li>
              <li>Optimized and Hosted Images</li>
              <li>Gmail, Outlook and other email client support</li>
            </ul>
            <div className="project-btn-box">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/LThomas92/Udemy-HTML-Email"
              >
                <FontAwesomeIcon
                  className="project-btn-box__icon"
                  icon={faGithub}
                  size="3x"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="project-line" />
    </div>
  );
};

export default HTMLEmailsProjects;