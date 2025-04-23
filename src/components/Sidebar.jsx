import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <aside className='bg-gray-200 w-40 p-4 h-full'>
    <nav className='flex flex-col gap-4'>
      <Link to='/'>Home</Link>
      <Link to='/courses'>Courses</Link>
    </nav>
  </aside>
);

export default Sidebar;