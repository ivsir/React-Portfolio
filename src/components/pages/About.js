import React from "react";
import profilePic from "../../images/profile2.jpg";
import github from "../../images/github-mark.png";
import linkedin from "../../images/linkedin.png";

import "../../styles/About.css";
export default function About() {
  return (
    <div>
      <main>
        <section class="row" id="about-me">
          <div class="details" id="about-me-details">
            <p class="about-body">
              {" "}
              My name is Risvi Tareq, and I am a Fullstack Web Developer located
              in Southern California. I have a background in music-production. I
              graduated with a B.A. in <em>
                Environmental Science and Policy
              </em>{" "}
              from the <em> University of California, Irvine in 2021 </em>. I am
              currently attending a 6 month{" "}
              <em>Full Stack Web Development program</em> at the University of
              California, San Diego. My completion date for the program is March
              2023.
            </p>
            <div className="blog"></div>
            <img
              id="profilePic"
              src={profilePic}
              alt="picture of me at the beach"
            />
          </div>
        </section>
        <footer>
          <a class="gitLink" href="https://github.com/ivsir">
            <img class="logo" id="githubLogo" src={github} />
          </a>
          <a class="gitLink" href="https://www.linkedin.com/in/risvi-tareq-1546621ab/">
            <img class="logo" id="linkedinLogo" src={linkedin} />
          </a>
        </footer>
      </main>
    </div>
  );
}
