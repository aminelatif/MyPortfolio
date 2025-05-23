import React, { useState, useEffect } from 'react';

// Default questions if none are provided via props
const defaultQuestions = [
  { question: '5 + 3', answer: '8' },
  { question: '12 / 4', answer: '3' },
  { question: '7 - 2', answer: '5' },
  { question: '3 x 4', answer: '12' },
  { question: '\u221A16', answer: '4' },
  { question: '6 + 7', answer: '13' },
  { question: '9 - 5', answer: '4' },
  { question: '10 / 2', answer: '5' },
  { question: '14+9', answer: '23' },
  { question: '15x4', answer: '60' },
  { question: '2\u00B3', answer: '8' },
];

const TicTacToeGame = ({ questions: propQuestions, onComplete }) => {
  // Use provided questions or default ones
  const questionsBank = propQuestions || defaultQuestions;
  
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [availableQuestions, setAvailableQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [winner, setWinner] = useState(null);
  const [answers, setAnswers] = useState({ X: [], O: [] });
  const [timer, setTimer] = useState(45);
  const [shake, setShake] = useState(false);
  const [showCorrectAnimation, setShowCorrectAnimation] = useState(false);

  useEffect(() => {
    setAvailableQuestions(shuffleArray([...questionsBank]));
  }, [questionsBank]);

  useEffect(() => {
    let interval;
    if (selectedQuestion) {
      setTimer(45);
      interval = setInterval(() => {
        setTimer(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            handleTimeout();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [selectedQuestion]);

  const shuffleArray = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  };

  const handleClick = (index) => {
    if (board[index] || winner || selectedQuestion) return;
    const newQuestion = availableQuestions.pop();
    setAvailableQuestions([...availableQuestions]);
    setSelectedQuestion({ ...newQuestion, index });
  };

  const handleTimeout = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    setSelectedQuestion(null);
    setUserAnswer('');
  };

  const checkWinner = (newBoard) => {
    const lines = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ];
    for (let [a, b, c] of lines) {
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return newBoard[a];
      }
    }
    return newBoard.every(Boolean) ? 'Draw' : null;
  };

  const submitAnswer = () => {
    if (!selectedQuestion) return;
    const isCorrect = userAnswer.trim() === selectedQuestion.answer;

    if (isCorrect) {
      setShowCorrectAnimation(true);
      setTimeout(() => setShowCorrectAnimation(false), 1000);
      const newBoard = [...board];
      newBoard[selectedQuestion.index] = currentPlayer;
      setBoard(newBoard);
      const result = checkWinner(newBoard);
      if (result) {
        setWinner(result);
        if (onComplete && typeof onComplete === 'function') {
          onComplete();
        }
      } else {
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      }
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }

    setAnswers(prev => ({
      ...prev,
      [currentPlayer]: [...prev[currentPlayer], {
        question: selectedQuestion.question,
        correctAnswer: selectedQuestion.answer,
        playerAnswer: userAnswer.trim()
      }]
    }));

    setSelectedQuestion(null);
    setUserAnswer('');
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setAvailableQuestions(shuffleArray([...questionsBank]));
    setSelectedQuestion(null);
    setUserAnswer('');
    setWinner(null);
    setAnswers({ X: [], O: [] });
  };

  const calculateAccuracy = (player) => {
    const total = answers[player].length;
    if (total === 0) return 0;
    const correct = answers[player].filter(q => q.correctAnswer === q.playerAnswer).length;
    return Math.round((correct / total) * 100);
  };

  // Improved color scheme
  const playerXColor = "bg-blue-600";
  const playerOColor = "bg-teal-600";
  const currentPlayerBg = currentPlayer === 'X' ? playerXColor : playerOColor;

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md max-w-md mx-auto">
      <div className="text-center mb-4 sm:mb-5">
        <h2 className="text-xl sm:text-2xl font-bold">Math Tic-Tac-Toe</h2>
        <p className="text-sm sm:text-base text-gray-600 mt-1">Answer correctly to place your mark</p>
      </div>
      
      {!winner && (
        <div className={`flex justify-center mb-4 sm:mb-5 ${shake ? 'animate-wiggle' : ''}`}>
          <div className={`px-3 sm:px-4 py-2 rounded-full ${currentPlayerBg} text-white font-semibold text-sm sm:text-base`}>
            Player {currentPlayer}'s Turn
          </div>
        </div>
      )}

      <div className="max-w-[280px] sm:max-w-[320px] mx-auto mb-5 sm:mb-6">
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {board.map((cell, i) => {
            const cellColorClass = cell === 'X' 
              ? `${playerXColor} text-white`
              : cell === 'O' 
                ? `${playerOColor} text-white`
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800';
                
            return (
              <button
                key={i}
                className={`w-[80px] h-[80px] sm:w-[92px] sm:h-[92px] text-2xl sm:text-3xl font-bold ${cellColorClass} rounded-lg shadow-md flex items-center justify-center transition-transform hover:scale-105`}
                onClick={() => handleClick(i)}
                disabled={!!cell || !!winner || !!selectedQuestion}
              >
                {cell}
              </button>
            );
          })}
        </div>
      </div>

      {selectedQuestion && (
        <div className={`max-w-sm mx-auto bg-gray-50 p-4 sm:p-5 rounded-lg shadow-sm mb-4 sm:mb-5 ${showCorrectAnimation ? 'bg-green-50 border border-green-300' : 'border border-gray-200'}`}>
          <div className="text-center mb-3 sm:mb-4">
            <div className={`inline-block px-3 py-1.5 rounded-full ${currentPlayerBg} text-white text-sm sm:text-base mb-2 sm:mb-3`}>
              Player {currentPlayer}
            </div>
            <p className="text-lg sm:text-xl font-bold">{selectedQuestion.question}</p>
          </div>
          
          <div className="mb-3 sm:mb-4">
            <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5">
              <div className="bg-green-500 h-2 sm:h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${(timer / 45) * 100}%` }}>
              </div>
            </div>
            <p className="text-right text-xs text-gray-500 mt-1 sm:mt-1.5">{timer}s remaining</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className="border border-gray-300 p-2 sm:p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-base"
              placeholder="Your answer"
              onKeyPress={(e) => e.key === 'Enter' && submitAnswer()}
              autoFocus
            />
            <button
              className="bg-green-600 hover:bg-green-700 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base transition-colors"
              onClick={submitAnswer}
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {winner && (
        <div className="text-center">
          <div className="mb-4 sm:mb-5 p-4 sm:p-5 bg-blue-50 rounded-lg border border-blue-100">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-800">
              {winner === 'Draw' ? "It's a Draw!" : `Player ${winner} Wins!`}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
            {['X', 'O'].map(player => (
              <div key={player} className={`bg-white p-4 sm:p-5 rounded-lg shadow-md border-t-4 ${player === 'X' ? 'border-blue-600' : 'border-teal-600'}`}>
                <div className={`text-lg sm:text-xl font-bold mb-3 ${player === 'X' ? 'text-blue-700' : 'text-teal-700'}`}>
                  Player {player}
                </div>
                
                <div className="flex justify-center items-center mb-3 sm:mb-4">
                  <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-50 border-2 border-gray-200">
                    <span className="text-xl sm:text-2xl font-bold">{calculateAccuracy(player)}%</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-500 mb-3">Accuracy</p>
                
                <div className="max-h-36 sm:max-h-44 overflow-y-auto rounded-md bg-gray-50 p-2">
                  {answers[player].map((entry, idx) => (
                    <div key={idx} className="text-xs sm:text-sm p-2 rounded mb-1 bg-white border border-gray-100 flex justify-between items-center">
                      <span className="font-medium">{entry.question}</span>
                      <span className={entry.correctAnswer === entry.playerAnswer 
                        ? 'text-green-600 font-medium'
                        : 'text-red-600 font-medium'}>
                        {entry.correctAnswer === entry.playerAnswer ? '✓' : 'X'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <button
            onClick={resetGame}
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-colors"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default TicTacToeGame;
