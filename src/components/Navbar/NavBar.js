import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand divLogo">
        <NavLink to="/" className="navbar-brand">
          <img
            src={require("../../assets/bmw-logo.png")}
            className="d-inline-block align-top imgLogo"
            alt="LogoBMW"
          />
          <span id="BMW">BMW</span>
        </NavLink>
      </div>
      <NavLink to="/carrito" id="linkCarrito">
        <CartWidget />
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/categoria/autos" activeClassName="active" className="nav-link">AUTOS</NavLink>
          </li>
          <li className="nav-item ">
            <NavLink to="/categoria/camionetas" activeClassName="active" className="nav-link">CAMIONETAS</NavLink>
          </li>
          <li className="nav-item ">
            <NavLink to="/categoria/motos" activeClassName="active" className="nav-link">MOTOS</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
