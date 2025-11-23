import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import ITService from './pages/ITService';
import Automatisation from './pages/Automatisation';
import Electronics from './pages/Electronics';
import Logistics from './pages/Logistics';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import TermsAndPrivacy from './pages/TermsAndPrivacy';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/global.scss';

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Router>
      <Navbar changeLanguage={changeLanguage} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/it-service" element={<ITService />} />
        <Route path="/automatisation" element={<Automatisation />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/logistics" element={<Logistics />} />
        <Route path="/software-development" element={<SoftwareDevelopment />} />
        <Route path="/terms-and-privacy" element={<TermsAndPrivacy />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
