import React, { useState } from "react";
import logo from "../images/Logo.svg";

const Nav = () => {
  const [menuOpen, SetMenuOpen] = useState(false);
  const toggleMenu = () => {
    SetMenuOpen(!menuOpen);
  };
  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <a href="/" className="logo">
        <img src={logo} alt="Logo" />
      </a>

      {/* hamburger */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* nav items */}
      <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="/booking">Reservations</a>
        </li>
        <li>
          <a href="/">Order</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
