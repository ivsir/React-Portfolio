import React from "react";
import libraryImage from "../../images/cybe.jpeg";
import cyberbar from "../../images/cyberbar.jpeg";
import socialmedia from "../../images/socialmedia.jpeg";
import editor from "../../images/texteditor.jpeg";
import tech from "../../images/tech.jpeg";
import cyberpunk from "../../images/cyberpunk.jpeg";

export default function Portfolio() {
  return (
    <div>
      <main>
        <header>
          <h1 class="page-title">Portfolio Page</h1>
        </header>

        <section class="row justify-center">
          <div class="card-column">
            <a href="https://bibliomania.herokuapp.com/">
              <figure class="card code-card">
                <img src={libraryImage} alt="library" />
                <figcaption>Bibliomania</figcaption>
              </figure>
            </a>
          </div>
          <div class="card-column">
            <a href="https://agarfar.github.io/a-night-in/">
              <figure class="card code-card">
                <img src={cyberbar} alt="wine" />
                <figcaption>A Night In</figcaption>
              </figure>
            </a>
          </div>

          <div class="card-column">
            <a href="https://github.com/ivsir/Social-Network-API">
              <figure class="card code-card">
                <img src={socialmedia} alt="tokyo" />
                <figcaption>Social Media API</figcaption>
              </figure>
            </a>
          </div>
          <div class="card-column">
            <a href="https://github.com/ivsir/Text-Editor">
              <figure class="card code-card">
                <img src={editor} alt="Old Book called the scribe" />
                <figcaption>Text Editor</figcaption>
              </figure>
            </a>
          </div>
          <div class="card-column">
            <a href="https://github.com/ivsir/Tech-Blog">
              <figure class="card code-card">
                <img src={tech} alt="Company Meeting" />
                <figcaption>Tech Blog</figcaption>
              </figure>
            </a>
          </div>

          <div class="card-column">
            <a href="https://github.com/ivsir/React-Portfolio">
              <figure class="card code-card">
                <img src={cyberpunk} alt="Cyberpunk" />
                <figcaption>React Portfolio</figcaption>
              </figure>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
