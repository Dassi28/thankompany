import React from 'react';
import './Automatisation.scss';
import { FaArrowRight, FaCogs, FaIndustry, FaNetworkWired, FaUsers } from 'react-icons/fa';
import PartnersLogo from '../components/PartnersLogo';

const Automatisation = () => {
  return (
    <div className="automatisation-page">
      {/* 01: Hero Section */}
      <section className="auto-hero" style={{backgroundImage: `url(/images/Electronic/0_Home_Screen.png)`}}>
        <div className="auto-hero-overlay"></div>
        <div className="auto-hero-content">
          <h1 className="auto-hero-title">Automatisation</h1>
          <p className="auto-hero-slogan">Optimisez vos processus et améliorez votre productivité.</p>
          <button className="auto-hero-cta">
            <span>Découvrez nos solutions</span>
            <FaArrowRight />
          </button>
        </div>
      </section>

      {/* 02: Introduction Section */}
      <section className="auto-intro-section">
        <div className="auto-intro-content">
          <div className="auto-intro-text">
            <h2>L'automatisation, au cœur de la performance industrielle</h2>
            <p>
              Chez THANK KOMPANY, nous sommes convaincus que l'automatisation est un levier de croissance essentiel pour les entreprises industrielles. Nos solutions sur mesure visent à optimiser vos processus, à améliorer votre productivité et à renforcer votre compétitivité.
            </p>
            <p>
              Nous vous accompagnons dans toutes les étapes de votre projet, de l'analyse de vos besoins à la mise en service de vos installations, en passant par la conception et le développement de solutions personnalisées.
            </p>
          </div>
          <div className="auto-intro-image">
            <img src="/images/Electronic/1_About_us.png" alt="Introduction à l'automatisation" />
          </div>
        </div>
      </section>

      {/* 03: Services Section */}
      <section className="auto-services-section">
        <h2 className="section-title">Nos Services</h2>
        <div className="auto-services-grid">
          <div className="service-card">
            <div className="service-icon">
              <FaCogs />
            </div>
            <h3>Programmation PLC & Développement Logiciel</h3>
            <p>Des solutions logicielles robustes et sur mesure pour contrôler vos équipements industriels.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <FaIndustry />
            </div>
            <h3>Systèmes de Chauffage, Technologie de Tramway & Logistique de Stockage Automatisé</h3>
            <p>Une expertise pointue dans des domaines d'application spécifiques pour répondre à vos besoins les plus complexes.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <FaNetworkWired />
            </div>
            <h3>Intégration Système & Mise en Service</h3>
            <p>Une intégration transparente de vos systèmes pour une mise en service rapide et efficace.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <FaUsers />
            </div>
            <h3>Direction Technique & Coordination d’Équipes</h3>
            <p>Un leadership technique pour mener à bien vos projets et assurer la cohésion de vos équipes.</p>
          </div>
        </div>
      </section>

      {/* 04: Expertise & Interfaces Section */}
      <section className="auto-expertise-section">
        <div className="auto-expertise-content">
          <div className="expertise-column">
            <h2 className="section-title">Notre Expertise</h2>
            <div className="logos-grid">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg" alt="Siemens Logo" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/ABB_logo.svg/1200px-ABB_logo.svg.png" alt="ABB Logo" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/SEW-EURODRIVE_logo.svg/1200px-SEW-EURODRIVE_logo.svg.png" alt="SEW Eurodrive Logo" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Sigmatek_logo.svg/1200px-Sigmatek_logo.svg.png" alt="Sigmatek Logo" />
            </div>
          </div>
          <div className="interfaces-column">
            <h2 className="section-title">Interfaces</h2>
            <ul className="interfaces-list">
              <li>MQTT</li>
              <li>OPC-UA</li>
              <li>Modbus</li>
              <li>Profinet</li>
              <li>Profibus</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 05: Technical Leadership & Team Coordination Section */}
      <section className="auto-leadership-section">
        <div className="auto-leadership-content">
          <div className="auto-leadership-text">
            <h2>Direction Technique & Coordination d’Équipes</h2>
            <p>
              Notre expertise ne se limite pas à la technique. Nous assurons également la direction technique de vos projets et la coordination de vos équipes pour garantir la réussite de vos projets d'automatisation.
            </p>
            <p>
              Nous mettons un point d'honneur à assurer une communication fluide et transparente entre toutes les parties prenantes, et à garantir le respect des délais et des budgets.
            </p>
          </div>
          <div className="auto-leadership-image">
            <img src="/images/Electronic/4_Technicien_Batiment.png" alt="Technical Leadership" />
          </div>
        </div>
      </section>

      {/* 06: CTA Section */}
      <section className="auto-cta-section">
        <div className="auto-cta-content">
          <h2>Prêt à automatiser votre succès ?</h2>
          <p>Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider à atteindre vos objectifs.</p>
          <button className="auto-cta-button">
            <span>Contactez-nous</span>
            <FaArrowRight />
          </button>
        </div>
      </section>

      <PartnersLogo />
    </div>
  );
};

export default Automatisation;