import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SpecialsSection from './components/SpecialsSection';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <SpecialsSection />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
