import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuizCard = () => {
  const navigate = useNavigate();
  return (
    <div
      className='bg-white p-4 rounded shadow cursor-pointer hover:bg-gray-100 transition'
      onClick={() => navigate('/quiz')}
    >
      <h3 className='text-lg font-semibold mb-2'>Quiz Game</h3>
      <p>Click to play!</p>
    </div>
  );
};

export default QuizCard;
