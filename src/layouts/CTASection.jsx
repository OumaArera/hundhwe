import React from 'react';
import { 
  Globe, 
  BookOpen, 
  Users, 
  ArrowRight,
} from 'lucide-react';
// CTA Section Component
const CTASection = ({ currentLanguage }) => {
  const content = {
    en: {
      title: "Join Our Cultural Journey",
      subtitle: "Be part of preserving and sharing Luo heritage with the world",
      primaryCTA: "Start Exploring",
      secondaryCTA: "Learn More",
      stats: [
        { icon: Globe, number: "25+", label: "Countries Reached" },
        { icon: Users, number: "10K+", label: "Active Learners" },
        { icon: BookOpen, number: "500+", label: "Stories Preserved" }
      ]
    },
    luo: {
      title: "Riwri kodwa e wuodh ogandawa",
      subtitle: "Bed achiel kuom joma kano timbewa kendo yange ne piny ngima",
      primaryCTA: "Chak Fwenyo",
      secondaryCTA: "Fweny Mathoth",
      stats: [
        { icon: Globe, number: "25+", label: "Pinje Mochopo" },
        { icon: Users, number: "10K+", label: "Jopuonj Malich" },
        { icon: BookOpen, number: "500+", label: "Sigana Mokan" }
      ]
    }
  };

  const currentContent = content[currentLanguage];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              {currentContent.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {currentContent.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <span>{currentContent.primaryCTA}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="inline-flex items-center space-x-3 border-2 border-orange-400 text-orange-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300">
              <span>{currentContent.secondaryCTA}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            {currentContent.stats.map((stat, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-orange-400">
                  {stat.number}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;