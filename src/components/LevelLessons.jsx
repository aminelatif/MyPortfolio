import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { levels, tracks, getLesson } from '../data';
import Header from './Header';
import Footer from './footer';
import PartPage from './PartPage';

// Calculate lesson progress as percentage of parts completed
const getLessonProgress = (levelId, trackId, lessonId) => {
  const lesson = getLesson(levelId, trackId === 'notrack' ? null : trackId, lessonId);
  if (!lesson?.parts?.length) return 0;

  // First, try to detect the key format PartPage is using
  const samplePartId = lesson.parts[0].id;
  const possibleKeyFormats = [
    `math_progress_${levelId}_${trackId}_${lessonId}_${samplePartId}`,
    `math_progress_${levelId}_notrack_${lessonId}_${samplePartId}`,
    `math_progress_${levelId}_lessons_${lessonId}_${samplePartId}`,
    `math_progress_${levelId}_null_${lessonId}_${samplePartId}`,
  ];

  // Debug logging for key detection
  console.log("[DEBUG] Checking progress for:", { levelId, trackId, lessonId });
  console.log("[DEBUG] Possible key formats:", possibleKeyFormats);

  // Detect which format exists in localStorage
  const detectedFormat = possibleKeyFormats.find(format => 
    localStorage.getItem(format) !== null
  )?.split('_').slice(0, -1).join('_'); // Remove the partId

  console.log("[DEBUG] Detected key format:", detectedFormat || "No format detected, will try all formats");

  // Count completed parts using the detected format (or try all formats if none detected)
  const completedParts = lesson.parts.reduce((count, part) => {
    const keysToCheck = detectedFormat 
      ? [`${detectedFormat}_${part.id}`] 
      : possibleKeyFormats.map(f => f.replace(samplePartId, part.id));

    console.log(`[DEBUG] Checking keys for part ${part.id}:`, keysToCheck);

    for (const key of keysToCheck) {
      try {
        const progress = JSON.parse(localStorage.getItem(key));
        if (progress?.isCompleted) {
          console.log(`[DEBUG] Found completed part ${part.id} with key:`, key);
          return count + 1;
        }
      } catch (e) {
        console.error(`[DEBUG] Error reading progress for ${key}:`, e);
      }
    }
    return count;
  }, 0);

  const progress = Math.round((completedParts / lesson.parts.length) * 100);
  console.log(`[DEBUG] Final progress for lesson ${lessonId}: ${progress}% (${completedParts}/${lesson.parts.length} parts)`);
  return progress;
};

// Helper function to generate consistent progress keys
const getProgressKey = (levelId, trackId, lessonId, partId) => {
  const normalizedTrackId = trackId === 'notrack' ? 'notrack' : (trackId || 'lessons');
  return `math_progress_${levelId}_${normalizedTrackId}_${lessonId}_${partId}`;
};

// Lesson Card Component
const LessonCard = ({ lesson, levelId, trackId, lessonId, navigate, level }) => {
  const progress = getLessonProgress(levelId, trackId, lessonId);
  const isComplete = progress === 100;

  return (
    <div className="lesson-card bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all">
      <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
      <div className="p-5 md:p-6">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 flex-1">{lesson.title}</h2>
          {isComplete && (
            <span className="badge badge-success">
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Complété
            </span>
          )}
        </div>
        
        <p className="text-gray-600 mb-3">
          <span className="font-medium">{lesson.parts.length}</span> partie{lesson.parts.length > 1 ? 's' : ''}
        </p>
        
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-600">Progression</span>
            <span className="text-sm font-medium text-gray-700">{progress}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 transition-all duration-500" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        <button 
          onClick={() => navigate(level?.hasTracks 
            ? `/courses/${levelId}/${trackId}/${lesson.id}`
            : `/courses/${levelId}/lessons/${lesson.id}`)}
          className="btn btn-primary w-full"
        >
          {progress > 0 && progress < 100 ? 'Continuer le cours' : (isComplete ? 'Revoir le cours' : 'Commencer le cours')}
        </button>
      </div>
    </div>
  );
};

