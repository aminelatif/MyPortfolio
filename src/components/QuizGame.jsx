
import React, { useState } from 'react';

const questions = [
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

const QuizGame = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (option) => {
    const isCorrect = option === questions[current].correct;
    setAnswers([...answers, { 
      question: questions[current].question,
      selected: option,
      correct: questions[current].correct,
      isCorrect 
    }]);

    if (current + 1 === questions.length) {
      setShowResults(true);
    } else {
      setCurrent(current + 1);
    }
  };

  const accuracy = Math.round(
    (answers.filter((a) => a.isCorrect).length / questions.length) * 100
  );

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Math Quiz Game</h2>

      {!showResults ? (
        <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">
            Question {current + 1} of {questions.length}
          </h3>
          <p className="mb-4">{questions[current].question}</p>
          <div className="grid gap-3">
            {questions[current].options.map((option) => (
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
        <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
          <h3 className="text-2xl font-semibold mb-4">✅ Results</h3>
          <p className="text-lg mb-4">Accuracy: <strong>{accuracy}%</strong></p>

          <div className="space-y-4">
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
        </div>
      )}
    </div>
  );
};

export default QuizGame;
