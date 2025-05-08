import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import AboutMe from './AboutMe';
import TicTacToeMath from './TicTacToeMath';
import QuizGame from './QuizGame';
import QuizCard from './QuizCard';
import BrainSprintCard from './BrainSprintCard';

const Home = () => (
  <div className='h-screen flex flex-col'>
    <Header />
    <div className='flex flex-1'>
      <Sidebar />
      <main className='flex-1 p-6 bg-gray-100 overflow-y-auto'>
        <AboutMe />
        <div className='grid md:grid-cols-2 gap-6'>
          <TicTacToeMath />
          <QuizCard />
          <BrainSprintCard />
        </div>
      </main>
    </div>
  </div>
);

export default Home;