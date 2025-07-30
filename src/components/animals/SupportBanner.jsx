import React from 'react';
import { HandHeart } from 'lucide-react'


const SupportBanner = ({ currentLanguage }) => {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-8 mb-8 text-center">
      <HandHeart className="w-12 h-12 mx-auto mb-4" />
      <h2 className="text-3xl font-bold mb-4">
        {currentLanguage === 'en' ? 'Support Us' : 'Konywa'}
      </h2>
      <p className="text-lg mb-6 opacity-90">
        {currentLanguage === 'en' 
          ? 'Help us preserve Luo culture and wildlife for future generations'
          : 'Konywa kuom kano kitwa gi lee ni tienge mabiro'}
      </p>
      <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
        {currentLanguage === 'en' ? 'Donate Now' : 'Chiw Sani'}
      </button>
    </div>
  );
};

export default SupportBanner;