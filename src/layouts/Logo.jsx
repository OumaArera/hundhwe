import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/hundhwe_logo.png'

const Logo = ({currentLanguage}) => (
  <Link to="/" className="flex items-center space-x-2">
    <div className="flex items-center space-x-3">
      <div className="relative">
        {/* Bird silhouette with gradient */}
        <div className="w-16 h-16  rounded-full flex items-center justify-center shadow-lg">
          <img 
            src={logo} 
            alt="Nexora Logo" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          Hundhwe
        </h1>
        <p className="text-xs text-gray-600 font-medium">
          {currentLanguage === 'en' ? 'Echoes of the Dawn' : "Ka owuok ugwe"}
        </p>
      </div>
    </div>
    </Link>
  );

export default Logo;