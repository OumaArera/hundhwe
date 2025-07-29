import React from 'react';
import { 
  Users, 
  Star,
} from 'lucide-react';
import story from '../assets/community.jpg'

// Story Section Component
const StorySection = ({ currentLanguage }) => {
  const content = {
    en: {
      badge: "Our Mission",
      title: "Bridging Past and Future",
      description: "Every story, every song, every tradition carries the wisdom of our ancestors. At Hundhwe, we believe that preserving our cultural heritage is not just about looking back—it's about building a foundation for future generations to stand upon.",
      quote: "When an old man dies, a library burns to the ground.",
      author: "African Proverb",
      features: [
        "Digital preservation of oral traditions",
        "Interactive language learning experiences",
        "Community-driven content creation",
        "Cultural education for all ages"
      ]
    },
    luo: {
      badge: "Ageto wa",
      title: "Olalo mar kinde mokalo gi mabiro",
      description: "Sigana ka sigana, wende ka wende, timbe duto mag oganda ting’o rieko mar kwerewa machon. E Hundhwe, waketo e chunywa ni rito gik machon mag kitwa ok en mana ng’iyo gik ma ne otimore chon—en gero mise ma tieng' mabiro biro biro chung’ie.",
      quote: "Ung'eni dher ariemba inyiedho ka ing'iyo rangach.",
      author: "Ngech Luo",
      features: [
        "Kano sigana e yor mbui",
        "Puonjo dhowa e yorno ma nyangafu",
        "Sigana ma obagi gi Oganda",
        "Puonj timbewa ne tieng' duto"
      ]
    }
  };

  const currentContent = content[currentLanguage];

  return (
    <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium">
              {currentContent.badge}
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {currentContent.title}
            </h2>
            
            <p className="text-xl text-orange-100 leading-relaxed">
              {currentContent.description}
            </p>

            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <blockquote className="text-lg text-white italic mb-4">
                "{currentContent.quote}"
              </blockquote>
              <cite className="text-orange-200 text-sm">— {currentContent.author}</cite>
            </div>

            <div className="space-y-4">
              {currentContent.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                  <span className="text-white">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={story}
                alt="Community gathering"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">10K+</div>
                  <div className="text-sm text-gray-600">
                    {currentLanguage === 'en' ? 'Community Members' : 'Ogandawa'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;