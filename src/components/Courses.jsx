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

  // Define colors for different level cards
  const levelColors = {
    'tcs': 'from-blue-500 to-indigo-600',
    '1bac': 'from-green-500 to-teal-600',
    '2bac': 'from-purple-500 to-indigo-600'
  };

  // Define icons for different levels
  const levelIcons = {
    'tcs': (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
      </svg>
    ),
    '1bac': (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
      </svg>
    ),
    '2bac': (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" viewBox="0 0 20 20" fill="currentColor">
        <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
        <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
        <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
      </svg>
    )
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 p-4 md:p-6">
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
                className="w-full p-3 pl-10 pr-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none shadow-sm"
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
            // Regular courses listing with improved card design
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(levels).map(([levelId, level]) => {
                // Count the total number of lessons for this level
                const lessonCount = level.hasTracks
                  ? Object.values(level.tracks).reduce((total, track) => total + track.lessons.length, 0)
                  : level.lessons.length;
                
                const colorClass = levelColors[levelId] || 'from-blue-500 to-indigo-600';
                const icon = levelIcons[levelId] || levelIcons['tcs'];
                
                return (
                  <div 
                    key={levelId} 
                    className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2"
                  >
                    {/* Gradient background strip */}
                    <div className={`h-2 sm:h-3 bg-gradient-to-r ${colorClass}`}></div>
                    
                    <div className="p-4 sm:p-6 flex flex-col h-full">
                      {/* Icon and title row */}
                      <div className="flex items-center mb-3 sm:mb-4">
                        <div className={`text-white p-1.5 sm:p-2 rounded-lg bg-gradient-to-br ${colorClass} mr-3 sm:mr-4`}>
                          {icon}
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold">{level.title}</h3>
                      </div>
                      
                      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 flex-grow">{level.description}</p>
                      
                      <div className="flex items-center text-gray-500 mb-4 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                        </svg>
                        <span>
                          {lessonCount} cours disponible{lessonCount > 1 || lessonCount === 0 ? 's' : ''}
                        </span>
                      </div>
                      
                      <Link
                        to={`/courses/${levelId}`} 
                        className="inline-block w-full text-center bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium px-3 sm:px-4 py-2 rounded-lg transition-colors duration-200 text-sm sm:text-base"
                      >
                        Explorer ce niveau
                      </Link>
                    </div>
                    
                    {/* Decorative circles */}
                    <div className={`absolute -top-8 -right-8 sm:-top-10 sm:-right-10 w-16 h-16 sm:w-24 sm:h-24 rounded-full opacity-10 bg-gradient-to-br ${colorClass}`}></div>
                    <div className={`absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-12 h-12 sm:w-16 sm:h-16 rounded-full opacity-10 bg-gradient-to-br ${colorClass}`}></div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;