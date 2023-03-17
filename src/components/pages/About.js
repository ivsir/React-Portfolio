import React from "react";
import profilePic from "../../images/profile2.jpg";
import github from "../../images/github-mark.png";
import linkedin from "../../images/linkedin.png";
import { Container } from "react-bootstrap";

import "../../styles/About.css";
export default function About() {
  return (
    <div>
      <Container>
        <main>
          <section class="row" id="about-me">
            <div class="details" id="about-me-details">
                <img
                  id="profilePic"
                  src={profilePic}
                  alt="picture of me at the beach"
                />
              <p class="about-body">
                {" "}
                My name is Risvi Ulang Tareq, and I am a Fullstack Web Developer
                located in Southern California. I graduated with a B.A. in{" "}
                <em>Environmental Science and Policy</em> from the{" "}
                <em> University of California, Irvine in 2021 </em>. I am
                currently attending a 6 month{" "}
                <em>Full Stack Web Development program</em> at the University of
                California, San Diego. My completion date for the program is
                March 2023.
                <p></p>I am currently working as an intern for the non-profit organization, Clear Blue Sea as one of their primary webpage builders.
                <p></p>I am also a part time music producer and YouTuber. You
                can see my latest tutorial below!
              <div className="ratio ratio-16x9">
                <iframe
                  id="video"
                  src="https://www.youtube.com/embed/CuqLyqc-7kA"
                  title="YouTube video player"
                  allowFullScreen
                ></iframe>
              </div>
              </p>

            </div>
          </section>
          <footer>
            <a class="gitLink" href="https://github.com/ivsir">
              <img class="logo" id="githubLogo" src={github} />
            </a>
            <a
              class="gitLink"
              href="https://www.linkedin.com/in/risvi-tareq-1546621ab/"
            >
              <img class="logo" id="linkedinLogo" src={linkedin} />
            </a>
          </footer>
        </main>
      </Container>
    </div>
  );
}
