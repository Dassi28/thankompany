import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import './Navbar.scss';

const Navbar = ({ changeLanguage }) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="header-fixed-wrapper">
      {/* TOP STRIP */}
      <div className="top-bar">
              <span className="discount-msg">{t('discount_msg')}</span>
        <div className="top-right">
          <div className="contact-block">
            <span className="icon">📞</span>
            <span className="label">{t('call_us')}</span>
            <span className="value">+49 176 267 792 75</span>
          </div>
          <div className="contact-block">
            <span className="icon">✉️</span>
            <span className="label">{t('mail_us')}</span>
            <span className="value">contact@thankompany.com</span>
          </div>
          {/*<div className="social-icons">*/}
          {/*  <span>🌐</span>*/}
          {/*  <span>🔗</span>*/}
          {/*  <span>📘</span>*/}
          {/*</div>*/}
          <div className="lang-select">
            <button onClick={() => changeLanguage('fr')} className="lang-button">
              <img src="/images/flags/fr.png" alt="French" />
            </button>
            <button onClick={() => changeLanguage('en')} className="lang-button">
              <img src="/images/flags/en.png" alt="English" />
            </button>
            <button onClick={() => changeLanguage('de')} className="lang-button">
              <img src="/images/flags/de.png" alt="German" />
            </button>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo-section">
          <a href="/">
            <img src="/images/logo_thank_kompany_Final.png" alt="Thank Kompany Logo" />
          </a>
        </div>

        <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>{t('home')}</a></li>
          <li><a href="/it-service" className={location.pathname === '/it-service' ? 'active' : ''} onClick={closeMenu}>{t('sap_eam')}</a></li>
          <li><a href="/automatisation" className={location.pathname === '/automatisation' ? 'active' : ''} onClick={closeMenu}>{t('automation')}</a></li>
          <li><a href="/software-development" className={location.pathname === '/software-development' ? 'active' : ''} onClick={closeMenu}>{t('navbar_software_development')}</a></li>
          {/*<li><a href="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeMenu}>{t('navbar.contact')}</a></li>*/}
        </ul>

        <div className="navbar-actions">
          <a href="/contact" className="quote-btn">{t('navbar_discuss_needs_btn')}</a>
          <button className="mobile-menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar; 
