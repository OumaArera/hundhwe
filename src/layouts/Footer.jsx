
import React from 'react';
import { Heart, Copyright } from 'lucide-react';
import logo from '../assets/hundhwe_logo.png';
import FooterLinks from './FooterLinks';
import FooterNewsletter from './FooterNewsletter';
import FooterSocial from './FooterSocial';

const Footer = ({ currentLanguage = 'luo' }) => {
  const content = {
    en: {
      tagline: "Echoes of the Dawn",
      luoTagline: "Ka owuok ugwe",
      description: "Preserving and celebrating the rich cultural heritage, language, and traditions of the Luo people for current and future generations.",
      madeWith: "Made with",
      forCommunity: "for the Luo community",
      copyright: " 2025 Hundhwe Cultural Heritage Project. All rights reserved.",
      links: [
        { title: "Privacy Policy", href: "/privacy" },
        { title: "Terms of Use", href: "/terms" },
        { title: "Contact Us", href: "/contact" },
        { title: "About", href: "/about" }
      ]
    },
    luo: {
      tagline: "Ka owuok ugwe",
      luoTagline: "Echoes of the Dawn",
      description: "Kano kod nyiso timbe mabeyo mag Onagi, dhowa, kod kitwa ne tiengewa kod ma nobi bangʼwa.",
      madeWith: "Olos gi",
      forCommunity: "ne oganda Luo",
      copyright: " 2025 Chenro mar Timbe Hundhwe. Ratiro duto magwa.",
      links: [
        { title: "Chik mar Siri", href: "/privacy" },
        { title: "Chike mag Tiyo", href: "/terms" },
        { title: "Tudri Kodwa", href: "/contact" },
        { title: "Mathoth Kuomwa", href: "/about" }
      ]
    }
  };

  const currentContent = content[currentLanguage];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-r from-orange-500 to-red-500">
                <img 
                  src={logo} 
                  alt="Hundhwe Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Hundhwe
                </h2>
                <p className="text-xs text-orange-300 font-medium">
                  {currentContent.tagline}
                </p>
                <p className="text-xs text-orange-200 italic">
                  {currentContent.luoTagline}
                </p>
              </div>
            </div>
            
            <p className="text-sm text-gray-300 leading-relaxed">
              {currentContent.description}
            </p>

            <div className="flex items-center space-x-2 text-sm text-orange-200">
              <span>{currentContent.madeWith}</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>{currentContent.forCommunity}</span>
            </div>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-2">
            <FooterLinks currentLanguage={currentLanguage} />
          </div>

          {/* Newsletter & Social Section */}
          <div className="lg:col-span-1 space-y-8">
            <FooterSocial currentLanguage={currentLanguage} />
          </div>
        </div>

        {/* Newsletter Section - Full Width */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <FooterNewsletter currentLanguage={currentLanguage} />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 border-t-4 border-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Copyright className="w-4 h-4" />
              <span>{currentContent.copyright}</span>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {currentContent.links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-orange-400 transition-colors duration-200"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;