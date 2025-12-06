import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/Diostec_logo_3d(1).png";
import "../App.css";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logoImg} alt="Diostack Logo" className="logo-image" />
        </div>
        
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item active">
            <Link to="/" onClick={closeMobileMenu}>Home</Link>
            <span className="nav-indicator"></span>
          </li>
          <li className="nav-item">
            <Link to="/about" onClick={closeMobileMenu}>About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" onClick={closeMobileMenu}>Services</Link>
          </li>
        </ul>
        
        {/* <button className="join-btn">JOIN NOW</button> */}
      </div>
    </nav>
  );
}
