import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-icons">
        <li>
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </li>
        <li>
          <FontAwesomeIcon icon={faTwitter} size="3x" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
