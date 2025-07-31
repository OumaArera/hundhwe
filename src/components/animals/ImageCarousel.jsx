import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const ImageCarousel = ({ images = [], animalName = 'Animal', autoPlayInterval = 3000 }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [loaded, setLoaded] = useState(Array(images.length).fill(false));
  const [hasError, setHasError] = useState(Array(images.length).fill(false));
  const intervalRef = useRef(null);

  const totalImages = images.length;

  const preloadImage = (index) => {
    const img = new Image();
    img.src = images[index];
    img.onload = () => setLoaded((prev) => {
      const copy = [...prev];
      copy[index] = true;
      return copy;
    });
    img.onerror = () => setHasError((prev) => {
      const copy = [...prev];
      copy[index] = true;
      return copy;
    });
  };

  const nextImage = () => {
    const nextIndex = (currentImage + 1) % totalImages;
    setCurrentImage(nextIndex);
    preloadImage((nextIndex + 1) % totalImages); // preload the next one
  };

  const prevImage = () => {
    const prevIndex = (currentImage - 1 + totalImages) % totalImages;
    setCurrentImage(prevIndex);
    preloadImage((prevIndex - 1 + totalImages) % totalImages); // preload the previous one
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying((prev) => !prev);
  };

  useEffect(() => {
    preloadImage(currentImage);
  }, [currentImage]);

  useEffect(() => {
    if (!isAutoPlaying || isPaused || totalImages <= 1) return;

    intervalRef.current = setInterval(nextImage, autoPlayInterval);
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying, isPaused, autoPlayInterval, currentImage, totalImages]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200 flex items-center justify-center">
        {!loaded[currentImage] && (
          <div className="text-gray-400">Loading...</div>
        )}
        {hasError[currentImage] ? (
          <div className="text-red-500 text-sm">Failed to load image.</div>
        ) : (
          <img
            loading="lazy"
            src={images[currentImage]}
            alt={`${animalName} - Image ${currentImage + 1}`}
            className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${loaded[currentImage] ? 'block' : 'hidden'}`}
          />
        )}
      </div>

      {totalImages > 1 && (
        <>
          {/* Desktop navigation */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/70 hidden md:block"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/70 hidden md:block"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Mobile navigation */}
          <div className="absolute inset-0 flex md:hidden">
            <button
              onClick={prevImage}
              className="flex-1 flex items-center justify-start pl-4"
              aria-label="Previous image"
            >
              <div className="bg-black/30 p-3 rounded-full">
                <ChevronLeft className="w-5 h-5 text-white" />
              </div>
            </button>
            <button
              onClick={nextImage}
              className="flex-1 flex items-center justify-end pr-4"
              aria-label="Next image"
            >
              <div className="bg-black/30 p-3 rounded-full">
                <ChevronRight className="w-5 h-5 text-white" />
              </div>
            </button>
          </div>

          {/* Auto-play toggle */}
          <button
            onClick={toggleAutoPlay}
            className="absolute top-3 right-3 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 md:opacity-100 transition-opacity duration-200 hover:bg-black/70"
            title={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
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

          {/* Auto-play progress bar */}
          {isAutoPlaying && !isPaused && (
            <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 rounded-b-xl overflow-hidden">
              <div
                className="h-full bg-white/80 animate-progress"
                style={{
                  animationDuration: `${autoPlayInterval}ms`,
                  width: '100%',
                }}
              />
            </div>
          )}
        </>
      )}

      {/* Image counter */}
      <div className="absolute top-3 left-3 bg-black/50 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 md:opacity-100 transition-opacity duration-200">
        {currentImage + 1} / {totalImages}
      </div>
    </div>
  );
};

export default ImageCarousel;
