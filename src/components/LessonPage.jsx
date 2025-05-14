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
  } else {
    // For levels without tracks (tcs) or special "lessons" trackId
    actualTrackId = null;
    actualLessonId = lessonId; 
  }
  
  // Get the lesson using the correct parameters
  const lesson = getLesson(levelId, actualTrackId, actualLessonId);
  const [activePart, setActivePart] = useState(lesson?.parts[0]?.id || null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Listen for the custom event to change parts
  useEffect(() => {
    const handlePartChange = (event) => {
      setActivePart(event.detail.partId);
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
    setActivePart(partId);
    setShowMobileMenu(false);
  };

  const activeLessonPart = lesson.parts.find(part => part.id === activePart);
  const activePartTitle = activeLessonPart?.title || "";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <button 
            onClick={() => navigate(level.hasTracks 
              ? `/courses/${levelId}/${actualTrackId}` 
              : `/courses/${levelId}`)}
            className="mb-4 inline-block text-blue-500 hover:underline border-0 bg-transparent"
          >
            &larr; Retour aux cours
          </button>
          <h1 className="text-2xl md:text-3xl font-bold mb-6">{lesson.title}</h1>

          {/* Mobile part selector */}
          <div className="md:hidden mb-6">
            <button 
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="flex items-center justify-between w-full p-3 bg-gray-100 rounded-lg text-left"
            >
              <span className="font-medium">{activePartTitle}</span>
              <span>{showMobileMenu ? '▲' : '▼'}</span>
            </button>
            
            {showMobileMenu && (
              <div className="mt-2 bg-white border rounded-lg shadow-lg overflow-hidden">
                <ul>
                  {lesson.parts.map(part => (
                    <li key={part.id}>
                      <button
                        onClick={() => handlePartClick(part.id)}
                        className={`w-full text-left px-4 py-3 border-b ${
                          activePart === part.id
                            ? 'bg-blue-50 text-blue-700 font-medium'
                            : 'hover:bg-gray-50'
                        }`}
                      >
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
              <div className="bg-gray-100 p-4 rounded-lg sticky top-4">
                <h2 className="text-lg font-semibold mb-4">Parties du cours</h2>
                <nav>
                  <ul className="space-y-2">
                    {lesson.parts.map(part => (
                      <li key={part.id}>
                        <button
                          onClick={() => handlePartClick(part.id)}
                          className={`w-full text-left px-3 py-2 rounded ${
                            activePart === part.id
                              ? 'bg-blue-500 text-white'
                              : 'hover:bg-gray-200'
                          }`}
                        >
                          {part.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            {/* Main content */}
            <div className="md:w-3/4">
              {activeLessonPart && <PartPage part={activeLessonPart} />}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LessonPage; 