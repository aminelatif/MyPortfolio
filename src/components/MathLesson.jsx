import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import '../styles/MathLesson.css';

const MathLesson = ({ lesson }) => {
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

  return (
    <div className="math-lesson">
      <h2>{lesson.title}</h2>
      
      <div className="lesson-part">
        <div className="definition">
          <h4>Définition</h4>
          {renderWithMath(lesson.definition)}
        </div>

        <div className="example">
          <h4>Exemple</h4>
          {renderWithMath(lesson.example)}
        </div>

        {lesson.gameQuestions && (
          <div className="questions">
            <h4>Questions</h4>
            {lesson.gameQuestions.map((q, index) => (
              <div key={index} className="question">
                <p>{renderWithMath(q.question)}</p>
                <p className="answer">Réponse: {renderWithMath(q.answer)}</p>
              </div>
            ))}
          </div>
        )}

        {lesson.exercises && (
          <div className="exercises">
            <h4>Exercices</h4>
            {lesson.exercises.map((ex, index) => (
              <div key={index} className="exercise">
                <p>{renderWithMath(ex.question)}</p>
                <p className="answer">Solution: {renderWithMath(ex.answer)}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MathLesson; 