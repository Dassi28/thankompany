import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './SoftwareDevelopment.scss';
import { FaArrowRight } from 'react-icons/fa';
import PartnersLogo from '../components/PartnersLogo';

const SoftwareDevelopment = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('backend');

    return (
        <div className="software-development-page">
            {/* 01: Hero Section */}
            <section className="sd-hero" style={{ backgroundImage: `url(/images/IT/3_Developement_Web.png)` }}>
                <div className="sd-hero-overlay"></div>
                <div className="sd-hero-content">
                    <h1 className="sd-hero-title">{t('software_dev_title')}</h1>
                    <p className="sd-hero-slogan">{t('software_dev_slogan')}</p>
                </div>
            </section>

      {/* 03: Technologies Section */}
      <section className="sd-technologies-section">
        <h2 className="section-title highlight">{t('software_dev_technologies_title')}</h2>
        <div className="tabs">
          <button className={`tab-button ${activeTab === 'backend' ? 'active' : ''}`} onClick={() => setActiveTab('backend')}>
            Backend
          </button>
          <button className={`tab-button ${activeTab === 'frontend' ? 'active' : ''}`} onClick={() => setActiveTab('frontend')}>
            Frontend
          </button>
          <button className={`tab-button ${activeTab === 'mobile' ? 'active' : ''}`} onClick={() => setActiveTab('mobile')}>
            Mobile
          </button>
          <button className={`tab-button ${activeTab === 'devops' ? 'active' : ''}`} onClick={() => setActiveTab('devops')}>
            Cloud & DevOps
          </button>
        </div>
        <div className="tab-content">
          {activeTab === 'backend' && (
            <div className="technologies-grid">
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png" alt="Java" />
                <span>Java</span>
              </div>
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/1200px-Spring_Framework_Logo_2018.svg.png" alt="Spring Boot" />
                <span>Spring Boot</span>
              </div>
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png" alt=".NET Core" />
                <span>.NET Core</span>
              </div>
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="Node.js" />
                <span>Node.js</span>
              </div>
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="Python" />
                <span>Python</span>
              </div>
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png" alt="Go" />
                <span>Go</span>
              </div>
            </div>
          )}
          {activeTab === 'frontend' && (
            <div className="technologies-grid">
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React" />
                <span>React</span>
              </div>
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png" alt="Angular" />
                <span>Angular</span>
              </div>
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" alt="Vue.js" />
                <span>Vue.js</span>
              </div>
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="TypeScript" />
                <span>TypeScript</span>
              </div>
            </div>
          )}
          {activeTab === 'mobile' && (
            <div className="technologies-grid">
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Google-flutter-logo.png/1200px-Google-flutter-logo.png" alt="Flutter" />
                <span>Flutter</span>
              </div>
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React Native" />
                <span>React Native</span>
              </div>
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png" alt="Kotlin" />
                <span>Kotlin</span>
              </div>
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Swift_logo.svg/1200px-Swift_logo.svg.png" alt="Swift" />
                <span>Swift</span>
              </div>
            </div>
          )}
          {activeTab === 'devops' && (
            <div className="technologies-grid">
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png" alt="AWS" />
                <span>AWS</span>
              </div>
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1200px-Microsoft_Azure_Logo.svg.png" alt="Azure" />
                <span>Azure</span>
              </div>
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Google_Cloud_Logo.svg/1200px-Google_Cloud_Logo.svg.png" alt="Google Cloud" />
                <span>Google Cloud</span>
              </div>
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_logo.svg/1200px-Docker_logo.svg.png" alt="Docker" />
                <span>Docker</span>
              </div>
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1200px-Kubernetes_logo_without_workmark.svg.png" alt="Kubernetes" />
                <span>Kubernetes</span>
              </div>
              <div className="tech-item">
                <span>CI/CD</span>
              </div>
            </div>
          )}
        </div>
      </section>

            {/* SAP EAM/PM Consulting */}
            <section className="service-section">
                <div className="service-content">
                    <div className="service-text">
                        <h2 className='highlight'>{t('software_dev_sd_title')}</h2>
                        <p>{t('software_dev_sd_description')}</p>
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
                        <h2 className='highlight'>{t('software_dev_expertise_title')}</h2>
                        <p>{t('software_dev_expertise_description')}</p>
                        <h4>{t('software_dev_expertise_service_title')}</h4>
                        <ul>
                            <li>{t('software_dev_expertise_service_1')}</li>
                            <li>{t('software_dev_expertise_service_2')}</li>
                            <li>{t('software_dev_expertise_service_3')}</li>
                            <li>{t('software_dev_expertise_service_4')}</li>
                            <li>{t('software_dev_expertise_service_5')}</li>
                            <li>{t('software_dev_expertise_service_6')}</li>
                        </ul>
                    </div>
                    <div className="service-image">
                        <img src="/images/IT/2_Gestion_Donnees.png" alt="Gestion des Donn�es" />
                    </div>
                </div>
            </section>

            {/* Why SAP S/4HANA Matters*/}
            <section className="service-section">
                <div className="service-content">
                    <div className="service-text">
                        <h2 className='highlight'>{t('software_dev_why_title')}</h2>
                        <p>{t('software_dev_why_description')}</p>
                        <h4>{t('software_dev_why_service_title')}</h4>
                        <ul>
                            <li>{t('software_dev_why_service_1')}</li>
                            <li>{t('software_dev_why_service_2')}</li>
                            <li>{t('software_dev_why_service_3')}</li>
                            <li>{t('software_dev_why_service_4')}</li>
                            <li>{t('software_dev_why_service_5')}</li>
                            <li>{t('software_dev_why_service_6')}</li>
                        </ul>
                        <p>{t('software_dev_why_conclusion')}</p>
                        <p>{t('software_dev_why_conclusion2')}</p>
                    </div>
                    <div className="service-image">
                        <img src="/images/IT/3_Developement_Web.png" alt="D�veloppement Web" />
                    </div>
                </div>
            </section>

            {/* Your Path to S/4HANA EAM  */}
            <section className="service-section alt-bg">
                <div className="service-content reverse">
                    <div className="service-text">
                        <h2 className='highlight'>{t('software_dev_solution_title')}</h2>
                        <p>{t('software_dev_solution_description')}</p>
                        <h4>{t('software_dev_solution_service_title')}</h4>
                        <ul>
                            <li>{t('software_dev_solution_service_1')}</li>
                            <li>{t('software_dev_solution_service_2')}</li>
                            <li>{t('software_dev_solution_service_3')}</li>
                            <li>{t('software_dev_solution_service_4')}</li>
                            <li>{t('software_dev_solution_service_5')}</li>
                        </ul>
                        <p>{t('software_dev_why_conclusion')}</p>
                    </div>
                    <div className="service-image">
                        <img src="/images/IT/4_Development.png" alt="D�veloppement Logiciels" />
                    </div>
                </div>
            </section>

            {/* Our Guarantee */}
            <section className="service-section">
                <div className="service-content">
                    <div className="service-text">
                        <h2 className='highlight'>{t('software_dev_guarantee_title')}</h2>
                        <p>{t('software_dev_guarantee_description')}</p>
                        <h4>{t('software_dev_guarantee_service_title')}</h4>
                        <ul>
                            <li>{t('software_dev_guarantee_service_1')}</li>
                            <li>{t('software_dev_guarantee_service_2')}</li>
                            <li>{t('software_dev_guarantee_service_3')}</li>
                            <li>{t('software_dev_guarantee_service_4')}</li>
                        </ul>
                        <p className="quote">{t('software_dev_maintenance_quote')}</p>
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



            <PartnersLogo />
        </div>
  );
};

export default SoftwareDevelopment;