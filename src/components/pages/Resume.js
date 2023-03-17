import React from "react";
import resume from "../../images/Risvi Resume.pdf";
import "../../styles/Resume.css";


export default function Resume() {
  return (
    <div>
      <main>
        <div id="resume">
          <h2>
            Junior Full Stack Web Developer/B.A. In Earth System Science and
            Policy
          </h2>
          <h3>Skills</h3>
          <ul>
            <li>Fullstack Web Development</li>
            <li>JavaScript Libraries</li>
            <li>Integration of Third-Party APIs</li>
            <li>MySQL</li>
            <li>NoSQL</li>
            <li>MERN (MongoDB, Express, React and Node.js)</li>
            <li>Creating RESTful APIs</li>{" "}
            <li>Incorporating service workers into web applications</li>{" "}
          </ul>
          <h3>Work Experience</h3>
          <div>
            <h4>Clear Blue Sea Volunteer</h4>
            <h5>FEBRUARY 2023 - PRESENT</h5>
            <p>
              Maintain and add features to the website using HTML and Wordpress
            </p>
          </div>
        </div>
      </main>
      <footer>
        <h3>Download Full Resume <a href={resume}>Here</a> !!</h3>
      </footer>
    </div>
  );
}
