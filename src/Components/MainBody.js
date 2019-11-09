import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faNode,
  faReact,
  faJsSquare
} from "@fortawesome/free-brands-svg-icons";

const MainBody = () => {
  return (
    <div className="mainbody-container">
      <div className="mainbody-text-container">
        <div className="row">
          <div className="columns">
            <h3 className="mainbody-text-header">Who Am I?</h3>

            <p>
              I am a 26 Year Old passionate web developer based out of New York.
              I have been coding since 2017. I love to build websites big or
              small. I am committed to providing the best service to fufill your
              website and creative needs.
            </p>
            <Link to="/about">
              <button className="btn btn--inverse">Read More</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="icon-box-list">
          <h3 className="mainbody-text--header">Technologies That I Use</h3>
          <ul className="icon-list">
            <li>
              <FontAwesomeIcon icon={faHtml5} size="2x" />
            </li>
            <li>
              <FontAwesomeIcon icon={faCss3} size="2x" />
            </li>
            <li>
              <FontAwesomeIcon icon={faReact} size="2x" />
            </li>
            <li>
              <FontAwesomeIcon icon={faJsSquare} size="2x" />
            </li>
            <li>
              <FontAwesomeIcon icon={faNode} size="2x" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
