import React from "react";
import resume from "../../images/RisviTareq.pdf";
import resumeImage from "../../images/Risvi's Resume.png";
import "../../styles/Resume.css";

export default function Resume() {
  return (
    <div id="resumePage">
      <main>
        <div id="resume">    <a id="resume-link" href={resume}>
          <img src={resumeImage} />
          </a>
        </div>
      </main>
      <footer>
        {/* <h3 class="download">
          Download Full{" "}
          <a id="resume-link" href={resume}>
            Resume
          </a>{" "}
          !!
        </h3> */}
      </footer>
    </div>
  );
}
