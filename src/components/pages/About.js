import React from "react";
import profilePic from "../../images/profile2.jpg";
import github from "../../images/github-mark.png";
import linkedin from "../../images/linkedin.png";
import { Container } from "react-bootstrap";
import Particle from "./Particle";

import "../../styles/About.css";
export default function About() {
  return (
    <div>
      {/* <Container> */}
      <main>

        <section class="row" id="about-me">
          <div class="details" id="about-me-details">
            <img id="profilePic" src={profilePic} alt="me at the beach" />
            <p class="about-body">
              {" "}
              My name is Risvi Ulang Tareq, and I am a 23 year old{" "}
              <span style={{ fontWeight: "bold" }}>
                Fullstack Web Developer{" "}
              </span>
              located in San Diego. I graduated with a B.A. in{" "}
              <em>Environmental Science and Policy</em> from the{" "}
              <em> University of California, Irvine in 2021 </em>. After
              graduating, I completed a{" "}
              <em>Full Stack Web Development certificate program</em> at the
              University of California, San Diego on March 2023.
              <p></p>I am currently working as an intern for the non-profit
              organization, Clear Blue Sea as their web developer.
              <p></p> My hobbies include music production, jazz piano and
              content creation. I like to code, because the process of web
              development mirrors the creative process of music production.
            </p>
          </div>
          <div class="tech-stack">

          </div>
        </section>
        {/* <footer>
            <a class="gitLink" href="https://github.com/ivsir">
              <img class="logo" alt="github-logo" id="githubLogo" src={github} />
            </a>
            <a
              class="gitLink"
              href="https://www.linkedin.com/in/risvi-tareq-1546621ab/"
            >
              <img class="logo" alt = "linkedin logo" id="linkedinLogo" src={linkedin} />
            </a>
          </footer> */}
      </main>
      {/* </Container> */}
    </div>
  );
}
