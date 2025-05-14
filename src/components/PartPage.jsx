import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TicTacToeGame from './TicTacToeGame';
import QuizGame from './QuizGame';
import BrainSprintGame from './BrainSprintGame';
import { getLesson } from '../data';

const PartPage = ({ part, allParts }) => {
  const { levelId, trackId, lessonId } = useParams();
  const [activeTab, setActiveTab] = useState('definition');
  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  // Get the current lesson and parts
  const lesson = getLesson(levelId, trackId, lessonId);
  const parts = lesson?.parts || [];
  
  // Find the current part's index to determine next part
  const currentPartIndex = parts.findIndex(p => p.id === part.id);
  const nextPart = currentPartIndex < parts.length - 1 ? parts[currentPartIndex + 1] : null;

  // Generate a unique key for this part in localStorage
  const getProgressKey = () => {
    if (!part) return '';
    return `math_progress_${levelId}_${trackId || 'notrack'}_${lessonId}_${part.id}`;
  };

  // Load saved progress from localStorage
  useEffect(() => {
    if (!part) return;
    
    const progressKey = getProgressKey();
    const savedProgress = localStorage.getItem(progressKey);
    
    if (savedProgress) {
      const progressData = JSON.parse(savedProgress);
      setProgress(progressData.progress);
      setIsCompleted(progressData.isCompleted);
    }
  }, [part, levelId, trackId, lessonId]);

  // Update progress when user interacts with the content
  const updateProgress = (tabName, progress = 25) => {
    if (!part) return;
    
    const progressKey = getProgressKey();
    
    // Get current progress
    let currentProgress = localStorage.getItem(progressKey)
      ? JSON.parse(localStorage.getItem(progressKey)).progress
      : 0;
    
    // Only increase progress if the tab hasn't been visited
    const visitedTabs = localStorage.getItem(progressKey)
      ? JSON.parse(localStorage.getItem(progressKey)).visitedTabs || []
      : [];
      
    if (!visitedTabs.includes(tabName)) {
      currentProgress += progress;
      visitedTabs.push(tabName);
    }
    
    // Cap progress at 100%
    currentProgress = Math.min(currentProgress, 100);
    
    // Update state
    setProgress(currentProgress);
    setIsCompleted(currentProgress >= 100);
    
    // Save to localStorage
    localStorage.setItem(progressKey, JSON.stringify({
      progress: currentProgress,
      isCompleted: currentProgress >= 100,
      visitedTabs: visitedTabs,
      lastVisited: new Date().toISOString()
    }));
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    updateProgress(tabName);
  };

  // Navigate to the next part
  const goToNextPart = () => {
    if (nextPart) {
      // Update the URL without reloading the page
      const targetPartId = nextPart.id;
      const event = new CustomEvent('changePart', { detail: { partId: targetPartId } });
      document.dispatchEvent(event);
    }
  };

  if (!part) {
    return <div>Partie non trouvée</div>;
  }

  const renderGameComponent = () => {
    switch (part.gameType) {
      case 'tictactoe':
        return <TicTacToeGame questions={part.gameQuestions} onComplete={() => updateProgress('game-completed', 25)} />;
      case 'quiz':
        return <QuizGame questions={part.gameQuestions} onComplete={() => updateProgress('game-completed', 25)} />;
      case 'brainsprint':
        return <BrainSprintGame questions={part.gameQuestions} onComplete={() => updateProgress('game-completed', 25)} />;
      default:
        return <p>Aucun jeu disponible pour cette partie</p>;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-4 py-4 md:px-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-bold">{part.title}</h2>
          
          {/* Progress indicator */}
          <div className="flex items-center">
            <div className="w-16 h-4 bg-gray-200 rounded-full overflow-hidden mr-2">
              <div 
                className={`h-full transition-all duration-500 ${isCompleted ? 'bg-green-500' : 'bg-blue-500'}`} 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-600">{progress}%</span>
          </div>
        </div>

        {/* Tabs - scrollable on mobile */}
        <div className="border-b mb-6 overflow-x-auto">
          <nav className="flex -mb-px whitespace-nowrap min-w-max">
            <button
              onClick={() => handleTabClick('definition')}
              className={`py-2 px-3 md:px-4 text-center border-b-2 font-medium text-sm md:text-base ${
                activeTab === 'definition'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Définition
            </button>
            <button
              onClick={() => handleTabClick('example')}
              className={`py-2 px-3 md:px-4 text-center border-b-2 font-medium text-sm md:text-base ${
                activeTab === 'example'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Exemple
            </button>
            <button
              onClick={() => handleTabClick('game')}
              className={`py-2 px-3 md:px-4 text-center border-b-2 font-medium text-sm md:text-base ${
                activeTab === 'game'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Jeu
            </button>
            {part.exercises && part.exercises.length > 0 && (
              <button
                onClick={() => handleTabClick('exercises')}
                className={`py-2 px-3 md:px-4 text-center border-b-2 font-medium text-sm md:text-base ${
                  activeTab === 'exercises'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Exercices
              </button>
            )}
          </nav>
        </div>

        {/* Tab content */}
        <div className="py-3 md:py-4">
          {activeTab === 'definition' && (
            <div className="prose max-w-none">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Définition</h3>
              <p className="text-gray-800">{part.definition}</p>
            </div>
          )}

          {activeTab === 'example' && (
            <div className="prose max-w-none">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Exemple</h3>
              <p className="text-gray-800">{part.example}</p>
            </div>
          )}

          {activeTab === 'game' && (
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Jeu Interactif</h3>
              <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
                {renderGameComponent()}
              </div>
            </div>
          )}

          {activeTab === 'exercises' && part.exercises && (
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Exercices</h3>
              <ul className="space-y-4">
                {part.exercises.map((exercise, index) => (
                  <li key={index} className="border-b pb-3">
                    <p className="font-medium mb-2">Question: {exercise.question}</p>
                    <details 
                      className="ml-3 md:ml-5"
                      onToggle={(e) => {
                        if (e.target.open) {
                          updateProgress(`exercise-${index}`, 10);
                        }
                      }}
                    >
                      <summary className="text-blue-500 cursor-pointer">Voir la réponse</summary>
                      <div className="mt-2 pl-3 border-l-2 border-blue-200">
                        <p>{exercise.answer}</p>
                      </div>
                    </details>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        {/* Completion badge */}
        {isCompleted && (
          <div className="mt-4 p-3 bg-green-50 text-green-700 border border-green-200 rounded-lg flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Partie complétée!</span>
          </div>
        )}

        {/* Parts Navigation and Next Part Button */}
        <div className="mt-8 border-t pt-4">
          {nextPart && (
            <div className="flex justify-end">
              <button
                onClick={goToNextPart}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center"
              >
                Partie suivante
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartPage; 