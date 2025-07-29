import React from 'react';
import { ChevronDown } from 'lucide-react';


const DropdownMenu = ({ title, items, isOpen, onToggle, icon: Icon }) => (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center space-x-2 px-6 py-3 text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 hover:bg-orange-50 rounded-lg group"
      >
        <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
        <span className="whitespace-nowrap">{title}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4">
            <h3 className="text-white font-semibold text-lg">{title}</h3>
          </div>
          <div className="p-2 max-h-96 overflow-y-auto">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center space-x-3 p-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-all duration-200 group"
              >
                <item.icon className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform duration-200" />
                <div>
                  <div className="font-medium">{item.title}</div>
                  <div className="text-sm text-gray-500 italic">{item.luoTitle}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
export default DropdownMenu;