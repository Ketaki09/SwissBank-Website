
import React from 'react';
import { Shield, TrendingUp, Banknote, CreditCard } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Wealth Management',
      description: 'Comprehensive portfolio management and financial planning services tailored to high-net-worth individuals and families.',
      features: ['Portfolio Optimization', 'Tax Planning', 'Estate Planning', 'Risk Management']
    },
    {
      icon: TrendingUp,
      title: 'Asset Management',
      description: 'Institutional-grade investment solutions with access to global markets and alternative investments.',
      features: ['Institutional Funds', 'Alternative Investments', 'ESG Solutions', 'Multi-Asset Strategies']
    },
    {
      icon: Banknote,
      title: 'Corporate Banking',
      description: 'Comprehensive banking solutions for corporations, including treasury services and trade finance.',
      features: ['Trade Finance', 'Treasury Services', 'Corporate Lending', 'Cash Management']
    },
    {
      icon: CreditCard,
      title: 'Trading Services',
      description: 'Advanced trading platforms with direct market access and institutional-grade execution.',
      features: ['Multi-Asset Trading', 'Prime Brokerage', 'Market Research', 'Execution Services']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Premium Financial Services
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Discover our comprehensive suite of financial services designed to meet 
            the sophisticated needs of discerning clients worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-3 rounded-xl group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-500">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="mt-6 text-slate-800 font-semibold hover:text-yellow-600 transition-colors duration-200 flex items-center group">
                    Learn More
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
