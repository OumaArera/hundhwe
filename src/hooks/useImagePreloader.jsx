import React, { useState, useEffect, useCallback } from 'react';


const useImagePreloader = (images, currentIndex, preloadRange = 2) => {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [failedImages, setFailedImages] = useState(new Set());

  const preloadImage = useCallback((src) => {
    if (loadedImages.has(src) || failedImages.has(src)) return;

    const img = new Image();
    img.onload = () => {
      setLoadedImages(prev => new Set([...prev, src]));
    };
    img.onerror = () => {
      setFailedImages(prev => new Set([...prev, src]));
    };
    img.src = src;
  }, [loadedImages, failedImages]);

  useEffect(() => {
    if (!images.length) return;

    // Preload current and nearby images
    for (let i = -preloadRange; i <= preloadRange; i++) {
      const index = (currentIndex + i + images.length) % images.length;
      const src = images[index];
      if (src) preloadImage(src);
    }
  }, [images, currentIndex, preloadRange, preloadImage]);

  return { loadedImages, failedImages };
};

export default useImagePreloader;