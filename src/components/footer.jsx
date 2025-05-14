import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 border-t mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="mb-2 md:mb-0">&copy; {new Date().getFullYear()} Amine Latif. All rights reserved.</p>
        <div className="flex space-x-4">
          <Link to="/privacy" className="hover:text-blue-600 transition">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-blue-600 transition">Terms of Service</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
