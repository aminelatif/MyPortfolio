import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Courses from './components/Courses';
import TicTacToeGame from './components/TicTacToeGame';
import QuizGame from './components/QuizGame';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/tic-tac-toe" element={<TicTacToeGame />} />
        <Route path="/quiz" element={<QuizGame />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
