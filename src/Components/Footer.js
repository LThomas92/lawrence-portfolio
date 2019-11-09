import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.github.com/LThomas92"
        >
          <FontAwesomeIcon
            className="footer-sm-icons"
            icon={faGithub}
            size="3x"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/_law92"
        >
          <FontAwesomeIcon
            className="footer-sm-icons"
            icon={faTwitter}
            size="3x"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
