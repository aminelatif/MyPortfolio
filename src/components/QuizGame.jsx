import React, { useState, useEffect } from 'react';

// Default questions if none are provided via props
const defaultQuestions = [
  {
    question: 'What is 6 + 2?',
    options: ['7', '8', '9'],
    correct: '8',
  },
  {
    question: 'What is 9 - 3?',
    options: ['5', '6', '7'],
    correct: '6',
  },
  {
    question: 'What is 4 × 3?',
    options: ['12', '13', '14'],
    correct: '12',
  },
  {
    question: 'What is 15 ÷ 5?',
    options: ['2', '3', '4'],
    correct: '3',
  },
  {
    question: 'What is the square of 5?',
    options: ['25', '15', '20'],
    correct: '25',
  },
  {
    question: 'What is 2³?',
    options: ['6', '8', '9'],
    correct: '8',
  },
  {
    question: 'What is √81?',
    options: ['8', '9', '10'],
    correct: '9',
  },
  {
    question: 'What is 14 - 6?',
    options: ['6', '8', '7'],
    correct: '8',
  },
  {
    question: 'What is 7 × 2?',
    options: ['14', '12', '15'],
    correct: '14',
  },
  {
    question: 'What is 10 + 15?',
    options: ['24', '25', '26'],
    correct: '25',
  },
];

