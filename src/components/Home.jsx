import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './footer';
import AboutMe from './AboutMe';
import GameCards from './GameCards';
import { levels } from '../data';

const Home = () => (
  <div className='min-h-screen flex flex-col'>
    <Header />
    <main className='flex-1 p-4 md:p-6 bg-gray-100 overflow-y-auto'>
      <div className="max-w-6xl mx-auto">
        <AboutMe />
        
        {/* Courses Section */}
        <div className="mb-10 p-4 md:p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Courses de Mathématiques</h2>
          <p className="mb-4">
            Explorez nos courses de mathématiques structurés par niveau scolaire, comprenant des définitions, 
            des exemples, des jeux interactifs et des exercices.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.values(levels).map(level => {
              // Count the total number of lessons for this level
              const lessonCount = level.hasTracks
                ? Object.values(level.tracks).reduce((total, track) => total + track.lessons.length, 0)
                : level.lessons.length;
                
              return (
                <div key={level.id} className="border p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">{level.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{level.description}</p>
                  <p className="text-gray-500 text-xs mb-2">
                    {lessonCount} courses disponible{lessonCount > 1 || lessonCount === 0 ? 's' : ''}
                  </p>
                  <Link 
                    to={`/courses/${level.id}`} 
                    className="text-blue-500 hover:underline text-sm"
                  >
                    Voir les courses →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Games Section */}
        <GameCards />
      </div>
    </main>
    <Footer />
  </div>
);

export default Home;