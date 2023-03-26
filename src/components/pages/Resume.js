import React from "react";
import resume from "../../images/Risvi Resume.pdf";
import resumeImage from "../../images/Risvi's Resume.png";
import "../../styles/Resume.css";


export default function Resume() {
  return (
    <div>
      <main>
        <div id="resume">
  <img src={resumeImage}/>
          
        </div>
      </main>
      <footer>
        <h3>
          Download Full{" "}
          <a id="resume-link" href={resume}>
            Resume
          </a>{" "}
          !!
        </h3>
      </footer>
    </div>
  );
}
