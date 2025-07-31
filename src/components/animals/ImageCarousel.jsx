import React, { useState, useEffect, useRef, useCallback } from 'react';
import {  Image as ImageIcon } from 'lucide-react';
import CarouselImage from './CarouselImage';
import useImagePreloader from '../../hooks/useImagePreloader';
import NavigationControls from './NavigationControls';

const ImageCarousel = ({ 
  images = [], 
  animalName = 'Animal', 
  autoPlayInterval = 3000,
  placeholder = null,
  persistKey = null 
}) => {
  const [currentImage, setCurrentImage] = useState(() => {
    if (persistKey && typeof window !== 'undefined') {
      const saved = localStorage.getItem(`carousel-${persistKey}`);
      const savedIndex = saved ? parseInt(saved, 10) : 0;
      return savedIndex < images.length ? savedIndex : 0;
    }
    return 0;
  });
  
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);
  
  const { loadedImages, failedImages } = useImagePreloader(images, currentImage);

  // Persist current image index
  useEffect(() => {
    if (persistKey && typeof window !== 'undefined') {
      localStorage.setItem(`carousel-${persistKey}`, currentImage.toString());
    }
  }, [currentImage, persistKey]);

  const nextImage = useCallback(() => {
    if (isTransitioning || images.length <= 1) return;
    setIsTransitioning(true);
    setCurrentImage((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [images.length, isTransitioning]);

  const prevImage = useCallback(() => {
    if (isTransitioning || images.length <= 1) return;
    setIsTransitioning(true);
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [images.length, isTransitioning]);

  const goToImage = useCallback((index) => {
    if (isTransitioning || index === currentImage) return;
    setIsTransitioning(true);
    setCurrentImage(index);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [currentImage, isTransitioning]);

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying(prev => !prev);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1 || isPaused || isTransitioning) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(nextImage, autoPlayInterval);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isAutoPlaying, autoPlayInterval, images.length, isPaused, isTransitioning, nextImage]);

  // Pause handlers
  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  // Handle image load/error
  const handleImageLoad = useCallback((src) => {
    console.log(`Image loaded: ${src}`);
  }, []);

  const handleImageError = useCallback((src) => {
    console.error(`Failed to load image: ${src}`);
  }, []);

  if (!images.length) {
    return (
      <div className="aspect-video w-full rounded-xl bg-gray-200 flex items-center justify-center">
        <div className="text-gray-500 text-center">
          <ImageIcon className="w-12 h-12 mx-auto mb-2" />
          <div>No images available</div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200 relative">
        {images.map((src, index) => (
          <CarouselImage
            key={`${src}-${index}`}
            src={src}
            alt={`${animalName} - Image ${index + 1}`}
            isActive={index === currentImage}
            onLoad={handleImageLoad}
            onError={handleImageError}
            placeholder={placeholder}
          />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <NavigationControls
            onPrev={prevImage}
            onNext={nextImage}
            onToggleAutoPlay={toggleAutoPlay}
            isAutoPlaying={isAutoPlaying}
            disabled={isTransitioning}
          />

          {/* Dot indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => {
              const isLoaded = loadedImages.has(images[index]);
              const hasFailed = failedImages.has(images[index]);
              
              return (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  disabled={isTransitioning}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 relative ${
                    index === currentImage 
                      ? 'bg-white scale-110' 
                      : 'bg-white/60 hover:bg-white/80'
                  } ${hasFailed ? 'bg-red-400' : ''} disabled:cursor-not-allowed`}
                  aria-label={`Go to image ${index + 1}`}
                >
                  {!isLoaded && !hasFailed && (
                    <div className="absolute inset-0 bg-yellow-400 rounded-full animate-pulse opacity-50" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Progress bar for auto-play */}
          {isAutoPlaying && !isPaused && !isTransitioning && (
            <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 rounded-b-xl overflow-hidden">
              <div 
                className="h-full bg-white/80 transition-all duration-100 ease-linear"
                style={{
                  width: `${((currentImage + 1) / images.length) * 100}%`
                }}
              />
            </div>
          )}
        </>
      )}

      {/* Image counter */}
      <div className="absolute top-3 left-3 bg-black/50 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 md:opacity-100 transition-opacity duration-200">
        {currentImage + 1} / {images.length}
      </div>

      {/* Connection status indicator */}
      {failedImages.size > 0 && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-red-500/80 text-white text-xs px-2 py-1 rounded">
          {failedImages.size} image{failedImages.size !== 1 ? 's' : ''} failed to load
        </div>
      )}
    </div>
  );
};


export default ImageCarousel;
