import React from 'react';
import './PartnersLogo.scss';

const partners = [
  { name: 'Partner 1', logo: 'https://placehold.co/150x60/f0f0f0/333?text=Partenaire+1' },
  { name: 'Partner 2', logo: 'https://placehold.co/150x60/f0f0f0/333?text=Partenaire+2' },
  { name: 'Partner 3', logo: 'https://placehold.co/150x60/f0f0f0/333?text=Partenaire+3' },
  { name: 'Partner 4', logo: 'https://placehold.co/150x60/f0f0f0/333?text=Partenaire+4' },
  { name: 'Partner 5', logo: 'https://placehold.co/150x60/f0f0f0/333?text=Partenaire+5' },
  { name: 'Partner 6', logo: 'https://placehold.co/150x60/f0f0f0/333?text=Partenaire+6' },
  { name: 'Partner 7', logo: 'https://placehold.co/150x60/f0f0f0/333?text=Partenaire+7' },
];

const PartnersLogo = () => {
  return (
    <section className="partners-section">
      <div className="partners-slider">
        <div className="partners-slide-track">
          {/* On duplique la liste des partenaires pour un effet de boucle infini */}
          {[...partners, ...partners].map((partner, index) => (
            <div className="partner-slide" key={index}>
              <img src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersLogo;
