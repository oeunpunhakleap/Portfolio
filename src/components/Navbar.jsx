import React from 'react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/60 backdrop-blur-md text-white px-8 py-4 flex items-center justify-between z-50">
      
      
      <a href="#home" className="text-lg font-bold hover:text-gray-300 transition-colors">
        Name
      </a>

      
      <div className="flex gap-6">
        <a href="#home" className="group relative py-1 hover:text-gray-300 transition-colors">
          Home
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
        </a>

        <a href="#about" className="group relative py-1 hover:text-gray-300 transition-colors">
          About
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
        </a>

        <a href="#skills" className="group relative py-1 hover:text-gray-300 transition-colors">
          Skills
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
        </a>

        <a href="#experience" className="group relative py-1 hover:text-gray-300 transition-colors">
          Experience
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
        </a>
      </div>

    </nav>
  );
}

export default Navbar;
