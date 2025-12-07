import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/Diostec_bg.png";
import "../App.css";
import { useLanguage } from '../LanguageContext';
import { useTranslation } from '../useTranslation';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation();

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
          <li className="nav-item">
            <Link to="/" onClick={closeMobileMenu}>{t('nav', 'home')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" onClick={closeMobileMenu}>{t('nav', 'about')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" onClick={closeMobileMenu}>{t('nav', 'services')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" onClick={closeMobileMenu}>{t('nav', 'contact')}</Link>
          </li>
        </ul>
        
        <button className="language-switch-btn" onClick={toggleLanguage}>
          <span className="lang-icon">🌐</span>
          <span className="lang-text">{language}</span>
        </button>
      </div>
    </nav>
  );
}
