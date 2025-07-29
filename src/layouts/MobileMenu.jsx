import React, { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';


const MobileMenu = ( {isMobileMenuOpen, setIsMobileMenuOpen, handleDropdownToggle, currentLanguage, currentNav, openDropdown}) => (
    <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>
      <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-50' : 'opacity-0'}`} 
           onClick={() => setIsMobileMenuOpen(false)} />
      
      <div className={`absolute right-0 top-0 h-full w-80 bg-white shadow-2xl transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-orange-500 to-red-500">
          <div className="text-white">
            <h2 className="text-xl font-bold">Hundhwe</h2>
            <p className="text-sm opacity-90">{currentLanguage === 'en' ? 'Cultural Heritage' : 'Kitwa gi Timbewa'}</p>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-4 space-y-2 overflow-y-auto h-full pb-32">
          {currentNav.map((item, index) => (
            <div key={index}>
              {item.items.length > 0 ? (
                <div>
                  <button
                    onClick={() => handleDropdownToggle(index)}
                    className="w-full flex items-center justify-between p-3 text-gray-700 hover:bg-orange-50 rounded-lg transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5 text-orange-500" />
                      <span className="font-medium">{item.title}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === index && (
                    <div className="ml-6 mt-2 space-y-1">
                      {item.items.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="flex items-center space-x-3 p-3 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors duration-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <subItem.icon className="w-4 h-4" />
                          <div>
                            <div>{subItem.title}</div>
                            <div className="text-xs italic opacity-75">{subItem.luoTitle}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={item.href}
                  className="flex items-center space-x-3 p-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5 text-orange-500" />
                  <span className="font-medium">{item.title}</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
export default MobileMenu;