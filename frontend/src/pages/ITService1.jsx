import React from 'react';
import { useTranslation } from 'react-i18next';
import './ITService.scss';
import { FaArrowRight } from 'react-icons/fa';
import PartnersLogo from '../components/PartnersLogo';

const ITService = () => {
  const { t } = useTranslation();

  return (
    <div className="it-service-page">
      {/* 01: Hero Section */}
      <section className="is-hero" style={{backgroundImage: `url(/images/IT/0_Home_Screen.png)`}}>
        <div className="is-hero-overlay"></div>
        <div className="is-hero-content">
          <h1 className="is-hero-title">{t('it_service_title')}</h1>
          <p className="is-hero-slogan">{t('it_service_sap_description')}</p>
          <button className="is-hero-cta">
            <span>{t('discover_our_solutions')}</span>
            <FaArrowRight />
          </button>
        </div>
      </section>

      {/* 02: Conseils en SAP PM/CS */}
      <section className="is-intro-section">
        <div className="is-intro-content">
          <div className="is-intro-text">
            <h2 className='highlight'>{t('it_service_sap_title')}</h2>
            <p>{t('it_service_sap_description')}</p>
          </div>
          <div className="is-intro-image">
            <img src="/images/IT/1_SAP_Conseils.png" alt="Conseils SAP" />
          </div>
        </div>
      </section>

      {/* 03: Gestion des Données */}
      <section className="is-data-section">
        <div className="is-data-content">
          <div className="is-data-image">
            <img src="/images/sap_expertise.png" alt="Gestion des Données" />
          </div>
          <div className="is-data-text">
            <h2 className='highlight'>{t('it_service_data_management_title')}</h2>
            <p>{t('it_service_data_management_description')}</p>
            <h4>{t('it_service_data_management_service_title')}</h4>
            <ul>
              <li>{t('it_service_data_management_service_1')}</li>
              <li>{t('it_service_data_management_service_2')}</li>
              <li>{t('it_service_data_management_service_3')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 04: Développement Web */}
      <section className="is-web-dev-section">
        <div className="is-web-dev-content">
          <div className="is-web-dev-text">
            <h2 className='highlight'>{t('it_service_web_dev_title')}</h2>
            <p>{t('it_service_web_dev_description')}</p>
          </div>
          <div className="is-web-dev-image">
            <img src="/images/IT/3_Developement_Web.png" alt="Développement Web" />
          </div>
        </div>
      </section>

      {/* 05: Développement des logiciels */}
      <section className="is-software-dev-section">
        <div className="is-software-dev-content">
           <div className="is-software-dev-image">
            <img src="/images/IT/4_Development.png" alt="Développement Logiciels" />
          </div>
          <div className="is-software-dev-text">
            <h2 className='highlight'>{t('it_service_software_dev_title')}</h2>
            <p>{t('it_service_software_dev_description_1')}</p>
            <p>{t('it_service_software_dev_description_2')}</p>
          </div>
        </div>
      </section>

      {/* 06: Maintenance Informatiques */}
      <section className="is-maintenance-section">
        <div className="is-maintenance-content">
          <div className="is-maintenance-text">
            <h2 className='highlight'>{t('it_service_maintenance_title')}</h2>
            <p>{t('it_service_maintenance_description')}</p>
            <ul>
              <li>{t('it_service_maintenance_service_1')}</li>
              <li>{t('it_service_maintenance_service_2')}</li>
              <li>{t('it_service_maintenance_service_3')}</li>
              <li>{t('it_service_maintenance_service_4')}</li>
            </ul>
            <p className="quote">{t('it_service_maintenance_quote')}</p>
          </div>
          <div className="is-maintenance-image">
            <img src="/images/IT/05_maintenance.png" alt="Maintenance Informatiques" />
          </div>
        </div>

        <div className="is-maintenance-section">
          <div className="is-maintenance-content">
            <div className="is-maintenance-text">
              <h2 className='highlight'>Elevate Your Maintenance Operations</h2>
              <p>Looking to modernize your SAP EAM landscape, prepare for S/4HANA, or unlock the next level of Smart Maintenance? <br />
                <span className='highlight'>Let's talk about your roadmap.</span> We support you from strategy to execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 07: CTA Section */}
      <section className="is-cta-section">
        <div className="is-cta-content">
          <h2>{t('it_service_cta_title')}</h2>
          <p>{t('it_service_cta_description')}</p>
          <a href="/contact" className="is-cta-button">
            <span>{t('contact_us')}</span>
            <FaArrowRight />
          </a>
        </div>
      </section>

      <PartnersLogo />
    </div>
  );
};

export default ITService;