import React from 'react';
import { Shield } from 'lucide-react';

const Footer = () => {
  const footerSections = [
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
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-yellow-400 mr-3" />
              <span className="font-serif text-2xl font-bold text-white">Bank of Swiss</span>
            </div>
            <p className="text-gray-400 text-sm">
              Swiss Excellence in Global Banking since 1873
            </p>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-serif text-lg font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Bank of Swiss. All rights reserved. Licensed and regulated by Swiss Financial Market Supervisory Authority.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



