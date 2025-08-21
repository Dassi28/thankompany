import React from 'react';
import './Electronics.scss';
import { FaArrowRight, FaStar, FaLightbulb, FaSun, FaTools, FaPlug } from 'react-icons/fa';

// Données pour les logos des partenaires
const partners = [
  { name: 'Partner 1', logo: 'https://placehold.co/150x60/f0f0f0/333?text=Partenaire+1' },
  { name: 'Partner 2', logo: 'https://placehold.co/150x60/f0f0f0/333?text=Partenaire+2' },
  { name: 'Partner 3', logo: 'https://placehold.co/150x60/f0f0f0/333?text=Partenaire+3' },
  { name: 'Partner 4', logo: 'https://placehold.co/150x60/f0f0f0/333?text=Partenaire+4' },
  { name: 'Partner 5', logo: 'https://placehold.co/150x60/f0f0f0/333?text=Partenaire+5' },
  { name: 'Partner 6', logo: 'https://placehold.co/150x60/f0f0f0/333?text=Partenaire+6' },
];

const Electronics = () => {
  return (
    <div className="electronics-page">
      {/* 01: Hero Section */}
      <section className="electronics-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="breadcrumb">HOME - Electroniques</p>
          <h1>Services <span className="highlight">Electroniques</span></h1>
          <button className="hero-cta">
            <span>Demander un devis</span>
            <FaArrowRight />
          </button>
        </div>
      </section>

      {/* 02: Partenaire fiable */}
      <section className="e-section reliable-partner">
        <div className="e-content-container">
          <div className="e-text-content">
            <h2>Nous sommes votre partenaire fiable pour des <span className="highlight">articles électriques de haute qualité.</span></h2>
            <p>L'entreprise est active sur le marché européen comme africain et constitue donc un partenaire commercial fiable et compétent pour ses clients et fournisseurs. Nous mettons en votre disposition une gamme étendue des produits électriques des secteurs du commerce de détail, de l'artisanat et de l'industrie...</p>
          </div>
          <div className="e-image-content">
            <img src="https://placehold.co/600x450/cccccc/ffffff?text=Image+Partenaire" alt="Partenaire fiable" />
          </div>
        </div>
      </section>

      {/* 03: Marché européen et africain */}
      <section className="e-section map-section">
        <div className="e-content-container">
          <div className="e-text-content">
            <h2>Nous sommes représentés sur le <span className="highlight">marché européen et africain</span></h2>
          </div>
          <div className="e-image-content">
            <img src="https://placehold.co/700x400/svg/333/ffffff?text=Carte+du+Monde" alt="Carte du monde" />
          </div>
        </div>
      </section>

      {/* 04: Qualité et certification */}
      <section className="e-section quality-section">
        <div className="e-content-container">
          <div className="e-text-content">
            <h2>Qualité et certification</h2>
            <p>THANK KOMPANY met l'accent sur la qualité de ses produits. Un système de gestion de la qualité installé dans l'entreprise garantit que toutes les mesures nécessaires pour garantir la qualité à long terme sont prises, surveillées et développées.</p>
            <h4>Qualité du produit.</h4>
            <p>Nos produits répondent pleinement aux exigences de qualité du marché en tant que fournisseur. Ce qui garantit la commercialisation de nos produits sur le long terme.</p>
            <h4>Compétence</h4>
            <p>Des conseils de qualité de la part de tous les collaborateurs dans leurs fonctions au bureau et sur le terrain grâce à des connaissances spécialisées supérieures à la moyenne dans toutes les gammes de produits !</p>
            <h4>Qualité de service</h4>
            <p>Disponibilité des produits la plus élevée, taux de réclamations les plus bas, respect des délais ou en bref : le fonctionnement de l'ensemble de l'organisation avec une grande stabilité des processus !</p>
          </div>
          <div className="e-image-content">
            <img src="https://placehold.co/600x450/cccccc/ffffff?text=Image+Qualité" alt="Qualité et certification" />
          </div>
        </div>
      </section>

      {/* 05: Bannière avec icônes */}
      <section className="e-section icon-banner">
        <div className="icon-overlay">
          <FaLightbulb />
          <FaSun />
          <FaTools />
          <FaPlug />
        </div>
      </section>

      {/* 06: Nos produits & Partenaires */}
      <section className="e-section shop-section">
        <h3>Nos produits</h3>
        <div className="shop-products">
          <div className="shop-card">
            <img src="https://placehold.co/250x200/cccccc/ffffff?text=Produit" alt="Prise électrique" />
            <h4>Desktop Gamer</h4>
            <div className="rating"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><span>4.5/5</span></div>
          </div>
          <div className="shop-card">
            <img src="https://placehold.co/250x200/cccccc/ffffff?text=Produit" alt="Boîtier" />
            <h4>PC Portable ASUS</h4>
            <div className="rating"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><span>3.5/5</span></div>
          </div>
          <div className="shop-card">
            <img src="https://placehold.co/250x200/cccccc/ffffff?text=Produit" alt="Lumières" />
            <h4>Suite Bureautique</h4>
            <div className="rating"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><span>4.5/5</span></div>
          </div>
          <div className="shop-card">
            <img src="https://placehold.co/250x200/cccccc/ffffff?text=Produit" alt="Interrupteur" />
            <h4>Laptop Asus Zenbook</h4>
          </div>
        </div>
        <button className="shop-cta">
          <span>Consulter La Boutique</span>
          <FaArrowRight />
        </button>
        <div className="partners-slider">
          <div className="partners-slide-track">
            {[...partners, ...partners].map((partner, index) => (
              <div className="partner-slide" key={index}><img src={partner.logo} alt={partner.name} /></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Electronics;
