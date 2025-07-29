import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const FooterNewsletter = ({ currentLanguage }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const content = {
    en: {
      title: "Stay Connected",
      subtitle: "Watudre",
      description: "Get updates on new stories, cultural insights, and language resources delivered to your inbox.",
      placeholder: "Enter your email",
      button: "Subscribe",
      privacy: "We respect your privacy and cultural values"
    },
    luo: {
      title: "Watudre",
      subtitle: "Stay Connected",
      description: "Yud weche manyien mag sigana, ngero, timbewa, kod puonj mag Onagi e email mari.",
      placeholder: "Ket email mari",
      button: "Donj",
      privacy: "Wamiyo luor weche mag siri kod chike mag kit oganda"
    }
  };

  const currentContent = content[currentLanguage];

  return (
    <div className="bg-gradient-to-r from-red-700 to-orange-600 rounded-xl p-6 shadow-lg">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Mail className="w-6 h-6 text-white" />
          <h3 className="text-xl font-bold text-white">{currentContent.title}</h3>
        </div>
        <p className="text-orange-200 italic text-sm mb-2">{currentContent.subtitle}</p>
        <p className="text-orange-100 text-sm leading-relaxed">
          {currentContent.description}
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={currentContent.placeholder}
            className="flex-1 px-4 py-3 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:bg-white transition-all duration-200"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 shadow-md"
          >
            <Send className="w-4 h-4" />
            <span>{currentContent.button}</span>
          </button>
        </div>
        <p className="text-xs text-orange-200 text-center">
          {currentContent.privacy}
        </p>
      </form>
    </div>
  );
};

export default FooterNewsletter;