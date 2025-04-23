
import React, { useState, useEffect } from 'react';

const questions = [
  { question: '5 + 3', answer: '8' },
  { question: '12 / 4', answer: '3' },
  { question: '7 - 2', answer: '5' },
  { question: '3 x 4', answer: '12' },
  { question: '√16', answer: '4' },
  { question: '6 + 7', answer: '13' },
  { question: '9 - 5', answer: '4' },
  { question: '10 / 2', answer: '5' },
  { question: '2²', answer: '4' },
];

const TicTacToeGame = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [questionIndex, setQuestionIndex] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [message, setMessage] = useState('');
  const [winner, setWinner] = useState(null);
  const [timer, setTimer] = useState(45);

  useEffect(() => {
    let interval;
    if (questionIndex !== null) {
      setTimer(45);
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            skipTurn();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [questionIndex]);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    setQuestionIndex(index);
    setUserAnswer('');
    setMessage('');
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
    const correct = questions[questionIndex].answer;
    if (userAnswer.trim() === correct) {
      const newBoard = [...board];
      newBoard[questionIndex] = currentPlayer;
      setBoard(newBoard);
      const result = checkWinner(newBoard);
      if (result) {
        setWinner(result);
        setMessage(result === 'Draw' ? "It's a draw!" : `Player ${result} wins!`);
      } else {
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      }
    } else {
      setMessage('❌ Wrong answer. Turn goes to the other player!');
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X'); // switch turn even if wrong
    }
    setQuestionIndex(null); // hide question either way
  };
  

  const skipTurn = () => {
    setMessage('⏰ Time’s up! Switching turn.');
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    setQuestionIndex(null);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setQuestionIndex(null);
    setUserAnswer('');
    setMessage('');
    setWinner(null);
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Tic-Tac-Toe Math Game</h2>
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

      {questionIndex !== null && (
        <div className="max-w-md mx-auto bg-white p-6 rounded shadow-lg text-center">
          <p className="mb-2 font-semibold">Player {currentPlayer}, answer:</p>
          <p className="text-xl font-bold mb-2">{questions[questionIndex].question}</p>
          <p className="text-sm text-gray-600 mb-2">⏳ Time remaining: <span className="font-bold">{timer}s</span></p>
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

      {message && <p className="text-center text-lg font-semibold text-red-600 mt-4">{message}</p>}

      {winner && (
        <div className="text-center mt-6">
          <p className="text-xl font-bold mb-2">
            {winner === 'Draw' ? "It's a draw!" : `🎉 Player ${winner} wins!`}
          </p>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={resetGame}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default TicTacToeGame;
