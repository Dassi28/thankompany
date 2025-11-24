import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.scss';
// Importation des icônes
import { FaShieldAlt, FaChartLine, FaCogs, FaHandshake, FaStoreAlt, FaSyncAlt, FaCog, FaLightbulb, FaUsers, FaWhatsapp, FaArrowRight, FaDesktop, FaBolt, FaStar, FaAtlas, GiFaceToFace, SiAwsfargate, FaArrowTrendUp } from 'react-icons/fa';

import PartnersLogo from '../components/PartnersLogo';

const Home = () => {
    const { t } = useTranslation();
    return (
        <div className="home">
            {/* Section Héro */}
            <section className="hero">
                <div className="hero-bg-overlay"></div>
                <img src="/images/home.jpg" alt="Hero Transport" className="hero-bg-image" />

                <div className="hero-content">
                    <div className="hero-text">
                        <h1>{t('home_intro_title')}</h1>
                        <h2>{t('home_intro_subtitle')}</h2>
                        <h3>{t('home_sap_eam_title')}</h3>
                        <h3>{t('home_automation_title')}</h3>
                        <h3>{t('home_software_dev_title')}</h3>
                        <button className="hero-cta-button">
                            <span>Discover Our Solutions</span>
                            <FaArrowRight className="arrow-icon" />
                        </button>
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
                    <h2>{t('home_intro_title')}</h2>
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
                    <img src="/images/hp_qui_sommes_nous.png" alt="About illustration" />
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
                        <h4>{t('home_sap_eam_expertise_title')}</h4>
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
                        <h4>{t('home_automation_expertise_title')}</h4>
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
                            <img src="/images/Home/HP_service-logist.png" alt="Logistics Services Icon" />
                        </div>
                        <h4>{t('home_software_dev_expertise_title')}</h4>
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
                        <img src="/images/Home/Notre_Mission.png" alt="Employé d'entrepôt" />
                    </div>
                    <div className="mv-text-container">
                        <h3>{t('home_mission_title')}</h3>
                        <p>
                            {t('home_mission_description')}
                        </p>
                    </div>
                </div>
                {/* Vision: Texte à gauche, Image à droite */}
                <div className="mission-vision-item">
                    <div className="mv-text-container">
                        <h3>{t('home_vision_title')}</h3>
                        <p>
                            {t('home_vision_description')}
                        </p>
                    </div>
                    <div className="mv-image-container">
                        <img src="/images/Home/HP_Vision.png" alt="Manager dans un entrepôt" />
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
                        <button className="guarantee-cta-button">{t('home_guarantee_cta')}</button>
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

            {/* Section Meilleurs Produits */}
            {/*<section className="best-products-section">*/}
            {/*  <h3 className="section-title">*/}
            {/*    Nos meilleurs produits: <strong>Nous sommes votre meilleur partenaire</strong>*/}
            {/*  </h3>*/}
            {/*  <div className="products-container">*/}
            {/*    <div className="product-card">*/}
            {/*      <div className="product-image">*/}
            {/*        <img src="/images/Home/Shop1.png" alt="Product 1"/>*/}
            {/*      </div>*/}
            {/*      <div className="product-info">*/}
            {/*        <h4>Kenneth Simpson</h4>*/}
            {/*        <p>Operations</p>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    <div className="product-card">*/}
            {/*      <div className="product-image">*/}
            {/*        <img src="/images/Home/Shop2.png" alt="Product 2" />*/}
            {/*      </div>*/}
            {/*      <div className="product-info">*/}
            {/*        <h4>Jonathan Gibson</h4>*/}
            {/*        <p>Informatique</p>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    <div className="product-card">*/}
            {/*      <div className="product-image">*/}
            {/*        <img src="/images/Home/Shop3.png" alt="Product 3" />*/}
            {/*      </div>*/}
            {/*      <div className="product-info">*/}
            {/*        <h4>Dustin Lefkowitz</h4>*/}
            {/*        <p>Logistique</p>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    <div className="product-card">*/}
            {/*      <div className="product-image">*/}
            {/*        <img src="/images/Home/Shop4.png" alt="Product 4" />*/}
            {/*      </div>*/}
            {/*      <div className="product-info">*/}
            {/*        <h4>Weston Trevino</h4>*/}
            {/*        <p>Drivers</p>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*  <button className="products-nav-arrow"> */}
            {/*    <FaArrowRight />*/}
            {/*  </button>*/}
            {/*</section>*/}

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
                        <h4 className="card-stat">{t('home_results_item_1_stat')}</h4>
                        <p className="card-subtitle">{t('home_results_item_1_subtitle')}</p>
                        <hr />
                    </div>
                    <div className="result-card">
                        <span className="card-number">02</span>
                        <p className="card-title">{t('home_results_item_2_title')}</p>
                        <h4 className="card-stat">{t('home_results_item_2_stat')}</h4>
                        <p className="card-subtitle">{t('home_results_item_2_subtitle')}</p>
                        <hr />
                    </div>
                    <div className="result-card">
                        <span className="card-number">03</span>
                        <p className="card-title">{t('home_results_item_3_title')}</p>
                        <h4 className="card-stat">{t('home_results_item_3_stat')}</h4>
                        <p className="card-subtitle">{t('home_results_item_3_subtitle')}</p>
                        <hr />
                    </div>
                    <div className="result-card">
                        <span className="card-number">04</span>
                        <p className="card-title">{t('home_results_item_4_title')}</p>
                        <h4 className="card-stat">{t('home_results_item_4_stat')}</h4>
                        <p className="card-subtitle">{t('home_results_item_4_subtitle')}</p>
                        <hr />
                    </div>
                    <div className="result-card">
                        <span className="card-number">05</span>
                        <p className="card-title">{t('home_results_item_5_title')}</p>
                        <h4 className="card-stat">{t('home_results_item_5_stat')}</h4>
                        <p className="card-subtitle">{t('home_results_item_5_subtitle')}</p>
                        <hr />
                    </div>
                </div>
            </section>

            {/* Section Contact */}
            <section className="contact-section">
                <div className="contact-bg-image"></div>
                <div className="contact-content">
                    <div className="contact-left">
                        <div className="contact-card whatsapp-card">
                            <p>{t('home_contact_whatsapp_text')}</p>
                            <FaWhatsapp className="whatsapp-icon" />
                            <span>{t('home_contact_whatsapp_label')}</span>
                        </div>
                    </div>
                    <div className="contact-center">
                        <div className="contact-card meet-us-card">
                            <h4>{t('home_contact_meet_us_title')}</h4>
                            <p>{t('home_contact_meet_us_location_1')}</p>
                            <p>{t('home_contact_meet_us_location_2')}</p>
                        </div>
                    </div>
                    <div className="contact-right">
                        <div className="contact-card form-card">
                            <h4>{t('home_contact_form_title')}</h4>
                            <p>{t('home_contact_form_subtitle')}</p>
                            <form>
                                <input type="text" placeholder={t('home_contact_form_name_placeholder')} />
                                <input type="email" placeholder={t('home_contact_form_email_placeholder')} />
                                <input type="text" placeholder={t('home_contact_form_subject_placeholder')} />
                                <textarea placeholder={t('home_contact_form_message_placeholder')}></textarea>
                                <button type="submit">{t('home_contact_form_submit_button')}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <PartnersLogo />


        </div>
    );
};

export default Home;
