
import React, { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Private Banking', href: '#services' },
    { name: 'Corporate Banking', href: '#services' },
    { name: 'Trading', href: '#trading' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-slate-700" />
            <span className="text-xl font-bold text-slate-800">SwissBank International</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-600 hover:text-slate-900 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <button className="bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition-colors duration-200">
              Client Login
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-slate-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-slate-600 hover:text-slate-900 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full text-left px-3 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200 mt-2">
                Client Login
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
