import React from "react";

export default function Portfolio() {
  return (
    <div>
      <main>
        <header>
          <h1 class="page-title">Portfolio Page</h1>
        </header>

        <section class="row justify-center">
          <div class="card-column">
            <figure class="card code-card">
            <img src="https://picsum.photos/id/287/250/300" alt="Mountains"/>
    <figcaption>The Day</figcaption>
            </figure>
          </div>
          <div class="card-column">
            <figure class="card code-card">
            <img src="https://picsum.photos/id/475/250/300" alt="Mountains"/>
    <figcaption>The Night</figcaption>
            </figure>
          </div>

          <div class="card-column">
            <figure class="card code-card">

            </figure>
          </div>
          <div class="card-column">
            <figure class="card code-card">

            </figure>
          </div>
          <div class="card-column">
            <figure class="card code-card">

            </figure>
          </div>

          <div class="card-column">
            <figure class="card code-card">

            </figure>
          </div>
        </section>
      </main>

      <footer>
        <h3>
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          and CSS
        </h3>
      </footer>
    </div>
  );
}
