import React, { useState } from 'react';
import { Heart, Globe, Share2, Bookmark } from 'lucide-react';
import ImageCarousel from './ImageCarousel';
import CommentSection from './CommentSection';

const AnimalCard = ({ animal, currentLanguage, onToggleLanguage, onLike, onAddComment }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    
    // Pass the increment/decrement value to parent
    const increment = newLikedState ? 1 : -1;
    onLike(animal.id, increment);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
      <ImageCarousel 
        images={animal.images} 
        animalName={animal.name[currentLanguage]} 
      />

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-1">
              {animal.name[currentLanguage]}
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              {animal.type} • {currentLanguage === 'en' ? 'Type' : 'Kit'}
            </p>
          </div>

          <button
            onClick={() => onToggleLanguage(animal.id)}
            className="flex items-center space-x-1 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-sm"
          >
            <Globe className="w-3 h-3" />
            <span>{currentLanguage === 'en' ? 'LUO' : 'ENG'}</span>
          </button>
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed">
          {animal.description[currentLanguage]}
        </p>

        <div className="bg-orange-50 p-4 rounded-lg mb-4 border-l-4 border-orange-400">
          <p className="text-orange-800 italic">
            "{animal.nativeSay[currentLanguage]}"
          </p>
        </div>

        {animal.isFacingExtinction && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
            <p className="text-red-800 text-sm font-medium flex items-center">
              <span className="mr-2">⚠️</span>
              {currentLanguage === 'en' ? 'Facing Extinction' : 'Nyaka kony'}
            </p>
          </div>
        )}

        <div className="flex items-center justify-between mb-4">
          <button
            onClick={handleLike}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
              isLiked 
                ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            <span>{animal.likes}</span>
          </button>

          <div className="flex items-center space-x-2">
            <Share2 className="w-4 h-4 text-gray-400 cursor-pointer hover:text-orange-600 transition-colors" />
            <Bookmark className="w-4 h-4 text-gray-400 cursor-pointer hover:text-orange-600 transition-colors" />
          </div>
        </div>

        <CommentSection
          comments={animal.comments}
          animalId={animal.id}
          currentLanguage={currentLanguage}
          onAddComment={onAddComment}
        />
      </div>
    </div>
  );
};

export default AnimalCard;