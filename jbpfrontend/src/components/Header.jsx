import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-white shadow">
      <nav className="flex items-center justify-between px-6 py-4">
        {/* Left: Logo Image */}
        <div>
          <img
            src="/Print.svg"
            alt="JobBoard Logo"
            className="h-20 w-auto object-contain"
          />
        </div>

        {/* Right: Navigation Buttons */}
        <div className="flex items-center space-x-6">
          <button className="text-gray-700 font-medium hover:text-blue-600 transition">
            Home
          </button>
          <button className="text-gray-700 font-medium hover:text-blue-600 transition">
            Jobs
          </button>
          <button className="text-gray-700 font-medium hover:text-blue-600 transition">
            Companies
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Sign In
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
