import React, { useState } from 'react';
import './Automatisation.scss';
import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaCogs, FaIndustry, FaNetworkWired, FaUsers } from 'react-icons/fa';
import PartnersLogo from '../components/PartnersLogo';
import ContactPrompt from '../components/ContactPrompt';

const Automatisation = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('backend');

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


          {/* Smart Automation for Buildings & Industry */}
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

          {/* Our  Expertise */}
          <section className="service-section alt-bg">
              <div className="service-content reverse">
                  <div className="service-text">
                      <h2 className='highlight'>{t('automation_expertise_title')}</h2>
                      <p>{t('automation_expertise_description')}</p>
                      <h4 className='highlight'>{t('automation_expertise_service_title')}</h4>
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
                      <img src="/images/IT/2_Gestion_Donnees.png" alt="Gestion des Donn�es" />
                  </div>
              </div>
          </section>

          {/* Why Modern AutomationMatters*/}
          <section className="service-section">
              <div className="service-content">
                  <div className="service-text">
                      <h2 className='highlight'>{t('automation_why_title')}</h2>
                      <p>{t('automation_why_description')}</p>
                      <h4 className='highlight'>{t('automation_why_service_title')}</h4>
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
                      <img src="/images/IT/3_Developement_Web.png" alt="D�veloppement Web" />
                  </div>
              </div>
          </section>

         
          {/* 03: Technologies Section */}
          <section className="auto-technologies-section">
              <h2 className="section-title highlight">{t('software_dev_technologies_title')}</h2>
              <div className="tabs">
                  <button className={`tab-button ${activeTab === 'backend' ? 'active' : ''}`} onClick={() => setActiveTab('backend')}>
                      Innovation
                  </button>
                  <button className={`tab-button ${activeTab === 'frontend' ? 'active' : ''}`} onClick={() => setActiveTab('frontend')}>
                      Industrial Communication
                  </button>
                  <button className={`tab-button ${activeTab === 'mobile' ? 'active' : ''}`} onClick={() => setActiveTab('mobile')}>
                      Control Technologies
                  </button>
                 </div>
              <div className="tab-content">
              {/*Innovation*/}
                  {activeTab === 'backend' && (
                      <div className="technologies-grid">
                          <div className="tech-item">
                              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png" alt="Java" />
                              <span>IoT</span>
                          </div>
                          <div className="tech-item">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/1200px-Spring_Framework_Logo_2018.svg.png" alt="Spring Boot" />
                              <span>Cloud</span>
                          </div>
                          <div className="tech-item">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png" alt=".NET Core" />
                              <span>AI</span>
                          </div>
                          <div className="tech-item">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="Node.js" />
                              <span>Automation</span>
                          </div>
                         
                      </div>
                  )}
                  {/*Industrial Communication*/}
                  {activeTab === 'frontend' && (
                      <div className="technologies-grid">
                          <div className="tech-item">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React" />
                              <span>MQTT</span>
                          </div>
                          <div className="tech-item">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png" alt="Angular" />
                              <span>OPC-UA</span>
                          </div>
                          <div className="tech-item">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" alt="Vue.js" />
                              <span>KNX</span>
                          </div>
                          <div className="tech-item">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="TypeScript" />
                              <span>BACnet</span>
                          </div>
                          <div className="tech-item">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="TypeScript" />
                              <span>Modbus </span>
                          </div>
                          <div className="tech-item">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="TypeScript" />
                              <span>Profinet</span>
                          </div>
                          <div className="tech-item">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="TypeScript" />
                              <span>Profibus</span>
                          </div>
                          <div className="tech-item">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="TypeScript" />
                              <span>CAN</span>
                          </div>
                      </div>
                  )}
                  {/*Control Technologies*/}
                  {activeTab === 'mobile' && (
                      <div className="technologies-grid">
                          <div className="tech-item">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Google-flutter-logo.png/1200px-Google-flutter-logo.png" alt="Flutter" />
                              <span>PLC </span>
                          </div>
                          <div className="tech-item">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React Native" />
                              <span>KNX Control</span>
                          </div>
                          <div className="tech-item">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png" alt="Kotlin" />
                              <span>Functional Logic</span>
                          </div>
                          <div className="tech-item">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Swift_logo.svg/1200px-Swift_logo.svg.png" alt="Swift" />
                              <span>Safety Systems</span>
                          </div>
                      </div>
                  )}
               </div>
          </section>


          {/* Challenges We Solve  */}
          <section className="service-section alt-bg">
              <div className="service-content reverse">
                  <div className="service-text">
                      <h2 className='highlight'>{t('automation_solution_title')}</h2>
                      <p>{t('automation_solution_description')}</p>
                      <h4 className='highlight'>{t('automation_solution_service_title')}</h4>
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
                      <img src="/images/IT/4_Development.png" alt="D�veloppement Logiciels" />
                  </div>
              </div>
          </section>

          {/* Our Commitment to Excellence */}
          <section className="service-section">
              <div className="service-content">
                  <div className="service-text">
                      <h2 className='highlight'>{t('automation_guarantee_title')}</h2>
                      <p>{t('automation_guarantee_description')}</p>
                      <h4 className='highlight'>{t('automation_guarantee_service_title')}</h4>
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

                  <ContactPrompt />
                  <PartnersLogo />    </div>
  );
};

export default Automatisation;