import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { levels, tracks } from '../data';

const Sidebar = () => {
  const [showLevels, setShowLevels] = useState(false);
  const [expandedLevel, setExpandedLevel] = useState(null);
  const navigate = useNavigate();

  const handleCoursesClick = (e) => {
    setShowLevels((prev) => !prev);
    // If the click was directly on the div (not on the arrow span), navigate
    if (e.target.tagName !== 'SPAN') {
      navigate('/courses');
    }
  };

  const handleLevelClick = (levelId, e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (expandedLevel === levelId) {
      setExpandedLevel(null);
    } else {
      setExpandedLevel(levelId);
      
      // If level doesn't have tracks, navigate directly to it
      if (!levels[levelId].hasTracks) {
        navigate(`/courses/${levelId}`);
      }
    }
  };

  return (
    <aside className="bg-gray-200 w-48 p-4 h-full shadow">
      <nav className="flex flex-col gap-4">
        <Link to="/" className="font-bold hover:underline">Home</Link>

        <div 
          onClick={handleCoursesClick}
          className="text-left font-bold hover:underline flex items-center cursor-pointer"
        >
          Courses
          <span className="ml-1">{showLevels ? '▼' : '▶'}</span>
        </div>

        {showLevels && (
          <ul className="ml-4 mt-1 text-sm space-y-2 text-gray-700">
            {Object.keys(levels).map(levelId => (
              <li key={levelId}>
                <div 
                  onClick={(e) => handleLevelClick(levelId, e)}
                  className="hover:text-blue-600 cursor-pointer flex items-center"
                >
                  <Link 
                    to={`/courses/${levelId}`} 
                    className="hover:text-blue-600 flex-grow"
                    onClick={(e) => {
                      if (levels[levelId].hasTracks) {
                        e.preventDefault();
                      }
                    }}
                  >
                    {levels[levelId].title}
                  </Link>
                  {levels[levelId].hasTracks && (
                    <span className="ml-1">
                      {expandedLevel === levelId ? '▼' : '▶'}
                    </span>
                  )}
                </div>
                
                {/* Display tracks for expanded level */}
                {levels[levelId].hasTracks && expandedLevel === levelId && (
                  <ul className="ml-4 mt-1 space-y-1 text-gray-600">
                    {(tracks[levelId] || []).map(track => (
                      <li key={track.id}>
                        <Link 
                          to={`/courses/${levelId}/${track.id}`}
                          className="hover:text-blue-600 text-xs"
                        >
                          {track.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
