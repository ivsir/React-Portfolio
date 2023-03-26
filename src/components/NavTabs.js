import React from "react";
import "../styles/Navbar.css";
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div id="big-wrapper">
    <nav className="header">
      <div className="nav-wrapper">
        <div className="nav-bar nav-tabs">
          <li className="nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              // This is a conditional (ternary) operator that checks to see if the current page is "About"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={currentPage === "About" ? "nav-active" : "nav-item"}
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav
              className={
                currentPage === "Portfolio" ? "nav-active" : "nav-item"
              }
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav
              className={currentPage === "Resume" ? "nav-active" : "nav-item"}
            >
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav
              className={currentPage === "Contact" ? "nav-active" : "nav-item"}
            >
              Contact
            </a>
          </li>
        </div>
    </div>
    </nav>
    </div>
  );
}

export default NavTabs;
