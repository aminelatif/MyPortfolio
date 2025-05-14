import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className='bg-gray-800 text-white p-4 flex items-center justify-between'>
    <Link to="/" className="text-white hover:text-gray-300">
      <h1 className='text-2xl font-bold'>Amine Latif</h1>
    </Link>
    
    <nav className="flex items-center space-x-6">
      <Link to="/" className="text-white hover:text-gray-300">
        Accueil
      </Link>
      <Link to="/courses" className="text-white hover:text-gray-300">
        Cours
      </Link>
      <div className='w-10 h-10 bg-white rounded-full'></div>
    </nav>
  </header>
);

export default Header;