import React, { useState } from 'react';
import TicTacToeGame from './TicTacToeGame';
import QuizGame from './QuizGame';
import BrainSprintGame from './BrainSprintGame';

const PartPage = ({ part }) => {
  const [activeTab, setActiveTab] = useState('definition');

  if (!part) {
    return <div>Partie non trouvée</div>;
  }

  const renderGameComponent = () => {
    switch (part.gameType) {
      case 'tictactoe':
        return <TicTacToeGame questions={part.gameQuestions} />;
      case 'quiz':
        return <QuizGame questions={part.gameQuestions} />;
      case 'brainsprint':
        return <BrainSprintGame questions={part.gameQuestions} />;
      default:
        return <p>Aucun jeu disponible pour cette partie</p>;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold mb-4">{part.title}</h2>

        {/* Tabs */}
        <div className="border-b mb-6">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('definition')}
              className={`py-2 px-4 text-center border-b-2 font-medium ${
                activeTab === 'definition'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Définition
            </button>
            <button
              onClick={() => setActiveTab('example')}
              className={`py-2 px-4 text-center border-b-2 font-medium ${
                activeTab === 'example'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Exemple
            </button>
            <button
              onClick={() => setActiveTab('game')}
              className={`py-2 px-4 text-center border-b-2 font-medium ${
                activeTab === 'game'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Jeu
            </button>
            {part.exercises && part.exercises.length > 0 && (
              <button
                onClick={() => setActiveTab('exercises')}
                className={`py-2 px-4 text-center border-b-2 font-medium ${
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
        <div className="py-4">
          {activeTab === 'definition' && (
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-3">Définition</h3>
              <p className="text-gray-800">{part.definition}</p>
            </div>
          )}

          {activeTab === 'example' && (
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-3">Exemple</h3>
              <p className="text-gray-800">{part.example}</p>
            </div>
          )}

          {activeTab === 'game' && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Jeu Interactif</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                {renderGameComponent()}
              </div>
            </div>
          )}

          {activeTab === 'exercises' && part.exercises && (
            <div>
              <h3 className="text-xl font-semibold mb-3">Exercices</h3>
              <ul className="space-y-4">
                {part.exercises.map((exercise, index) => (
                  <li key={index} className="border-b pb-3">
                    <p className="font-medium mb-2">Question: {exercise.question}</p>
                    <details className="ml-5">
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
      </div>
    </div>
  );
};

export default PartPage; 