const LevelLessons = () => {
  const { levelId, lessonOrTrackId } = useParams();
  const navigate = useNavigate();
  const level = levels[levelId];

  // Handle navigation back to courses
  const handleBackToCourses = (e) => {
    e.preventDefault();
    navigate('/courses');
  };

  // Debug the current parameters
  console.log("Current params:", { levelId, lessonOrTrackId, level });

  if (!level) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <div className="flex-grow p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
              <h1 className="text-2xl font-bold mb-4 text-red-600">Niveau non trouvé</h1>
              <p className="text-gray-700 mb-6">Le niveau demandé n'existe pas.</p>
              <button 
                onClick={handleBackToCourses}
                className="btn btn-primary"
              >
                Retour aux niveaux
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // If we have a level without tracks (TCS) and a lessonOrTrackId parameter, 
  // it's a lesson ID, so we should navigate to the lesson page
  if (!level.hasTracks && lessonOrTrackId) {
    navigate(`/courses/${levelId}/lessons/${lessonOrTrackId}`);
    return null;
  }

  // If the level has tracks but no track is selected, show track selection
  if (level.hasTracks && !lessonOrTrackId) {
    const levelTracks = tracks[levelId] || [];
    
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <div className="flex-grow p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <button 
              onClick={handleBackToCourses}
              className="mb-6 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium border-0 bg-transparent"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Retour aux niveaux
            </button>
            
            <div className="bg-white shadow-md rounded-lg p-6 md:p-8 mb-8">
              <h1 className="section-title text-2xl md:text-3xl font-bold mb-4 md:mb-6">{level.title}</h1>
              <p className="mb-6 md:mb-8 text-gray-700">{level.description}</p>
            </div>

            <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-gray-800">Choisissez une filière</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {levelTracks.map(track => (
                <div 
                  key={track.id} 
                  className="lesson-card bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => navigate(`/courses/${levelId}/${track.id}`)}
                >
                  <div className="h-3 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                  <div className="p-5 md:p-6">
                    <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-800">{track.title}</h2>
                    <p className="text-gray-600 mb-4">{track.description}</p>
                    <div className="flex justify-end">
                      <button className="btn btn-secondary text-sm">
                        Explorer
                        <svg className="w-4 h-4 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // If the level has tracks and a track is selected, but it's invalid
  if (level.hasTracks && lessonOrTrackId && !level.tracks[lessonOrTrackId]) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <div className="flex-grow p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
              <h1 className="text-2xl font-bold mb-4 text-red-600">Filière non trouvée</h1>
              <p className="text-gray-700 mb-6">La filière demandée n'existe pas.</p>
              <button 
                onClick={() => navigate(`/courses/${levelId}`)}
                className="btn btn-primary"
              >
                Retour aux filières
              </button>
            </div>
          </div>
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
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="flex-grow p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <button 
            onClick={backLink.action}
            className="mb-6 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium border-0 bg-transparent"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            {backLink.text}
          </button>
          
          <div className="bg-white shadow-md rounded-lg p-6 md:p-8 mb-8">
            <h1 className="section-title text-2xl md:text-3xl font-bold mb-3 md:mb-4">{level.title}</h1>
            {trackInfo && (
              <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-blue-600">{trackInfo.title}</h2>
            )}
            <p className="text-gray-700">{level.description}</p>
          </div>

          {!lessons || lessons.length === 0 ? (
            <div className="bg-white shadow-md rounded-lg p-8 text-center">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
              <p className="text-lg text-gray-600 mb-2">Aucun cours disponible pour le moment.</p>
              <p className="text-md text-gray-500">Revenez bientôt pour voir les nouveaux cours!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lessons.map(lesson => {
                console.log("[DEBUG] Rendering lesson:", lesson);
                return (
                  <LessonCard
                    key={lesson.id}
                    lesson={lesson}
                    levelId={levelId}
                    trackId={level.hasTracks ? lessonOrTrackId : 'notrack'}
                    lessonId={lesson.id}
                    navigate={navigate}
                    level={level}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LevelLessons; 