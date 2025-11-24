import React from 'react';
import { useTranslation } from 'react-i18next';
import './ITService.scss';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import PartnersLogo from '../components/PartnersLogo';

const ITService = () => {
  const { t } = useTranslation();
  return (
    <div className="it-service-page">
      {/* 01: Hero Section */}
      <section className="it-hero" style={{backgroundImage: `url(/images/IT/0_Home_Screen.png)`}}> 
        <div className="it-hero-overlay"></div>
        <div className="it-hero-content">
          <p className="breadcrumb">{t('it_service_breadcrumb')}</p>
          <h1>{t('it_service_title')}</h1>
        </div>
      </section>

      {/* 02: Conseils en SAP PM/CS */}
      <section className="service-section">
        <div className="service-content">
          <div className="service-text">
            <h2>{t('it_service_sap_title')}</h2>
            <p>{t('it_service_sap_description')}</p>
          </div>
          <div className="service-image">
            <img src="/images/IT/1_SAP_Conseils.png" alt="Conseils SAP" />
          </div>
        </div>
      </section>

      {/* 03: Gestion des Données */}
      <section className="service-section alt-bg">
        <div className="service-content reverse">
          <div className="service-text">
            <h2>{t('it_service_data_management_title')}</h2>
            <p>{t('it_service_data_management_description')}</p>
            <h4>{t('it_service_data_management_service_title')}</h4>
            <ul>
              <li>{t('it_service_data_management_service_1')}</li>
              <li>{t('it_service_data_management_service_2')}</li>
              <li>{t('it_service_data_management_service_3')}</li>
            </ul>
          </div>
          <div className="service-image">
            <img src="/images/IT/2_Gestion_Donnees.png" alt="Gestion des Données" />
          </div>
        </div>
      </section>

      {/* 04: Développement Web */}
      <section className="service-section">
        <div className="service-content">
          <div className="service-text">
            <h2>{t('it_service_web_dev_title')}</h2>
            <p>{t('it_service_web_dev_description')}</p>
          </div>
          <div className="service-image">
            <img src="/images/IT/3_Developement_Web.png" alt="Développement Web" />
          </div>
        </div>
      </section>

      {/* 05: Développement des logiciels */}
      <section className="service-section alt-bg">
        <div className="service-content reverse">
          <div className="service-text">
            <h2>{t('it_service_software_dev_title')}</h2>
            <p>{t('it_service_software_dev_description_1')}</p>
            <p>{t('it_service_software_dev_description_2')}</p>
          </div>
          <div className="service-image">
            <img src="/images/IT/4_Development.png" alt="Développement Logiciels" />
          </div>
        </div>
      </section>

      {/* 06: Maintenance Informatiques */}
      <section className="service-section">
        <div className="service-content">
          <div className="service-text">
            <h2>{t('it_service_maintenance_title')}</h2>
            <p>{t('it_service_maintenance_description')}</p>
            <ul>
              <li>{t('it_service_maintenance_service_1')}</li>
              <li>{t('it_service_maintenance_service_2')}</li>
              <li>{t('it_service_maintenance_service_3')}</li>
              <li>{t('it_service_maintenance_service_4')}</li>
            </ul>
            <p className="quote">{t('it_service_maintenance_quote')}</p>
          </div>
          <div className="service-image">
            <img src="/images/IT/05_maintenance.png" alt="Maintenance Informatiques" />
          </div>
        </div>
      </section>

      {/* 07: Boutique & Partenaires */}
      {/*<section className="shop-section alt-bg">
        <div className="shop-products">
          <div className="shop-card">
            <img src="https://placehold.co/250x200/cccccc/ffffff?text=Produit" alt="Desktop Gamer" />
            <h4>Desktop Gamer</h4>
            <div className="rating">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><span>4.5/5</span>
            </div>
          </div>
          <div className="shop-card">
            <img src="https://placehold.co/250x200/cccccc/ffffff?text=Produit" alt="PC Portable ASUS" />
            <h4>PC Portable ASUS</h4>
            <div className="rating">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><span>4.5/5</span>
            </div>
          </div>
          <div className="shop-card">
            <img src="https://placehold.co/250x200/cccccc/ffffff?text=Produit" alt="Suite Bureautique" />
            <h4>Suite Bureautique</h4>
          </div>
          <div className="shop-card">
            <img src="https://placehold.co/250x200/cccccc/ffffff?text=Produit" alt="Laptop Asus Zenbook" />
            <h4>Laptop Asus Zenbook</h4>
          </div>
        </div>
        <button className="shop-cta">
          <span>Consulter La Boutique</span>
          <FaArrowRight />
        </button>
      </section>*/}
      <PartnersLogo />
    </div>
  );
};

export default ITService;
