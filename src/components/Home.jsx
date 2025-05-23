import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './footer';
import AboutMe from './AboutMe';
import GameCards from './GameCards';
import { levels } from '../data';

const levelColors = {
  'tcs': 'from-blue-500 to-indigo-600',
  '1bac': 'from-green-500 to-teal-600',
  '2bac': 'from-purple-500 to-indigo-600'
};

const levelIcons = {
  'tcs': (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
    </svg>
  ),
  '1bac': (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
    </svg>
  ),
  '2bac': (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" viewBox="0 0 20 20" fill="currentColor">
      <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
      <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
      <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
    </svg>
  )
};

const Home = () => (
  <div className='min-h-screen flex flex-col bg-gray-50'>
    <Header />
    <main className='flex-1 p-3 sm:p-4 md:p-8 overflow-y-auto'>
      <div className="max-w-6xl mx-auto">
        {/* Hero section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-xl overflow-hidden mb-6 sm:mb-10">
          <div className="p-4 sm:p-6 md:p-10 text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">Bienvenue sur Math Maroc</h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-4 sm:mb-6 max-w-2xl">
              Une plateforme éducative pour les étudiants marocains avec des cours de mathématiques structurés
              par niveau scolaire, des jeux interactifs et des exercices pratiques.
            </p>
            <Link 
              to="/courses" 
              className="inline-block bg-white text-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-blue-50 transition duration-200"
            >
              Commencer à apprendre
            </Link>
          </div>
          <div className="hidden md:block bg-blue-800 h-2"></div>
        </div>

        <AboutMe />

        {/* Courses Section */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Cours de Mathématiques</h2>
            <Link to="/courses" className="text-sm sm:text-base text-blue-600 hover:text-blue-800 font-medium">
              Voir tous les cours →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {Object.values(levels).map(level => {
              // Count the total number of lessons for this level
              const lessonCount = level.hasTracks
                ? Object.values(level.tracks).reduce((total, track) => total + track.lessons.length, 0)
                : level.lessons.length;

              return (
                <div key={level.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{level.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3">{level.description}</p>
                    <div className="flex items-center text-gray-500 mb-4 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        {levelIcons[level.id]}
                      </svg>
                      <span>
                        {lessonCount} cours disponible{lessonCount > 1 || lessonCount === 0 ? 's' : ''}
                      </span>
                    </div>
                    <Link
                      to={`/courses/${level.id}`} 
                      className="inline-block w-full text-center bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium px-3 sm:px-4 py-2 rounded-lg transition-colors duration-200 text-sm sm:text-base"
                    >
                      Explorer ce niveau
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Games Section with improved design */}
        <div className="mb-6 sm:mb-10">
          <div className="flex flex-col mb-4 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Jeux Mathématiques Interactifs</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Renforcez vos compétences en mathématiques avec nos jeux éducatifs amusants et stimulants. Relevez des défis et testez vos connaissances tout en vous amusant!</p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-green-100 text-green-800 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full">
                Apprendre en jouant
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full">
                Adapté à tous les niveaux
              </span>
            </div>
          </div>
          
          <GameCards />
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Home;