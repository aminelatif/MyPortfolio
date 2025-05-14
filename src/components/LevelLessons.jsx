import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { levels, tracks, getLesson } from '../data';
import Header from './Header';
import Footer from './footer';
import PartPage from './PartPage';

const LevelLessons = () => {
  const { levelId, lessonOrTrackId } = useParams();
  const navigate = useNavigate();
  const level = levels[levelId];

  // Handle navigation back to courses
  const handleBackToCourses = (e) => {
    e.preventDefault();
    navigate('/courses');
  };

  if (!level) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-4">Niveau non trouvé</h1>
          <p>Le niveau demandé n'existe pas.</p>
          <button 
            onClick={handleBackToCourses}
            className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Retour aux niveaux
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  // If we have a level without tracks (TCS) and a lessonOrTrackId parameter, 
  // it's a lesson ID, so we should navigate to the lesson page
  if (!level.hasTracks && lessonOrTrackId) {
    const lesson = getLesson(levelId, null, lessonOrTrackId);
    
    if (lesson) {
      // This is a valid TCS lesson - render the lesson content
      return (
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-grow container mx-auto px-4 py-8">
            <LessonContent level={level} lesson={lesson} levelId={levelId} lessonId={lessonOrTrackId} navigate={navigate} />
          </div>
          <Footer />
        </div>
      );
    } else {
      // Invalid lesson ID
      return (
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-grow container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Cours non trouvé</h1>
            <p>Le cours demandé n'existe pas.</p>
            <button 
              onClick={() => navigate(`/courses/${levelId}`)}
              className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Retour aux cours
            </button>
          </div>
          <Footer />
        </div>
      );
    }
  }

  // If the level has tracks but no track is selected, show track selection
  if (level.hasTracks && !lessonOrTrackId) {
    const levelTracks = tracks[levelId] || [];
    
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow container mx-auto px-4 py-8">
          <button 
            onClick={handleBackToCourses}
            className="mb-4 inline-block text-blue-500 hover:underline border-0 bg-transparent"
          >
            &larr; Retour aux niveaux
          </button>
          <h1 className="text-3xl font-bold mb-6">{level.title}</h1>
          <p className="mb-8 text-gray-700">{level.description}</p>

          <h2 className="text-2xl font-semibold mb-6">Choisissez une filière</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {levelTracks.map(track => (
              <div 
                key={track.id} 
                className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => navigate(`/courses/${levelId}/${track.id}`)}
              >
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-3">{track.title}</h2>
                  <p className="text-gray-600 mb-4">{track.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // If the level has tracks and a track is selected, but it's invalid
  if (level.hasTracks && lessonOrTrackId && !level.tracks[lessonOrTrackId]) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-4">Filière non trouvée</h1>
          <p>La filière demandée n'existe pas.</p>
          <button 
            onClick={() => navigate(`/courses/${levelId}`)}
            className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Retour aux filières
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  // Get lessons based on whether the level has tracks or not
  const lessons = level.hasTracks ? level.tracks[lessonOrTrackId].lessons : level.lessons;
  const trackInfo = level.hasTracks ? tracks[levelId].find(t => t.id === lessonOrTrackId) : null;
  const backLink = level.hasTracks 
    ? { action: () => navigate(`/courses/${levelId}`), text: "Retour aux filières" }
    : { action: handleBackToCourses, text: "Retour aux niveaux" };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-8">
        <button 
          onClick={backLink.action}
          className="mb-4 inline-block text-blue-500 hover:underline border-0 bg-transparent"
        >
          &larr; {backLink.text}
        </button>
        <h1 className="text-3xl font-bold mb-4">{level.title}</h1>
        {trackInfo && (
          <h2 className="text-2xl font-semibold mb-6">{trackInfo.title}</h2>
        )}
        <p className="mb-8 text-gray-700">{level.description}</p>

        {lessons.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">Aucun cours disponible pour le moment.</p>
            <p className="text-md text-gray-500 mt-2">Revenez bientôt pour voir les nouveaux cours!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lessons.map(lesson => (
              <div 
                key={lesson.id} 
                className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-3">{lesson.title}</h2>
                  <p className="text-gray-600 mb-4">
                    {lesson.parts.length} partie{lesson.parts.length > 1 ? 's' : ''}
                  </p>
                  <button 
                    onClick={() => navigate(level.hasTracks 
                      ? `/courses/${levelId}/${lessonOrTrackId}/${lesson.id}`
                      : `/courses/${levelId}/${lesson.id}`)}
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    Voir le cours
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

// Helper component for rendering lesson content directly in LevelLessons
const LessonContent = ({ level, lesson, levelId, lessonId, navigate }) => {
  const [activePart, setActivePart] = useState(lesson?.parts[0]?.id || null);

  const handlePartClick = (partId) => {
    setActivePart(partId);
  };

  const activeLessonPart = lesson.parts.find(part => part.id === activePart);

  return (
    <>
      <button 
        onClick={() => navigate(`/courses/${levelId}`)}
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
    </>
  );
};

export default LevelLessons; 