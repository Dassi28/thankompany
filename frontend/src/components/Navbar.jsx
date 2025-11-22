import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <>
      {/* TOP STRIP */}
      <div className="top-bar">
              <span className="discount-msg">Your Partner for SAP EAM/PM, Automation, and International Logistics Solutions!</span>
        <div className="top-right">
          <div className="contact-block">
            <span className="icon">📞</span>
            <span className="label">Call US</span>
            <span className="value">+49 176 267 792 75</span>
          </div>
          <div className="contact-block">
            <span className="icon">✉️</span>
            <span className="label">Mail Us</span>
            <span className="value">info@thankompany.com</span>
          </div>
          <div className="social-icons">
            <span>🌐</span>
            <span>🔗</span>
            <span>📘</span>
          </div>
          <div className="lang-select">EN ⌄</div>
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
  {/*<li><a href="/electronics">ELECTRONICS</a></li>*/}
  {/*<li><a href="/logistics">LOGISTICS</a></li>*/}
 {/* <li><a href="#shop">SHOP</a></li>*/}
</ul>


        <div className="navbar-actions">
                  <button className="quote-btn">Talk to an Expert</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
