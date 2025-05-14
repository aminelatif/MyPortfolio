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
      setCurrent(current + 1);
    }
  };

  const handleReset = () => {
    setCurrent(0);
    setAnswers([]);
    setShowResults(false);
    setSelectedOption(null);
    setShowFeedback(false);
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
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {!showResults ? (
        <div className="relative">
          {/* Progress bar */}
          <div className="h-2 bg-gray-200">
            <div 
              className="h-full bg-blue-500 transition-all duration-300" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          {/* Question content */}
          <div className="p-4 md:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base md:text-lg font-semibold">
                Question {current + 1} / {processedQuestions.length}
              </h3>
            </div>
            
            <div className="mb-6">
              <p className="text-base md:text-lg mb-4 md:mb-6">{processedQuestions[current].question}</p>
              
              <div className="space-y-3">
                {processedQuestions[current].options.map((option) => {
                  let optionClasses = "w-full text-left px-4 py-3 rounded border border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors";
                  
                  if (showFeedback) {
                    if (option === processedQuestions[current].correct) {
                      optionClasses = "w-full text-left px-4 py-3 rounded border border-green-500 bg-green-50 text-green-700";
                    } else if (option === selectedOption && option !== processedQuestions[current].correct) {
                      optionClasses = "w-full text-left px-4 py-3 rounded border border-red-500 bg-red-50 text-red-700";
                    } else {
                      optionClasses = "w-full text-left px-4 py-3 rounded border border-gray-300 opacity-50";
                    }
                  } else if (option === selectedOption) {
                    optionClasses = "w-full text-left px-4 py-3 rounded border border-blue-500 bg-blue-50 text-blue-700";
                  }
                  
                  return (
                    <button
                      key={option}
                      onClick={() => !showFeedback && handleOptionSelect(option)}
                      className={optionClasses}
                      disabled={showFeedback}
                    >
                      {option}
                      
                      {showFeedback && option === processedQuestions[current].correct && (
                        <span className="float-right text-green-500">✓</span>
                      )}
                      
                      {showFeedback && option === selectedOption && option !== processedQuestions[current].correct && (
                        <span className="float-right text-red-500">✗</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
            
            {/* Feedback message that appears temporarily */}
            {showFeedback && (
              <div className={`mb-4 p-3 rounded ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} transition-opacity duration-300`}>
                {isCorrect ? (
                  <p>Correct! Bien joué.</p>
                ) : (
                  <p>Incorrect. La bonne réponse est: {processedQuestions[current].correct}</p>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="p-4 md:p-6">
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Quiz terminé!</h3>
            <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-full mb-4">
              <span className="text-2xl md:text-3xl font-bold text-blue-600">{accuracy}%</span>
            </div>
            <p className="text-gray-600">Vous avez correctement répondu à {answers.filter(a => a.isCorrect).length} questions sur {processedQuestions.length}</p>
          </div>
          
          <div className="space-y-4 max-h-80 overflow-y-auto mb-6">
            <h4 className="font-semibold text-lg border-b pb-2">Récapitulatif</h4>
            {answers.map((entry, index) => (
              <div key={index} className={`p-3 border rounded ${entry.isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                <p className="font-semibold">{index + 1}. {entry.question}</p>
                <div className="mt-2 flex flex-col space-y-1 text-sm">
                  <p>
                    <span className="font-medium">Votre réponse:</span> 
                    <span className={entry.isCorrect ? 'text-green-600 ml-2' : 'text-red-600 ml-2'}>
                      {entry.selected} {entry.isCorrect ? '✓' : '✗'}
                    </span>
                  </p>
                  {!entry.isCorrect && (
                    <p>
                      <span className="font-medium">Réponse correcte:</span> 
                      <span className="text-green-600 ml-2">{entry.correct}</span>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={handleReset}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded transition-colors"
          >
            Recommencer le quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizGame;
