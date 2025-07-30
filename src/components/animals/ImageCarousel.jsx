import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const ImageCarousel = ({ images, animalName, autoPlayInterval = 3000 }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1 || isPaused) return;

    const interval = setInterval(nextImage, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isAutoPlaying, autoPlayInterval, images.length, isPaused]);

  // Pause auto-play on hover (desktop)
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);


  const imageList = images;
  const name = animalName || 'Animal';

  return (
    <div 
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
        <img
          src={imageList[currentImage]}
          alt={`${name} - Image ${currentImage + 1}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {imageList.length > 1 && (
        <>
          {/* Desktop Navigation - Hidden on mobile */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/70 hidden md:block"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/70 hidden md:block"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Mobile Navigation - Always visible on mobile */}
          <div className="absolute inset-0 flex md:hidden">
            <button
              onClick={prevImage}
              className="flex-1 flex items-center justify-start pl-4 text-white/0 hover:text-white/80 transition-colors"
              aria-label="Previous image"
            >
              <div className="bg-black/30 p-3 rounded-full">
                <ChevronLeft className="w-5 h-5 text-white" />
              </div>
            </button>
            <button
              onClick={nextImage}
              className="flex-1 flex items-center justify-end pr-4 text-white/0 hover:text-white/80 transition-colors"
              aria-label="Next image"
            >
              <div className="bg-black/30 p-3 rounded-full">
                <ChevronRight className="w-5 h-5 text-white" />
              </div>
            </button>
          </div>

          {/* Auto-play control */}
          <button
            onClick={toggleAutoPlay}
            className="absolute top-3 right-3 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 md:opacity-100 transition-opacity duration-200 hover:bg-black/70"
            title={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
            {imageList.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  index === currentImage 
                    ? 'bg-white scale-110' 
                    : 'bg-white/60 hover:bg-white/80'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress bar for auto-play */}
          {isAutoPlaying && !isPaused && (
            <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 rounded-b-xl overflow-hidden">
              <div 
                className="h-full bg-white/80 transition-all duration-100 ease-linear"
                style={{
                  width: `${((currentImage + 1) / imageList.length) * 100}%`
                }}
              />
            </div>
          )}
        </>
      )}

      {/* Image counter */}
      <div className="absolute top-3 left-3 bg-black/50 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 md:opacity-100 transition-opacity duration-200">
        {currentImage + 1} / {imageList.length}
      </div>
    </div>
  );
};


export default ImageCarousel;