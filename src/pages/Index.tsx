
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Navigation from '../components/Navigation';
import TradingWidget from '../components/TradingWidget';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      <Hero />
      <Services />
      <TradingWidget />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
