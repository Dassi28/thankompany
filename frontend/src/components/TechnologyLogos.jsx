import React from 'react';
import { useTranslation } from 'react-i18next';
import './TechnologyLogos.scss';
import { 
    FaReact, FaNodeJs, FaAws, FaDocker, FaJava, FaPython, FaAngular, FaVuejs, FaSwift, FaGo
} from 'react-icons/fa';
import { 
    SiMicrosoftazure, SiKubernetes, SiDotnet, SiSpringboot, SiTypescript, SiFlutter 
} from 'react-icons/si';

const technologies = [
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'Azure', icon: <SiMicrosoftazure /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'Kubernetes', icon: <SiKubernetes /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'Python', icon: <FaPython /> },
  { name: '.NET', icon: <SiDotnet /> },
  { name: 'Spring Boot', icon: <SiSpringboot /> },
  { name: 'Angular', icon: <FaAngular /> },
  { name: 'Vue.js', icon: <FaVuejs /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Flutter', icon: <SiFlutter /> },
  { name: 'Swift', icon: <FaSwift /> },
  { name: 'Go', icon: <FaGo /> },
];

const TechnologyLogos = () => {
  const { t } = useTranslation();

  return (
    <section className="technologies-section">
      <h2 className="section-title highlight">{t('our_technologies')}</h2>
      <div className="technologies-grid">
        {technologies.map((tech, index) => (
          <div className="tech-item" key={index}>
            <div className="tech-icon">{tech.icon}</div>
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologyLogos;