
import React from 'react';
import { Shield, TrendingUp, Wallet } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years of Excellence', value: '150+', icon: Shield },
    { label: 'Assets Under Management', value: 'CHF 50B+', icon: Wallet },
    { label: 'Global Offices', value: '25+', icon: TrendingUp }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Swiss Banking Heritage, Global Innovation
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Founded in 1873 in the heart of Switzerland, SwissBank International has evolved 
                  from a traditional private bank to a global financial powerhouse while maintaining 
                  our commitment to Swiss banking principles of discretion, stability, and excellence.
                </p>
                <p>
                  Our heritage of over 150 years has taught us that true wealth management goes beyond 
                  numbers. We understand that each client's financial journey is unique, requiring 
                  personalized solutions backed by institutional expertise and cutting-edge technology.
                </p>
                <p>
                  Today, we serve discerning clients across 25+ countries, managing over CHF 50 billion 
                  in assets while staying true to our founding values of integrity, innovation, and 
                  unwavering commitment to client success.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-3 rounded-xl w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-yellow-400">Our Commitment</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Swiss Regulatory Excellence</h4>
                      <p className="text-slate-300 text-sm">Operating under the strict Swiss banking regulations, ensuring the highest standards of financial security and client protection.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Innovative Technology</h4>
                      <p className="text-slate-300 text-sm">Cutting-edge digital platforms combined with traditional banking expertise to deliver seamless client experiences.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Personalized Service</h4>
                      <p className="text-slate-300 text-sm">Dedicated relationship managers providing tailored financial solutions for each client's unique needs and objectives.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
