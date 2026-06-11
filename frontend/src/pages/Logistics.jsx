import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Logistics.scss';
import PartnersLogo from '../components/PartnersLogo';

const Logistics = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="logistics-page">
            {/* Hero Section */}
            <section className="logistics-hero" style={{ backgroundImage: `url(/images/img-32.jpg)` }}>
                <div className="logistics-hero-overlay"></div>
                <div className="logistics-hero-content">
                    <h1 className="logistics-hero-title" dangerouslySetInnerHTML={{ __html: t('logistics_africa_hero_title') }} />
                    <p className="logistics-hero-slogan" dangerouslySetInnerHTML={{ __html: t('logistics_africa_hero_desc') }} />
                    <div className="hero-buttons">
                        <a href="https://smartls.cm/smart-quote" target="_blank" rel="noopener noreferrer" className="hero-btn primary">
                            {t('logistics_africa_hero_cta_quote')}
                        </a>
                        <a href="#contact" className="hero-btn secondary">
                            {t('logistics_africa_hero_cta_more')}
                        </a>
                    </div>
                </div>
            </section>

            {/* Synergy */}
            <section className="service-section">
                <div className="service-content">
                    <div className="service-text">
                        <h2 className="highlight" dangerouslySetInnerHTML={{ __html: t('logistics_africa_syn_title') }} />
                        <p dangerouslySetInnerHTML={{ __html: t('logistics_africa_syn_lead') }} />

                        <h4 className="highlight">Thank Kompany GmbH</h4>
                        <p dangerouslySetInnerHTML={{ __html: t('logistics_africa_syn_desc1') }} />

                        <h4 className="highlight">Smart Logistics &amp; Services Ltd</h4>
                        <p dangerouslySetInnerHTML={{ __html: t('logistics_africa_syn_desc2') }} />
                    </div>
                    <div className="service-image">
                        <img src="/images/sap_intro.png" alt="Synergy" />
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="service-section alt-bg">
                <div className="service-content reverse">
                    <div className="service-text">
                        <h2 className="highlight" dangerouslySetInnerHTML={{ __html: t('logistics_africa_bene_title') }} />
                        <p dangerouslySetInnerHTML={{ __html: t('logistics_africa_bene_lead') }} />
                        <ul>
                            <li><strong dangerouslySetInnerHTML={{ __html: t('logistics_africa_bene_t1') }} />: <span dangerouslySetInnerHTML={{ __html: t('logistics_africa_bene_d1') }} /></li>
                            <li><strong dangerouslySetInnerHTML={{ __html: t('logistics_africa_bene_t2') }} />: <span dangerouslySetInnerHTML={{ __html: t('logistics_africa_bene_d2') }} /></li>
                            <li><strong dangerouslySetInnerHTML={{ __html: t('logistics_africa_bene_t3') }} />: <span dangerouslySetInnerHTML={{ __html: t('logistics_africa_bene_d3') }} /></li>
                            <li><strong dangerouslySetInnerHTML={{ __html: t('logistics_africa_bene_t4') }} />: <span dangerouslySetInnerHTML={{ __html: t('logistics_africa_bene_d4') }} /></li>
                            <li><strong dangerouslySetInnerHTML={{ __html: t('logistics_africa_bene_t5') }} />: <span dangerouslySetInnerHTML={{ __html: t('logistics_africa_bene_d5') }} /></li>
                            <li><strong dangerouslySetInnerHTML={{ __html: t('logistics_africa_bene_t6') }} />: <span dangerouslySetInnerHTML={{ __html: t('logistics_africa_bene_d6') }} /></li>
                        </ul>
                    </div>
                    <div className="service-image">
                        <img src="/images/sap_expertise.png" alt="Benefits" />
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="service-section">
                <div className="service-content">
                    <div className="service-text">
                        <h2 className="highlight" dangerouslySetInnerHTML={{ __html: t('logistics_africa_srv_title') }} />
                        <p dangerouslySetInnerHTML={{ __html: t('logistics_africa_srv_lead') }} />
                        <ul>
                            <li><strong dangerouslySetInnerHTML={{ __html: t('logistics_africa_srv_t1') }} />: <span dangerouslySetInnerHTML={{ __html: t('logistics_africa_srv_d1') }} /></li>
                            <li><strong dangerouslySetInnerHTML={{ __html: t('logistics_africa_srv_t2') }} />: <span dangerouslySetInnerHTML={{ __html: t('logistics_africa_srv_d2') }} /></li>
                            <li><strong dangerouslySetInnerHTML={{ __html: t('logistics_africa_srv_t3') }} />: <span dangerouslySetInnerHTML={{ __html: t('logistics_africa_srv_d3') }} /></li>
                            <li><strong dangerouslySetInnerHTML={{ __html: t('logistics_africa_srv_t4') }} />: <span dangerouslySetInnerHTML={{ __html: t('logistics_africa_srv_d4') }} /></li>
                            <li><strong dangerouslySetInnerHTML={{ __html: t('logistics_africa_srv_t5') }} />: <span dangerouslySetInnerHTML={{ __html: t('logistics_africa_srv_d5') }} /></li>
                            <li><strong dangerouslySetInnerHTML={{ __html: t('logistics_africa_srv_t6') }} />: <span dangerouslySetInnerHTML={{ __html: t('logistics_africa_srv_d6') }} /></li>
                        </ul>
                    </div>
                    <div className="service-image">
                        <img src="/images/img-16.jpg" alt="Services" />
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="service-section alt-bg">
                <div className="service-content reverse">
                    <div className="service-text">
                        <h2 className="highlight" dangerouslySetInnerHTML={{ __html: t('logistics_africa_ind_title') }} />
                        <p dangerouslySetInnerHTML={{ __html: t('logistics_africa_ind_lead') }} />
                        <ul>
                            <li><strong dangerouslySetInnerHTML={{ __html: t('logistics_africa_ind_t1') }} />: <span dangerouslySetInnerHTML={{ __html: t('logistics_africa_ind_d1') }} /></li>
                            <li><strong dangerouslySetInnerHTML={{ __html: t('logistics_africa_ind_t2') }} />: <span dangerouslySetInnerHTML={{ __html: t('logistics_africa_ind_d2') }} /></li>
                            <li><strong dangerouslySetInnerHTML={{ __html: t('logistics_africa_ind_t3') }} />: <span dangerouslySetInnerHTML={{ __html: t('logistics_africa_ind_d3') }} /></li>
                            <li><strong dangerouslySetInnerHTML={{ __html: t('logistics_africa_ind_t4') }} />: <span dangerouslySetInnerHTML={{ __html: t('logistics_africa_ind_d4') }} /></li>
                        </ul>
                    </div>
                    <div className="service-image">
                        <img src="/images/sap_challenge.png" alt="Industries" />
                    </div>
                </div>
            </section>

            {/* ESG */}
            <section className="service-section">
                <div className="service-content">
                    <div className="service-text">
                        <h2 className="highlight" dangerouslySetInnerHTML={{ __html: t('logistics_africa_esg_title') }} />
                        <p dangerouslySetInnerHTML={{ __html: t('logistics_africa_esg_lead') }} />
                        <ul>
                            <li><strong dangerouslySetInnerHTML={{ __html: t('logistics_africa_esg_t1') }} />: <span dangerouslySetInnerHTML={{ __html: t('logistics_africa_esg_d1') }} /></li>
                            <li><strong dangerouslySetInnerHTML={{ __html: t('logistics_africa_esg_t2') }} />: <span dangerouslySetInnerHTML={{ __html: t('logistics_africa_esg_d2') }} /></li>
                            <li><strong dangerouslySetInnerHTML={{ __html: t('logistics_africa_esg_t3') }} />: <span dangerouslySetInnerHTML={{ __html: t('logistics_africa_esg_d3') }} /></li>
                        </ul>
                    </div>
                    <div className="service-image">
                        <img src="/images/sap_commitment.png" alt="ESG" />
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="service-section alt-bg">
                <div className="service-content">
                    <div className="service-text" style={{ flex: 'none', width: '100%' }}>
                        <h2 className="highlight" dangerouslySetInnerHTML={{ __html: t('logistics_africa_faq_title') }} />
                        <p dangerouslySetInnerHTML={{ __html: t('logistics_africa_faq_lead') }} />

                        <div className="faq-container">
                            {[1, 2, 3, 4, 5].map((num) => {
                                const isOpen = activeIndex === num;
                                return (
                                    <div key={num} className={`faq-item ${isOpen ? 'active' : ''}`}>
                                        <button
                                            className="faq-question-btn"
                                            onClick={() => toggleAccordion(num)}
                                            aria-expanded={isOpen}
                                        >
                                            <span dangerouslySetInnerHTML={{ __html: t(`logistics_africa_faq_q${num}`) }} />
                                            <span className="faq-chevron">▼</span>
                                        </button>
                                        <div className={`faq-answer-wrapper ${isOpen ? 'open' : ''}`}>
                                            <div className="faq-answer-content">
                                                <p dangerouslySetInnerHTML={{ __html: t(`logistics_africa_faq_a${num}`) }} />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom CTA Section */}
            <section className="logistics-cta-section" id="contact">
                <div className="cta-container">
                    <span className="cta-subtitle">THANK KOMPANY × Smart Logistics</span>
                    <h2 className="cta-title" dangerouslySetInnerHTML={{ __html: t('logistics_africa_cta_title') }} />
                    <p className="cta-desc" dangerouslySetInnerHTML={{ __html: t('logistics_africa_cta_desc') }} />

                    <div className="cta-buttons">
                        <a href="mailto:info@smartls.cm" className="cta-btn primary-btn">
                            {t('logistics_africa_cta_email')}
                        </a>
                        <a href="https://smartls.cm/smart-quote" target="_blank" rel="noopener noreferrer" className="cta-btn secondary-btn">
                            {t('logistics_africa_cta_quote')}
                        </a>
                    </div>

                    <div className="cta-contact-info">
                        <a href="mailto:info@smartls.cm" className="contact-item">
                            <span className="contact-icon"><FaEnvelope /></span> info@smartls.cm
                        </a>
                        <span className="contact-sep">|</span>
                        <a href="tel:+237233420281" className="contact-item">
                            <span className="contact-icon"><FaPhone /></span> +237 233 420 281
                        </a>
                        <span className="contact-sep">|</span>
                        <span className="contact-item">
                            <span className="contact-icon"><FaMapMarkerAlt /></span> B.P. 5120, Douala, Cameroun
                        </span>
                    </div>
                </div>
            </section>

            <PartnersLogo />
        </div>
    );
};

export default Logistics;

