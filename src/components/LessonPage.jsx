import React, { useState } from 'react';
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
        <div className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-4">Niveau non trouvé</h1>
          <p>Le niveau demandé n'existe pas.</p>
          <button 
            onClick={() => navigate('/courses')}
            className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Retour aux niveaux
          </button>
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
    // For levels without tracks (tcs)
    actualTrackId = null;
    actualLessonId = trackId; // In this case, trackId is actually lessonId
  }
  
  const lesson = getLesson(levelId, actualTrackId, actualLessonId);
  const [activePart, setActivePart] = useState(lesson?.parts[0]?.id || null);

  if (!lesson) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow container mx-auto px-4 py-8">
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
        <Footer />
      </div>
    );
  }

  const handlePartClick = (partId) => {
    setActivePart(partId);
  };

  const activeLessonPart = lesson.parts.find(part => part.id === activePart);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-8">
        <button 
          onClick={() => navigate(level.hasTracks 
            ? `/courses/${levelId}/${actualTrackId}` 
            : `/courses/${levelId}`)}
          className="mb-4 inline-block text-blue-500 hover:underline border-0 bg-transparent"
        >
          &larr; Retour aux cours
        </button>
        <h1 className="text-3xl font-bold mb-6">{lesson.title}</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar with parts */}
          <div className="md:w-1/4">
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
      <Footer />
    </div>
  );
};

export default LessonPage; 