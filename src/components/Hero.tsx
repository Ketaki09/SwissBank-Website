
import React from 'react';
import { Shield, TrendingUp, Banknote } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=6000&q=80')`
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-center min-h-[60vh]">
          {/* Content */}
          <div className="space-y-8 text-center max-w-4xl">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Swiss Excellence in
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  Global Banking
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                Experience unparalleled financial services backed by Swiss precision, 
                innovative technology, and over 150 years of banking expertise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-200 transform hover:scale-105">
                Open Account
              </button>
              <button className="border border-slate-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-200">
                Learn More
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-yellow-400" />
                <span className="text-sm text-slate-300">Swiss Regulated</span>
              </div>
              <div className="flex items-center space-x-2">
                <Banknote className="h-5 w-5 text-yellow-400" />
                <span className="text-sm text-slate-300">CHF 50B+ Assets</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-yellow-400" />
                <span className="text-sm text-slate-300">Global Presence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
