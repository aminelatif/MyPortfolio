import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './footer';
import AboutMe from './AboutMe';
import GameCards from './GameCards';

const Home = () => (
  <div className='min-h-screen flex flex-col'>
    <Header />
    <div className='flex flex-1'>
      <Sidebar />
      <main className='flex-1 p-6 bg-gray-100 overflow-y-auto'>
        <AboutMe />
        
        {/* Courses Section */}
        <div className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Cours de Mathématiques</h2>
          <p className="mb-4">
            Explorez nos cours de mathématiques structurés par niveau scolaire, comprenant des définitions, 
            des exemples, des jeux interactifs et des exercices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Tronc Commun</h3>
              <p className="text-gray-600 text-sm mb-2">Arithmétique, Algèbre, Géométrie...</p>
              <Link 
                to="/courses/tcs" 
                className="text-blue-500 hover:underline"
              >
                Voir les cours →
              </Link>
            </div>
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold mb-2">1ère Bac</h3>
              <p className="text-gray-600 text-sm mb-2">Fonctions, Dérivées, Probabilités...</p>
              <Link 
                to="/courses/1bac" 
                className="text-blue-500 hover:underline"
              >
                Voir les cours →
              </Link>
            </div>
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold mb-2">2ème Bac</h3>
              <p className="text-gray-600 text-sm mb-2">Limites, Intégrales, Suites...</p>
              <Link 
                to="/courses/2bac" 
                className="text-blue-500 hover:underline"
              >
                Voir les cours →
              </Link>
            </div>
          </div>
          <Link 
            to="/courses" 
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Tous les cours
          </Link>
        </div>
        
        <GameCards />
      </main>
    </div>
    <Footer />
  </div>
);

export default Home;