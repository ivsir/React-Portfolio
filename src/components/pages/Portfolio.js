import React from "react";
import libraryImage from "../../images/cybe.jpeg";
import cyberbar from "../../images/cyberbar.jpeg";
import socialmedia from "../../images/socialmedia.jpeg";
import editor from "../../images/texteditor.jpeg";
import tech from "../../images/tech.jpeg";
import cyberpunk from "../../images/cyberpunk.jpeg";
import github from "../../images/githublogo.png";
import linkedin from "../../images/linkedin.png";

export default function Portfolio() {
  return (
    <main>
      <section class="row justify-center">
        <div class="card-column">
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
        <div class="card-column">
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

        <div class="card-column">
          <img src={socialmedia} class="portfolio-image" alt="tokyo" />
          <div>
            <h2 class="card-title">
              <a
                class="gitLink"
                href="https://github.com/ivsir/Social-Network-API"
              >
                Social Media API{" "}
              </a>
              <a href="https://github.com/ivsir/Social-Network-API">
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
        <div class="card-column">
          <img
            src={editor}
            class="portfolio-image"
            alt="Old Book called the scribe"
          />
          <div>
            <h2 class="card-title">
              <a class="gitLink" href="https://still-meadow-30378.herokuapp.com/">
                Text Editor{" "}
              </a>
              <a href="https://github.com/ivsir/Text-Editor">
                {" "}
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
        <div class="card-column">
          <img src={tech} class="portfolio-image" alt="Company Meeting" />
          <div>
            <h2 class="card-title">
              <a class="gitLink" href="https://github.com/ivsir/Tech-Blog">
                Tech Blog
              </a>{" "}
              <img
                class="card-logo"
                id="github"
                src={github}
                alt="github logo"
              />
            </h2>
          </div>
        </div>

        <div class="card-column">
          <img src={cyberpunk} class="portfolio-image" alt="Cyberpunk" />
          <div>
            <h2 class="card-title">
              <a class="gitLink" href="https://damp-island-88547.herokuapp.com/">
                React Portfolio{" "}
              </a>
              <a href="https://github.com/ivsir/React-Portfolio">
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
      </section>
    </main>
  );
}
