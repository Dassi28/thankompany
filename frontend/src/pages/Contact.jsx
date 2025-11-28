import React from 'react';
import './Contact.scss';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();

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
                        <p>+33 1 23 45 67 89</p>
                    </div>
                    <div className="info-item">
                        <strong>{t('contact.address')}:</strong>
                        <p>123 Rue de Paris, 75001 Paris, France</p>
                    </div>
                </div>
                <div className="contact-form">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">{t('contact.form.name')}</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">{t('contact.form.email')}</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">{t('contact.form.subject')}</label>
                            <input type="text" id="subject" name="subject" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">{t('contact.form.message')}</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">{t('contact.form.submit')}</button>
                    </form>
                </div>
            </div>
        </div>
    ); 
};

export default Contact;
