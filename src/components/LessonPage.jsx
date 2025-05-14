import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getLesson, levels } from '../data';
import Header from './Header';
import Footer from './footer';
import PartPage from './PartPage';

const LessonPage = () => {
  const { levelId, trackId, lessonId } = useParams();
  const navigate = useNavigate();
  const level = levels[levelId];
  
  // Debug routing parameters
  console.log("LessonPage params:", { levelId, trackId, lessonId });
  
  if (!level) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Niveau non trouvé</h1>
            <p>Le niveau demandé n'existe pas.</p>
            <button 
              onClick={() => navigate('/courses')}
              className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Retour aux niveaux
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  // Determine the correct parameters based on whether the level has tracks
  let actualTrackId, actualLessonId;
  
  if (level.hasTracks) {
    // For levels with tracks (1bac, 2bac)
    actualTrackId = trackId;
    actualLessonId = lessonId;
    console.log("Level has tracks, using trackId:", trackId);
  } else {
    // For levels without tracks (tcs) or special "lessons" trackId
    actualTrackId = null;
    actualLessonId = lessonId; 
    console.log("Level has no tracks, using null trackId");
  }
  
  // Get the lesson using the correct parameters
  const lesson = getLesson(levelId, actualTrackId, actualLessonId);
  console.log("Fetched lesson:", lesson?.title || "Not found");
  
  // Initialize state to show lesson overview first (parts list)
  const [showLessonOverview, setShowLessonOverview] = useState(true);
  const [activePart, setActivePart] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Listen for the custom event to change parts
  useEffect(() => {
    const handlePartChange = (event) => {
      setActivePart(event.detail.partId);
      setShowLessonOverview(false);
    };

    document.addEventListener('changePart', handlePartChange);
    
    // Cleanup
    return () => {
      document.removeEventListener('changePart', handlePartChange);
    };
  }, []);

  if (!lesson) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Cours non trouvé</h1>
            <p>Le cours demandé n'existe pas.</p>
            <button 
              onClick={() => navigate(level.hasTracks 
                ? `/courses/${levelId}/${actualTrackId}` 
                : `/courses/${levelId}`)}
              className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Retour aux cours
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handlePartClick = (partId) => {
    console.log("Part clicked:", partId);
    setActivePart(partId);
    setShowLessonOverview(false);
    setShowMobileMenu(false);
  };

  const handleShowAllParts = () => {
    console.log("Show all parts clicked");
    setActivePart(null);
    setShowLessonOverview(true);
  };

  // Make sure activeLessonPart is properly defined
  const activeLessonPart = activePart ? lesson.parts.find(part => part.id === activePart) : null;

  // Debug info
  console.log("Current state:", { 
    showLessonOverview, 
    activePart, 
    activeLessonPartTitle: activeLessonPart?.title 
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <button 
            onClick={() => navigate(level.hasTracks 
              ? `/courses/${levelId}/${trackId}` 
              : `/courses/${levelId}`)}
            className="mb-4 inline-block text-blue-500 hover:underline border-0 bg-transparent"
          >
            &larr; Retour aux cours
          </button>
          <h1 className="text-2xl md:text-3xl font-bold mb-6">{lesson.title}</h1>

          {showLessonOverview ? (
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6 md:p-8">
                <h2 className="text-xl font-semibold mb-4 md:mb-6">Contenu du cours</h2>
                <div className="space-y-4">
                  {lesson.parts.map((part, index) => (
                    <div 
                      key={part.id}
                      onClick={() => handlePartClick(part.id)}
                      className="lesson-card p-4 md:p-5 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md cursor-pointer transition-all"
                    >
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 font-semibold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-gray-800">{part.title}</h3>
                          <p className="text-sm text-gray-500 mt-1">
                            Cliquez pour voir les détails de cette partie
                          </p>
                        </div>
                        <div className="text-blue-500 ml-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div>
              {/* Mobile part selector - improved styling */}
              <div className="md:hidden mb-6">
                <button 
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                  className="flex items-center justify-between w-full p-3 bg-blue-50 text-blue-700 rounded-lg text-left shadow-sm border border-blue-100"
                >
                  <span className="font-medium">{activeLessonPart?.title || "Sélectionner une partie"}</span>
                  <span>{showMobileMenu ? '▲' : '▼'}</span>
                </button>
                
                {showMobileMenu && (
                  <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                    <ul>
                      <li>
                        <button
                          onClick={handleShowAllParts}
                          className="w-full text-left px-4 py-3 border-b font-medium text-blue-600 bg-blue-50 hover:bg-blue-100"
                        >
                          Voir toutes les parties
                        </button>
                      </li>
                      {lesson.parts.map((part, index) => (
                        <li key={part.id}>
                          <button
                            onClick={() => handlePartClick(part.id)}
                            className={`w-full text-left px-4 py-3 border-b flex items-center ${
                              activePart === part.id
                                ? 'bg-blue-50 text-blue-700 font-medium'
                                : 'hover:bg-gray-50'
                            }`}
                          >
                            <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 text-sm font-semibold">
                              {index + 1}
                            </span>
                            {part.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Desktop sidebar with parts - hidden on mobile */}
                <div className="hidden md:block md:w-1/4">
                  <div className="bg-white p-4 rounded-lg sticky top-4 shadow-md border border-gray-200">
                    <button
                      onClick={handleShowAllParts}
                      className="w-full text-left px-3 py-2 mb-4 rounded bg-blue-100 text-blue-700 font-medium hover:bg-blue-200 flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                      Voir toutes les parties
                    </button>
                    <h2 className="text-lg font-semibold mb-4 pb-2 border-b">Parties du cours</h2>
                    <nav>
                      <ul className="space-y-2">
                        {lesson.parts.map((part, index) => (
                          <li key={part.id}>
                            <button
                              onClick={() => handlePartClick(part.id)}
                              className={`w-full text-left px-3 py-2 rounded flex items-center ${
                                activePart === part.id
                                  ? 'bg-blue-500 text-white'
                                  : 'hover:bg-gray-100'
                              }`}
                            >
                              <span className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm font-semibold ${
                                activePart === part.id
                                  ? 'bg-white text-blue-600'
                                  : 'bg-blue-100 text-blue-600'
                              }`}>
                                {index + 1}
                              </span>
                              <span className="line-clamp-2">{part.title}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>

                {/* Main content */}
                <div className="md:w-3/4">
                  {activeLessonPart && <PartPage part={activeLessonPart} allParts={lesson.parts} />}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LessonPage; 