import React from "react";
import github from "../../images/github-mark.png";
import linkedin from "../../images/linkedin.png";
import { Container } from "react-bootstrap";

import "../../styles/About.css";
export default function Footer() {
  return (
    <div id="footer">
      <footer>
        <a class="gitLink" href="https://github.com/ivsir">
          <img class="logo" alt="github-logo" id="githubLogo" src={github} />
        </a>
        <a
          class="gitLink"
          href="https://www.linkedin.com/in/risvi-tareq-1546621ab/"
        >
          <img
            class="logo"
            alt="linkedin logo"
            id="linkedinLogo"
            src={linkedin}
          />
        </a>
      </footer>
    </div>
  );
}
