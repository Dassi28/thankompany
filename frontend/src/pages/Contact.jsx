import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import './Contact.scss';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    const form = useRef();
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        //const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        //const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        //const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm('service_gj9voic', 'template_4ulkqjj', form.current, 'Xni-n079fx_He87jX')
            .then((result) => {
                console.log(result.text);
                setShowPopup(true);
            }, (error) => {
                console.log(error.text);
                // Vous pouvez ajouter une gestion d'erreur ici, par exemple afficher un message d'erreur
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
            </div>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <p>{t('contact.success_message')}</p>
                        <button onClick={handlePopupClose}>Continue to Homepage</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
