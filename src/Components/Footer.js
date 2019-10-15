import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-icons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.github.com/LThomas92"
        >
          <li>
            <FontAwesomeIcon
              className="footer-sm-icons"
              icon={faGithub}
              size="3x"
            />
          </li>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/_law92"
        >
          <li>
            <FontAwesomeIcon
              className="footer-sm-icons"
              icon={faTwitter}
              size="3x"
            />
          </li>
        </a>
      </ul>
    </footer>
  );
};

export default Footer;
