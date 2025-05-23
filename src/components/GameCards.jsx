import React from "react";
import { Link } from "react-router-dom";

const games = [
  {
    name: "Tic Tac Toe",
    description: "Win with logic! Answer questions to place your X or O.",
    link: "/games",
    color: "from-purple-500 to-indigo-600",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 4a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0 4a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 11a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0-4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-10 4a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0-4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm10-6a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0-4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM7 19a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0-4a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
      </svg>
    ),
  },
  {
    name: "Math Quiz",
    description: "Test your math knowledge with challenging multiple-choice questions.",
    link: "/games",
    color: "from-blue-500 to-cyan-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
      </svg>
    ),
  },
  {
    name: "Brain Sprint",
    description: "Race against time! Solve quick math problems and rack up points.",
    link: "/games",
    color: "from-red-500 to-orange-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 5.18L10.59 16.6l-4.24-4.24 1.41-1.41 2.83 2.83 10-10L22 5.18zm-2.21 5.04c.13.57.21 1.17.21 1.78 0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8c1.58 0 3.04.46 4.28 1.25l1.44-1.44A9.9 9.9 0 0012 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-1.19-.22-2.33-.6-3.39l-1.61 1.61z"/>
      </svg>
    ),
  },
  // You can add more games here in the future
];

const GameCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
      {games.map((game, index) => (
        <Link
          key={index}
          to={game.link}
          className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2"
        >
          {/* Gradient background strip */}
          <div className={`h-2 sm:h-3 bg-gradient-to-r ${game.color}`}></div>
          
          <div className="p-4 sm:p-6 flex flex-col h-full">
            {/* Icon and title row */}
            <div className="flex items-center mb-3 sm:mb-4">
              <div className={`text-white p-1.5 sm:p-2 rounded-lg bg-gradient-to-br ${game.color} mr-3 sm:mr-4`}>
                {game.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold">{game.name}</h3>
            </div>
            
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 flex-grow">{game.description}</p>
            
            <div className="flex items-center justify-between mt-1 sm:mt-2">
              <span className="text-xs sm:text-sm font-medium text-indigo-600">Jouer maintenant</span>
              <span className="bg-blue-50 text-blue-700 rounded-full p-1 group-hover:bg-blue-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
          </div>
          
          {/* Decorative circles - made smaller on mobile */}
          <div className={`absolute -top-8 -right-8 sm:-top-10 sm:-right-10 w-16 h-16 sm:w-24 sm:h-24 rounded-full opacity-10 bg-gradient-to-br ${game.color}`}></div>
          <div className={`absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-12 h-12 sm:w-16 sm:h-16 rounded-full opacity-10 bg-gradient-to-br ${game.color}`}></div>
        </Link>
      ))}
    </div>
  );
};

export default GameCards;
