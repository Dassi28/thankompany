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
        <span className="discount-msg">{t('discount_msg')}</span>
        <div className="top-right">
          <div className="contact-block">
            <span className="icon">📞</span>
            <span className="label">{t('call_us')}</span>
            <span className="value">+62 864 6444 2222</span>
          </div>
          <div className="contact-block">
            <span className="icon">✉️</span>
            <span className="label">{t('mail_us')}</span>
            <span className="value">hi@logistic.com</span>
          </div>
          <div className="social-icons">
            <span>🌐</span>
            <span>🔗</span>
            <span>📘</span>
          </div>
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

        <ul className={isMenuOpen ? "navbar-links open" : "navbar-links"} onClick={closeMenu}>
          <li><a href="/" className="active">{t('home')}</a></li>
          <li><a href="/it-service">{t('it_services')}</a></li>
          <li><a href="/automatisation">{t('automation')}</a></li>
          <li><a href="/software-development">{t('software_development')}</a></li>
         { /*<li><a href="/electronics">{t('electronics')}</a></li>
          <li><a href="/logistics">{t('logistics')}</a></li>
          <li><a href="#shop">{t('shop')}</a></li>*/}
        </ul>

        <div className="navbar-actions">
          <button className="quote-btn">{t('get_a_quote')}</button>
          <button className="mobile-menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
