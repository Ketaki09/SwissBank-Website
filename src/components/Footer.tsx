
import React from 'react';
import { Shield, Euro, CreditCard, Banknote } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Services',
      links: ['Wealth Management', 'Asset Management', 'Corporate Banking', 'Trading Services', 'Private Banking']
    },
    {
      title: 'Company',
      links: ['About Us', 'Leadership', 'Careers', 'Investor Relations', 'Sustainability']
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Regulatory Information', 'Cookie Policy', 'Compliance']
    },
    {
      title: 'Contact',
      links: ['Client Support', 'Office Locations', 'Media Relations', 'Whistleblowing', 'Feedback']
    }
  ];

  return (
    <footer id="contact" className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-yellow-400" />
                <span className="text-2xl font-bold">SwissBank International</span>
              </div>
              
              <p className="text-slate-400 leading-relaxed max-w-md">
                Switzerland's premier international banking institution, providing sophisticated 
                financial solutions with Swiss precision and global reach since 1873.
              </p>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Euro className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm text-slate-400">Swiss Licensed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm text-slate-400">FINMA Regulated</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-slate-400 hover:text-yellow-400 transition-colors duration-200 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span>© 2024 SwissBank International. All rights reserved.</span>
              <span>•</span>
              <span>Zurich, Switzerland</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Banknote className="h-5 w-5 text-slate-500" />
              <span className="text-sm text-slate-400">
                Member of Swiss Bankers Association
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