const QuizGame = ({ questions: propQuestions, onComplete }) => {
  // If propQuestions are provided and in the format { question, answer }
  // transform them to the required format for the QuizGame
  const processedQuestions = propQuestions 
    ? propQuestions.map(q => {
        // Check if the question is already in the correct format
        if (q.options && q.correct) {
          return q;
        }
        
        // Convert from { question, answer } format to { question, options, correct }
        // Create fake options including the correct answer
        const correctAnswer = q.answer;
        const fakeOptions = generateFakeOptions(correctAnswer);
        return {
          question: q.question,
          options: fakeOptions,
          correct: correctAnswer
        };
      })
    : defaultQuestions;

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);
  
  // Progress calculation
  const progress = (current / processedQuestions.length) * 100;

  // Helper function to generate fake options
  function generateFakeOptions(correctAnswer) {
    // The correct answer should be one of the options
    let options = [correctAnswer];
    
    // Generate 2 different fake options based on the type of answer
    if (!isNaN(correctAnswer)) {
      // If answer is a number, generate fake numbers close to it
      const num = parseInt(correctAnswer);
      options.push(String(num + 1));
      options.push(String(num - 1 || num + 2)); // Ensure we don't get negative numbers
    } else {
      // For text answers, use generic alternatives
      options.push("Option B");
      options.push("Option C");
    }
    
    // Shuffle the options
    return options.sort(() => Math.random() - 0.5);
  }

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    const isAnswerCorrect = option === processedQuestions[current].correct;
    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);
    
    // Auto-proceed to next question after feedback
    setTimeout(() => {
      handleNextQuestion(option, isAnswerCorrect);
    }, 1500);
  };
  
  const handleNextQuestion = (option, isOptionCorrect) => {
    setAnswers([...answers, { 
      question: processedQuestions[current].question,
      selected: option,
      correct: processedQuestions[current].correct,
      isCorrect: isOptionCorrect 
    }]);
    
    setShowFeedback(false);
    setSelectedOption(null);
    
    if (current + 1 === processedQuestions.length) {
      setShowResults(true);
    } else {
      setFadeIn(false);
      setTimeout(() => {
        setCurrent(current + 1);
        setFadeIn(true);
      }, 300);
    }
  };

  const handleReset = () => {
    setCurrent(0);
    setAnswers([]);
    setShowResults(false);
    setSelectedOption(null);
    setShowFeedback(false);
    setFadeIn(true);
  };

  // Call onComplete callback when quiz is finished
  useEffect(() => {
    if (showResults && onComplete && typeof onComplete === 'function') {
      onComplete(answers);
    }
  }, [showResults, answers, onComplete]);

  const accuracy = answers.length > 0 
    ? Math.round((answers.filter((a) => a.isCorrect).length / processedQuestions.length) * 100)
    : 0;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-md mx-auto">
      <div className="bg-blue-500 text-white p-2.5 sm:p-3 text-center">
        <h2 className="text-lg sm:text-xl font-bold">Math Quiz Challenge</h2>
      </div>

      {!showResults ? (
        <div className="relative">
          {/* Progress bar */}
          <div className="h-1.5 sm:h-2 bg-gray-200">
            <div 
              className="h-full bg-blue-500" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          {/* Question content */}
          <div className={`p-3 sm:p-4 transition-opacity duration-300 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex justify-between mb-3 sm:mb-4">
              <span className="text-xs sm:text-sm font-medium px-2 py-1 bg-blue-100 rounded-md">
                Question {current + 1} / {processedQuestions.length}
              </span>
              <span className="text-xs sm:text-sm font-medium px-2 py-1 bg-green-100 rounded-md">
                Score: {answers.filter(a => a.isCorrect).length}
              </span>
            </div>
            
            <div className="mb-3 sm:mb-4 bg-gray-50 p-3 sm:p-4 rounded">
              <h3 className="text-base sm:text-lg font-bold mb-1">
                {processedQuestions[current].question}
              </h3>
            </div>
            
            <div className="space-y-1.5 sm:space-y-2">
              {processedQuestions[current].options.map((option) => {
                let optionClasses = "w-full text-left px-2.5 sm:px-3 py-1.5 sm:py-2 rounded border border-gray-300 hover:border-blue-500 hover:bg-blue-50 text-sm sm:text-base";
                
                if (showFeedback) {
                  if (option === processedQuestions[current].correct) {
                    optionClasses = "w-full text-left px-2.5 sm:px-3 py-1.5 sm:py-2 rounded border border-green-500 bg-green-50 text-sm sm:text-base";
                  } else if (option === selectedOption && option !== processedQuestions[current].correct) {
                    optionClasses = "w-full text-left px-2.5 sm:px-3 py-1.5 sm:py-2 rounded border border-red-500 bg-red-50 text-sm sm:text-base";
                  } else {
                    optionClasses = "w-full text-left px-2.5 sm:px-3 py-1.5 sm:py-2 rounded border border-gray-300 opacity-50 text-sm sm:text-base";
                  }
                } else if (option === selectedOption) {
                  optionClasses = "w-full text-left px-2.5 sm:px-3 py-1.5 sm:py-2 rounded border border-blue-500 bg-blue-50 text-sm sm:text-base";
                }
                
                return (
                  <button
                    key={option}
                    onClick={() => !showFeedback && handleOptionSelect(option)}
                    className={optionClasses}
                    disabled={showFeedback}
                  >
                    <div className="flex items-center">
                      <span className="font-medium">{option}</span>
                      {showFeedback && option === processedQuestions[current].correct && (
                        <span className="ml-auto text-green-600">✓</span>
                      )}
                      {showFeedback && option === selectedOption && option !== processedQuestions[current].correct && (
                        <span className="ml-auto text-red-600">X</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-3 sm:p-4">
          <div className="text-center mb-3 sm:mb-4">
            <div className="mb-2">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-100 text-blue-700 mx-auto flex items-center justify-center text-lg sm:text-xl font-bold">
                {accuracy}%
              </div>
            </div>
            
            <h2 className="text-base sm:text-lg font-bold mb-1">Quiz Complete!</h2>
            <p className="text-xs sm:text-sm text-gray-600 mb-3">
              {accuracy >= 80 ? 'Excellent job!' : 
               accuracy >= 50 ? 'Good effort!' : 
               'Keep practicing!'}
            </p>
            
            <button
              onClick={handleReset}
              className="bg-blue-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded text-sm sm:text-base"
            >
              Try Again
            </button>
          </div>
          
          <div className="bg-gray-50 rounded p-2.5 sm:p-3">
            <h3 className="font-bold mb-2 text-xs sm:text-sm border-b pb-1">Your Results</h3>
            
            <div className="max-h-[250px] sm:max-h-[300px] overflow-y-auto">
              {answers.map((answer, index) => (
                <div 
                  key={index} 
                  className="py-1.5 sm:py-2 border-b last:border-0"
                >
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="font-medium">{index + 1}. {answer.question}</span>
                    <span className={answer.isCorrect ? "text-green-600" : "text-red-600"}>
                      {answer.isCorrect ? "✓" : "X"}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm mt-0.5 sm:mt-1">
                    <span className="text-gray-600">Your answer: </span>
                    <span className={answer.isCorrect ? "text-green-600" : "text-red-600"}>
                      {answer.selected}
                    </span>
                    {!answer.isCorrect && (
                      <span className="text-green-600 ml-2 sm:ml-3">
                        Correct: {answer.correct}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizGame;
