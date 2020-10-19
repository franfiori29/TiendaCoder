import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="menu">
      <div className="logo">
        <img className="imgLogo" src={require("../../assets/bmw-logo.png")} />
        BMW
      </div>
      <ul className="nav-links">
        <li>
          <a>AUTOS</a>
        </li>
        <li>
          <a>CAMIONETAS</a>
        </li>
        <li>
          <a>MOTOS</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
