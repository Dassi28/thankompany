import React, { useState } from 'react';
import './SoftwareDevelopment.scss';
import { FaArrowRight } from 'react-icons/fa';
import PartnersLogo from '../components/PartnersLogo';

const SoftwareDevelopment = () => {
  const [activeTab, setActiveTab] = useState('backend');

  return (
    <div className="software-development-page">
      {/* 01: Hero Section */}
      <section className="sd-hero" style={{backgroundImage: `url(/images/IT/3_Developement_Web.png)`}}>
        <div className="sd-hero-overlay"></div>
        <div className="sd-hero-content">
          <h1 className="sd-hero-title">Développement Logiciel</h1>
          <p className="sd-hero-slogan">Des solutions logicielles sur mesure pour répondre à vos besoins.</p>
          <button className="sd-hero-cta">
            <span>Découvrez nos solutions</span>
            <FaArrowRight />
          </button>
        </div>
      </section>

      {/* 02: Introduction Section */}
      <section className="sd-intro-section">
        <div className="sd-intro-content">
          <div className="sd-intro-text">
            <h2>Des solutions logicielles innovantes pour votre entreprise</h2>
            <p>
              Chez THANK KOMPANY, nous concevons et développons des solutions logicielles sur mesure qui répondent précisément aux besoins de votre entreprise. Notre équipe d'experts vous accompagne de la conception à la mise en production, en passant par le développement et les tests.
            </p>
            <p>
              Nous nous engageons à vous fournir des logiciels performants, évolutifs et sécurisés, qui vous permettront d'optimiser vos processus et d'améliorer votre productivité.
            </p>
          </div>
          <div className="sd-intro-image">
            <img src="/images/IT/4_Development.png" alt="Introduction au développement logiciel" />
          </div>
        </div>
      </section>

      {/* 03: Technologies Section */}
      <section className="sd-technologies-section">
        <h2 className="section-title">Nos Technologies</h2>
        <div className="tabs">
          <button className={`tab-button ${activeTab === 'backend' ? 'active' : ''}`} onClick={() => setActiveTab('backend')}>
            Backend
          </button>
          <button className={`tab-button ${activeTab === 'frontend' ? 'active' : ''}`} onClick={() => setActiveTab('frontend')}>
            Frontend
          </button>
          <button className={`tab-button ${activeTab === 'mobile' ? 'active' : ''}`} onClick={() => setActiveTab('mobile')}>
            Mobile
          </button>
          <button className={`tab-button ${activeTab === 'devops' ? 'active' : ''}`} onClick={() => setActiveTab('devops')}>
            Cloud & DevOps
          </button>
        </div>
        <div className="tab-content">
          {activeTab === 'backend' && (
            <div className="technologies-grid">
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png" alt="Java" />
                <span>Java</span>
              </div>
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/1200px-Spring_Framework_Logo_2018.svg.png" alt="Spring Boot" />
                <span>Spring Boot</span>
              </div>
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png" alt=".NET Core" />
                <span>.NET Core</span>
              </div>
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="Node.js" />
                <span>Node.js</span>
              </div>
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="Python" />
                <span>Python</span>
              </div>
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png" alt="Go" />
                <span>Go</span>
              </div>
            </div>
          )}
          {activeTab === 'frontend' && (
            <div className="technologies-grid">
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React" />
                <span>React</span>
              </div>
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png" alt="Angular" />
                <span>Angular</span>
              </div>
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" alt="Vue.js" />
                <span>Vue.js</span>
              </div>
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="TypeScript" />
                <span>TypeScript</span>
              </div>
            </div>
          )}
          {activeTab === 'mobile' && (
            <div className="technologies-grid">
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Google-flutter-logo.png/1200px-Google-flutter-logo.png" alt="Flutter" />
                <span>Flutter</span>
              </div>
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React Native" />
                <span>React Native</span>
              </div>
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png" alt="Kotlin" />
                <span>Kotlin</span>
              </div>
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Swift_logo.svg/1200px-Swift_logo.svg.png" alt="Swift" />
                <span>Swift</span>
              </div>
            </div>
          )}
          {activeTab === 'devops' && (
            <div className="technologies-grid">
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png" alt="AWS" />
                <span>AWS</span>
              </div>
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1200px-Microsoft_Azure_Logo.svg.png" alt="Azure" />
                <span>Azure</span>
              </div>
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Google_Cloud_Logo.svg/1200px-Google_Cloud_Logo.svg.png" alt="Google Cloud" />
                <span>Google Cloud</span>
              </div>
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_logo.svg/1200px-Docker_logo.svg.png" alt="Docker" />
                <span>Docker</span>
              </div>
              <div className="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1200px-Kubernetes_logo_without_workmark.svg.png" alt="Kubernetes" />
                <span>Kubernetes</span>
              </div>
              <div className="tech-item">
                <span>CI/CD</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 04: API & Integration Solutions Section */}
      <section className="sd-api-section">
        <div className="sd-api-content">
          <div className="sd-api-text">
            <h2>Solutions d'intégration & API</h2>
            <p>
              Nous concevons et développons des API robustes et sécurisées pour connecter vos applications et services. Nous vous aidons à mettre en place des solutions d'intégration pour automatiser vos flux de travail et améliorer votre efficacité.
            </p>
          </div>
          <div className="sd-api-image">
            <img src="/images/IT/Produit_PC1.png" alt="API & Integration Solutions" />
          </div>
        </div>
      </section>

      {/* 05: Data Engineering Section */}
      <section className="sd-data-section">
        <div className="sd-data-content">
          <div className="sd-data-image">
            <img src="/images/IT/Produit_PC2.png" alt="Data Engineering" />
          </div>
          <div className="sd-data-text">
            <h2>Ingénierie des données</h2>
            <p>
              Nous vous aidons à collecter, stocker, traiter et analyser vos données pour en extraire de la valeur. Nous mettons en place des pipelines de données robustes et évolutifs pour alimenter vos applications et vos modèles d'apprentissage automatique.
            </p>
          </div>
        </div>
      </section>

      {/* 06: CTA Section */}
      <section className="sd-cta-section">
        <div className="sd-cta-content">
          <h2>Prêt à transformer votre entreprise avec des solutions logicielles innovantes ?</h2>
          <p>Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider à atteindre vos objectifs.</p>
          <button className="sd-cta-button">
            <span>Contactez-nous</span>
            <FaArrowRight />
          </button>
        </div>
      </section>

      <PartnersLogo />
    </div>
  );
};

export default SoftwareDevelopment;