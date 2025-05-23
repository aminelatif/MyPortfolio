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
import UserDashboard from './components/UserDashboard';
import Games from './components/Games';

// Debug router paths
console.log("Setting up routes");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:levelId" element={<LevelLessons />} />
        {/* For both tracks (filières) in 1bac and direct lessons in tcs */}
        <Route path="/courses/:levelId/:lessonOrTrackId" element={<LevelLessons />} />
        {/* For lessons within a track or with special "lessons" trackId for tcs */}
        <Route path="/courses/:levelId/:trackId/:lessonId" element={<LessonPage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        
        {/* Games page route */}
        <Route path="/games" element={<Games />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
