import React from "react";
import libraryImage from "../../images/cybe.jpeg";
import cyberbar from "../../images/cyberbar.jpeg";
import socialmedia from "../../images/socialmedia.jpeg";
import editor from "../../images/texteditor.jpeg";
import tech from "../../images/tech.jpeg";
import cyberpunk from "../../images/cyberpunk.jpeg";
import github from "../../images/githublogo.png";
// import Particle from './Particle';

export default function Portfolio() {
  return (
    <main>
      <section id ="portfolio" class="row justify-center">
        <div class="card-column">
          <div class="wrapper">
            <img src={cyberpunk} class="portfolio-image" alt="Cyberpunk" />
            <div>
              <h2 class="card-title">
                <a
                  class="gitLink"
                  href="https://github.com/DallasSybrowsky/CodeCollab"
                >
                  CodeCollab{" "}
                </a>
                <a href="https://code-collab-dallas.herokuapp.com/">
                  <img
                    class="card-logo"
                    id="github"
                    src={github}
                    alt="github logo"
                  />
                </a>
              </h2>
            </div>
          </div>
        </div>
        <div class="card-column">
          <div class="wrapper">
            <img src={libraryImage} class="portfolio-image" alt="library" />{" "}
            <div>
              <h2 class="card-title">
                <a class="gitLink" href="https://bibliomania.herokuapp.com/">
                  Bibliomania
                </a>
                <a href="https://github.com/DallasSybrowsky/Bibliomania">
                  {" "}
                  <img
                    class="card-logo"
                    id="github"
                    src={github}
                    alt="github logo"
                  />{" "}
                </a>
              </h2>
            </div>
          </div>
        </div>
        <div class="card-column">
          <div class="wrapper">
            <img src={cyberbar} class="portfolio-image" alt="wine" />

            <div>
              <h2 class="card-title">
                <a class="gitLink" href="https://agarfar.github.io/a-night-in/">
                  {" "}
                  A Night In
                </a>
                <a href="https://github.com/agarfar/a-night-in">
                  {" "}
                  <img
                    class="card-logo"
                    id="github"
                    src={github}
                    alt="github logo"
                  />{" "}
                </a>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
