import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';
import './Home.scss';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
// Importation des icônes
import { FaShieldAlt, FaChartLine, FaCogs, FaHandshake, FaStoreAlt, FaSyncAlt, FaCog, FaLightbulb, FaUsers, FaWhatsapp, FaArrowRight, FaDesktop, FaBolt, FaStar, FaAtlas, GiFaceToFace, SiAwsfargate, FaArrowTrendUp } from 'react-icons/fa';

import PartnersLogo from '../components/PartnersLogo';

const Home = () => {
    const { t } = useTranslation();
    const form = useRef();
    const navigate = useNavigate();

    const sendEmail = (e) => {
        e.preventDefault();

        const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };



    return (
        <div className="home">
            {/* Section Héro */}
            <section className="hero">
                <div className="hero-bg-overlay"></div>
                <img src="/images/img-15.jpg" alt="Hero Transport" className="hero-bg-image" />

                <div className="hero-content">
                    <div className="hero-text">
                        <h1>{t('home_intro_title')}</h1>
                        <h2>{t('home_intro_subtitle')}</h2>
                        <h3>{t('home_sap_eam_title')}</h3>
                        <h3>{t('home_automation_title')}</h3>
                        <h3>{t('home_software_dev_title')}</h3>
                        <a href="#offer" className="hero-cta-button">
                            <span>{t('discover_solutions_cta')}</span>
                            <FaArrowRight className="arrow-icon" />
                        </a>
                    </div>
                </div>

                <div className="qualities-bar">
                    <div className="quality-item">
                        <FaDesktop className="quality-icon" />
                        <span>{t('home_values_description_listening')}</span>
                    </div>
                    <div className="quality-item">
                        <FaBolt className="quality-icon" />
                        <span>{t('home_values_description_reactivity')}</span>
                    </div>
                    <div className="quality-item">
                        <FaStar className="quality-icon" />
                        <span>{t('home_values_description_customer_satisfaction')}</span>
                    </div>
                    <div className="quality-item">
                        <FaChartLine className="quality-icon" />
                        <span>{t('home_values_description_quality_precision')}</span>
                    </div>
                    <div className="quality-item">
                        <FaLightbulb className="quality-icon" />
                        <span>{t('home_values_description_innovation')}</span>
                    </div>
                    <div className="quality-item">
                        <FaAtlas className="quality-icon" />
                        <span>{t('home_values_description_internationality')}</span>
                    </div>
                    <div className="quality-item">
                        <FaHandshake className="quality-icon" />
                        <span>{t('home_values_description_partnership')}</span>
                    </div>
                </div>
            </section>


            {/* Section "Qui sommes-nous" */}
            <section className="about" id="about">
                <div className="about-text">
                    <h2 className='highlight'>{t('home_intro_title_1')}</h2>
                    <p>
                        {t('home_intro_description')}
                    </p>
                    <p>
                        {t('home_focus_area')}
                    </p>
                    <p>
                        {t('home_focus_area_2')}
                    </p>
                </div>
                <div className="about-img">
                    <img src="/images/img-25.jpg" alt="About illustration" />
                </div>
            </section>

            {/* Section Offre */}
            <section className="offer-section" id="offer">
                <h3 className="section-title">
                    <span className="highlight">{t('home_business_areas_title')}:</span> {t('home_offer_slogan')}
                </h3>
                <div className="service-cards-container">
                    <div className="service-card">
                        <div className="card-icon">
                            <img src="/images/Home/hp_Service_informatique.png" alt="SAP EAM/PM Conculting Icon" />
                        
                        </div>
                        <h4 className='highlight'>{t('home_sap_eam_expertise_title')}</h4>
                        <h5>{t('home_sap_eam_expertise_description')}</h5>
                        <ul>
                            <li>{t('home_sap_eam_expertise_1')}</li>
                            <li>{t('home_sap_eam_expertise_2')}</li>
                            <li>{t('home_sap_eam_expertise_3')}</li>
                            <li>{t('home_sap_eam_expertise_4')}</li>
                            <li>{t('home_sap_eam_expertise_5')}</li>
                            <li>{t('home_sap_eam_expertise_6')}</li>
                        </ul>
                    </div>

                    <div className="service-card">
                        <div className="card-icon">
                            <img src="/images/Home/HP_service-electro.png" alt="Electronics Services Icon" />
                      </div>
                        <h4 className='highlight'>{t('home_automation_expertise_title')}</h4>
                        <h5>{t('home_automation_expertise_description')}</h5>
                        <ul>
                            <li>{t('home_automation_expertise_1')}</li>
                            <li>{t('home_automation_expertise_2')}</li>
                            <li>{t('home_automation_expertise_3')}</li>
                            <li>{t('home_automation_expertise_4')}</li>
                            <li>{t('home_automation_expertise_5')}</li>
                            <li>{t('home_automation_expertise_6')}</li>
                        </ul>
                    </div>


                    <div className="service-card">
                        <div className="card-icon">
                            <img src="/images/software.jpg" alt="Logistics Services Icon" />
                        </div>
                        <h4 className='highlight'>{t('home_software_dev_expertise_title')}</h4>
                        <h5>{t('home_software_dev_expertise_description')}</h5>
                        <ul>
                            <li>{t('home_software_dev_expertise_1')}</li>
                            <li>{t('home_software_dev_expertise_2')}</li>
                            <li>{t('home_software_dev_expertise_3')}</li>
                            <li>{t('home_software_dev_expertise_4')}</li>
                            <li>{t('home_software_dev_expertise_5')}</li>
                            <li>{t('home_software_dev_expertise_6')}</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section Mission & Vision */}
            <section className="mission-vision-section">
                {/* Mission: Image à gauche, Texte à droite */}
                <div className="mission-vision-item">
                    <div className="mv-image-container">
                        <img src="/images/img-22.jpg" alt="Employé d'entrepôt" />
                    </div>
                    <div className="mv-text-container">
                        <h3 className='highlight'>{t('home_mission_title')}</h3>
                        <p>
                            {t('home_mission_description')}
                        </p>
                    </div>
                </div>
                {/* Vision: Texte à gauche, Image à droite */}
                <div className="mission-vision-item">
                    <div className="mv-text-container">
                        <h3 className='highlight'>{t('home_vision_title')}</h3>
                        <p>
                            {t('home_vision_description')}
                        </p>
                    </div>
                    <div className="mv-image-container">
                        <img src="/images/img-19.jpg" alt="Manager dans un entrepôt" />
                    </div>
                </div>
            </section>

            {/* Section Garantie */}
            <section className="guarantee-section">
                <div className="guarantee-overlay"></div>
                <div className="guarantee-content">
                    <div className="guarantee-text">
                        <h3>{t('home_guarantee_title')}</h3>
                        <p>
                            {t('home_guarantee_description')}
                        </p>
                        <a href="#contact" className="guarantee-cta-button">{t('home_guarantee_cta')}</a>
                    </div>
                    <div className="guarantee-grid">
                        <div className="guarantee-item">
                            <div className="guarantee-icon-container"><img src="/images/Home/garantie1.png" alt="garantie" /></div>
                            <span>{t('home_guarantee_item_1')}</span>
                        </div>
                        <div className="guarantee-item">
                            <div className="guarantee-icon-container"><img src="/images/Home/garantie2.png" alt="garantie" /></div>
                            <span>{t('home_guarantee_item_2')}</span>
                        </div>
                        <div className="guarantee-item">
                            <div className="guarantee-icon-container"><img src="/images/Home/garantie3.png" alt="garantie" /></div>
                            <span>{t('home_guarantee_item_3')}</span>
                        </div>
                        <div className="guarantee-item">
                            <div className="guarantee-icon-container"><img src="/images/Home/garantie4.png" alt="garantie" /></div>
                            <span>{t('home_guarantee_item_4')}</span>
                        </div>
                        <div className="guarantee-item">
                            <div className="guarantee-icon-container"><img src="/images/Home/garantie5.png" alt="garantie" /></div>
                            <span>{t('home_guarantee_item_5')}</span>
                        </div>
                        <div className="guarantee-item">
                            <div className="guarantee-icon-container"><img src="/images/Home/garantie6.png" alt="garantie" /></div>
                            <span>{t('home_guarantee_item_6')}</span>
                        </div>
                    </div>
                </div>
            </section>

        
            {/* Section Résultats */}
            <section className="results-section">
                <div className="results-header">
                    <h3 className="section-title">
                        <span className="highlight">{t('home_results_title')}</span> {t('home_results_subtitle')}
                    </h3>
                    <p className="section-subtitle">
                        {t('home_results_description')}
                    </p>
                </div>
                <div className="results-cards-container">
                    <div className="result-card">
                        <span className="card-number">01</span>
                        <p className="card-title">{t('home_results_item_1_title')}</p>
                        <h4 className="card-stat">
                            <Odometer format="d" duration={3000} value={parseInt(t('home_results_item_1_stat'))} />+
                        </h4>
                        <p className="card-subtitle">{t('home_results_item_1_subtitle')}</p>
                        <hr />
                    </div>
                    <div className="result-card">
                        <span className="card-number">02</span>
                        <p className="card-title">{t('home_results_item_2_title')}</p>
                        <h4 className="card-stat">
                            <Odometer format="d" duration={3000} value={parseInt(t('home_results_item_2_stat'))} />%
                        </h4>
                        <p className="card-subtitle">{t('home_results_item_2_subtitle')}</p>
                        <hr />
                    </div>
                    <div className="result-card">
                        <span className="card-number">03</span>
                        <p className="card-title">{t('home_results_item_3_title')}</p>
                        <h4 className="card-stat">
                            <Odometer format="d" duration={3000} value={parseInt(t('home_results_item_3_stat'))} />+
                        </h4>
                        <p className="card-subtitle">{t('home_results_item_3_subtitle')}</p>
                        <hr />
                    </div>
                    <div className="result-card">
                        <span className="card-number">04</span>
                        <p className="card-title">{t('home_results_item_4_title')}</p>
                        <h4 className="card-stat">
                            <Odometer format="d" duration={3000} value={parseInt(t('home_results_item_4_stat'))} />+
                        </h4>
                        <p className="card-subtitle">{t('home_results_item_4_subtitle')}</p>
                        <hr />
                    </div>
                    <div className="result-card">
                        <span className="card-number">05</span>
                        <p className="card-title">{t('home_results_item_5_title')}</p>
                        <h4 className="card-stat">
                            <Odometer format="d" duration={3000} value={parseInt(t('home_results_item_5_stat'))} /> %
                        </h4>
                        <p className="card-subtitle">{t('home_results_item_5_subtitle')}</p>
                        <hr />
                    </div>
                </div>
            </section>

             {/* Section Contact */}
                        <section className="contact-section" id='contact'>
                            <div className="contact-bg-overlay"></div>
                            
                            <div className="contact-content-wrapper">
                                
                                {/* 1. Carte WhatsApp (Gauche) */}
                                <div className="contact-box whatsapp-box">
                                    <p className="wa-top-text">{t('whatsapp_write_to_us_home')}</p>
                                    <div className="wa-icon-wrapper">
                                        <a href="https://wa.me/+4917626779275" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                            <FaWhatsapp />
                                        </a>
                                    </div>
                                    <p className="wa-bottom-text">{t('whatsapp_label_home')}</p>
                                </div>
            
                                {/* 2. Infos "Meet Us" (Centre) */}
                                <div className="contact-box info-box">
                                    <h4 className="info-title">{t('contact_meet_us_title_home')}</h4>
                                    
                                    {/* Bloc Allemagne */}
                                    <div className="country-block">
                                        <div className="country-header">
                                            <img src="images/flags/all.png" alt="DEU" className="country-flag" />
                                            <span className="country-name">{t('country_germany')}</span>
                                        </div>
                                        <div className="address-lines">
                                            <p>Mundenheimer Str. 177</p>
                                            <p>67061 Ludwigshafen</p>
                                            <p className="phone-number">{t('home_contact_phone_germany')}</p>
                                        </div>
                                    </div>
            
                                    {/* Bloc Cameroun */}
                                    <div className="country-block">
                                        <div className="country-header">
                                            <img src="images/flags/cmr.png" alt="CMR" className="country-flag" />
                                            <span className="country-name">{t('country_cameroon')}</span>
                                        </div>
                                        <div className="address-lines">
                                            <p>BP 7509</p>
                                            <p>Douala, {t('country_cameroon')}</p>
                                            <p className="phone-number">{t('home_contact_phone_cameroon')}</p>
                                        </div>
                                    </div>
                                </div>
            
                                {/* 3. Formulaire (Droite) */}
                                <div className="contact-box form-box">
                                    <h4 className="form-title">{t('contact_form_title')}</h4>
                                    <form ref={form} onSubmit={sendEmail}>
                                        <div className="input-group">
                                            <input type="text" name="name" placeholder={t('contact_form_name_placeholder')} required/>
                                        </div>
                                        <div className="input-group">
                                            <input type="email" name="email" placeholder={t('contact_form_email_placeholder')} required/>
                                        </div>
                                        <div className="input-group">
                                            <input type="text" name="title" placeholder={t('contact_form_subject_placeholder')} required/>
                                        </div>
                                        <div className="input-group">
                                            <textarea name="message" placeholder={t('contact_form_message_placeholder')} required></textarea>
                                        </div>
                                        <button type="submit" className="submit-btn">{t('contact_form_submit_button')}</button>
                                    </form>
                                </div>
            
                            </div>
                        </section>

            <PartnersLogo />
        </div>
    );
};

export default Home;
