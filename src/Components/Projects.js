import React from "react";
import MoM1 from "../img/MoM-1.jpg";
import MoM2 from "../img/MoM-2.jpg";
import MoM2_1 from "../img/MoM-2_1.jpg";
import MoM2_2 from "../img/MoM-2.GIF";

import Veganease_1 from "../img/veganease-1.png";
import Veganease_2 from "../img/veganease-2.gif";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  document.title = "Web Projects | Lawrence Thomas";
  return (
    <div className="project-container">
      <h2 className="project-header u-center-text">Web Development Projects</h2>
      <hr className="small-line" />
      <div className="row">
        <div className="columns">
          <div className="column-1">
            <img alt="Mind of A Millennial v1" className="photo" src={MoM1} />
            <img alt="Mind of A Millennial v1" className="photo" src={MoM2} />
          </div>
        </div>

        <div className="columns">
          <div className="project-text">
            <h2 className="project-text__heading">Mind of A Millennial 1.0</h2>
            <hr className="small-line small-line--black" />
            <p className="project-text__heading--2">Application Information:</p>
            <ul>
              <li>Built with Express, MongoDB and NodeJS </li>
              <li>Bootstrap for Styling + Responsive</li>
              <li>Includes CRUD functionality</li>
              <li>Authentication System using PassportJS</li>
              <li>Comment Section as well</li>
            </ul>
            <h4 className="u-center-text challenge-header">
              Challenges faced with this project
            </h4>
            <p className="u-center-text challenge-text">
              One of the toughest things I had to deal with when building this
              project was the image upload from the client side to the back-end.
              The library cloudinary along with multer did make this a lot
              easier to complete. Another major challenge that I had when
              creating this application was the page pagination which took me
              along time to really understand that different methods that came
              along with sorting documents with mongoose on MongoDB.
            </p>
            <div className="project-btn-box">
              <a
                target="_blank"
                href="https://agile-lowlands-23740.herokuapp.com"
                className="btn project-btn medium-margin"
                rel="noopener noreferrer"
              >
                View Project
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/LThomas92/Mind-of-A-Millennial-1.0"
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

        <div className="row">
          <div className="columns">
            <div className="column-1">
              <img
                alt="Mind of A Millennial 2.0"
                className="photo"
                src={MoM2_1}
              />
              <img
                alt="Mind of A Millennial 2.0"
                className="photo"
                src={MoM2_2}
              />
            </div>
          </div>

          <div className="columns">
            <div className="project-text">
              <h2 className="project-text__heading">
                Mind of A Millennial 2.0
              </h2>
              <hr className="small-line small-line--black" />
              <p className="project-text__heading--2">
                Application Information:
              </p>
              <ul>
                <li>Built with React, Express, MongoDB and NodeJS </li>
                <li>SASS for Styling + Responsive</li>
                <li>Authentication System using PassportJS</li>
                <li>Redux for State Management</li>
              </ul>
              <h4 className="u-center-text challenge-header">
                Challenges faced with this project
              </h4>
              <p className="u-center-text challenge-text">
                This was the first project that I've used SASS for styling so
                learning the mixins and the BEM notation was a challenge but,
                was not too hard to overcome. Now I always use SASS in my
                projects! I also faced a challenge in the "About Us" section by
                implementing animations on the about me cards. Learning how
                Redux works along with React was a big challenge for me
                especially understanding why it is necessary for certain
                applications. I had to wrap my head around what the reducers and
                actions were doing together. The last major challenge was
                deploying the application to Heroku which was a process since it
                was the first time I have ever deployed a React App with a Node
                backend.
              </p>
              <div className="project-btn-box">
                <a
                  target="_blank"
                  href="https://www.mindofmillennial.com/"
                  className="btn project-btn medium-margin"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/LThomas92/mind-of-a-millennial-2.0"
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

          <div className="row">
            <div className="columns">
              <div className="column-1">
                <img alt="iStream" className="photo" src={Veganease_1} />
                <img alt="iStream" className="photo" src={Veganease_2} />
              </div>
            </div>

            <div className="columns">
              <div className="project-text">
                <h2 className="project-text__heading">Veganease</h2>
                <hr className="small-line small-line--black" />
                <p className="project-text__heading--2">
                  Application Information:
                </p>
                <ul>
                  <li>Built with React</li>
                  <li>SASS for Styling + Responsive</li>
                  <li>StripeAPI for Payments</li>
                  <li>Redux for state management</li>
                </ul>
                <h4 className="u-center-text challenge-header">
                  Challenges faced with this project
                </h4>
                <p className="u-center-text challenge-text">
                  The biggest challenges that I faced when creating Veganease
                  was implementing the shopping cart feature of the website.
                  Especially using Redux it forced me to learn new methods in
                  Javascript that I was previously unfamiliar with. Javascript
                  methods such as .reduce which was new to me and learning how
                  to dynamically calculate the total price and quantity of an
                  item. Also, designing the architecture of the website in such
                  a way where the components were kept small so that I could
                  reuse them. Another major challenge was implementing the
                  StripeAPI for payments to the website which wasn't as hard as
                  I thought it would be since the documentation is easy to
                  following along to since most of the features are just props.
                </p>
                <div className="project-btn-box">
                  <a
                    target="_blank"
                    href="https://veganease-llc.herokuapp.com/"
                    className="btn project-btn medium-margin"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/LThomas92/veganeasellc-full"
                  >
                    <FontAwesomeIcon
                      className="project-btn-box__icon gh-icon"
                      icon={faGithub}
                      size="3x"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="project-line" />
    </div>
  );
};

export default Projects;
