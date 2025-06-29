import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TradingWidget from "@/components/TradingWidget";
import About from "@/components/About";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import EvaChat from "@/components/EvaChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <Services />
      <TradingWidget />
      <About />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Ready to experience Swiss banking excellence? Contact our team for a personalized consultation.
            </p>
            <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 font-medium px-8 py-3">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <EvaChat />
    </div>
  );
};

export default Index;



