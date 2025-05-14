import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './footer';
import { levels, tracks } from '../data';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Function to collect all lessons across all levels and tracks
  const getAllLessons = () => {
    const allLessons = [];
    
    // Loop through each level
    Object.entries(levels).forEach(([levelId, level]) => {
      if (level.hasTracks) {
        // For levels with tracks (e.g., 1bac, 2bac)
        Object.entries(level.tracks).forEach(([trackId, track]) => {
          track.lessons.forEach(lesson => {
            allLessons.push({
              level,
              levelId,
              trackId,
              trackName: tracks[levelId].find(t => t.id === trackId)?.title || '',
              lesson
            });
          });
        });
      } else {
        // For levels without tracks (e.g., tcs)
        level.lessons.forEach(lesson => {
          allLessons.push({
            level,
            levelId,
            trackId: null,
            trackName: null,
            lesson
          });
        });
      }
    });
    
    return allLessons;
  };

  // Handle search when search term changes
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }
    
    setIsSearching(true);
    const allLessons = getAllLessons();
    
    // Filter lessons based on search term
    const filteredLessons = allLessons.filter(item => {
      const searchTermLower = searchTerm.toLowerCase();
      return (
        item.lesson.title.toLowerCase().includes(searchTermLower) || 
        (item.lesson.parts && item.lesson.parts.some(part => 
          part.title.toLowerCase().includes(searchTermLower)
        ))
      );
    });
    
    setSearchResults(filteredLessons);
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-4 md:p-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Tous les courses</h1>
          
          {/* Search box */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher un cours..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full p-3 pl-10 pr-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Search results */}
          {isSearching ? (
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-3">
                {searchResults.length > 0 
                  ? `${searchResults.length} résultat${searchResults.length > 1 ? 's' : ''} trouvé${searchResults.length > 1 ? 's' : ''}`
                  : 'Aucun résultat trouvé'}
              </h2>
              
              <div className="space-y-3">
                {searchResults.map((item, index) => {
                  const { level, levelId, trackId, trackName, lesson } = item;
                  const lessonUrl = level.hasTracks
                    ? `/courses/${levelId}/${trackId}/${lesson.id}`
                    : `/courses/${levelId}/${lesson.id}`;
                  
                  return (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <Link to={lessonUrl} className="block">
                        <p className="text-sm text-gray-500 mb-1">
                          {level.title}{trackName ? ` › ${trackName}` : ''}
                        </p>
                        <h3 className="font-semibold text-blue-600 hover:text-blue-800">{lesson.title}</h3>
                        {lesson.parts && (
                          <div className="mt-2 text-sm text-gray-600">
                            <p className="font-medium">Parties :</p>
                            <ul className="ml-4 mt-1 list-disc">
                              {lesson.parts.slice(0, 3).map((part, i) => (
                                <li key={i}>{part.title}</li>
                              ))}
                              {lesson.parts.length > 3 && <li>...</li>}
                            </ul>
                          </div>
                        )}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            // Regular courses listing
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(levels).map(([levelId, level]) => (
                <div key={levelId} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-4 md:p-5">
                    <h2 className="text-xl font-bold mb-3">{level.title}</h2>
                    <p className="text-gray-600 mb-4">{level.description}</p>
                    
                    <Link 
                      to={`/courses/${levelId}`} 
                      className="text-blue-500 hover:text-blue-700 font-medium"
                    >
                      Voir les courses →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;