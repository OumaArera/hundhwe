import React, { useState, useEffect, useRef } from 'react';
import {  Image as ImageIcon, AlertCircle } from 'lucide-react';

const CarouselImage = ({ src, alt, isActive, onLoad, onError, placeholder }) => {
  const [imageStatus, setImageStatus] = useState('loading');
  const imgRef = useRef(null);

  useEffect(() => {
    if (!isActive || !src) return;

    const img = new Image();
    img.onload = () => {
      setImageStatus('loaded');
      onLoad?.(src);
    };
    img.onerror = () => {
      setImageStatus('error');
      onError?.(src);
    };
    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, isActive, onLoad, onError]);

  if (!isActive) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {imageStatus === 'loading' && (
        <div className="flex flex-col items-center justify-center text-gray-500">
          {placeholder ? (
            <img 
              src={placeholder} 
              alt="Loading..."
              className="w-full h-full object-cover opacity-50"
            />
          ) : (
            <>
              <ImageIcon className="w-12 h-12 mb-2 animate-pulse" />
              <div className="text-sm">Loading...</div>
            </>
          )}
        </div>
      )}
      
      {imageStatus === 'error' && (
        <div className="flex flex-col items-center justify-center text-red-400">
          <AlertCircle className="w-12 h-12 mb-2" />
          <div className="text-sm text-center px-4">
            Failed to load image
            <br />
            <button 
              onClick={() => setImageStatus('loading')}
              className="text-blue-400 hover:text-blue-300 underline mt-1"
            >
              Retry
            </button>
          </div>
        </div>
      )}
      
      {imageStatus === 'loaded' && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          style={{ opacity: imageStatus === 'loaded' ? 1 : 0 }}
        />
      )}
    </div>
  );
};

export default CarouselImage;