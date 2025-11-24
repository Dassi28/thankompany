import React, { useState, useEffect } from 'react';
import './Footer.scss';
import { FaCommentDots, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) { // Show button after scrolling 300px down
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className="footer-v2">
      <div className="footer-container">
        {/* Panneau de gauche (blanc) */}
        <div className="footer-left-panel">
          <div className="left-panel-top">
            <a href="/">
              <img src="/images/logo_thank_kompany_Final.png" alt="FNK Logo" className="footer-logo" />
            </a>
            
            <p className="footer-description">
                          {/*<h4>Engineering Smart Futures</h4> <br />Delivering intelligent solutions that elevate business excellence.*/}
                          <h3 className="section-title">
                              <span className="highlight">Engineering Smart Futures</span> 
                          </h3>
                          <h4>Delivering smart maintenance, advanced automation, and intelligent software solutions that elevate businesses and drive measurable growth.</h4>

            </p>
            {/*<button className="live-chat-btn">*/}
            {/*  <FaCommentDots />*/}
            {/*  <span>Start Live Chat</span>*/}
            {/*</button>*/}
          </div>
          <div className="left-panel-bottom">
            <p className="copyright">Copyright © 2025 THANK KOMPANY GmbH. All Right Reserved</p>
          </div>
        </div>

        {/* Panneau de droite (gris) */}
        <div className="footer-right-panel">
          <div className="right-panel-top">
            <div className="address-columns">
              <div className="address-col">
                <h4>Allemagne</h4>
                <p>Mundenheimer Str. 177<br />67061 Ludwigshafen<br />+49 176 684 054 66</p>
              </div>
              <div className="address-col">
                <h4>France</h4>
                <p>1 Rue Chateaubriand<br />92320 Chatillon<br />+33 786 377 944</p>
              </div>
              <div className="address-col">
                <h4>Cameroun</h4>
                <p>BP 7509<br />Douala, Cameroun<br />+237 680 875 787</p>
              </div>
            </div>
          </div>
          <div className="right-panel-bottom">
            <div className="legal-links">
              <a href="/terms-and-privacy">Terms and Privacy</a>
              <a href="/data-privacy">Data Privacy</a>
              <a href="/impresum">Impresum</a>
            </div>
          </div>
        </div>
      </div>
      {/* La ligne de séparation est maintenant un élément distinct pour un alignement parfait */}
      <hr className="footer-separator" />
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top-btn">
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
