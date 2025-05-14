import React from 'react';
import { Link } from 'react-router-dom';
import { levels } from '../data';
import Header from './Header';
import Footer from './footer';

const Courses = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Niveaux de cours</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.values(levels).map(level => {
            // Count the total number of lessons for this level
            const lessonCount = level.hasTracks
              ? Object.values(level.tracks).reduce((total, track) => total + track.lessons.length, 0)
              : level.lessons.length;
            
            return (
              <div 
                key={level.id} 
                className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-3">{level.title}</h2>
                  <p className="text-gray-600 mb-4">{level.description}</p>
                  <p className="text-gray-600 mb-6">
                    {lessonCount} cours disponible{lessonCount > 1 || lessonCount === 0 ? 's' : ''}
                  </p>
                  <Link 
                    to={`/courses/${level.id}`}
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    Voir les cours
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;