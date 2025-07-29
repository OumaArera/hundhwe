import React from 'react';
import { Globe, Mail } from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const FooterSocial = ({ currentLanguage }) => {
  const socialLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook", color: "hover:text-blue-400" },
    { icon: FaXTwitter, href: "#", label: "Twitter", color: "hover:text-blue-300" },
    { icon: FaInstagram, href: "#", label: "Instagram", color: "hover:text-pink-400" },
    { icon: FaYoutube, href: "#", label: "YouTube", color: "hover:text-red-400" },
    { icon: Globe, href: "#", label: "Website", color: "hover:text-green-400" },
    { icon: Mail, href: "mailto:info@hundhwe.org", label: "Email", color: "hover:text-yellow-400" }
  ];

  const content = {
    en: {
      title: "Connect With Us",
      subtitle: "Riwri Kodwa",
      description: "Join our community and share in preserving Luo cultural heritage"
    },
    luo: {
      title: "Riwri Kodwa",
      subtitle: "Connect With Us",
      description: "Riwri gi jowetewa kendo ibed gi siso mar rito kit oganda Luo"
    }
  };

  const currentContent = content[currentLanguage];

  return (
    <div className="text-center space-y-6">
      <div>
        <h3 className="text-xl font-bold text-white mb-1">{currentContent.title}</h3>
        <p className="text-orange-200 italic text-sm mb-3">{currentContent.subtitle}</p>
        <p className="text-orange-100 text-sm">{currentContent.description}</p>
      </div>
      
      <div className="flex justify-center space-x-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            className={`p-3 bg-white/10 rounded-full text-orange-200 ${social.color} hover:bg-white/20 transform hover:scale-110 transition-all duration-200 backdrop-blur-sm`}
            aria-label={social.label}
          >
            <social.icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterSocial;