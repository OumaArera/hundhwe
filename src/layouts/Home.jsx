import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import StorySection from './StorySection';
import CTASection from './CTASection';
import SupportButton from './SupportButton';

// Main Home Component
const Home = ({ currentLanguage = 'luo' }) => {
  return (
    <div className="min-h-screen">
      <HeroSection currentLanguage={currentLanguage} />
      <FeaturesSection currentLanguage={currentLanguage} />
      <StorySection currentLanguage={currentLanguage} />
      <CTASection currentLanguage={currentLanguage} />
      <SupportButton currentLanguage={currentLanguage} />
    </div>
  );
};

export default Home;