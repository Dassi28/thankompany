import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './SoftwareDevelopment.scss';
import { FaArrowRight } from 'react-icons/fa';
import PartnersLogo from '../components/PartnersLogo';
import ContactPrompt from '../components/ContactPrompt';

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

     
            {/* Empower Your Digital Solutions*/}
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

            {/* Our Expertise */}
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

            {/* Why Modern Software Development Matters*/}
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
                                <img src="/images/logo/java.png" alt="Java" />
                                <span>Java</span>
                            </div>
                            <div className="tech-item">
                                <img src="/images/logo/springboot.png" alt="Spring Boot" />
                                <span>Spring Boot</span>
                            </div>
                            <div className="tech-item">
                                <img src="/images/logo/netcore.png" alt=".NET Core" />
                                <span>.NET Core</span>
                            </div>
                            <div className="tech-item">
                                <img src="/images/logo/nodejs.png" alt="Node.js" />
                                <span>Node.js</span>
                            </div>
                            <div className="tech-item">
                                <img src="/images/logo/python.png" alt="Python" />
                                <span>Python</span>
                            </div>
                            <div className="tech-item">
                                <img src="/images/logo/go.png" alt="Go" />
                                <span>Go</span>
                            </div>
                        </div>
                    )}
                    {activeTab === 'frontend' && (
                        <div className="technologies-grid">
                            <div className="tech-item">
                                <img src="/images/logo/react.png" alt="React" />
                                <span>React</span>
                            </div>
                            <div className="tech-item">
                                <img src="/images/logo/angular.png" alt="Angular" />
                                <span>Angular</span>
                            </div>
                            <div className="tech-item">
                                <img src="/images/logo/vuejs.png" alt="Vue.js" />
                                <span>Vue.js</span>
                            </div>
                            <div className="tech-item">
                                <img src="/images/logo/ts.png" alt="TypeScript" />
                                <span>TypeScript</span>
                            </div>
                        </div>
                    )}
                    {activeTab === 'mobile' && (
                        <div className="technologies-grid">
                            <div className="tech-item">
                                <img src="/images/logo/flutter.png" alt="Flutter" />
                                <span>Flutter</span>
                            </div>
                            <div className="tech-item">
                                <img src="/images/logo/react.png" alt="React Native" />
                                <span>React Native</span>
                            </div>
                            <div className="tech-item">
                                <img src="/images/logo/kotlin.png" alt="Kotlin" />
                                <span>Kotlin</span>
                            </div>
                            <div className="tech-item">
                                <img src="/images/logo/swift.png" alt="Swift" />
                                <span>Swift</span>
                            </div>
                        </div>
                    )}
                    {activeTab === 'devops' && (
                        <div className="technologies-grid">
                            <div className="tech-item">
                                <img src="/images/logo/aws.png" alt="AWS" />
                                <span>AWS</span>
                            </div>
                            <div className="tech-item">
                                <img src="/images/logo/azure.png" alt="Azure" />
                                <span>Azure</span>
                            </div>
                            <div className="tech-item">
                                <img src="/images/logo/google-cloud.png" alt="Google Cloud" />
                                <span>Google Cloud</span>
                            </div>
                            <div className="tech-item">
                                <img src="/images/logo/docker.png" alt="Docker" />
                                <span>Docker</span>
                            </div>
                            <div className="tech-item delete-background-image ">
                                <img src="/images/logo/kubernetes.png" alt="Kubernetes" />
                                <span>Kubernetes</span>
                            </div>
                            <div className="tech-item delete-background-image ">
                                <img src="/images/logo/ci-cd.png" alt="CI/CD" />
                                <span>CI/CD</span>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* How We Master Your Software Modernization  */}
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
                        {/*<button className="auto-hero-cta">
                            <span>{t('discover_our_solutions')}</span>
                            <FaArrowRight />
                        </button>*/}
                    </div>
                    <div className="service-image">
                        <img src="/images/IT/05_maintenance.png" alt="Maintenance Informatiques" />
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

export default SoftwareDevelopment;