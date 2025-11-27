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
          <p className="breadcrumb">{t('sap_eam_breadcrumb')}</p>
                  <h1>{t('sap_eam_title')}</h1>
                  <p>{t('sap_eam_slogan')}</p>
                 </div>
          </section>

       {/* SAP EAM/PM Consulting */}
      <section className="service-section">
        <div className="service-content">
          <div className="service-text">
            <h2 className='highlight'>{t('sap_eam_sap_title')}</h2>
            <p>{t('sap_eam_sap_description')}</p>
          </div>
          <div className="service-image">
            <img src="/images/IT/1_SAP_Conseils.png" alt="Conseils SAP" />
          </div>
        </div>
      </section>

      {/* Our SAP EAM/PM Expertise */}
      <section className="service-section alt-bg">
        <div className="service-content reverse">
          <div className="service-text">
            <h2 className='highlight'>{t('sap_eam_expertise_title')}</h2>
            <p>{t('sap_eam_expertise_description')}</p>
            <h4>{t('sap_eam_expertise_service_title')}</h4>
            <ul>
              <li>{t('sap_eam_expertise_service_1')}</li>
              <li>{t('sap_eam_expertise_service_2')}</li>
              <li>{t('sap_eam_expertise_service_3')}</li>
              <li>{t('sap_eam_expertise_service_4')}</li>
              <li>{t('sap_eam_expertise_service_5')}</li>
              <li>{t('sap_eam_expertise_service_6')}</li>
              <li>{t('sap_eam_expertise_service_7')}</li>
              <li>{t('sap_eam_expertise_service_8')}</li>
              <li>{t('sap_eam_expertise_service_9')}</li>
              <li>{t('sap_eam_expertise_service_10')}</li>
            </ul>
          </div>
          <div className="service-image">
            <img src="/images/IT/2_Gestion_Donnees.png" alt="Gestion des Données" />
          </div>
        </div>
      </section>

      {/* Why SAP S/4HANA Matters*/}
      <section className="service-section">
        <div className="service-content">
          <div className="service-text">
            <h2 className='highlight'>{t('sap_eam_why_title')}</h2>
            <p>{t('sap_eam_why_description')}</p>
             <h4>{t('sap_eam_why_service_title')}</h4>
            <ul>
              <li>{t('sap_eam_why_service_1')}</li>
              <li>{t('sap_eam_why_service_2')}</li>
              <li>{t('sap_eam_why_service_3')}</li>
              <li>{t('sap_eam_why_service_4')}</li>
              <li>{t('sap_eam_why_service_5')}</li>
            </ul>
            <p>{t('sap_eam_why_conclusion')}</p>
          </div>
          <div className="service-image">
            <img src="/images/IT/3_Developement_Web.png" alt="Développement Web" />
          </div>
        </div>
      </section>

      {/* Your Path to S/4HANA EAM  */}
      <section className="service-section alt-bg">
        <div className="service-content reverse">
          <div className="service-text">
            <h2 className='highlight'>{t('sap_eam_solution_title')}</h2>
            <p>{t('sap_eam_solution_description')}</p>
             <h4>{t('sap_eam_solution_service_title')}</h4>
            <ul>
              <li>{t('sap_eam_solution_service_1')}</li>
              <li>{t('sap_eam_solution_service_2')}</li>
              <li>{t('sap_eam_solution_service_3')}</li>
              <li>{t('sap_eam_solution_service_4')}</li>
              <li>{t('sap_eam_solution_service_5')}</li>
            </ul>
            <p>{t('sap_eam_why_conclusion')}</p>
          </div>
          <div className="service-image">
            <img src="/images/IT/4_Development.png" alt="Développement Logiciels" />
          </div>
        </div>
      </section>

      {/* Our Guarantee */}
      <section className="service-section">
        <div className="service-content">
          <div className="service-text">
            <h2 className='highlight'>{t('sap_eam_guarantee_title')}</h2>
             <p>{t('sap_eam_guarantee_description')}</p>
             <h4>{t('sap_eam_guarantee_service_title')}</h4>
            <ul>
              <li>{t('sap_eam_guarantee_service_1')}</li>
              <li>{t('sap_eam_guarantee_service_2')}</li>
              <li>{t('sap_eam_guarantee_service_3')}</li>
               <li>{t('sap_eam_guarantee_service_4')}</li>
              <li>{t('sap_eam_guarantee_service_5')}</li>
            </ul>
            <p className="quote">{t('sap_eam_maintenance_quote')}</p>
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
