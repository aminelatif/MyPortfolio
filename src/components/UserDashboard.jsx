import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './footer';
import { levels, tracks } from '../data';

const UserDashboard = () => {
  const [userProgress, setUserProgress] = useState({});
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [overallProgress, setOverallProgress] = useState(0);
  
  // Load progress data from localStorage
  useEffect(() => {
    // Get all localStorage items related to progress
    const progressEntries = {};
    const viewedItems = [];
    const completed = [];
    
    // Total number of parts across all lessons for progress calculation
    let totalParts = 0;
    let completedParts = 0;
    
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      
      if (key && key.startsWith('math_progress_')) {
        try {
          const progressData = JSON.parse(localStorage.getItem(key));
          progressEntries[key] = progressData;
          
          // Parse the key to get level, track, lesson and part info
          const [_, __, levelId, trackId, lessonId, partId] = key.split('_');
          
          // Add to recently viewed if it has a lastVisited timestamp
          if (progressData.lastVisited) {
            viewedItems.push({
              key,
              levelId,
              trackId: trackId === 'notrack' ? null : trackId,
              lessonId,
              partId,
              progress: progressData.progress,
              lastVisited: new Date(progressData.lastVisited)
            });
          }
          
          // Track completed lessons
          if (progressData.isCompleted) {
            if (!completed.some(item => 
              item.levelId === levelId && 
              item.trackId === trackId && 
              item.lessonId === lessonId
            )) {
              completed.push({
                levelId,
                trackId: trackId === 'notrack' ? null : trackId,
                lessonId
              });
            }
            
            completedParts++;
          }
          
          totalParts++;
        } catch (e) {
          console.error('Error parsing progress data:', e);
        }
      }
    }
    
    // Sort recently viewed by date (most recent first)
    const sortedRecentItems = viewedItems
      .sort((a, b) => b.lastVisited - a.lastVisited)
      .slice(0, 5); // Only keep the 5 most recent items
    
    setUserProgress(progressEntries);
    setRecentlyViewed(sortedRecentItems);
    setCompletedLessons(completed);
    
    // Calculate overall progress
    const progressPercentage = totalParts > 0 
      ? Math.round((completedParts / totalParts) * 100) 
      : 0;
    setOverallProgress(progressPercentage);
  }, []);
  
  // Helper function to get lesson title
  const getLessonInfo = (levelId, trackId, lessonId) => {
    const level = levels[levelId];
    if (!level) return { levelTitle: 'Unknown Level', lessonTitle: 'Unknown Lesson' };
    
    const levelTitle = level.title;
    let lessonTitle = 'Unknown Lesson';
    let trackTitle = '';
    
    if (level.hasTracks && trackId) {
      const trackInfo = tracks[levelId]?.find(t => t.id === trackId);
      trackTitle = trackInfo?.title || '';
      
      const lesson = level.tracks[trackId]?.lessons.find(l => l.id === lessonId);
      if (lesson) lessonTitle = lesson.title;
    } else {
      const lesson = level.lessons.find(l => l.id === lessonId);
      if (lesson) lessonTitle = lesson.title;
    }
    
    return { levelTitle, trackTitle, lessonTitle };
  };
  
  // Helper function to get part title
  const getPartTitle = (levelId, trackId, lessonId, partId) => {
    const level = levels[levelId];
    if (!level) return 'Unknown Part';
    
    let lesson;
    if (level.hasTracks && trackId) {
      lesson = level.tracks[trackId]?.lessons.find(l => l.id === lessonId);
    } else {
      lesson = level.lessons.find(l => l.id === lessonId);
    }
    
    if (!lesson) return 'Unknown Part';
    
    const part = lesson.parts.find(p => p.id === partId);
    return part ? part.title : 'Unknown Part';
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-4 md:p-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Mon tableau de bord</h1>
          
          {/* Overall progress */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">Progression globale</h2>
            
            <div className="flex items-center mb-2">
              <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500 transition-all duration-500" 
                  style={{ width: `${overallProgress}%` }}
                ></div>
              </div>
              <span className="ml-3 font-medium">{overallProgress}%</span>
            </div>
            
            <p className="text-sm text-gray-600">
              Vous avez complété {completedLessons.length} leçon{completedLessons.length !== 1 ? 's' : ''}
            </p>
          </div>
          
          {/* Recently viewed */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">Récemment consultés</h2>
            
            {recentlyViewed.length > 0 ? (
              <div className="space-y-3">
                {recentlyViewed.map((item, index) => {
                  const { levelTitle, trackTitle, lessonTitle } = getLessonInfo(
                    item.levelId,
                    item.trackId,
                    item.lessonId
                  );
                  const partTitle = getPartTitle(
                    item.levelId,
                    item.trackId,
                    item.lessonId,
                    item.partId
                  );
                  
                  const url = item.trackId
                    ? `/courses/${item.levelId}/${item.trackId}/${item.lessonId}`
                    : `/courses/${item.levelId}/${item.lessonId}`;
                  
                  const timeAgo = getTimeAgo(item.lastVisited);
                  
                  return (
                    <div key={index} className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50">
                      <Link to={url} className="block">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm text-gray-500">
                              {levelTitle} {trackTitle ? `› ${trackTitle}` : ''}
                            </p>
                            <p className="font-medium">{lessonTitle}</p>
                            <p className="text-sm text-gray-600 mt-1">
                              {partTitle}
                            </p>
                          </div>
                          <div className="flex flex-col items-end">
                            <div className="w-12 h-3 bg-gray-200 rounded-full overflow-hidden mt-1">
                              <div 
                                className="h-full bg-blue-500" 
                                style={{ width: `${item.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-xs text-gray-500 mt-1">{timeAgo}</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-gray-500">Aucun cours consulté récemment.</p>
            )}
          </div>
          
          {/* Completed lessons */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Cours complétés</h2>
            
            {completedLessons.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {completedLessons.map((item, index) => {
                  const { levelTitle, trackTitle, lessonTitle } = getLessonInfo(
                    item.levelId,
                    item.trackId,
                    item.lessonId
                  );
                  
                  const url = item.trackId
                    ? `/courses/${item.levelId}/${item.trackId}/${item.lessonId}`
                    : `/courses/${item.levelId}/${item.lessonId}`;
                  
                  return (
                    <div key={index} className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50">
                      <Link to={url} className="block">
                        <p className="text-sm text-gray-500">
                          {levelTitle} {trackTitle ? `› ${trackTitle}` : ''}
                        </p>
                        <p className="font-medium">{lessonTitle}</p>
                        <div className="flex items-center mt-2 text-green-600 text-sm">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <span>Complété</span>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-gray-500">Aucun cours complété pour le moment.</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Helper function to format time ago
const getTimeAgo = (date) => {
  const seconds = Math.floor((new Date() - date) / 1000);
  
  let interval = Math.floor(seconds / 31536000);
  if (interval >= 1) {
    return `il y a ${interval} an${interval > 1 ? 's' : ''}`;
  }
  
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) {
    return `il y a ${interval} mois`;
  }
  
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) {
    return `il y a ${interval} jour${interval > 1 ? 's' : ''}`;
  }
  
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
    return `il y a ${interval} heure${interval > 1 ? 's' : ''}`;
  }
  
  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    return `il y a ${interval} minute${interval > 1 ? 's' : ''}`;
  }
  
  return 'à l\'instant';
};

export default UserDashboard; 