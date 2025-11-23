import React from 'react';
import './Footer.scss';
import { FaCommentDots } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-v2">
      <div className="footer-container">
        {/* Panneau de gauche (blanc) */}
        <div className="footer-left-panel">
          <div className="left-panel-top">
            <img src="/images/logo_thank_kompany_Final.png" alt="FNK Logo" className="footer-logo" />
            <p className="footer-description">
              Faucibus quis fringilla scelerisque dui. Amet parturient dui venenatis amet sagittis viverra vel tincidunt. Orci tincidunt.
            </p>
            <button className="live-chat-btn">
              <FaCommentDots />
              <span>Start Live Chat</span>
            </button>
          </div>
          <div className="left-panel-bottom">
            <p className="copyright">Copyright © 2023 Thank Kompany. All Right Reserved</p>
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
              <a href="#">Data Privacy</a>
              <a href="#">Impresum</a>
            </div>
          </div>
        </div>
      </div>
      {/* La ligne de séparation est maintenant un élément distinct pour un alignement parfait */}
      <hr className="footer-separator" />
    </footer>
  );
};

export default Footer;
