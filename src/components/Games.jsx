import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './footer';
import TicTacToeGame from './TicTacToeGame';
import QuizGame from './QuizGame';
import BrainSprintGame from './BrainSprintGame';
import { levels } from '../data';

const Games = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [gameQuestions, setGameQuestions] = useState(null);
  
  // List of available games
  const games = [
    {
      id: "tictactoe",
      name: "Tic Tac Toe",
      description: "Win with logic! Answer questions to place your X or O.",
      color: "from-purple-500 to-indigo-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 4a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0 4a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 11a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0-4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-10 4a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0-4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm10-6a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0-4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM7 19a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0-4a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
        </svg>
      ),
    },
    {
      id: "quiz",
      name: "Math Quiz",
      description: "Test your math knowledge with challenging multiple-choice questions.",
      color: "from-blue-500 to-cyan-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
        </svg>
      ),
    },
    {
      id: "brainsprint",
      name: "Brain Sprint",
      description: "Race against time! Solve quick math problems and rack up points.",
      color: "from-red-500 to-orange-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 5.18L10.59 16.6l-4.24-4.24 1.41-1.41 2.83 2.83 10-10L22 5.18zm-2.21 5.04c.13.57.21 1.17.21 1.78 0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8c1.58 0 3.04.46 4.28 1.25l1.44-1.44A9.9 9.9 0 0012 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-1.19-.22-2.33-.6-3.39l-1.61 1.61z"/>
        </svg>
      ),
    },
  ];

  // Handle game selection
  const handleGameSelect = (gameId) => {
    setSelectedGame(gameId);
    
    // Clear lesson and level selections when switching games
    if (gameId === 'quiz') {
      setSelectedLevel(null);
      setSelectedLesson(null);
    } else {
      setSelectedLevel(null);
      setSelectedLesson(null);
      setGameQuestions(null);
    }
  };

  // Handle level selection for quiz
  const handleLevelSelect = (levelId) => {
    setSelectedLevel(levelId);
    setSelectedLesson(null);
    setGameQuestions(null);
  };

  // Handle lesson selection for quiz
  const handleLessonSelect = (lesson) => {
    setSelectedLesson(lesson);
    
    // Extract questions from the lesson parts
    const allQuestions = [];
    
    lesson.parts.forEach(part => {
      if (part.gameQuestions && part.gameQuestions.length > 0) {
        allQuestions.push(...part.gameQuestions);
      }
    });
    
    // If we found questions, set them
    if (allQuestions.length > 0) {
      setGameQuestions(allQuestions);
    } else {
      // Use default questions if none found
      setGameQuestions(null);
    }
  };

  // Render the selected game
  const renderGame = () => {
    if (!selectedGame) return null;

    switch (selectedGame) {
      case 'tictactoe':
        return <TicTacToeGame />;
      case 'quiz':
        if (!selectedLevel) {
          return renderLevelSelection();
        } else if (!selectedLesson) {
          return renderLessonSelection();
        } else {
          return <QuizGame questions={gameQuestions} />;
        }
      case 'brainsprint':
        return <BrainSprintGame />;
      default:
        return null;
    }
  };

  // Render level selection for quiz game
  const renderLevelSelection = () => {
    return (
      <div className="bg-white rounded-lg p-4 shadow-md">
        <h3 className="text-lg font-bold mb-4 text-center">Sélectionnez un niveau</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {Object.values(levels).map(level => (
            <div 
              key={level.id}
              onClick={() => handleLevelSelect(level.id)}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <h4 className="font-medium">{level.title}</h4>
              <p className="text-sm text-gray-600">{level.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Render lesson selection for quiz game based on selected level
  const renderLessonSelection = () => {
    const level = levels[selectedLevel];
    
    if (!level) return <div>Niveau non trouvé</div>;
    
    // Get lessons based on whether this level has tracks
    let lessonsList = [];
    
    if (level.hasTracks) {
      // For levels with tracks, gather lessons from all tracks
      Object.values(level.tracks).forEach(track => {
        if (track.lessons) {
          lessonsList = [...lessonsList, ...track.lessons];
        }
      });
    } else {
      // For levels without tracks
      lessonsList = level.lessons;
    }
    
    return (
      <div className="bg-white rounded-lg p-4 shadow-md">
        <div className="mb-4">
          <button 
            onClick={() => setSelectedLevel(null)}
            className="text-blue-500 hover:underline flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Retour aux niveaux
          </button>
        </div>
        
        <h3 className="text-lg font-bold mb-4 text-center">Sélectionnez un cours de {level.title}</h3>
        
        <div className="space-y-3 max-h-[400px] overflow-y-auto p-2">
          {lessonsList.map(lesson => (
            <div 
              key={lesson.id}
              onClick={() => handleLessonSelect(lesson)}
              className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <h4 className="font-medium">{lesson.title}</h4>
              <p className="text-xs text-gray-500 mt-1">
                {lesson.parts?.length || 0} partie(s)
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 p-3 sm:p-4 md:p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Jeux Mathématiques</h1>
          
          {/* Games selection cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {games.map(game => (
              <div
                key={game.id}
                onClick={() => handleGameSelect(game.id)}
                className={`group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer ${
                  selectedGame === game.id ? 'ring-2 ring-offset-2 ring-blue-500' : ''
                }`}
              >
                {/* Gradient background strip */}
                <div className={`h-2 sm:h-3 bg-gradient-to-r ${game.color}`}></div>
                
                <div className="p-4 sm:p-6 flex flex-col h-full">
                  {/* Icon and title row */}
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className={`text-white p-1.5 sm:p-2 rounded-lg bg-gradient-to-br ${game.color} mr-3 sm:mr-4`}>
                      {game.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold">{game.name}</h3>
                  </div>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 flex-grow">{game.description}</p>
                  
                  <div className="flex items-center justify-between mt-1 sm:mt-2">
                    <span className="text-xs sm:text-sm font-medium text-indigo-600">
                      {selectedGame === game.id ? 'Sélectionné' : 'Jouer maintenant'}
                    </span>
                    <span className="bg-blue-50 text-blue-700 rounded-full p-1 group-hover:bg-blue-100 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </div>
                
                {/* Decorative circles */}
                <div className={`absolute -top-8 -right-8 sm:-top-10 sm:-right-10 w-16 h-16 sm:w-24 sm:h-24 rounded-full opacity-10 bg-gradient-to-br ${game.color}`}></div>
                <div className={`absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-12 h-12 sm:w-16 sm:h-16 rounded-full opacity-10 bg-gradient-to-br ${game.color}`}></div>
              </div>
            ))}
          </div>
          
          {/* Game content area */}
          {selectedGame && (
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
              <div className="mb-4">
                <div className="flex items-center">
                  <h2 className="text-xl font-bold">
                    {games.find(g => g.id === selectedGame)?.name || 'Jeu'}
                  </h2>
                  {selectedLevel && selectedGame === 'quiz' && !selectedLesson && (
                    <span className="ml-2 text-gray-500">
                      &gt; {levels[selectedLevel]?.title}
                    </span>
                  )}
                  {selectedLesson && selectedGame === 'quiz' && (
                    <>
                      <span className="ml-2 text-gray-500">
                        &gt; {levels[selectedLevel]?.title} &gt; {selectedLesson.title}
                      </span>
                      <button 
                        onClick={() => {
                          setSelectedLesson(null);
                          setGameQuestions(null);
                        }}
                        className="ml-auto text-blue-500 hover:underline text-sm"
                      >
                        Changer de cours
                      </button>
                    </>
                  )}
                </div>
              </div>
              
              {renderGame()}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Games; 