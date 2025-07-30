import React, { useState } from 'react';
import { 
    Menu, Globe, Sun, TreePine, Users, 
    BookOpen, Heart, Flower,ScrollText,
    Languages, Milestone, PawPrint,
    Hammer, UtensilsCrossed, Calculator,
    Quote, HelpCircle, HeartHandshake,
    Music, Feather, Cross, Church,
    Shirt, Sparkles, Zap
} from 'lucide-react';
import Logo from './Logo';
import DropdownMenu from './DropdownMenu';
import MobileMenu from './MobileMenu';

const Header = ({currentLanguage, setCurrentLanguage}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navigationItems = {
    en: [
      {
        title: "Home",
        luoTitle: "Pacho",
        href: "/",
        icon: Sun,
        items: []
      },
      {
        title: "Luo Language", 
        luoTitle: "Ahero Dhowa",
        icon: Languages,
        items: [
          { title: "Plants", luoTitle: "Yien", icon: TreePine, href: "/language/plants" },
          { title: "Animals", luoTitle: "Lee", icon: PawPrint, href: "/language/animals" },
          { title: "Human Body", luoTitle: "Dend dhano", icon: Users, href: "/language/human-body" },
          { title: "Food and Utensils", luoTitle: "Chiemo kod gige tedo", icon: UtensilsCrossed, href: "/language/food-and-utensils" },
          { title: "Tools and Technology", luoTitle: "Gige tich kod rang'iny masani", icon: Hammer, href: "/language/tools-and-technology" },
          { title: "Kinship and Social Hierarchies", luoTitle: "Kido mar anyuola kod rang'iny mar oganda", icon: Users, href: "/language/kinship" },
          { title: "Traditional Medicine", luoTitle: "Thieth Machon", icon: Flower, href: "/language/medicine" },
          { title: "Action Words", luoTitle: "Weche mag Tich", icon: Zap, href: "/language/actions" },
          { title: "Numbers, Colors, and Descriptors", luoTitle: "Kwan, Kido, kod Gik ma Lero", icon: Calculator, href: "/language/descriptors" }
        ]
      },
      {
        title: "Oral Literature",
        luoTitle: "Mbaka kod Sigana",
        icon: BookOpen,
        items: [
          { title: "Folktales", luoTitle: "Sigana mag oganda", icon: BookOpen, href: "/stories/folktales" },
          { title: "Proverbs", luoTitle: "Ngeche", icon: Quote, href: "/stories/proverbs" },
          { title: "Riddles", luoTitle: "Penjo", icon: HelpCircle, href: "/stories/riddles" },
          { title: "Myths and Legends", luoTitle: "Ngero mag Jowa", icon: Sparkles, href: "/stories/myths" },
          { title: "Songs", luoTitle: "Wende", icon: Music, href: "/stories/songs" },
          { title: "Praise poetry and Clan praises", luoTitle: "Pakruok", icon: Feather, href: "/stories/praise" },
          { title: "Historical Narratives", luoTitle: "Kamanene", icon: ScrollText, href: "/stories/history" }
        ]
      },
      {
        title: "Cultural Practices",
        luoTitle: "Kitwa gi Timbewa",
        icon: Heart,
        items: [
          { title: "Naming ceremonies and birth customs", luoTitle: "Chenro mag chiwo nying kod nyuol", icon: Users, href: "/culture/naming" },
          { title: "Initiation and rites of passage", luoTitle: "Siwindhe mihia", icon: Milestone, href: "/culture/initiation" },
          { title: "Marriage and family traditions", luoTitle: "Keny kod apaka mag dak", icon: HeartHandshake, href: "/culture/marriage" },
          { title: "Funeral rites and mourning", luoTitle: "Chenro mag liel kod kuyo", icon: Cross, href: "/culture/funeral" },
          { title: "Religious/spiritual practices and divination", luoTitle: "Timbe mag dini/roho kod lamo", icon: Church, href: "/culture/spiritual" },
          { title: "Dressing and adornments", luoTitle: "Lewni kod gik ma itiyogo e loso", icon: Shirt, href: "/culture/dressing" }
        ]
      }
    ],
    luo: [
      {
        title: "Pacho",
        luoTitle: "Home",
        href: "/",
        icon: Sun,
        items: []
      },
      {
        title: "Ahero Dhowa", 
        luoTitle: "Luo Language",
        icon: Languages,
        items: [
          { title: "Aluora", luoTitle: "Nature", icon: TreePine, href: "/language/nature" },
          { title: "Lee", luoTitle: "Animals", icon: PawPrint, href: "/language/animals" },
          { title: "Dend dhano", luoTitle: "Human Body", icon: Users, href: "/language/body" },
          { title: "Chiemo kod gige tedo", luoTitle: "Food and Utensils", icon: UtensilsCrossed, href: "/language/food" },
          { title: "Gige tich kod rang'iny masani", luoTitle: "Tools and Technology", icon: Hammer, href: "/language/tools" },
          { title: "Kido mar anyuola kod rang'iny mar oganda", luoTitle: "Kinship and Social Hierarchies", icon: Users, href: "/language/kinship" },
          { title: "Thieth Machon", luoTitle: "Traditional Medicine", icon: Flower, href: "/language/medicine" },
          { title: "Weche mag Tich", luoTitle: "Action Words", icon: Zap, href: "/language/actions" },
          { title: "Kwan, Kido, kod Gik ma Lero", luoTitle: "Numbers, Colors, and Descriptors", icon: Calculator, href: "/language/descriptors" }
        ]
      },
      {
        title: "Mbaka kod Sigana",
        luoTitle: "Oral Literature and Storytelling",
        icon: BookOpen,
        items: [
          { title: "Sigana mag oganda", luoTitle: "Folktales", icon: BookOpen, href: "/stories/folktales" },
          { title: "Ngeche", luoTitle: "Proverbs", icon: Quote, href: "/stories/proverbs" },
          { title: "Penjo", luoTitle: "Riddles", icon: HelpCircle, href: "/stories/riddles" },
          { title: "Ngero mag Jowa", luoTitle: "Myths and Legends", icon: Sparkles, href: "/stories/myths" },
          { title: "Wende", luoTitle: "Songs", icon: Music, href: "/stories/songs" },
          { title: "Pakruok", luoTitle: "Praise poetry and Clan praises", icon: Feather, href: "/stories/praise" },
          { title: "Kamanene", luoTitle: "Historical Narratives", icon: ScrollText, href: "/stories/history" }
        ]
      },
      {
        title: "Kitwa gi Timbewa",
        luoTitle: "Cultural Practices",
        icon: Heart,
        items: [
          { title: "Chenro mag chiwo nying kod nyuol", luoTitle: "Naming ceremonies and birth customs", icon: Users, href: "/culture/naming" },
          { title: "Siwindhe mihia", luoTitle: "Initiation and rites of passage", icon: Milestone, href: "/culture/initiation" },
          { title: "Keny kod apaka mag dak", luoTitle: "Marriage and family traditions", icon: HeartHandshake, href: "/culture/marriage" },
          { title: "Chenro mag liel kod kuyo", luoTitle: "Funeral rites and mourning", icon: Cross, href: "/culture/funeral" },
          { title: "Timbe mag dini/roho kod lamo", luoTitle: "Religious/spiritual practices and divination", icon: Church, href: "/culture/spiritual" },
          { title: "Lewni kod gik ma itiyogo e loso", luoTitle: "Dressing and adornments", icon: Shirt, href: "/culture/dressing" }
        ]
      }
    ]
  };

  const currentNav = navigationItems[currentLanguage];

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'en' ? 'luo' : 'en');
    setOpenDropdown(null);
  };

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  

  return (
    <header className="bg-white shadow-xl border-b-4 border-gradient-to-r from-orange-400 to-red-400 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo currentLanguage={currentLanguage} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {currentNav.map((item, index) => (
              item.items.length > 0 ? (
                <DropdownMenu
                  key={index}
                  title={item.title}
                  items={item.items}
                  isOpen={openDropdown === index}
                  onToggle={() => handleDropdownToggle(index)}
                  icon={item.icon}
                />
              ) : (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-2 px-6 py-3 text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 hover:bg-orange-50 rounded-lg group"
                >
                  <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span>{item.title}</span>
                </a>
              )
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">
                {currentLanguage === 'en' ? 'Dholuo' : 'English'}
              </span>
              <span className="sm:hidden">
                {currentLanguage === 'en' ? 'LUO' : 'ENG'}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        handleDropdownToggle={handleDropdownToggle}
        currentLanguage={currentLanguage}
        currentNav={currentNav}
        openDropdown={openDropdown}
      />

      {/* Overlay for desktop dropdowns */}
      {openDropdown !== null && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setOpenDropdown(null)}
        />
      )}
    </header>
  );
};

export default Header;