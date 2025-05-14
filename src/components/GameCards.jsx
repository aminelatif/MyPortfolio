import React from "react";
import { Link } from "react-router-dom";

const games = [
  {
    name: "Tic Tac Toe",
    description: "Win with logic! Answer questions to place your X or O.",
    link: "/tic-tac-toe",
  },
  {
    name: "Math Quiz",
    description: "Multiple-choice quiz to test your math knowledge.",
    link: "/quiz",
  },
  {
    name: "Brain Sprint",
    description: "Choose your time, survive 3 mistakes, and rack up points!",
    link: "/brain-sprint",
  },
  // You can add more games here in the future
];

const GameCards = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Play Math Games</h2>
      <div className="overflow-x-auto">
        <div className="flex space-x-4 w-max">
          {games.map((game, index) => (
            <Link
              key={index}
              to={game.link}
              className="min-w-[250px] bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition duration-300 flex-shrink-0"
            >
              <h3 className="text-xl font-semibold mb-2">{game.name}</h3>
              <p className="text-gray-600 text-sm">{game.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameCards;
