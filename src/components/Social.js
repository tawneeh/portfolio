import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


export default function SocialFollow() {
  return (
    <div className="social-container">
      <a href="https://www.linkedin.com/in/tawneeh/"
        className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/tawneeh/"
        className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.epicodus.com/"
        className="epicodus social">
        <FontAwesomeIcon icon={faCoffee} size="2x" />
      </a>
    </div>
  );
}