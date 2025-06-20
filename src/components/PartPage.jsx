import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QuizGame from './QuizGame';
import MathLesson from './MathLesson.jsx';
import { getLesson } from '../data';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const renderWithMath = (text) => {
  if (!text) return '';
  
  // Split text by LaTeX delimiters
  const parts = text.split(/(\$\$.*?\$\$|\$.*?\$)/g);
  
  return parts.map((part, index) => {
    if (part.startsWith('$$') && part.endsWith('$$')) {
      // Block math
      const math = part.slice(2, -2);
      return <BlockMath key={index} math={math} />;
    } else if (part.startsWith('$') && part.endsWith('$')) {
      // Inline math
      const math = part.slice(1, -1);
      return <InlineMath key={index} math={math} />;
    }
    return <span key={index}>{part}</span>;
  });
};

const PartPage = ({ part, allParts, onLessonProgressUpdate }) => {
  const { levelId, trackId, lessonId } = useParams();
  const [activeTab, setActiveTab] = useState('cours');
  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [error, setError] = useState(null);
  const [visibleSolutions, setVisibleSolutions] = useState({});
  const navigate = useNavigate();

  // Get the current lesson and parts
  const lesson = getLesson(levelId, trackId === 'notrack' ? null : trackId, lessonId);
  const parts = lesson?.parts || [];
  
  // Find the current part's index to determine next part
  const currentPartIndex = parts.findIndex(p => p.id === part.id);
  const nextPart = currentPartIndex < parts.length - 1 ? parts[currentPartIndex + 1] : null;
  const prevPart = currentPartIndex > 0 ? parts[currentPartIndex - 1] : null;
  const isLastPart = currentPartIndex === parts.length - 1;

  // Calculate total steps for this part
  const getTotalSteps = () => {
    let steps = ['cours', 'quiz'];
    if (part.exercises && part.exercises.length > 0) {
      steps.push('exercises');
    }
    return steps;
  };

  // Calculate progress percentage for this part
  const calculatePartProgress = (completedSteps) => {
    const totalSteps = getTotalSteps().length;
    return Math.round((completedSteps.length / totalSteps) * 100);
  };

  // Calculate lesson progress based on completed parts
  const calculateLessonProgress = () => {
    const totalParts = parts.length;
    let completedParts = 0;

    parts.forEach(p => {
      const partKey = `math_progress_${levelId}_${trackId || 'notrack'}_${lessonId}_${p.id}`;
      const savedProgress = localStorage.getItem(partKey);
      if (savedProgress) {
        try {
          const progressData = JSON.parse(savedProgress);
          if (progressData.isCompleted) {
            completedParts++;
          }
        } catch (e) {
          console.error('Error parsing progress data:', e);
        }
      }
    });

    return Math.round((completedParts / totalParts) * 100);
  };

  // Generate a unique key for this part in localStorage
  const getProgressKey = () => {
    if (!part) return '';
    return `math_progress_${levelId}_${trackId || 'notrack'}_${lessonId}_${part.id}`;
  };

  // Load saved progress from localStorage
  useEffect(() => {
    if (!part) {
      setError('Partie non trouvée');
      return;
    }
    
    try {
      const progressKey = getProgressKey();
      const savedProgress = localStorage.getItem(progressKey);
      
      if (savedProgress) {
        const progressData = JSON.parse(savedProgress);
        setCompletedSteps(progressData.completedSteps || []);
        setProgress(calculatePartProgress(progressData.completedSteps || []));
        setIsCompleted(progressData.isCompleted || false);
      } else {
        // Reset progress for this part if no saved data
        setCompletedSteps([]);
        setProgress(0);
        setIsCompleted(false);
      }
    } catch (e) {
      console.error('Error loading progress:', e);
      setError('Erreur lors du chargement de la progression');
    }
  }, [part, levelId, trackId, lessonId]);

  // Update progress when a step is completed
  const completeStep = (stepName) => {
    if (!part) return;
    
    try {
      const progressKey = getProgressKey();
      const newCompletedSteps = [...new Set([...completedSteps, stepName])];
      
      // Calculate new progress for this part
      const newProgress = calculatePartProgress(newCompletedSteps);
      const allStepsCompleted = getTotalSteps().every(step => 
        newCompletedSteps.includes(step)
      );
      
      // Update state
      setCompletedSteps(newCompletedSteps);
      setProgress(newProgress);
      setIsCompleted(allStepsCompleted);
      
      // Save part progress to localStorage
      localStorage.setItem(progressKey, JSON.stringify({
        progress: newProgress,
        isCompleted: allStepsCompleted,
        completedSteps: newCompletedSteps,
        lastVisited: new Date().toISOString()
      }));

      // Update lesson progress
      const lessonProgress = calculateLessonProgress();
      const lessonKey = `lesson_progress_${levelId}_${trackId || 'notrack'}_${lessonId}`;
      localStorage.setItem(lessonKey, JSON.stringify({
        progress: lessonProgress,
        lastUpdated: new Date().toISOString()
      }));

      // Update parent component with new lesson progress
      if (onLessonProgressUpdate) {
        onLessonProgressUpdate(lessonId, lessonProgress);
      }

      // Also dispatch event for other components that might be listening
      const event = new CustomEvent('lessonProgressUpdate', { 
        detail: { 
          lessonId,
          progress: lessonProgress
        }
      });
      document.dispatchEvent(event);
    } catch (e) {
      console.error('Error updating progress:', e);
      setError('Erreur lors de la mise à jour de la progression');
    }
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  // Navigate to the next part
  const goToNextPart = () => {
    if (nextPart) {
      setActiveTab('cours');
      const targetPartId = nextPart.id;
      const event = new CustomEvent('changePart', { detail: { partId: targetPartId } });
      document.dispatchEvent(event);
    }
  };

  // Navigation functions
  const goToNextStep = () => {
    switch (activeTab) {
      case 'cours':
        handleTabClick('quiz');
        break;
      case 'quiz':
        handleTabClick('exercises');
        break;
      case 'exercises':
        if (nextPart) {
          goToNextPart();
        }
        break;
      default:
        break;
    }
  };

  const goToPreviousStep = () => {
    switch (activeTab) {
      case 'quiz':
        handleTabClick('cours');
        break;
      case 'exercises':
        handleTabClick('quiz');
        break;
      default:
        break;
    }
  };

  const toggleSolution = (index) => {
    setVisibleSolutions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  if (error) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="text-red-600 mb-4">
          <h3 className="text-lg font-semibold">Erreur</h3>
          <p>{error}</p>
        </div>
        <button 
          onClick={() => window.location.reload()} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Rafraîchir la page
        </button>
      </div>
    );
  }

  if (!part) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="text-gray-600">
          <h3 className="text-lg font-semibold">Partie non trouvée</h3>
          <p>La partie demandée n'existe pas.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Progression</span>
          <span className="text-sm font-medium text-gray-700">{progress}%</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 transition-all duration-500" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Tabs - scrollable on mobile */}
      <div className="border-b mb-6 overflow-x-auto">
        <nav className="flex -mb-px whitespace-nowrap min-w-max">
          <button
            onClick={() => handleTabClick('cours')}
            className={`py-2 px-3 md:px-4 text-center border-b-2 font-medium text-sm md:text-base ${
              activeTab === 'cours'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Cours
          </button>
          <button
            onClick={() => handleTabClick('quiz')}
            className={`py-2 px-3 md:px-4 text-center border-b-2 font-medium text-sm md:text-base ${
              activeTab === 'quiz'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Quiz
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
        {activeTab === 'cours' && (
          <div className="prose max-w-none">
            {part.video && (
              <div className="mb-8 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                <div className="">
                  <div className="aspect-video w-full">
                    <iframe
                      src={part.video}
                      className="w-full h-full rounded-lg"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      frameBorder="0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            )}

            {part.sections && part.sections.length > 0 && part.sections.map((section, index) => (
              <div key={index} className="mb-8 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-6 text-blue-700">{section.title}</h3>
                  <div className="text-gray-800 text-base leading-relaxed">
                    {renderWithMath(section.content)}
                  </div>
                </div>
              </div>
            ))}

            <button
              className={`btn btn-success mt-4 ${completedSteps.includes('cours') ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => completeStep('cours')}
              disabled={completedSteps.includes('cours')}
            >
              {completedSteps.includes('cours') ? 'Étape validée' : 'Valider cette étape'}
            </button>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
              {isLastPart ? 'Quiz Final' : 'Quiz Interactif'}
            </h3>
            <div className="bg-gray-50 md:p-0 rounded-lg">
              <QuizGame 
                questions={part.gameQuestions} 
              />
              <button
                className={`btn btn-success mt-4 ${completedSteps.includes('quiz') ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => completeStep('quiz')}
                disabled={completedSteps.includes('quiz')}
              >
                {completedSteps.includes('quiz') ? 'Étape validée' : 'Valider cette étape'}
              </button>
            </div>
          </div>
        )}

        {activeTab === 'exercises' && part.exercises && (
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Exercices</h3>
            {part.exercises && part.exercises.length > 0 && (
              <div className="space-y-6">
                {part.exercises.map((exercise, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg border border-gray-200">
                    <div className="p-6">
                      <h4 className="font-medium mb-4 text-lg">Exercice {index + 1}</h4>
                      <div className="text-gray-800">
                        {renderWithMath(exercise.question)}
                      </div>
                    </div>

                    {(exercise.solution || exercise.video) && (
                      <div className="px-2 sm:px-4 pb-4">
                        <button
                          onClick={() => toggleSolution(index)}
                          className={`inline-block px-4 py-2 rounded-lg shadow-md border text-sm font-medium transition duration-200 ${
                            visibleSolutions[index]
                              ? 'bg-red-100 text-red-700 hover:bg-red-200 border-red-300'
                              : 'bg-green-100 text-green-700 hover:bg-green-200 border-green-300'
                          }`}
                        >
                          {visibleSolutions[index] ? `Masquer la solution ${index + 1}` : `Afficher la solution ${index + 1}`}
                        </button>

                        {visibleSolutions[index] && (
                          <div className="mt-3 bg-white rounded-lg shadow-lg border border-gray-200 p-2 sm:p-4 space-y-4">
                            <h5 className="text-gray-700 font-semibold text-base">Solution :</h5>

                            {exercise.solution && (
                              <div className="p-2 sm:p-4 rounded-md bg-white border shadow mb-4">
                                {renderWithMath(exercise.solution)}
                              </div>
                            )}

                            {exercise.video && (
                              <div className="p-2 sm:p-4 rounded-md bg-white border shadow">
                                <div className="relative w-full pb-[56.25%]">
                                  <iframe
                                    src={exercise.video}
                                    title={`Solution vidéo Exercice ${index + 1}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute top-0 left-0 w-full h-full rounded"
                                  ></iframe>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            <button
              className={`btn btn-success mt-4 ${completedSteps.includes('exercises') ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => completeStep('exercises')}
              disabled={completedSteps.includes('exercises')}
            >
              {completedSteps.includes('exercises') ? 'Étape validée' : 'Valider cette étape'}
            </button>
          </div>
        )}
      </div>

      {/* Navigation buttons */}
      <div className="mt-6 flex justify-between">
        <button
          onClick={goToPreviousStep}
          className={`px-4 py-2 rounded ${
            activeTab === 'cours'
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
          disabled={activeTab === 'cours'}
        >
          Précédent
        </button>
        
        <button
          onClick={goToNextStep}
          className={`px-4 py-2 rounded ${
            (activeTab === 'exercises' && !nextPart) || (activeTab === 'quiz' && !part.exercises)
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
          disabled={(activeTab === 'exercises' && !nextPart) || (activeTab === 'quiz' && !part.exercises)}
        >
          {activeTab === 'exercises' && nextPart ? 'Partie suivante' : 'Suivant'}
        </button>
      </div>
    </div>
  );
};

export default PartPage;