import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 text-blue-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 19 7.5 19s3.332-.477 4.5-1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 19 16.5 19c-1.746 0-3.332-.477-4.5-1.253" />
              </svg>
              <h2 className="text-xl font-bold text-white">MathMaroc</h2>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Une plateforme d'apprentissage des mathématiques adaptée au programme marocain, conçue pour aider les élèves à exceller dans leur parcours scolaire.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Accueil</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Cours</Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Mon Progrès</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Niveaux</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses/tcs" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Tronc Commun</Link>
              </li>
              <li>
                <Link to="/courses/1bac" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">1ère Bac</Link>
              </li>
              <li>
                <Link to="/courses/2bac" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">2ème Bac</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">&copy; {new Date().getFullYear()} MathMaroc. Tous droits réservés.</p>
          <div className="flex space-x-4 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Politique de Confidentialité</Link>
            <Link to="/terms" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Conditions d'Utilisation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
