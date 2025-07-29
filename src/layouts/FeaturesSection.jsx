import React from 'react';
import { 
  Heart, 
  BookOpen, 
  Languages,
  Music
} from 'lucide-react';
import language from '../assets/Language Learning.jpg';
import litrature from '../assets/Oral Literature.jpeg';
import songs from '../assets/Traditional Songs.jpeg';
import culture from '../assets/Discover Our Cultural Treasures.jpeg';

// Features Section Component
const FeaturesSection = ({ currentLanguage }) => {
  const content = {
    en: {
      title: "Discover Our Cultural Treasures",
      subtitle: "Explore the rich heritage of the Luo people through interactive experiences",
      features: [
        {
          icon: Languages,
          title: "Learn Dholuo",
          description: "Master Dholuo with comprehensive lessons, from basic vocabulary to complex expressions",
          image: language
        },
        {
          icon: BookOpen,
          title: "Oral Literature",
          description: "Immerse yourself in folktales, proverbs, and stories passed down through generations",
          image: litrature
        },
        {
          icon: Music,
          title: "Luo Songs",
          description: "Listen to authentic Luo music and learn the stories behind each melody",
          image: songs
        },
        {
          icon: Heart,
          title: "Cultural Practices",
          description: "Understand the ceremonies, traditions, and customs that define Luo identity",
          image: culture
        }
      ]
    },
    luo: {
      title: "Fweny mwandu mag kit ogandawa",
      subtitle: "Fweny kit mwandu mabeyo mag oganda Luo kokalo kuom gik ma ne otimore",
      features: [
        {
          icon: Languages,
          title: "Puonjri Dholuo",
          description: "Puonjri Dholuo gi tiegruok mopogore opogore, chakre gi weche mayot nyaka mago matek tweta",
          image: language
        },
        {
          icon: BookOpen,
          title: "Mbaka kod Sigana",
          description: "Nyumri e sigana, ngeche, kod weche mosekalo chakre kwerewa nyaka tieng' masani",
          image: litrature
        },
        {
          icon: Music,
          title: "Wende Luo",
          description: "Winj wende mag jo-Luo kendo ifweny tiend weche ma wendego hulo",
          image: songs
        },
        {
          icon: Heart,
          title: "Kitwa gi Timbewa",
          description: "Ng’e nyasi, kitwa, kod timbewa ma nyiso kaka Onagi gin",
          image: culture
        }
      ]
    }
  };

  const currentContent = content[currentLanguage];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {currentContent.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentContent.features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-full">
                  <feature.icon className="w-6 h-6 text-orange-600" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;