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
  { question: '14 + 9', answer: '23' },
  { question: '15 x 4', answer: '60' },
  { question: '2\u00B3', answer: '8' },
];

const BrainSprintGame = ({ questions: propQuestions }) => {
  // Use provided questions or default ones
  const questionsPool = propQuestions || defaultQuestions;
  
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
  const [answerStatus, setAnswerStatus] = useState(null); // 'correct', 'incorrect', or null
  const [streak, setStreak] = useState(0);
  
  // Generate timer color based on remaining time
  const getTimerColor = () => {
    if (timeLeft === null) return "bg-gray-200";
    const percentage = (timeLeft / duration) * 100;
    if (percentage > 60) return "bg-green-500";
    if (percentage > 30) return "bg-yellow-500";
    return "bg-red-500";
  };

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
    setStreak(0);
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
    if (!userAnswer.trim()) return; // Don't submit empty answers
    
    const currentQuestion = questions[currentIndex];
    const isCorrect = userAnswer.trim() === currentQuestion.answer;

    setHistory(prev => [...prev, {
      question: currentQuestion.question,
      playerAnswer: userAnswer.trim(),
      correctAnswer: currentQuestion.answer,
      correct: isCorrect
    }]);

    if (isCorrect) {
      setAnswerStatus('correct');
      setScore(score + 1);
      setStreak(streak + 1);
    } else {
      setAnswerStatus('incorrect');
      setMistakes(mistakes + 1);
      setStreak(0);
    }

    setTimeout(() => {
      setAnswerStatus(null);
      setUserAnswer('');
      setCurrentIndex(currentIndex + 1);
    }, 1000);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-md mx-auto">
      <div className="bg-blue-500 text-white p-2.5 sm:p-3 text-center">
        <h2 className="text-lg sm:text-xl font-bold">Brain Sprint Challenge</h2>
      </div>
      
      {timeLeft === null && (
        <div className="p-3 sm:p-4 text-center">
          <div className="mb-3 sm:mb-4">
            <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
              Answer as many questions as you can before time runs out. You have 3 chances!
            </p>
          </div>
          
          <div>
            <p className="text-sm sm:text-base font-medium mb-2">Select time:</p>
            <div className="flex justify-center gap-2">
              {[1, 2, 3].map(min => (
                <button
                  key={min}
                  onClick={() => startGame(min)}
                  className="py-1.5 sm:py-2 px-3 sm:px-4 bg-blue-500 text-white rounded text-sm sm:text-base"
                >
                  {min} min
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {timeLeft !== null && !showResults && (
        <div className="p-3 sm:p-4">
          <div className="mb-3 sm:mb-4">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center px-2 py-1 bg-blue-100 rounded-md">
                <span className="text-xs sm:text-sm font-medium">{formatTime(timeLeft)}</span>
              </div>
              <div className="flex items-center px-2 py-1 bg-green-100 rounded-md">
                <span className="text-xs sm:text-sm font-medium">Score: {score}</span>
                {streak >= 3 && (
                  <span className="ml-1 sm:ml-2 text-xs text-orange-600 font-medium">
                    🔥 {streak}
                  </span>
                )}
              </div>
            </div>
            
            {/* Progress/timer bar */}
            <div className="w-full h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`h-full ${getTimerColor()}`} 
                style={{ width: `${(timeLeft / duration) * 100}%` }}
              ></div>
            </div>
            
            {/* Lives display - now with empty boxes and X markers */}
            <div className="flex justify-center space-x-3 sm:space-x-4 mt-2 sm:mt-3 mb-1 sm:mb-2">
              {Array(3).fill(null).map((_, i) => (
                <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-gray-300 rounded flex items-center justify-center">
                  {i < mistakes && (
                    <span className="text-base sm:text-lg font-bold text-red-500">X</span>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center text-xs text-gray-500 mb-2">
              {3 - mistakes} chance{3 - mistakes !== 1 ? 's' : ''} remaining
            </div>
          </div>
          
          {questions[currentIndex] ? (
            <div className={`bg-gray-50 p-3 sm:p-4 rounded border ${
              answerStatus === 'correct' ? 'border-green-500 bg-green-50' : 
              answerStatus === 'incorrect' ? 'border-red-500 bg-red-50' : 
              'border-gray-200'
            }`}>
              <div className="text-center mb-2 sm:mb-3">
                <p className="text-lg sm:text-xl font-bold">{questions[currentIndex].question}</p>
              </div>
              
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                  className="border border-gray-300 p-2 flex-grow rounded text-sm sm:text-base"
                  placeholder="Your answer"
                  autoFocus
                  disabled={answerStatus !== null}
                />
                <button
                  onClick={handleSubmit}
                  disabled={answerStatus !== null || !userAnswer.trim()}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded ${!userAnswer.trim() ? 'bg-gray-400' : 'bg-blue-500'} text-white text-sm sm:text-base`}
                >
                  Submit
                </button>
              </div>
              
              {answerStatus && (
                <div className="text-center mt-2">
                  {answerStatus === 'correct' ? (
                    <span className="text-green-600 font-medium text-sm sm:text-base">✓ Correct!</span>
                  ) : (
                    <span className="text-red-600 font-medium text-sm sm:text-base">X Wrong! The answer is {questions[currentIndex].correctAnswer}</span>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="bg-gray-50 p-3 sm:p-4 rounded border border-gray-200 text-center">
              <p className="text-gray-700 text-sm sm:text-base">All questions completed! Wait for timer to finish.</p>
            </div>
          )}
        </div>
      )}

      {showResults && (
        <div className="p-3 sm:p-4">
          <div className="text-center mb-3 sm:mb-4">
            <h2 className="text-lg sm:text-xl font-bold">Game Over</h2>
            <div className="my-2 text-2xl sm:text-3xl font-bold">{score}</div>
            <p className="text-xs sm:text-sm text-gray-600">
              {score > 10 ? 'Amazing score!' : 
              score > 5 ? 'Good job!' : 
              'Keep practicing!'}
            </p>
          </div>
          
          <div className="bg-gray-50 p-2.5 sm:p-3 rounded mb-3 sm:mb-4">
            <h3 className="font-bold mb-2 text-xs sm:text-sm border-b pb-1">Your Answers</h3>
            
            <div className="max-h-[200px] sm:max-h-[250px] overflow-y-auto">
              {history.map((entry, idx) => (
                <div 
                  key={idx} 
                  className="py-1.5 sm:py-2 border-b last:border-0"
                >
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span>{entry.question}</span>
                    <span className={entry.correct ? "text-green-600" : "text-red-600"}>
                      {entry.correct ? "✓" : "X"}
                    </span>
                  </div>
                  
                  <div className="text-xs sm:text-sm">
                    <span className="text-gray-600">Your answer: </span>
                    <span className={entry.correct ? "text-green-600" : "text-red-600"}>
                      {entry.playerAnswer || '-'}
                    </span>
                    
                    {!entry.correct && (
                      <span className="text-green-600 ml-1.5 sm:ml-2">
                        Correct: {entry.correctAnswer}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <button
              onClick={() => startGame(duration / 60)}
              className="bg-blue-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded text-sm sm:text-base"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrainSprintGame;
