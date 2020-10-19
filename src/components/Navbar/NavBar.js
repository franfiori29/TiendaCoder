import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand divLogo">
        <a class="navbar-brand" href="#">
          <img
            src={require("../../assets/bmw-logo.png")}
            class="d-inline-block align-top imgLogo"
            alt="LogoBMW"
          />
          BMW
        </a>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link">AUTOS</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link">CAMIONETAS</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link">MOTOS</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
