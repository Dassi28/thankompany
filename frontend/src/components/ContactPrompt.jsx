import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './ContactPrompt.scss';

const ContactPrompt = () => {
  const { t } = useTranslation();

  return (
    <section className="contact-prompt-section">
      <div className="contact-prompt-content">
        <h2 className='highlight'>{t('contactPrompt.title')}</h2>
        <p dangerouslySetInnerHTML={{ __html: t('contactPrompt.paragraph') }} />
        <Link to="/contact" className="contact-prompt-cta">
          {t('contactPrompt.button')}
        </Link>
      </div>
    </section>
  );
};

export default ContactPrompt;
