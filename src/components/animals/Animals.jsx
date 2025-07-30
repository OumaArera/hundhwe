import React, { useState, useMemo } from 'react';
import { 
  Globe, Users,
} from 'lucide-react';
import { animalsData } from '../../data/birds.data';
import AnimalCard from './AnimalCard';
import FilterControls from './FilterControls';
import SupportBanner from './SupportBanner';
import Pagination from './Pagination';

const Animals = ({ language = 'luo' }) => {
  const [animals, setAnimals] = useState(animalsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [filterBy, setFilterBy] = useState('all');
  const [animalLanguages, setAnimalLanguages] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleToggleLanguage = (animalId) => {
    setAnimalLanguages(prev => ({
      ...prev,
      [animalId]: prev[animalId] === 'luo' ? 'en' : 'luo'
    }));
  };

  const handleLike = (animalId, increment) => {
    setAnimals(prev => prev.map(animal => 
      animal.id === animalId 
        ? { ...animal, likes: animal.likes + increment }
        : animal
    ));
  };

  const handleAddComment = (animalId, comment) => {
    setAnimals(prev => prev.map(animal =>
      animal.id === animalId
        ? { ...animal, comments: [...animal.comments, comment] }
        : animal
    ));
  };

  const filteredAndSortedAnimals = useMemo(() => {
    let filtered = animals.filter(animal => {
      const matchesSearch = animal.name.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           animal.name.luo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           animal.description.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           animal.description.luo.toLowerCase().includes(searchTerm.toLowerCase());
      
      if (!matchesSearch) return false;
      
      if (filterBy === 'all') return true;
      if (filterBy === 'extinction') return animal.isFacingExtinction;
      return animal.type === filterBy;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'likes':
          return b.likes - a.likes;
        case 'comments':
          return b.comments.length - a.comments.length;
        case 'name':
        default:
          return a.name[language].localeCompare(b.name[language]);
      }
    });

    return filtered;
  }, [animals, searchTerm, sortBy, filterBy, language]);

  // Pagination logic
  const totalPages = Math.ceil(filteredAndSortedAnimals.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAnimals = filteredAndSortedAnimals.slice(startIndex, endIndex);

  // Reset to first page when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [searchTerm, sortBy, filterBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            {language === 'en' ? 'Animals & Wildlife' : 'Lee gi Kit Bungu'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Discover the rich wildlife of our region through the lens of Luo culture and tradition'
              : 'Ng\'e kit lee manie pinywa kokalo kuom kido gi timbe jowa Luo'}
          </p>
        </div>

        <FilterControls
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortBy={sortBy}
          setSortBy={setSortBy}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          currentLanguage={language}
        />

        <SupportBanner currentLanguage={language} />

        {/* Animals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {currentAnimals.map((animal) => (
            <AnimalCard
              key={animal.id}
              animal={animal}
              currentLanguage={animalLanguages[animal.id] || language}
              onToggleLanguage={handleToggleLanguage}
              onLike={handleLike}
              onAddComment={handleAddComment}
            />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          itemsPerPage={itemsPerPage}
          totalItems={filteredAndSortedAnimals.length}
          currentLanguage={language}
        />

        {filteredAndSortedAnimals.length === 0 && (
          <div className="text-center py-16">
            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-600 mb-2">
              {language === 'en' ? 'No animals found' : 'Onge lee moyudi'}
            </h3>
            <p className="text-gray-500">
              {language === 'en' 
                ? 'Try adjusting your search or filter criteria'
                : 'Tem loko yori mar manyo kata pogo'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Animals;