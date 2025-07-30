import React, { useState } from 'react';
import {  MessageCircle } from 'lucide-react';


const CommentSection = ({ comments, animalId, currentLanguage, onAddComment }) => {
  const [newComment, setNewComment] = useState('');
  const [showComments, setShowComments] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      onAddComment(animalId, {
        user: currentLanguage === 'en' ? 'Anonymous User' : 'Jaduong\'',
        comment: newComment.trim()
      });
      setNewComment('');
    }
  };

  return (
    <div className="border-t pt-4">
      <button
        onClick={() => setShowComments(!showComments)}
        className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors mb-3"
      >
        <MessageCircle className="w-4 h-4" />
        <span>
          {currentLanguage === 'en' 
            ? `${comments.length} Comments` 
            : `Weche ${comments.length}`}
        </span>
      </button>

      {showComments && (
        <div className="space-y-4">
          {comments.map((comment, index) => (
            <div key={index} className="bg-gray-50 p-3 rounded-lg">
              <div className="font-medium text-sm text-gray-700 mb-1">
                {comment.user}
              </div>
              <div className="text-gray-600 text-sm">
                {comment.comment}
              </div>
            </div>
          ))}

          <div className="flex space-x-2">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder={currentLanguage === 'en' ? 'Add a comment...' : 'Med wach...'}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
              onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
            />
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
            >
              {currentLanguage === 'en' ? 'Post' : 'Or'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default CommentSection;