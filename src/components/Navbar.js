import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/Diostec_logo_3d(1).png";
import "../App.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logoImg} alt="Diostack Logo" className="logo-image" />
        </div>
        
        <ul className="nav-menu">
          <li className="nav-item active">
            <Link to="/">Home</Link>
            <span className="nav-indicator"></span>
          </li>
          <li className="nav-item">
            <Link to="/about">About Us</Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/pages">Pages</Link>
            <span className="dropdown-arrow">▼</span>
          </li> */}
          <li className="nav-item">
            <Link to="/services">Services</Link>
            {/* <span className="dropdown-arrow">▼</span> */}
          </li>
          {/* <li className="nav-item">
            <Link to="/blog">Blog</Link>
            <span className="dropdown-arrow">▼</span>
          </li> */}
          {/* <li className="nav-item">
            <Link to="/contact">Contact Us</Link>
          </li> */}
        </ul>
        
        {/* <button className="join-btn">JOIN NOW</button> */}
      </div>
    </nav>
  );
}
