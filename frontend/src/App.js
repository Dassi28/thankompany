import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ITService from './pages/ITService';
import Electronics from './pages/Electronics';
import Logistics from './pages/Logistics';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/global.scss';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/it-service" element={<ITService />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/logistics" element={<Logistics />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
