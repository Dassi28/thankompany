import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './ContactPrompt.scss';

const ContactPrompt = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-prompt-section">
      <div className="contact-prompt-content"> 
        <div className="service-text">
          <h2 className='highlight'>{t('contactPrompt.title')}</h2>
          <p dangerouslySetInnerHTML={{ __html: t('contactPrompt.paragraph') }} /> 
        </div> 
        <a href="/contact" className="contact-prompt-cta">
            {t('contactPrompt.button')}
        </a>
      </div>
    </div>
  );
};

export default ContactPrompt;
