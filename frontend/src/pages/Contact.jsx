import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import './Contact.scss';
import { useTranslation } from 'react-i18next';

// Remplace "/logo.png" par le chemin réel de ton logo si besoin
// import logo from './assets/logo.png';

const Contact = () => {
    const { t } = useTranslation();
    const form = useRef();
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gj9voic', 'template_4ulkqjj', form.current, 'Xni-n079fx_He87jX')
            .then((result) => {
                console.log(result.text);
                setShowPopup(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    const handlePopupClose = () => {
        setShowPopup(false);
        navigate('/');
    };

    return (
        <div className="contact-page">
            <div className="contact-container">
                <div className="contact-info">
                    <h2>{t('contact.title')}</h2>
                    <p>{t('contact.description')}</p>
                    <div className="info-item">
                        <strong>{t('contact.email')}:</strong>
                        <p>contact@thankompany.com</p>
                    </div>
                    <div className="info-item">
                        <strong>{t('contact.phone')}:</strong>
                        <p>+49 176 267 792 75</p>
                    </div>
                    <div className="info-item">
                        <strong>{t('contact.address')}:</strong>
                        <p>Mundenheimer Str. 177</p>
                        <p>67061 Ludwigshafen</p>
                        <p>Germany</p>
                    </div>
                </div>

                {/* contact-form wrapper => position: relative pour que le popup recouvre exactement ce conteneur */}
                <div className="contact-form-wrapper">
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="form-group">
                                <label htmlFor="name">{t('contact.form.name')}</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">{t('contact.form.email')}</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">{t('contact.form.phone')}</label>
                                <input type="tel" id="phone" name="phone" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">{t('contact.form.subject')}</label>
                                <input type="text" id="subject" name="title" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">{t('contact.form.message')}</label>
                                <textarea id="message" name="message" rows="5" required></textarea>
                            </div>
                            <button type="submit" className="submit-btn">{t('contact.form.submit')}</button>
                        </form>
                    </div>

                    {/* Popup placé à l'intérieur du wrapper afin d'avoir exactement les mêmes dimensions */}
                    {showPopup && (
                        <div className="popup-overlay">
                            <div className="popup">
                                <div className="popup-row popup-row--logo">
                                    {/* Utilise ton logo ici ou conserve le texte si pas de logo */}
                                    <img src="/images/logo_thank_kompany_Final.png" alt="Logo" className="popup-logo" />
                                    {/* <h3 className="popup-logo-text">THANK KOMPANY</h3> */}
                                </div>
                                                    
                                <div className="popup-row popup-row--message">
                                    <h2>{t('contact_success_message')}</h2>                               
                                </div>
                                <div className="popup-row popup-row--message">
                                    <h2 className='highlight'>{t('contact_success_message1')}</h2>
                                    {/*<h3>{t('contact_success_message1')}</h3>                                   */}
                                </div>
                                <div className="popup-row popup-row--message">
                                    <p className="popup-text-confirmation">{t('contact_success_message2')}</p>
                                </div>
                               
                                <div className="popup-row popup-row--actions">
                                    <button className="popup-btn" onClick={handlePopupClose}>
                                        {t('contact_success_button')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
