import React from 'react';
import './Automatisation.scss';
import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaCogs, FaIndustry, FaNetworkWired, FaUsers } from 'react-icons/fa';
import PartnersLogo from '../components/PartnersLogo';

const Automatisation = () => {
  const { t } = useTranslation();

  return (
    <div className="automatisation-page">
      {/* 01: Hero Section */}
      <section className="auto-hero" style={{backgroundImage: `url(/images/Electronic/0_Home_Screen.png)`}}>
        <div className="auto-hero-overlay"></div>
        <div className="auto-hero-content">
          <h1 className="auto-hero-title">{t('automation_title')}</h1>
          <p className="auto-hero-slogan">{t('automation_slogan')}</p>
          <button className="auto-hero-cta">
            <span>{t('discover_our_solutions')}</span>
            <FaArrowRight />
          </button>
        </div>
      </section>

      {/* 02: Introduction Section */}
      <section className="auto-intro-section">
        <div className="auto-intro-content">
          <div className="auto-intro-text">
            <h2 className='highlight'>{t('automation_intro_title')}</h2>
            <p>
              {t('automation_intro_description')}
            </p>
          </div>
          <div className="auto-intro-image">
            <img src="/images/Electronic/1_About_us.png" alt="Introduction to automation" />
          </div>
        </div>
      </section>

      {/* 03: Services Section */}
      <section className="auto-services-section">
        <h2 className="section-title highlight">{t('automation_expertise_service_title')}</h2>
        <div className="auto-services-grid">
          <div className="service-card">
            <div className="service-icon">
              <FaCogs />
            </div>
            <h3 className="highlight">{t('automation_expertise_service_1')}</h3>
            <p>{t('home_automation_expertise_1')}</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <FaIndustry />
            </div>
            <h3 className="highlight">{t('automation_expertise_service_2')}</h3>
            <p>{t('home_automation_expertise_2')}</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <FaNetworkWired />
            </div>
            <h3 className="highlight">{t('automation_expertise_service_6')}</h3>
            <p>{t('home_automation_expertise_4')}</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <FaUsers />
            </div>
            <h3 className="highlight">{t('home_automation_expertise_6')}</h3>
            <p>{t('automation_expertise_service_8')}</p>
          </div>
        </div>
      </section>

      {/* 04: Expertise & Interfaces Section */}
      <section className="auto-expertise-section">
        <div className="auto-expertise-content">
          <div className="expertise-column">
            <h2 className="section-title highlight">{t('automation_technologies_title')}</h2>
            <div className="logos-grid">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg" alt="Siemens Logo" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/ABB_logo.svg/1200px-ABB_logo.svg.png" alt="ABB Logo" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/SEW-EURODRIVE_logo.svg/1200px-SEW-EURODRIVE_logo.svg.png" alt="SEW Eurodrive Logo" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Sigmatek_logo.svg/1200px-Sigmatek_logo.svg.png" alt="Sigmatek Logo" />
            </div>
          </div>
          <div className="interfaces-column">
            <h2 className="section-title highlight">{t('automation_technologies_networks')}</h2>
            <ul className="interfaces-list">
              <li>MQTT</li>
              <li>OPC-UA</li>
              <li>Modbus</li>
              <li>Profinet</li>
              <li>Profibus</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 05: Technical Leadership & Team Coordination Section */}
      <section className="auto-leadership-section">
        <div className="auto-leadership-content">
          <div className="auto-leadership-text">
            <h2 className='highlight'>{t('home_automation_expertise_6')}</h2>
            <p>
              {t('automation_guarantee_description')}
            </p>
          </div>
          <div className="auto-leadership-image">
            <img src="/images/Electronic/4_Technicien_Batiment.png" alt="Technical Leadership" />
          </div>
        </div>
      </section>

      {/* 06: CTA Section */}
      <section className="auto-cta-section">
        <div className="auto-cta-content">
          <h2>{t('it_service_cta_title')}</h2>
          <p>{t('it_service_cta_description')}</p>
          <a href="/contact" className="auto-cta-button">
            <span>{t('contact_us')}</span>
            <FaArrowRight />
          </a>
        </div>
      </section>

      <PartnersLogo />
    </div>
  );
};

export default Automatisation;