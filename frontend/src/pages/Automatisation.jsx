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
          <section className="auto-hero" style={{ backgroundImage: `url(/images/ELectronic/0_Home_Screen.png)`}}>
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
                      <img src="/images/auto_intro.png" alt="Conseils SAP" />
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
                      <img src="/images/auto_expertise.png" alt="Gestion des Données" />
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
                      <img src="/images/auto_why.png" alt="Développement Web" />
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
                              <img src="/images/logo/IoT.png" alt="IoT" className="tech-logo" />
                              <span>IoT</span>
                          </div>
                          <div className="tech-item">
                              <img src="/images/logo/cloud.png" alt="Cloud" className="tech-logo" />
                              <span>Cloud</span>
                          </div>
                          <div className="tech-item">
                              <img src="/images/logo/AI.png" alt="AI" className="tech-logo" />
                              <span>AI</span>
                          </div>
                          <div className="tech-item">
                              <img src="/images/logo/AI-2.png" alt="Automation" className="tech-logo" />
                              <span>Automation</span>
                          </div>
                         
                      </div>
                  )}
                  {/*Industrial Communication*/}
                  {activeTab === 'frontend' && (
                      <div className="technologies-grid">
                          <div className="tech-item">
                              <img src="/images/logo/mqt.png" alt="MQTT" className="tech-logo" />
                              <span>MQTT</span>
                          </div>
                          <div className="tech-item">
                              <img src="/images/logo/opc-ua.png" alt="OPC-UA" className="tech-logo" />
                              <span>OPC-UA</span>
                          </div>
                          <div className="tech-item">
                              <img src="/images/logo/knx.png" alt="KNX" className="tech-logo" />
                              <span>KNX</span>
                          </div>
                          <div className="tech-item">
                              <img src="/images/logo/bacnet.png" alt="BACnet" className="tech-logo" />
                              <span>BACnet</span>
                          </div>
                          <div className="tech-item">
                              <img src="/images/logo/modbus.png" alt="Modbus" className="tech-logo" />
                              <span>Modbus </span>
                          </div>
                          <div className="tech-item">
                              <img src="/images/logo/profinet.png" alt="Profinet" className="tech-logo" />
                              <span>Profinet</span>
                          </div>
                          <div className="tech-item">
                              <img src="/images/logo/profibus.png" alt="Profibus" className="tech-logo" />
                              <span>Profibus</span>
                          </div>
                          <div className="tech-item">
                              <img src="/images/logo/can.png" alt="CAN" className="tech-logo" />
                              <span>CAN</span>
                          </div>
                      </div>
                  )}
                  {/*Control Technologies*/}
                  {activeTab === 'mobile' && (
                      <div className="technologies-grid">
                          <div className="tech-item">
                              <img src="/images/logo/plc.png" alt="PLC" className="tech-logo" />
                              <span>PLC </span>
                          </div>
                          <div className="tech-item">
                              <img src="/images/logo/knx.png" alt="KNX Control" className="tech-logo" />
                              <span>KNX Control</span>
                          </div>
                          <div className="tech-item">
                              <img src="/images/logo/functional-logic.png" alt="Functional Logic" className="tech-logo" />
                              <span>Functional Logic</span>
                          </div>
                          <div className="tech-item">
                              <img src="/images/logo/safety.png" alt="Safety Systems" className="tech-logo" />
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
                      <img src="/images/auto_challenge.png" alt="Développement Logiciels" />
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
                      {/*<button className="auto-hero-cta">
                          <span>{t('discover_our_solutions')}</span>
                          <FaArrowRight />
                      </button>*/}
                  </div> 
                  <div className="service-image">
                      <img src="/images/auto_commitment.png" alt="Maintenance Informatiques" />
                  </div>
              </div>

                <div className="service-content">
                    <ContactPrompt />
                </div>
          </section>

                  <PartnersLogo />    
    </div>
  );
};

export default Automatisation;