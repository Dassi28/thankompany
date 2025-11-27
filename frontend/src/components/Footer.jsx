import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.scss';
import { FaCommentDots, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const [showButton, setShowButton] = useState(false);
  const { t } = useTranslation();

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
                          <h3 className="section-title">
                              <span className="highlight">{t('footer_slogan_title')}</span>
                          </h3>
                          <h4>{t('footer_slogan_description')}</h4>
            </p>
          </div>
          <div className="left-panel-bottom">
            <p className="copyright">{t('footer_copyright')}</p>
          </div>
        </div>

        <div className="footer-right-panel">
          <div className="right-panel-top">
            <div className="address-columns">
              <div className="address-col">
                <h4>{t('country_germany')}</h4>
                <p>Mundenheimer Str. 177<br />67061 Ludwigshafen<br />{t('home_contact_phone_germany')}</p>
              </div>
              <div className="address-col">
                <h4>{t('country_france')}</h4>
                <p>1 Rue Chateaubriand<br />92320 Chatillon<br />+33 786 377 944</p>
              </div>
              <div className="address-col">
                <h4>{t('country_cameroon')}</h4>
                <p>BP 7509<br />Douala, {t('country_cameroon')}<br />{t('home_contact_phone_cameroon')}</p>
              </div>
            </div>
          </div>
          <div className="right-panel-bottom">
            <div className="legal-links">
              <a href="/terms-and-privacy" className='highlight'>{t('footer_terms_privacy')}</a>
              <a href="/data-privacy" className='highlight'>{t('footer_data_privacy')}</a>
              <a href="/impresum" className='highlight'>{t('footer_impresum')}</a>
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
