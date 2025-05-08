import React, { useState, useEffect } from 'react';

const questionsPool = [
  { question: '5 + 3', answer: '8' },
  { question: '12 / 4', answer: '3' },
  { question: '7 - 2', answer: '5' },
  { question: '3 x 4', answer: '12' },
  { question: '\u221A16', answer: '4' },
  { question: '6 + 7', answer: '13' },
  { question: '9 - 5', answer: '4' },
  { question: '10 / 2', answer: '5' },
  { question: '14 + 9', answer: '23' },
  { question: '15 x 4', answer: '60' },
  { question: '2\u00B3', answer: '8' },
];

const MathBlitzGame = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);
  const [duration, setDuration] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [history, setHistory] = useState([]);

  const startGame = (mins) => {
    const shuffled = [...questionsPool].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setDuration(mins * 60);
    setTimeLeft(mins * 60);
    setCurrentIndex(0);
    setUserAnswer('');
    setScore(0);
    setMistakes(0);
    setGameOver(false);
    setShowResults(false);
    setHistory([]);
  };

  useEffect(() => {
    if (timeLeft === null || gameOver) return;
    if (timeLeft <= 0 || mistakes >= 3) {
      setGameOver(true);
      setShowResults(true);
      return;
    }
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, gameOver, mistakes]);

  const handleSubmit = () => {
    const currentQuestion = questions[currentIndex];
    const isCorrect = userAnswer.trim() === currentQuestion.answer;

    setHistory(prev => [...prev, {
      question: currentQuestion.question,
      playerAnswer: userAnswer.trim(),
      correctAnswer: currentQuestion.answer,
      correct: isCorrect
    }]);

    if (isCorrect) {
      setScore(score + 1);
    } else {
      setMistakes(mistakes + 1);
    }

    setUserAnswer('');
    setCurrentIndex(currentIndex + 1);
  };

  const heartsDisplay = Array(3).fill(null).map((_, i) => (
    <span key={i} className="text-3xl mx-1">
      {i < mistakes ? '❌' : '⬜'}
    </span>
  ));

  return (
    <div className="p-6 max-w-xl mx-auto">
      {timeLeft === null && (
        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold mb-6">Start Math Blitz!</h2>
          <p className="mb-4">Choose your challenge time:</p>
          {[3, 5, 10].map(min => (
            <button
              key={min}
              onClick={() => startGame(min)}
              className="m-2 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700"
            >
              {min} Minutes
            </button>
          ))}
        </div>
      )}

      {timeLeft !== null && !showResults && (
        <>
          <div className="flex justify-between items-center mb-4">
            <div className="text-lg font-semibold">⏳ {timeLeft}s</div>
            <div className="text-red-500">{heartsDisplay}</div>
            <div className="text-green-600 font-bold">Score: {score}</div>
          </div>
          {questions[currentIndex] ? (
            <div className="bg-white p-6 rounded shadow text-center">
              <p className="text-xl font-semibold mb-4">{questions[currentIndex].question}</p>
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="border p-2 w-full mb-4 rounded"
              />
              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          ) : (
            <p className="text-center mt-6 text-lg font-semibold">No more questions!</p>
          )}
        </>
      )}

      {showResults && (
        <div className="mt-8">
          <h2 className="text-3xl font-bold text-center mb-6">Game Over</h2>
          <p className="text-center text-xl mb-4">Score: {score}</p>
          <div className="space-y-4">
            {history.map((entry, idx) => (
              <div key={idx} className="p-4 rounded shadow bg-gray-100">
                <p className="font-semibold">Q: {entry.question}</p>
                <p className={entry.correct ? 'text-green-600' : 'text-red-600'}>
                  Your answer: {entry.playerAnswer}
                  {!entry.correct && (
                    <span className="text-green-600"> (Correct: {entry.correctAnswer})</span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {timeLeft !== null && (
        <div className="text-center mt-6">
          <button
            onClick={() => startGame(duration / 60)}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default MathBlitzGame;
