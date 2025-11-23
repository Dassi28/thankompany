import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.scss';

const Navbar = ({ changeLanguage }) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* TOP STRIP */}
      <div className="top-bar">
              <span className="discount-msg">Your Partner for SAP EAM/PM, Automation, and Software Solutions!</span>
        <div className="top-right">
          <div className="contact-block">
            <span className="icon">📞</span>
            <span className="label">Talk to an Expert</span>
            <span className="value">+49 176 267 792 75</span>
          </div>
          <div className="contact-block">
            <span className="icon">✉️</span>
            <span className="label">Send Us a Message</span>
            <span className="value">info@thankompany.com</span>
          </div>
          {/*<div className="social-icons">*/}
          {/*  <span>🌐</span>*/}
          {/*  <span>🔗</span>*/}
          {/*  <span>📘</span>*/}
          {/*</div>*/}
          <div className="lang-select">
            <button onClick={() => changeLanguage('fr')} className="lang-button">
              <img src="/images/flags/fr.jpg" alt="French" />
            </button>
            <button onClick={() => changeLanguage('en')} className="lang-button">
              <img src="/images/flags/en.jpeg" alt="English" />
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
          <img src="/images/logo_thank_kompany_Final.png" alt="Thank Kompany Logo" />
        </div>

        <ul className="navbar-links">
  <li><a href="/" className="active">HOME</a></li>
  <li><a href="/it-service">SAP EAM/PM CONSULTING</a></li>
  <li><a href="/electronics">AUTOMATION ENGINEERING</a></li>
  <li><a href="/logistics">SOFTWARE DEVELOPMENT</a></li>
  {/*<li><a href="/logistics">LOGISTICS</a></li>*/}
 {/* <li><a href="#shop">SHOP</a></li>*/}
</ul>

        <div className="navbar-actions">
          <button className="quote-btn">{t('Let’s Discuss Your Needs')}</button>
          <button className="mobile-menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
