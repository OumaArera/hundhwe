import React, { useState, useEffect } from 'react';
import { 
  ArrowRight,
  ChevronDown
} from 'lucide-react';
// import wisdom from '../assets/wisdom.jpeg';
// import community from '../assets/community.jpeg';
// import celebrartion from '../assets/celebration.jpeg';

import smoked_fish from '../assets/Smoked Fish.jpeg';
import animal_farming from '../assets/Animal Farming.jpeg';
import fish_harvest from '../assets/Fish Harvest.jpeg';
import fried_fish from '../assets/Fried Fish.jpeg';
import our_poetry from '../assets/Luo Poetry.jpeg';
import our_music from '../assets/Our Music.jpeg';
import sun_dried_fish from '../assets/Sund Dried Fish.jpg';
import sunrise from '../assets/Sunrise.jpeg';
import sunset from '../assets/Sunset.jpeg';



// Hero Section Component
const HeroSection = ({ currentLanguage = 'en' }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const content = {
    en: {
      title: "Preserving Our Heritage",
      subtitle: "Echoes of the Dawn",
      luoSubtitle: "Ka owuok ugwe",
      description: "Journey into the rich tapestry of Luo culture, language, and traditions. Discover stories that have shaped generations and continue to inspire our future.",
      cta: "Explore Our Heritage",
      stats: [
        { number: "1000+", label: "Cultural Stories" },
        { number: "50+", label: "Traditional Songs" },
        { number: "200+", label: "Proverbs & Sayings" },
        { number: "100+", label: "Language Lessons" }
      ]
    },
    luo: {
      title: "Rito Kitwa gi Timbewa",
      subtitle: "Ka owuok ugwe",
      luoSubtitle: "Echoes of the Dawn",
      description: "Achiel ka achiel nyaka e chenro mar timbe Luo, dhowa, kod kitwa. Yud sigana mosechungʼ kuom tiengewa kendo pod miyowa siso mar ndalo mabiro.",
      cta: "Ng'e uru Timbewa",
      stats: [
        { number: "1000+", label: "Sigana mag Timbewa" },
        { number: "50+", label: "Wende Machon" },
        { number: "200+", label: "Ngeche gi Weche" },
        { number: "100+", label: "Puonj Dhowa" }
      ]
    }
  };

  // Cultural and economic activity slides
  const slides = [
    {
      image: smoked_fish,
      title: currentLanguage === 'en' ? "Traditional Fish Smoking" : "Dhung'o Rech e Iro"
    },
    {
      image: animal_farming,
      title: currentLanguage === 'en' ? "Livestock Farming" : "Rito Le"
    },
    {
      image: fish_harvest,
      title: currentLanguage === 'en' ? "Fish Harvesting" : "Mako Rech"
    },
    {
      image: fried_fish,
      title: currentLanguage === 'en' ? "Fried Fish" : "Rech Mowang'"
    },
    {
      image: our_poetry,
      title: currentLanguage === 'en' ? "Luo Poetry" : "Wende Luo"
    },
    {
      image: our_music,
      title: currentLanguage === 'en' ? "Traditional Music" : "Wer Machon"
    },
    {
      image: sun_dried_fish,
      title: currentLanguage === 'en' ? "Sun Dried Fish" : "Rech Motwo e Chiengʼ"
    },
    {
      image: sunrise,
      title: currentLanguage === 'en' ? "Dawn Over the Lake" : "Wuok Chieng'"
    },
    {
      image: sunset,
      title: currentLanguage === 'en' ? "Evening by the Waters" : "Ang'ich Welo"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Slower transition to appreciate each image
    return () => clearInterval(timer);
  }, [slides.length]);

  const currentContent = content[currentLanguage];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow with improved sizing */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Multiple background layers for better coverage */}
            <div className="absolute inset-0 w-full h-full">
              {/* Primary background - covers entire area */}
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover'
                }}
              />
              {/* Secondary background - ensures full visibility with scaling */}
              <div 
                className="absolute inset-0 w-full h-full bg-contain bg-center bg-no-repeat opacity-80"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: '50% 100%'
                }}
              />
            </div>
            
            {/* Enhanced overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-orange-900/70"></div>
            
            {/* Bottom fade for text visibility */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Title */}
          

          {/* Main Title */}
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
            {currentContent.title}
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            {currentContent.description}
          </p>

          {/* Current slide title indicator */}
          <div className="bg-black/30 backdrop-blur-sm rounded-full px-6 py-2 inline-block">
            <p className="text-orange-300 font-medium text-lg">
              {slides[currentSlide].title}
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <button className="group inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 drop-shadow-lg">
              <span>{currentContent.cta}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Stats */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {currentContent.stats.map((stat, index) => (
              <div key={index} className="text-center bg-black/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl md:text-4xl font-bold text-orange-400 drop-shadow-md">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-300 mt-2 drop-shadow-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white drop-shadow-lg" />
        </div>
      </div>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 border border-white/30 ${
              index === currentSlide 
                ? 'bg-orange-400 w-8 shadow-lg shadow-orange-400/50' 
                : 'bg-white/50 w-3 hover:bg-white/70'
            }`}
            aria-label={`Slide ${index + 1}: ${slides[index].title}`}
          />
        ))}
      </div>

      {/* Navigation arrows for manual control */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/50 transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronDown className="w-6 h-6 rotate-90" />
      </button>
      
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/50 transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronDown className="w-6 h-6 -rotate-90" />
      </button>
    </section>
  );
};

export default HeroSection;