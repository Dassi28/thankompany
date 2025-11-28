import React from 'react';
import { useTranslation } from 'react-i18next';
import './ITService.scss';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import PartnersLogo from '../components/PartnersLogo';
import ContactPrompt from '../components/ContactPrompt';

const ITService = () => {
    const { t } = useTranslation();
    return (
        <div className="it-service-page">
            {/* 01: Hero Section */}

            {/* 01: Hero Section */}
            <section className="it-hero" style={{ backgroundImage: `url(/images/img-24.jpg)` }}>
                <div className="it-hero-overlay"></div>
                <div className="it-hero-content">
                    <h1 className="it-hero-title">{t('sap_eam_title')}</h1>
                    <p className="it-hero-slogan">{t('sap_eam_slogan')}</p>
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
                        <h4 className='highlight'>{t('sap_eam_expertise_service_title')}</h4>
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
                        <h4 className='highlight'>{t('sap_eam_why_service_title')}</h4>
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
                        <h4 className='highlight'>{t('sap_eam_solution_service_title')}</h4>
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
                        <h4 className='highlight'>{t('sap_eam_guarantee_service_title')}</h4>
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

                <div className="service-content">
                    <ContactPrompt />
                </div>
            </section>

            <PartnersLogo />
        </div>
    );
};

export default ITService;
