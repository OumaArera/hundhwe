import React from 'react';
import { Search, Filter, SortAsc
} from 'lucide-react';


const FilterControls = ({ 
  searchTerm, 
  setSearchTerm, 
  sortBy, 
  setSortBy, 
  filterBy, 
  setFilterBy,
  currentLanguage 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={currentLanguage === 'en' ? 'Search animals...' : 'Manye lee...'}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Sort */}
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none bg-white"
          >
            <option value="name">
              {currentLanguage === 'en' ? 'Sort by Name' : 'Pang gi nying'}
            </option>
            <option value="likes">
              {currentLanguage === 'en' ? 'Sort by Likes' : 'Pang gi hera'}
            </option>
            <option value="comments">
              {currentLanguage === 'en' ? 'Sort by Comments' : 'Pang gi weche'}
            </option>
          </select>
          <SortAsc className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>

        {/* Filter */}
        <div className="relative">
          <select
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none bg-white"
          >
            <option value="all">
              {currentLanguage === 'en' ? 'All Animals' : 'Lee duto'}
            </option>
            <option value="Bird">
              {currentLanguage === 'en' ? 'Birds Only' : 'Winyo kende'}
            </option>
            <option value="Mammal">
              {currentLanguage === 'en' ? 'Mammals Only' : 'Lee ma nyuolo nyithindo kende'}
            </option>
            <option value="extinction">
              {currentLanguage === 'en' ? 'Facing Extinction' : 'Lee ma dhi lal'}
            </option>
          </select>
          <Filter className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};
export default FilterControls;