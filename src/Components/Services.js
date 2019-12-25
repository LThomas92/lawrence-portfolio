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
      <h2 className="service-header">Services</h2>
      <hr className="small-line" />
      <div className="grid-services">
        <div className="service-card">
          <FontAwesomeIcon className="svc-icons" icon={faDesktop} size="2x" />
          <h2 className="service-card__title">Web Development</h2>
          <p>
            Are you looking for a modern website layout that is also responsive
            as well? Or even a promotional HTML email? Using industry best
            practices. Look no further!
          </p>
        </div>
        <div className="service-card">
          <FontAwesomeIcon
            className="svc-icons"
            icon={faPaintBrush}
            size="2x"
          />
          <h2 className="service-card__title">Logo Design</h2>
          <p>
            Do you need a simple, clean yet also modern looking logo for your
            business or brand? I would be happy to create that for you.
          </p>
        </div>
        <div className="service-card">
          <FontAwesomeIcon className="svc-icons" icon={faPenNib} size="2x" />
          <h2 className="service-card__title">Digital Cartoon Creation</h2>
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
