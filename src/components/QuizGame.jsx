import React, { useState } from 'react';

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

const QuizGame = ({ questions: propQuestions }) => {
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

  const handleAnswer = (option) => {
    const isCorrect = option === processedQuestions[current].correct;
    setAnswers([...answers, { 
      question: processedQuestions[current].question,
      selected: option,
      correct: processedQuestions[current].correct,
      isCorrect 
    }]);

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
  };

  const accuracy = answers.length > 0 
    ? Math.round((answers.filter((a) => a.isCorrect).length / processedQuestions.length) * 100)
    : 0;

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Quiz</h2>

      {!showResults ? (
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">
            Question {current + 1} of {processedQuestions.length}
          </h3>
          <p className="mb-4">{processedQuestions[current].question}</p>
          <div className="grid gap-3">
            {processedQuestions[current].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-2xl font-semibold mb-4">✅ Results</h3>
          <p className="text-lg mb-4">Accuracy: <strong>{accuracy}%</strong></p>

          <div className="space-y-4 max-h-96 overflow-y-auto">
            {answers.map((entry, index) => (
              <div key={index} className="p-3 border rounded bg-gray-50">
                <p className="font-semibold">{entry.question}</p>
                <p className={entry.isCorrect ? 'text-green-600' : 'text-red-600'}>
                  Your answer: {entry.selected}
                </p>
                {!entry.isCorrect && (
                  <p className="text-gray-700">Correct answer: {entry.correct}</p>
                )}
              </div>
            ))}
          </div>
          
          <button 
            onClick={handleReset}
            className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizGame;
