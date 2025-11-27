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
        </div>
      </section>

          {/* SAP EAM/PM Consulting */}
          <section className="service-section">
              <div className="service-content">
                  <div className="service-text">
                      <h2 className='highlight'>{t('automation_automation_title')}</h2>
                      <p>{t('automation_automation_description')}</p>
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
                      <h2 className='highlight'>{t('automation_expertise_title')}</h2>
                      <p>{t('automation_expertise_description')}</p>
                      <h4>{t('automation_expertise_service_title')}</h4>
                      <ul>
                          <li>{t('automation_expertise_service_1')}</li>
                          <li>{t('automation_expertise_service_2')}</li>
                          <li>{t('automation_expertise_service_3')}</li>
                          <li>{t('automation_expertise_service_4')}</li>
                          <li>{t('automation_expertise_service_5')}</li>
                          <li>{t('automation_expertise_service_6')}</li>
                      </ul>
                      <p>{t('automation_expertise_service_conclusion')}</p>
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
                      <h2 className='highlight'>{t('automation_why_title')}</h2>
                      <p>{t('automation_why_description')}</p>
                      <h4>{t('automation_why_service_title')}</h4>
                      <ul>
                          <li>{t('automation_why_service_1')}</li>
                          <li>{t('automation_why_service_2')}</li>
                          <li>{t('automation_why_service_3')}</li>
                          <li>{t('automation_why_service_4')}</li>
                          <li>{t('automation_why_service_5')}</li>
                      </ul>
                      <p>{t('automation_why_conclusion')}</p>
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
                      <h2 className='highlight'>{t('automation_solution_title')}</h2>
                      <p>{t('automation_solution_description')}</p>
                      <h4>{t('automation_solution_service_title')}</h4>
                      <ul>
                          <li>{t('automation_solution_service_1')}</li>
                          <li>{t('automation_solution_service_2')}</li>
                          <li>{t('automation_solution_service_3')}</li>
                          <li>{t('automation_solution_service_4')}</li>
                          <li>{t('automation_solution_service_5')}</li>
                      </ul>
                      <p>{t('automation_why_conclusion')}</p>
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
                      <h2 className='highlight'>{t('automation_guarantee_title')}</h2>
                      <p>{t('automation_guarantee_description')}</p>
                      <h4>{t('automation_guarantee_service_title')}</h4>
                      <ul>
                          <li>{t('automation_guarantee_service_1')}</li>
                          <li>{t('automation_guarantee_service_2')}</li>
                          <li>{t('automation_guarantee_service_3')}</li>
                          <li>{t('automation_guarantee_service_4')}</li>
                          <li>{t('automation_guarantee_service_5')}</li>
                      </ul>
                      <p className="quote">{t('automation_maintenance_quote')}</p>
                      {/*Create a section with text and icon*/}
                      <button className="auto-hero-cta">
                          <span>{t('discover_our_solutions')}</span>
                          <FaArrowRight />
                      </button>
                  </div>
                  <div className="service-image">
                      <img src="/images/IT/05_maintenance.png" alt="Maintenance Informatiques" />
                  </div>
              </div>
          </section>



      {/* 02: Introduction Section */}
      {/*<section className="auto-intro-section">*/}
      {/*  <div className="auto-intro-content">*/}
      {/*    <div className="auto-intro-text">*/}
      {/*      <h2 className='highlight'>{t('automation_intro_title')}</h2>*/}
      {/*      <p>*/}
      {/*        {t('automation_intro_description')}*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*    <div className="auto-intro-image">*/}
      {/*      <img src="/images/Electronic/1_About_us.png" alt="Introduction to automation" />*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* 03: Services Section */}
      {/*<section className="auto-services-section">*/}
      {/*  <h2 className="section-title highlight">{t('automation_expertise_service_title')}</h2>*/}
      {/*  <div className="auto-services-grid">*/}
      {/*    <div className="service-card">*/}
      {/*      <div className="service-icon">*/}
      {/*        <FaCogs />*/}
      {/*      </div>*/}
      {/*      <h3 className="highlight">{t('automation_expertise_service_1')}</h3>*/}
      {/*      <p>{t('home_automation_expertise_1')}</p>*/}
      {/*    </div>*/}
      {/*    <div className="service-card">*/}
      {/*      <div className="service-icon">*/}
      {/*        <FaIndustry />*/}
      {/*      </div>*/}
      {/*      <h3 className="highlight">{t('automation_expertise_service_2')}</h3>*/}
      {/*      <p>{t('home_automation_expertise_2')}</p>*/}
      {/*    </div>*/}
      {/*    <div className="service-card">*/}
      {/*      <div className="service-icon">*/}
      {/*        <FaNetworkWired />*/}
      {/*      </div>*/}
      {/*      <h3 className="highlight">{t('automation_expertise_service_6')}</h3>*/}
      {/*      <p>{t('home_automation_expertise_4')}</p>*/}
      {/*    </div>*/}
      {/*    <div className="service-card">*/}
      {/*      <div className="service-icon">*/}
      {/*        <FaUsers />*/}
      {/*      </div>*/}
      {/*      <h3 className="highlight">{t('home_automation_expertise_6')}</h3>*/}
      {/*      <p>{t('automation_expertise_service_8')}</p>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* 04: Expertise & Interfaces Section */}
      {/*<section className="auto-expertise-section">*/}
      {/*  <div className="auto-expertise-content">*/}
      {/*    <div className="expertise-column">*/}
      {/*      <h2 className="section-title highlight">{t('automation_technologies_title')}</h2>*/}
      {/*      <div className="logos-grid">*/}
      {/*        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg" alt="Siemens Logo" />*/}
      {/*        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/ABB_logo.svg/1200px-ABB_logo.svg.png" alt="ABB Logo" />*/}
      {/*        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/SEW-EURODRIVE_logo.svg/1200px-SEW-EURODRIVE_logo.svg.png" alt="SEW Eurodrive Logo" />*/}
      {/*        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Sigmatek_logo.svg/1200px-Sigmatek_logo.svg.png" alt="Sigmatek Logo" />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="interfaces-column">*/}
      {/*      <h2 className="section-title highlight">{t('automation_technologies_networks')}</h2>*/}
      {/*      <ul className="interfaces-list">*/}
      {/*        <li>MQTT</li>*/}
      {/*        <li>OPC-UA</li>*/}
      {/*        <li>Modbus</li>*/}
      {/*        <li>Profinet</li>*/}
      {/*        <li>Profibus</li>*/}
      {/*      </ul>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* 05: Technical Leadership & Team Coordination Section */}
      {/*<section className="auto-leadership-section">*/}
      {/*  <div className="auto-leadership-content">*/}
      {/*    <div className="auto-leadership-text">*/}
      {/*      <h2 className='highlight'>{t('home_automation_expertise_6')}</h2>*/}
      {/*      <p>*/}
      {/*        {t('automation_guarantee_description')}*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*    <div className="auto-leadership-image">*/}
      {/*      <img src="/images/Electronic/4_Technicien_Batiment.png" alt="Technical Leadership" />*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* 06: CTA Section */}
      {/*<section className="auto-cta-section">*/}
      {/*  <div className="auto-cta-content">*/}
      {/*    <h2>{t('it_service_cta_title')}</h2>*/}
      {/*    <p>{t('it_service_cta_description')}</p>*/}
      {/*    <a href="/contact" className="auto-cta-button">*/}
      {/*      <span>{t('contact_us')}</span>*/}
      {/*      <FaArrowRight />*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*</section>*/}

      <PartnersLogo />
    </div>
  );
};

export default Automatisation;