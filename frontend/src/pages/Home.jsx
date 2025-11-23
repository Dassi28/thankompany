import React from 'react';
import './Home.scss';

// Importation des icônes
import { FaShieldAlt, FaChartLine, FaCogs, FaHandshake, FaStoreAlt, FaSyncAlt, FaCog, FaLightbulb, FaUsers, FaWhatsapp, FaArrowRight, FaDesktop, FaBolt, FaStar, FaAtlas, GiFaceToFace, SiAwsfargate, FaArrowTrendUp } from 'react-icons/fa';

import PartnersLogo from '../components/PartnersLogo';

const Home = () => {
  return (
    <div className="home">
      {/* Section Héro */}
        <section className="hero">
        <div className="hero-bg-overlay"></div>
        <img src="/images/home.jpg" alt="Hero Transport" className="hero-bg-image" />
        
        <div className="hero-content">
          <div className="hero-text">
            <h1>THANK KOMPANY</h1>
                      {/*<h2>We help companies digitize, automate, and streamline their processes!</h2>*/}
                      {/*<h3>We combining global expertise with local reliability </h3>*/}
                      <h2>SAP EAM/PM Consulting: Delivering digital and smart maintenance solutions with SAP S/4HANA for peak performance</h2>
                      <h2>Automation Engineering: Delivering expertise in PLC programming, control systems, and automation solutions.</h2>
                      <h2>Software Development: Delivering modern, scalable, and secure software solutions for digital transformation.</h2>
            <button className="hero-cta-button">
             <span>Discover Our Solutions</span>
              <FaArrowRight className="arrow-icon" />
            </button>
          </div>
        </div>

        <div className="qualities-bar">
          <div className="quality-item">
            <FaDesktop className="quality-icon" />
            <span>Listening</span>
          </div>
          <div className="quality-item">
            <FaBolt className="quality-icon" />
            <span>Reactivity</span>
          </div>
          <div className="quality-item">
            <FaStar className="quality-icon" />
            <span>Customer Satisfaction</span>
                  </div>
                  <div className="quality-item">
                      <FaChartLine className="quality-icon" />
                      <span>Quality & Precision</span>
                  </div>
                  <div className="quality-item">
                      <FaLightbulb className="quality-icon" />
                      <span>Innovation</span>
                  </div>
                  <div className="quality-item">
                      <FaAtlas className="quality-icon" />
                      <span>Internationality</span>
                  </div>
                  <div className="quality-item">
                      <FaHandshake className="quality-icon" />
                      <span>Partnership</span>
                  </div>
        </div>
      </section>


      {/* Section "Qui sommes-nous" */}
      <section className="about" id="about">
        <div className="about-text">
          <h2>Qui sommes <span>nous</span></h2>
          <p>
            THANK KOMPANY est une entreprise internationale basée en Allemagne desservant des clients et partenaires en Afrique.
            THANK KOMPANY propose un ensemble de services dans différents secteurs d’activités notamment : la logistique, le marketing & communication, les services informatiques et l’immobilier.
          </p>
          <p>
            Pour desservir ses clients THANK KOMPANY s’appuie sur un solide réseau de partenaires en Amérique, en Europe et en Afrique.
            Forte de plusieurs années d’expériences, l’ensemble des prestations de THANK KOMPANY visent à améliorer et à développer la performance des entreprises.
          </p>
        </div>
        <div className="about-img">
          <img src="/images/hp_qui_sommes_nous.png" alt="About illustration" />
        </div>
      </section>

      {/* Section Offre */}
      <section className="offer-section" id="offer">
        <h3 className="section-title">
          <span className="highlight">Notre offre:</span> Rendre votre travail sans effort
        </h3>
        <div className="service-cards-container">
          <div className="service-card">
            <div className="card-icon">
              <img src="/images/Home/hp_Service_informatique.png" alt="IT Services Icon" />
            </div>
            <h4>Services Informatique</h4>
            <ul>
              <li>Maintenance des systèmes informatiques</li>
              <li>Gestion des données</li>
              <li>Développement de logiciel</li>
              <li>Développement Web</li>
              <li>Conseils en SAP PM/CS</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="card-icon">
              <img src="/images/Home/HP_service-electro.png" alt="Electronics Services Icon" />
            </div>
            <h4>Services électroniques</h4>
            <ul>
              <li>Conseil en matériaux de construction:</li>
              <li className="sub-item">Gros Oeuvre</li>
              <li className="sub-item">Second Oeuvre</li>
              <li className="sub-item">Travaux de VRD</li>
              <li>Vente des matériaux de construction</li>
              <li>Bureau d’études</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="card-icon">
              <img src="/images/Home/HP_service-logist.png" alt="Logistics Services Icon" />
            </div>
            <h4>Services de Logistique</h4>
            <ul>
              <li>Achat International</li>
              <li>Transport et Gestion des colis</li>
              <li>Recherche des fournisseurs</li>
              <li>Paiement des factures</li>
              <li>Location des voitures</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section Mission & Vision */}
    <section className="mission-vision-section">
        {/* Mission: Image à gauche, Texte à droite */}
        <div className="mission-vision-item">
          <div className="mv-image-container">
            <img src="/images/Home/Notre_Mission.png" alt="Employé d'entrepôt" />
          </div>
          <div className="mv-text-container">
            <h3>Notre Mission</h3>
            <p>
              Our mission is to empower businesses of all sizes to achieve seamless, agile, and cost-effective supply chain operations. We believe that a well-optimized supply chain is the backbone of successful businesses, enabling them to deliver exceptional products and services to customers around the world.
            </p>
          </div>
        </div>
        {/* Vision: Texte à gauche, Image à droite */}
        <div className="mission-vision-item">
          <div className="mv-text-container">
            <h3>Notre Vision</h3>
            <p>
              We are committed to sustainable practices that contribute to a better future. By optimizing supply chains, reducing waste, and promoting eco-friendly initiatives, we play a role in building a more environmentally conscious world.
            </p>
          </div>
          <div className="mv-image-container">
            <img src="/images/Home/HP_Vision.png" alt="Manager dans un entrepôt" />
          </div>
        </div>
      </section>

      {/* Section Garantie */}
      <section className="guarantee-section">
        <div className="guarantee-overlay"></div>
        <div className="guarantee-content">
          <div className="guarantee-text">
            <h3>Votre garantie</h3>
            <p>
              Comprendre les tendances globales de votre entreprise et de votre marché global vous permet d’économiser du temps, de l’argent et de l’énergie à long terme, et peut vous aider à dominer votre marché.
            </p>
            <button className="guarantee-cta-button">Demander un service</button>
          </div>
          <div className="guarantee-grid">
            <div className="guarantee-item">
              <div className="guarantee-icon-container"><img src="/images/Home/garantie1.png" alt="garantie" /></div>
              <span>Informations clients</span>
            </div>
            <div className="guarantee-item">
              <div className="guarantee-icon-container"><img src="/images/Home/garantie2.png" alt="garantie" /></div>
              <span>Efficacité accrue</span>
            </div>
            <div className="guarantee-item">
              <div className="guarantee-icon-container"><img src="/images/Home/garantie3.png" alt="garantie" /></div>
              <span>Automatisation des processus</span>
            </div>
            <div className="guarantee-item">
              <div className="guarantee-icon-container"><img src="/images/Home/garantie4.png" alt="garantie" /></div>
              <span>Coûts réduits</span>
            </div>
            <div className="guarantee-item">
              <div className="guarantee-icon-container"><img src="/images/Home/garantie5.png" alt="garantie" /></div>
              <span>Aperçu du marché</span>
            </div>
            <div className="guarantee-item">
              <div className="guarantee-icon-container"><img src="/images/Home/garantie6.png" alt="garantie" /></div>
              <span>Innovation basée sur les données</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section Meilleurs Produits */}
      <section className="best-products-section">
        <h3 className="section-title">
          Nos meilleurs produits: <strong>Nous sommes votre meilleur partenaire</strong>
        </h3>
        <div className="products-container">
          <div className="product-card">
            <div className="product-image">
              <img src="/images/Home/Shop1.png" alt="Product 1"/>
            </div>
            <div className="product-info">
              <h4>Kenneth Simpson</h4>
              <p>Operations</p>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/images/Home/Shop2.png" alt="Product 2" />
            </div>
            <div className="product-info">
              <h4>Jonathan Gibson</h4>
              <p>Informatique</p>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/images/Home/Shop3.png" alt="Product 3" />
            </div>
            <div className="product-info">
              <h4>Dustin Lefkowitz</h4>
              <p>Logistique</p>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/images/Home/Shop4.png" alt="Product 4" />
            </div>
            <div className="product-info">
              <h4>Weston Trevino</h4>
              <p>Drivers</p>
            </div>
          </div>
        </div>
        <button className="products-nav-arrow"> 
          <FaArrowRight />
        </button>
      </section>

      {/* Section Résultats */}
      <section className="results-section">
        <div className="results-header">
          <h3 className="section-title">
            <span className="highlight">Nos resultats</span> en quelques chiffres
          </h3>
          <p className="section-subtitle">
            Lorem morbi et amet suscipit. At sed proin quia risus urna a. Magna in odio in urna amet ultrices fermentum. Mauris in pretium eget donec erat ipsum a leo. Maecenas elementum consectetur ac blandit tortor.
          </p>
        </div>
        <div className="results-cards-container">
          <div className="result-card">
            <span className="card-number">01</span>
            <p className="card-title">Nombre Total projets</p>
            <h4 className="card-stat">122 K</h4>
            <p className="card-subtitle">Notre meilleurs performance</p>
            <hr />
          </div>
          <div className="result-card">
            <span className="card-number">02</span>
            <p className="card-title">Nombre Produits Vendus</p>
            <h4 className="card-stat">122 K</h4>
            <p className="card-subtitle">Notre meilleurs performance</p>
            <hr />
          </div>
          <div className="result-card">
            <span className="card-number">03</span>
            <p className="card-title">Nombre de Clients</p>
            <h4 className="card-stat">122 K</h4>
            <p className="card-subtitle">Notre meilleurs performance</p>
            <hr />
          </div>
        </div>
      </section>

      {/* Section Contact */}
     <section className="contact-section">
        <div className="contact-bg-image"></div>
        <div className="contact-content">
          <div className="contact-left">
            <div className="contact-card whatsapp-card">
              <p>Ecrivez-nous</p>
              <FaWhatsapp className="whatsapp-icon"/>
              <span>Whatsapp</span>
            </div>
          </div>
          <div className="contact-center">
            <div className="contact-card meet-us-card">
              <h4>Meet Us</h4>
              <p>🇩🇪 Allemagne</p>
              <p>🇨🇲 Cameroun</p>
            </div>
          </div>
          <div className="contact-right">
            <div className="contact-card form-card">
              <h4>Contactez Nous</h4>
              <p>Une question ? un message pour nous ?</p>
              <form>
                <input type="text" placeholder="Votre Nom" />
                <input type="email" placeholder="Email Adresse" />
                <input type="text" placeholder="Sujet" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Envoyer</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <PartnersLogo />


    </div>
  );
};

export default Home;
