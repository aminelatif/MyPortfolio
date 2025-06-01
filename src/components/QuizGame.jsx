import React, { useState, useEffect } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

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

  // Helper function to render text with LaTeX
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

  if (showResults) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Quiz terminé!</h2>
          <p className="text-xl text-gray-700">
            Votre score: {accuracy}%
          </p>
        </div>

        <div className="space-y-6">
          {answers.map((answer, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="mb-3">
                <span className="text-sm font-medium text-gray-500">Question {idx + 1}</span>
                <div className="mt-1 text-gray-800">
                  {renderWithMath(answer.question)}
                </div>
              </div>

              <div className="space-y-2">
                <div className={`p-2 rounded ${
                  answer.selected === answer.correct 
                    ? 'bg-green-50 border border-green-200' 
                    : 'bg-red-50 border border-red-200'
                }`}>
                  <span className="text-sm font-medium text-gray-500">Votre réponse :</span>
                  <div className="mt-1">
                    {renderWithMath(answer.selected || "Aucune")}
                  </div>
                </div>

                {answer.selected !== answer.correct && (
                  <div className="p-2 rounded bg-green-50 border border-green-200">
                    <span className="text-sm font-medium text-gray-500">Bonne réponse :</span>
                    <div className="mt-1">
                      {renderWithMath(answer.correct)}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={handleReset}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-200"
          >
            Recommencer
          </button>
        </div>
      </div>
    );
  }

  const question = processedQuestions[current];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-md mx-auto sm:max-w-lg md:max-w-xl">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 sm:p-4 text-center">
        <h2 className="text-lg sm:text-xl font-bold">Math Quiz Challenge</h2>
      </div>

      <div className="relative">
        {/* Progress bar */}
        <div className="h-2 bg-gray-100">
          <div 
            className="h-full bg-blue-500 transition-all duration-300 ease-in-out" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        {/* Question content */}
        <div className={`p-4 sm:p-6 transition-all duration-300 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
              Question {current + 1} / {processedQuestions.length}
            </span>
            <span className="text-sm font-medium px-3 py-1 bg-green-50 text-green-700 rounded-full">
              Score: {answers.filter(a => a.isCorrect).length}
            </span>
          </div>
          
          <div className="mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
              {renderWithMath(question.question)}
            </h3>
          </div>
          
          <div className="space-y-3">
            {question.options.map((option) => {
              let optionClasses = "w-full text-left p-3 rounded-lg border transition-all duration-200 text-base";
              
              if (showFeedback) {
                if (option === processedQuestions[current].correct) {
                  optionClasses += " border-green-500 bg-green-50 text-green-700";
                } else if (option === selectedOption && option !== processedQuestions[current].correct) {
                  optionClasses += " border-red-500 bg-red-50 text-red-700";
                } else {
                  optionClasses += " border-gray-200 bg-gray-50 text-gray-400";
                }
              } else if (option === selectedOption) {
                optionClasses += " border-blue-500 bg-blue-50 text-blue-700";
              } else {
                optionClasses += " border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700";
              }
              
              return (
                <button
                  key={option}
                  onClick={() => !showFeedback && handleOptionSelect(option)}
                  className={optionClasses}
                  disabled={showFeedback}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{renderWithMath(option)}</span>
                    {showFeedback && option === processedQuestions[current].correct && (
                      <span className="ml-2 text-green-600 text-xl">✓</span>
                    )}
                    {showFeedback && option === selectedOption && option !== processedQuestions[current].correct && (
                      <span className="ml-2 text-red-600 text-xl">×</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex justify-end p-4 sm:p-6 border-t border-gray-100">
        <button
          onClick={() => handleNextQuestion(null, false)}
          disabled={selectedOption === null}
          className={`px-6 py-2 rounded-lg transition-all duration-200 ${
            selectedOption === null
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600 text-white shadow-sm hover:shadow'
          }`}
        >
          {current < processedQuestions.length - 1 ? 'Question suivante' : 'Terminer'}
        </button>
      </div>
    </div>
  );
};

export default QuizGame;
