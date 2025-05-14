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

const TicTacToeGame = ({ questions: propQuestions }) => {
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
      const newBoard = [...board];
      newBoard[selectedQuestion.index] = currentPlayer;
      setBoard(newBoard);
      const result = checkWinner(newBoard);
      if (result) {
        setWinner(result);
      } else {
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      }
    } else {
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

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Tic-Tac-Toe Math Game</h2>
      
      {!winner && (
        <p className="text-center mb-4 text-xl font-semibold">{currentPlayer} turn</p>
      )}

      <div className="grid grid-cols-3 gap-4 w-64 mx-auto mb-6">
        {board.map((cell, i) => (
          <button
            key={i}
            className="w-20 h-20 text-2xl bg-white border-2 border-gray-400 hover:bg-gray-200 rounded shadow font-bold"
            onClick={() => handleClick(i)}
          >
            {cell}
          </button>
        ))}
      </div>

      {selectedQuestion && (
        <div className="max-w-md mx-auto bg-white p-6 rounded shadow-lg text-center mb-6">
          <p className="mb-2 font-semibold">{currentPlayer}, answer:</p>
          <p className="text-xl font-bold mb-2">{selectedQuestion.question}</p>
          <p className="text-gray-600 text-sm mb-2">⏳ Time left: {timer}s</p>
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="border p-2 w-full mb-2 rounded"
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={submitAnswer}
          >
            Submit
          </button>
        </div>
      )}

      <div className="text-center mt-6">
        <button
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
          onClick={resetGame}
        >
          Play Again
        </button>
      </div>

      {winner && (
        <div className="text-center mt-8">
          <h2 className="text-3xl font-bold mb-6">
            {winner === 'Draw' ? "It's a draw!" : `🎉 Player ${winner} wins! 🎉`}
          </h2>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {['X', 'O'].map(player => (
              <div key={player} className="bg-white p-6 rounded-xl shadow-xl">
                <div className="text-xl font-bold mb-4 p-2 bg-gray-200 rounded-md text-center">
                  Player {player}
                </div>
                <p className="text-green-600 text-lg font-semibold text-center mb-4">
                  Accuracy: {calculateAccuracy(player)}%
                </p>
                <div className="space-y-2">
                  {answers[player].map((entry, idx) => (
                    <div key={idx} className="p-3 rounded-lg shadow-md bg-gray-50">
                      <p className="text-sm font-semibold">Q: {entry.question}</p>
                      <p className={entry.correctAnswer === entry.playerAnswer ? "text-green-600" : "text-red-600"}>
                        Your answer: {entry.playerAnswer || 'No Answer'}
                        {entry.correctAnswer !== entry.playerAnswer && (
                          <span className="text-green-600"> (Correct: {entry.correctAnswer})</span>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TicTacToeGame;
