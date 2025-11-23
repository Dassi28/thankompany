import React from 'react';
import './SoftwareDevelopment.scss';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import PartnersLogo from '../components/PartnersLogo';

const SoftwareDevelopment = () => {
 return (
    <div className="it-service-page">
      {/* 01: Hero Section */}
      <section className="it-hero"> 
        <div className="it-hero-overlay"></div>
        <div className="it-hero-content">
          <p className="breadcrumb">HOME - IT Services</p>
          <h1>Services <span className="highlight">Informatiques</span></h1>
        </div>
      </section>

      {/* 02: Conseils en SAP PM/CS */}
      <section className="service-section">
        <div className="service-content">
          <div className="service-text">
            <h2>Conseils en <span className="highlight">SAP PM/CS</span></h2>
            <p>THANK KOMPANY vous permet de bénéficier d’une vaste expertise de conseils dans l’intégration des systèmes ERP SAP. Nos consultants se démarquent par leurs expériences développées sur plusieurs années, dans le conseil, la mise en oeuvre, l’implémentation et l’optimisation des processus de maintenance avec SAP PM (Plant Maintenance) ou SAP EAM (Enterprise Asset Management).</p>
          </div>
          <div className="service-image">
            <img src="https://placehold.co/600x400/cccccc/ffffff?text=Image+SAP" alt="Conseils SAP" />
          </div>
        </div>
      </section>

      {/* 03: Gestion des Données */}
      <section className="service-section alt-bg">
        <div className="service-content reverse">
          <div className="service-text">
            <h2>Gestion des <span className="highlight">Données</span></h2>
            <p>Vous souhaitez que vos données soient bien organisées et sauvegardées dans un espace de stockage sûr et centralisé pour vous permettre d’avoir accès à ses données où que vous soyez.</p>
            <h4>Nos prestations :</h4>
            <ul>
              <li>Sauvegarde des données</li>
              <li>Récupération de données perdues</li>
              <li>Collaboration (On- et Offline)</li>
            </ul>
          </div>
          <div className="service-image">
            <img src="https://placehold.co/600x400/cccccc/ffffff?text=Image+Données" alt="Gestion des Données" />
          </div>
        </div>
      </section>

      {/* 04: Développement Web */}
      <section className="service-section">
        <div className="service-content">
          <div className="service-text">
            <h2>Développement <span className="highlight">Web</span></h2>
            <p>Vous avez besoin d’une carte de visite électronique, d’une boutique en ligne ou d’un logiciel sur un cloud, quel que soit le domaine ou le secteur dans lequel vous souhaitez que votre site Web soit construit. Avec nos développeurs et concepteurs Web qualifiés chez THANK KOMPANY, vous trouverez des solutions Web qui dépassent vos attentes en termes de performance et de convivialité.</p>
          </div>
          <div className="service-image">
            <img src="https://placehold.co/600x400/cccccc/ffffff?text=Image+Web" alt="Développement Web" />
          </div>
        </div>
      </section>

      {/* 05: Développement des logiciels */}
      <section className="service-section alt-bg">
        <div className="service-content reverse">
          <div className="service-text">
            <h2>Développement des <span className="highlight">logiciels</span></h2>
            <p>THANK KOMPANY met à votre disposition son expertise dans la conception et le développement de vos logiciels sur mesure au besoin de votre Entreprise. Nous écoutons vos besoins, apportons des conseils d’amélioration si nécessaire en respectant votre process métier et en appliquant les normes et conventions du domaine exercé par votre Entreprise.</p>
            <p>Avec THANK KOMPANY vous avez également la possibilité d’évaluer votre logiciel régulièrement en fonction du besoin et des contraintes de votre Entreprise pour une satisfaction complète en fonctionnalité, ergonomie, performance.</p>
          </div>
          <div className="service-image">
            <img src="https://placehold.co/600x400/cccccc/ffffff?text=Image+Logiciels" alt="Développement Logiciels" />
          </div>
        </div>
      </section>

      {/* 06: Maintenance Informatiques */}
      <section className="service-section">
        <div className="service-content">
          <div className="service-text">
            <h2>Maintenance <span className="highlight">Informatiques</span></h2>
            <p>THANK KOMPANY va au-delà de l’installation de nouveaux équipements ou la formation des utilisateurs et assure également l’entretien et la réparation du matériel informatique.</p>
            <ul>
              <li>Intervention selon l’urgence du problème</li>
              <li>Diagnostic et détection des pannes</li>
              <li>Maintenance plus préventive que corrective (prévenir plutôt que guérir)</li>
              <li>Installation et configuration des nouveaux matériels (ordinateurs, imprimantes, scanners...)</li>
            </ul>
            <p className="quote">“La maintenance est la clé pour un bon fonctionnement de votre entreprise”</p>
          </div>
          <div className="service-image">
            <img src="https://placehold.co/600x400/cccccc/ffffff?text=Image+Maintenance" alt="Maintenance Informatiques" />
          </div>
        </div>
      </section>

      {/* 07: Boutique & Partenaires */}
      {/*<section className="shop-section alt-bg">
        <div className="shop-products">
          <div className="shop-card">
            <img src="https://placehold.co/250x200/cccccc/ffffff?text=Produit" alt="Desktop Gamer" />
            <h4>Desktop Gamer</h4>
            <div className="rating">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><span>4.5/5</span>
            </div>
          </div>
          <div className="shop-card">
            <img src="https://placehold.co/250x200/cccccc/ffffff?text=Produit" alt="PC Portable ASUS" />
            <h4>PC Portable ASUS</h4>
            <div className="rating">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><span>4.5/5</span>
            </div>
          </div>
          <div className="shop-card">
            <img src="https://placehold.co/250x200/cccccc/ffffff?text=Produit" alt="Suite Bureautique" />
            <h4>Suite Bureautique</h4>
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
      </section>*/}
      <PartnersLogo />
    </div>
  );
};

export default SoftwareDevelopment;
