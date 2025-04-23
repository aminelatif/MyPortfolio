import React from 'react';
import { useNavigate } from 'react-router-dom';

const TicTacToeMath = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-white p-4 rounded shadow cursor-pointer hover:bg-gray-100 transition' onClick={() => navigate('/tic-tac-toe')}>
      <h3 className='text-lg font-semibold mb-2'>Tic-Tac-Toe Math</h3>
      <p>Click to play!</p>
    </div>
  );
};

export default TicTacToeMath;