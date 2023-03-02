import React from "react";
import libraryImage from "../../images/Stift-Admont-Austria.jpeg"
import wineImage from "../../images/wine.jpeg"

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
                <img
                  src= {libraryImage}
                  alt="Bibliomania App"
                />
                <figcaption>Bibliomania</figcaption>
              </figure>
            </a>
          </div>
          <div class="card-column">
            <a href="https://agarfar.github.io/a-night-in/">
              <figure class="card code-card">
                <img
                  src={wineImage}
                  alt="A Night In App"
                />
                <figcaption>A Night In</figcaption>
              </figure>
            </a>
          </div>

          <div class="card-column">
            <figure class="card code-card">
            <img
                  src={wineImage}
                  alt="A Night In App"
                />
                <figcaption>A Night In</figcaption>
            </figure>
          </div>
          <div class="card-column">
            <figure class="card code-card">
            <img
                  src={wineImage}
                  alt="A Night In App"
                />
                <figcaption>A Night In</figcaption>
            </figure>
          </div>
          <div class="card-column">
            <figure class="card code-card">
            <img
                  src={wineImage}
                  alt="A Night In App"
                />
                <figcaption>A Night In</figcaption>
            </figure>
          </div>

          <div class="card-column">
            <figure class="card code-card">
            <img
                  src={wineImage}
                  alt="A Night In App"
                />
                <figcaption>A Night In</figcaption>
            </figure>
          </div>
        </section>
      </main>


    </div>
  );
}
