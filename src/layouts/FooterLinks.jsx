import React from 'react';
import { 
  Languages, BookOpen, Heart, 
  TreePine, Users, Crown, Flower,
  Sun, Milestone
} from 'lucide-react';

const FooterLinks = ({ currentLanguage }) => {
  const footerSections = {
    en: [
      {
        title: "Language & Culture",
        luoTitle: "Dhowa gi Timbewa",
        links: [
          { title: "Nature", luoTitle: "Aluora", href: "/language/nature", icon: TreePine },
          { title: "Traditional Medicine", luoTitle: "Thieth Machon", href: "/language/medicine", icon: Flower },
          { title: "Kinship", luoTitle: "Kido mar anyuola", href: "/language/kinship", icon: Users },
          { title: "Action Words", luoTitle: "Weche mag Tich", href: "/language/actions", icon: Heart }
        ]
      },
      {
        title: "Stories & Wisdom",
        luoTitle: "Sigana gi Rieko",
        links: [
          { title: "Folktales", luoTitle: "Sigana mag oganda", href: "/stories/folktales", icon: BookOpen },
          { title: "Proverbs", luoTitle: "Ngeche", href: "/stories/proverbs", icon: Crown },
          { title: "Songs", luoTitle: "Wende", href: "/stories/songs", icon: Heart },
          { title: "Historical Narratives", luoTitle: "Kamanene", href: "/stories/history", icon: BookOpen }
        ]
      },
      {
        title: "Traditions",
        luoTitle: "Timbe Jowa",
        links: [
          { title: "Naming Ceremonies", luoTitle: "Chenro mag chiwo nying", href: "/culture/naming", icon: Users },
          { title: "Rites of Passage", luoTitle: "Siwindhe mihia", href: "/culture/initiation", icon: Milestone },
          { title: "Marriage Traditions", luoTitle: "Keny gi apaka mag dak", href: "/culture/marriage", icon: Heart },
          { title: "Spiritual Practices", luoTitle: "Timbe mag lamo", href: "/culture/spiritual", icon: Crown }
        ]
      }
    ],
    luo: [
      {
        title: "Dhowa gi Timbewa",
        luoTitle: "Language & Culture",
        links: [
          { title: "Aluora", luoTitle: "Nature", href: "/language/nature", icon: TreePine },
          { title: "Thieth Machon", luoTitle: "Traditional Medicine", href: "/language/medicine", icon: Flower },
          { title: "Kido mar anyuola", luoTitle: "Kinship", href: "/language/kinship", icon: Users },
          { title: "Weche mag Tich", luoTitle: "Action Words", href: "/language/actions", icon: Heart }
        ]
      },
      {
        title: "Sigana gi Rieko",
        luoTitle: "Stories & Wisdom",
        links: [
          { title: "Sigana mag oganda", luoTitle: "Folktales", href: "/stories/folktales", icon: BookOpen },
          { title: "Ngeche", luoTitle: "Proverbs", href: "/stories/proverbs", icon: Crown },
          { title: "Wende", luoTitle: "Songs", href: "/stories/songs", icon: Heart },
          { title: "Kamanene", luoTitle: "Historical Narratives", href: "/stories/history", icon: BookOpen }
        ]
      },
      {
        title: "Timbe Jowa",
        luoTitle: "Traditions",
        links: [
          { title: "Chenro mag chiwo nying", luoTitle: "Naming Ceremonies", href: "/culture/naming", icon: Users },
          { title: "Siwindhe mihia", luoTitle: "Rites of Passage", href: "/culture/initiation", icon: Milestone },
          { title: "Keny gi apaka mag dak", luoTitle: "Marriage Traditions", href: "/culture/marriage", icon: Heart },
          { title: "Timbe mag lamo", luoTitle: "Spiritual Practices", href: "/culture/spiritual", icon: Crown }
        ]
      }
    ]
  };

  const currentSections = footerSections[currentLanguage];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
      {currentSections.map((section, index) => (
        <div key={index} className="space-y-4">
          <div className="border-b border-orange-300 pb-2">
            <h3 className="text-lg font-bold text-white mb-1">
              {section.title}
            </h3>
            <p className="text-sm text-orange-200 italic">
              {section.luoTitle}
            </p>
          </div>
          <ul className="space-y-3">
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a
                  href={link.href}
                  className="flex items-center space-x-3 text-orange-100 hover:text-white transition-all duration-200 group"
                >
                  <link.icon className="w-4 h-4 text-orange-300 group-hover:text-white group-hover:scale-110 transition-all duration-200" />
                  <div>
                    <div className="text-sm font-medium">{link.title}</div>
                    <div className="text-xs text-orange-200 italic opacity-75">
                      {link.luoTitle}
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;