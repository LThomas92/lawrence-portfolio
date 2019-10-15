import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  document.title = "Lawrence Thomas | Projects";
  return (
    <div className="project-container">
      <h2 className="project-header u-center-text">Web Development Projects</h2>
      <hr className="small-line" />
        <div className="row">
          <div className="columns">
            <div className="column-1">
              <img
                alt="Mind of A Millennial v1"
                className="photo"
                src={process.env.PUBLIC_URL + "img/MoM-1.jpg"}
              />
              <img
                alt="Mind of A Millennial v1"
                className="photo"
                src={process.env.PUBLIC_URL + "img/MoM-2.jpg"}
              />
            </div>
          </div>

          <div className="columns">
            <div className="project-text">
              <h2 className="project-text__heading">
                Mind of A Millennial 1.0
              </h2>
              <hr className="small-line small-line--black" />
              <p className="project-text__heading--2">
                Application Information:
              </p>
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
              <p className="u-center-text challenge-text" >
                One of the toughest things I had to deal with when building this
                project was the image upload from the client side to the
                back-end. The library cloudinary along with multer did make this
                a lot easier to complete. Another major challenge that I had
                when creating this application was the page pagination which
                took me along time to really understand that different methods
                that came along with sorting documents with mongoose on MongoDB.
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
                  src={process.env.PUBLIC_URL + "img/MoM-2_1.jpg"}
                />
                <img
                  alt="Mind of A Millennial 2.0"
                  className="photo"
                  src={process.env.PUBLIC_URL + "img/MoM-2.GIF"}
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
                  projects! I also faced a challenge in the "About Us" section
                  by implementing animations on the about me cards. Learning how
                  Redux works along with React was a big challenge for me
                  especially understanding why it is necessary for certain
                  applications. I had to wrap my head around what the reducers
                  and actions were doing together. The last major challenge was
                  deploying the application to Heroku which was a process since
                  it was the first time I have ever deployed a React App with a
                  Node backend.
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
                  <img
                    alt="Youtube Clone"
                    className="photo"
                    src={process.env.PUBLIC_URL + "img/yt-1.png"}
                  />
                  <img
                    alt="Youtube Clone"
                    className="photo"
                    src={process.env.PUBLIC_URL + "img/yt-2.gif"}
                  />
                </div>
              </div>

              <div className="columns">
                <div className="project-text">
                  <h2 className="project-text__heading">Youtube Clone</h2>
                  <hr className="small-line small-line--black" />
                  <p className="project-text__heading--2">
                    Application Information:
                  </p>
                  <ul>
                    <li>Built with React + Youtube API</li>
                    <li>Semantic UI for Styling</li>
                    <li>Axios to fetch data from Youtube API</li>
                  </ul>
                  <h4 className="u-center-text challenge-header">
                    Challenges faced with this project
                  </h4>
                  <p className="u-center-text challenge-text">
                    This was the first time that I ever used the Youtube API
                    from Google. Along with the Axios library I was able to
                    connect to the Youtube API to pull the videos from youtube
                    and implement them in my own application. I also had a hard
                    time with understanding how to implement the search bar
                    functionality which is pretty much a "form" element. I also
                    learned about how props work in React as well.
                  </p>
                  <div className="project-btn-box">
                    <a
                      target="_blank"
                      href="https://youtubeclonev1.netlify.com/"
                      className="btn project-btn medium-margin"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://github.com/LThomas92/youtube-clone"
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
          
          <div className="row">
          <div className="columns">
            <div className="column-1">
              <img
                alt="Dream Home"
                className="photo"
                src={process.env.PUBLIC_URL + "img/dream-home-1.png"}
              />
              <img
                alt="Dream Home"
                className="photo"
                src={process.env.PUBLIC_URL + "img/dream-home-2.GIF"}
              />
            </div>
          </div>

          <div className="columns">
            <div className="project-text">
              <h2 className="project-text__heading">
                Dream Home
              </h2>
              <hr className="small-line small-line--black" />
              <p className="project-text__heading--2">
                Application Information:
              </p>
              <ul>
                <li>Built with React</li>
                <li>SASS for Styling + Responsive</li>
                <li>Includes Search Barfunctionality</li>
                <li>Authentication System using Google OAuth</li>
                <li>CSS Grid and Flexbox</li>
              </ul>
              <h4 className="u-center-text challenge-header">
                Challenges faced with this project
              </h4>
              <p className="u-center-text challenge-text" >
                One of the toughest things I had to deal with when building this
                project was the setting up the Google 0Auth Authenticaiton using only the react local state.
                I have previously done this using React along with Redux which I felt was easier and more straightforward.
                Keep tracking of the user's sign in and sign out status was difficult to understand even after reading
                the Google 0Auth documentation over and over. I also learned about the "gapi" window that comes along with google and how powerful it is
                once you learn how to use it. Another major challenge I had was implementing the search bar functionality since I had to make use of a few javascript methods such
                as "filter" and indexOf to make sure that the input search term from the user matches the json data to display the correct home.  
              </p>
              <div className="project-btn-box">
                <a
                  target="_blank"
                  href="https://dream-home.netlify.com/"
                  className="btn project-btn medium-margin"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/LThomas92/Dream-Home"
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

            <div className="row">
              <div className="columns">
                <div className="column-1">
                  <img
                    alt="iStream"
                    className="photo"
                    src={process.env.PUBLIC_URL + "img/iStream-1.png"}
                  />
                  <img
                    alt="iStream"
                    className="photo"
                    src={process.env.PUBLIC_URL + "img/iStream-2.GIF"}
                  />
                </div>
              </div>

              <div className="columns">
                <div className="project-text">
                  <h2 className="project-text__heading">iStream</h2>
                  <hr className="small-line small-line--black" />
                  <p className="project-text__heading--2">
                    Application Information:
                  </p>
                  <ul>
                    <li>Built with React, JSON server API, RTMP Server</li>
                    <li>Semantic UI for Styling</li>
                    <li>Node Media Server to set up OBS streaming software</li>
                    <li>Google OAuth for Authentication</li>
                    <li>Redux for state management</li>
                  </ul>
                  <h4 className="u-center-text challenge-header">
                    Challenges faced with this project
                  </h4>
                  <p className="u-center-text challenge-text">
                    I believe that the most challenging part of this application
                    was getting the Google OAuth Authentication to work. It
                    involved connecting the Google API to my application then
                    also having to learn about the window scope which contained
                    the properties needed for the Google OAuth. Also, having to
                    keep track of the state of the login status in Redux as
                    well. Redux Dev Tools helped alot for testing this side of
                    the application. Another challenging task was using Redux
                    Form which was a library I always heard about but, did not
                    really understand how to use, but I see why it is so widely
                    used.
                  </p>
                  <div className="project-btn-box">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://github.com/LThomas92/iStream"
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
