import React from 'react';
import './Logistics.scss';
import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import PartnersLogo from '../components/PartnersLogo';

const Logistics = () => {
  return (
    <div className="logistics-page">
      {/* 01: Hero Section */}
      <section className="logistics-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="breadcrumb">HOME - Logistiques</p>
          <h1>Services <span className="highlight">Logistiques</span></h1>
          <button className="hero-cta">
            <span>Demander un devis</span>
            <FaArrowRight />
          </button>
        </div>
      </section>

      {/* 02: Achat international */}
      <section className="l-section">
        <div className="l-content-container">
          <div className="l-text-content">
            <h2>Achat international des <span className="highlight">biens et services</span></h2>
            <p>Vous souhaitez réaliser des achats (voitures, marchandises diverses) à l’international ? C’est facile, mettez à notre disposition votre cahier de charges et nous nous occupons du reste.</p>
            <h4>Nos prestations :</h4>
            <ul>
              <li>Étude de prix en fonction du pays d’achat et des caractéristiques du produit souhaité</li>
              <li>Achat en toutes les devises et partout dans le monde</li>
            </ul>
          </div>
          <div className="l-image-content">
            <img src="https://placehold.co/600x400/cccccc/ffffff?text=Image+Achat" alt="Achat international" />
          </div>
        </div>
      </section>

      {/* 03: Transport et Gestion */}
      <section className="l-section alt-bg">
        <div className="l-content-container reverse">
          <div className="l-text-content">
            <h2>Transport et Gestion <span className="highlight">des Colis</span></h2>
            <p>THANK KOMPANY met à votre disposition un service de qualité supérieure pour le transport de vos marchandises de l’Europe, de l’Amérique et de l’Asie vers l’Afrique.</p>
            <p>Pour ce service nous vous garantissons un suivi permanent de vos colis, un respect des délais et sécurité de vos biens jusqu’à la livraison.</p>
          </div>
          <div className="l-image-content">
            <img src="https://placehold.co/600x400/cccccc/ffffff?text=Image+Transport" alt="Transport et Gestion" />
          </div>
        </div>
      </section>

      {/* 04: Recherche des fournisseurs */}
      <section className="l-section">
        <div className="l-content-container">
          <div className="l-text-content">
            <h2>Recherche des <span className="highlight">fournisseurs</span></h2>
            <p>Vous souhaitez réaliser des achats (voitures, marchandises diverses) à l’international mais vous ne savez pas comment trouver les fournisseurs appropriés ? THANK KOMPANY met à votre disposition son réseaux de fournisseurs à travers le monde.</p>
          </div>
          <div className="l-image-content">
            <img src="https://placehold.co/600x400/cccccc/ffffff?text=Image+Fournisseurs" alt="Recherche des fournisseurs" />
          </div>
        </div>
      </section>

      {/* 05: Paiement des factures */}
      <section className="l-section alt-bg">
        <div className="l-content-container reverse">
          <div className="l-text-content">
            <h2>Paiement <span className="highlight">des factures</span></h2>
            <p>Vous souhaitez réaliser des paiements à vos fournisseurs mais vous ne disposez pas des moyens de paiements ou des devises requis par vos fournisseurs ? THANK KOMPANY met à votre disposition un système qui vous permet de payer les factures de vos fournisseurs dans les délais défini à un taux d’échange compétitif.</p>
          </div>
          <div className="l-image-content">
            <img src="https://placehold.co/600x400/cccccc/ffffff?text=Image+Paiement" alt="Paiement des factures" />
          </div>
        </div>
      </section>

      {/* 06: Location des voitures */}
      <section className="l-section">
        <div className="l-content-container">
          <div className="l-text-content">
            <h2>Location en <span className="highlight">des voitures</span></h2>
            <p>Louer des voitures n’a jamais été aussi facile, nous vous proposons les meilleurs plans rapport qualité prix défiant toute concurrence. Avec THANK KOMPANY, louez désormais des voitures en un seul clic, et déplacez en toute sécurité. Contactez-nous et recevez notre catalogue de véhicules.</p>
          </div>
          <div className="l-image-content">
            <img src="https://placehold.co/600x400/cccccc/ffffff?text=Image+Location" alt="Location des voitures" />
          </div>
        </div>
      </section>

      {/* 07: Nos produits & Partenaires */}
      <section className="l-section shop-section">
        <h3>Nos produits</h3>
        <div className="shop-products">
           <div className="shop-card">
            <img src="https://placehold.co/250x200/cccccc/ffffff?text=Produit" alt="Desktop Gamer" />
            <h4>Desktop Gamer</h4>
            <div className="rating"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><span>4.5/5</span></div>
          </div>
          <div className="shop-card">
            <img src="https://placehold.co/250x200/cccccc/ffffff?text=Produit" alt="PC Portable ASUS" />
            <h4>PC Portable ASUS</h4>
            <div className="rating"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><span>3.5/5</span></div>
          </div>
          <div className="shop-card">
            <img src="https://placehold.co/250x200/cccccc/ffffff?text=Produit" alt="Suite Bureautique" />
            <h4>Suite Bureautique</h4>
             <div className="rating"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><span>4.5/5</span></div>
          </div>
          <div className="shop-card">
            <img src="https://placehold.co/250x200/cccccc/ffffff?text=Produit" alt="Laptop Asus Zenbook" />
            <h4>Laptop Asus Zenbook</h4>
          </div>
        </div>
        <button className="shop-cta">
          <span>Consulter La Boutique</span>
          <FaArrowRight />
        </button>
      </section>
      <PartnersLogo />
    </div>
  );
};

export default Logistics;
