import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faPaintBrush,
  faPenNib
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="services-container">
      <h2>Services Include</h2>
      <hr className="small-line" />
      <div className="row">
        <div className="columns columns--svc">
          <h2>Web Development</h2>
          <FontAwesomeIcon className="svc-icons" icon={faDesktop} size="2x" />
          <p>
            Are you looking for a modern website layout that is also responsive
            as well? Or even a promotional HTML email? Using industry best
            practices. Look no further!
          </p>
        </div>

        <div className="columns columns--svc">
          <h2>Logo Design</h2>
          <FontAwesomeIcon
            className="svc-icons"
            icon={faPaintBrush}
            size="2x"
          />
          <p>
            Do you need a simple, clean yet also modern looking logo for your
            business or brand? I would be happy to create that for you.
          </p>
        </div>

        <div className="columns columns--svc">
          <h2>Digital Cartoon Creation</h2>
          <FontAwesomeIcon className="svc-icons" icon={faPenNib} size="2x" />
          <p>
            Have you ever seen those cool digital cartoons on Instagram and
            always wanted to get one? Well, I can create one for you so you can
            be the envy of all of your friends!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
