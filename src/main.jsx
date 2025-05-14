import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Courses from './components/Courses';
import LevelLessons from './components/LevelLessons';
import LessonPage from './components/LessonPage';
import TicTacToeGame from './components/TicTacToeGame';
import QuizGame from './components/QuizGame';
import BrainSprintGame from './components/BrainSprintGame';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:levelId" element={<LevelLessons />} />
        <Route path="/courses/:levelId/:lessonOrTrackId" element={<LevelLessons />} />
        <Route path="/courses/:levelId/:trackId/:lessonId" element={<LessonPage />} />
        
        {/* Game routes (for testing or standalone use) */}
        <Route path="/tic-tac-toe" element={<TicTacToeGame />} />
        <Route path="/quiz" element={<QuizGame />} />
        <Route path="/brain-sprint" element={<BrainSprintGame />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
