import React from 'react';
import './PartnersLogo.scss';

const partners = [
  { name: 'Partner 1', logo: './images/logo/logo-1.jpg' },
  { name: 'Partner 2', logo: './images/logo/logo-2.jpg' },
  { name: 'Partner 3', logo: './images/logo/logo-3.jpg' },
  { name: 'Partner 4', logo: './images/logo/logo-4.jpg' },
  { name: 'Partner 5', logo: './images/logo/logo-5.jpg' },
  { name: 'Partner 6', logo: './images/logo/logo-6.jpg' },
  { name: 'Partner 7', logo: './images/logo/logo-7.jpg' },
];

const PartnersLogo = () => {
  return (
    <section className="partners-section">
      <div className="partners-slider">
        <div className="partners-slide-track">
          {/* On duplique la liste des partenaires pour un effet de boucle infini */}
          {[...partners, ...partners].map((partner, index) => (
            <div className="partner-slide delete-background-image " key={index}>
              <img src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersLogo;
