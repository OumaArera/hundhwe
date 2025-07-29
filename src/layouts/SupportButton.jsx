import React, { useState, useEffect } from 'react';
import { 
  Heart,
  Sparkles
} from 'lucide-react';

// Support Us Button Component
const SupportButton = ({ currentLanguage }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const content = {
    en: "Support Us",
    luo: "Chwal Lweti"
  };

  return (
    <div className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${
      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
    }`}>
      <button className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center space-x-2">
        <Heart className="w-5 h-5 group-hover:animate-pulse" />
        <span className="font-semibold">{content[currentLanguage]}</span>
        <Sparkles className="w-4 h-4 group-hover:animate-spin" />
      </button>
    </div>
  );
};

export default SupportButton;