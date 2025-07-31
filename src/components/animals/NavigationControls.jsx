import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';


const NavigationControls = ({ 
  onPrev, 
  onNext, 
  onToggleAutoPlay, 
  isAutoPlaying, 
  disabled 
}) => {
  const [lastClick, setLastClick] = useState(0);
  const throttleDelay = 300;

  const handlePrev = () => {
    const now = Date.now();
    if (now - lastClick < throttleDelay) return;
    setLastClick(now);
    onPrev();
  };

  const handleNext = () => {
    const now = Date.now();
    if (now - lastClick < throttleDelay) return;
    setLastClick(now);
    onNext();
  };

  return (
    <>
      {/* Desktop Navigation */}
      <button
        onClick={handlePrev}
        disabled={disabled}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/70 hidden md:block disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <button
        onClick={handleNext}
        disabled={disabled}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/70 hidden md:block disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Mobile Navigation */}
      <div className="absolute inset-0 flex md:hidden">
        <button
          onClick={handlePrev}
          disabled={disabled}
          className="flex-1 flex items-center justify-start pl-4 disabled:opacity-30"
          aria-label="Previous image"
        >
          <div className="bg-black/30 p-3 rounded-full">
            <ChevronLeft className="w-5 h-5 text-white" />
          </div>
        </button>
        <button
          onClick={handleNext}
          disabled={disabled}
          className="flex-1 flex items-center justify-end pr-4 disabled:opacity-30"
          aria-label="Next image"
        >
          <div className="bg-black/30 p-3 rounded-full">
            <ChevronRight className="w-5 h-5 text-white" />
          </div>
        </button>
      </div>

      {/* Auto-play control */}
      <button
        onClick={onToggleAutoPlay}
        className="absolute top-3 right-3 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 md:opacity-100 transition-opacity duration-200 hover:bg-black/70"
        title={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
      >
        {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </button>
    </>
  );
};

export default NavigationControls;