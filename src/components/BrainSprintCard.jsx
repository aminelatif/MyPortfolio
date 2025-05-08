import React from 'react';
import { Link } from 'react-router-dom';
import { Bolt } from 'lucide-react';

const BrainSprintCard = () => {
  return (
    <Link to="/brain-sprint" className="group block bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 p-6 text-center">
      <div className="flex justify-center mb-4">
        <Bolt size={40} className="text-yellow-500 group-hover:text-yellow-600" />
      </div>
      <h3 className="text-xl font-bold mb-2">Brain Sprint</h3>
      <p className="text-gray-600 text-sm">Race against the clock and test your math reflexes!</p>
    </Link>
  );
};

export default BrainSprintCard;