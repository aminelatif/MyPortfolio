import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { levels, tracks } from '../data';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLevels, setShowLevels] = useState(false);
  const [hoveredLevel, setHoveredLevel] = useState(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setShowMenu(!showMenu);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCoursesClick = (e) => {
    e.preventDefault();
    setShowLevels(!showLevels);
    if (!showLevels) {
      navigate('/courses');
    }
  };

  const handleLevelHover = (levelId) => {
    setHoveredLevel(levelId);
  };

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const courseLinks = [
    { 
      id: 'tcs', 
      title: 'Tronc Commun Science', 
      path: '/courses/tcs',
      hasTracks: false,
      tracks: []
    },
    { 
      id: '1bac', 
      title: '1ère Année Bac Science', 
      path: '/courses/1bac',
      hasTracks: true,
      tracks: [
        { id: 'sciences_experimentales_et_technologies', title: 'Sciences Expérimentales et Technologies' },
        { id: 'science_mathematiques', title: 'Science Mathématiques' },
        { id: 'sciences_economiques_et_gestion', title: 'Sciences Économiques et Gestion' }
      ]
    },
    { 
      id: '2bac', 
      title: '2ème Année Bac Science', 
      path: '/courses/2bac',
      hasTracks: true,
      tracks: [
        { id: 'sciences_experimentales_et_technologies', title: 'Sciences Expérimentales et Technologies' },
        { id: 'economie', title: 'Économie' }
      ]
    }
  ];

  return (
    <header className='bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 md:h-20'>
          {/* Site title and logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <svg className="w-8 h-8 md:w-10 md:h-10 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 19 7.5 19s3.332-.477 4.5-1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 19 16.5 19c-1.746 0-3.332-.477-4.5-1.253" />
              </svg>
              <div>
                <h1 className='text-xl md:text-2xl font-bold tracking-tight'>MathMaroc</h1>
                <p className='text-xs text-blue-200 hidden md:block'>Apprentissage des mathématiques</p>
              </div>
            </Link>
          </div>
          
          {/* Navigation on desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-white hover:text-blue-200 transition-colors duration-200 font-medium ${isActive('/') ? 'border-b-2 border-white pb-1' : ''}`}
            >
              Accueil
            </Link>
            <div className="relative group">
              <button 
                onClick={handleCoursesClick}
                className={`text-white hover:text-blue-200 transition-colors duration-200 flex items-center font-medium ${isActive('/courses') ? 'border-b-2 border-white pb-1' : ''}`}
              >
                Cours
                <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={showLevels ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}></path>
                </svg>
              </button>
              
              {showLevels && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded-lg z-50 text-gray-800 py-2 border border-gray-200 overflow-hidden">
                  {courseLinks.map(course => (
                    <div 
                      key={course.id}
                      className="relative"
                      onMouseEnter={() => handleLevelHover(course.id)}
                      onMouseLeave={() => handleLevelHover(null)}
                    >
                      <Link
                        to={course.path}
                        className="block px-4 py-3 hover:bg-blue-50 flex items-center justify-between transition-colors duration-150"
                        onClick={() => setShowLevels(false)}
                      >
                        <span className="font-medium">{course.title}</span>
                        {course.hasTracks && (
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                        )}
                      </Link>
                      
                      {course.hasTracks && hoveredLevel === course.id && (
                        <div className="absolute left-full top-0 w-80 bg-white shadow-lg rounded-lg z-50 text-gray-800 py-2 border border-gray-200 -ml-2">
                          {course.tracks.map(track => (
                            <Link
                              key={track.id}
                              to={`/courses/${course.id}/${track.id}`}
                              className="block px-4 py-3 hover:bg-blue-50 transition-colors duration-150"
                              onClick={() => setShowLevels(false)}
                            >
                              {track.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Link 
              to="/games" 
              className={`text-white hover:text-blue-200 transition-colors duration-200 font-medium ${isActive('/games') ? 'border-b-2 border-white pb-1' : ''}`}
            >
              Jeux
            </Link>
            <Link 
              to="/dashboard" 
              className={`text-white hover:text-blue-200 transition-colors duration-200 font-medium ${isActive('/dashboard') ? 'border-b-2 border-white pb-1' : ''}`}
            >
              Mon Progrès
            </Link>
          </nav>
          
          <div className="flex items-center">
            {/* Dashboard icon for desktop */}
            <Link to="/dashboard" className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors duration-200 mr-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </Link>
            
            {/* Profile button */}
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-blue-600 shadow-md hover:shadow-lg transition-shadow duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="ml-4 md:hidden text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={showMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile navigation menu */}
      {showMenu && (
        <div 
          ref={menuRef}
          className="md:hidden bg-white shadow-lg absolute top-16 inset-x-0 z-50 overflow-hidden"
        >
          <nav className="flex flex-col divide-y divide-gray-100">
            <Link 
              to="/" 
              className="px-6 py-4 text-gray-800 hover:bg-blue-50"
              onClick={() => setShowMenu(false)}
            >
              Accueil
            </Link>
            
            <div>
              <button 
                className="w-full px-6 py-4 text-gray-800 hover:bg-blue-50 flex items-center justify-between"
                onClick={(e) => {
                  e.preventDefault();
                  setShowLevels(!showLevels);
                }}
              >
                Cours
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={showLevels ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}></path>
                </svg>
              </button>
              
              {showLevels && (
                <div className="bg-gray-50">
                  {courseLinks.map(course => (
                    <div key={course.id}>
                      <div className="px-6 py-3 hover:bg-blue-50 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <Link 
                            to={course.path}
                            className="text-gray-800 font-medium"
                            onClick={() => setShowMenu(false)}
                          >
                            {course.title}
                          </Link>
                          {course.hasTracks && (
                            <button 
                              className="ml-2 text-gray-500"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setHoveredLevel(hoveredLevel === course.id ? null : course.id);
                              }}
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={hoveredLevel === course.id ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}></path>
                              </svg>
                            </button>
                          )}
                        </div>
                      </div>
                      
                      {course.hasTracks && hoveredLevel === course.id && (
                        <div className="bg-gray-100 pl-10">
                          {course.tracks.map(track => (
                            <Link
                              key={track.id}
                              to={`/courses/${course.id}/${track.id}`}
                              className="block px-6 py-3 hover:bg-blue-50 border-t border-gray-200"
                              onClick={() => setShowMenu(false)}
                            >
                              {track.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <Link 
              to="/games" 
              className="px-6 py-4 text-gray-800 hover:bg-blue-50"
              onClick={() => setShowMenu(false)}
            >
              Jeux
            </Link>
            
            <Link 
              to="/dashboard" 
              className="px-6 py-4 text-gray-800 hover:bg-blue-50"
              onClick={() => setShowMenu(false)}
            >
              Mon Progrès
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;