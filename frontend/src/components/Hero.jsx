// src/components/Hero.jsx
import React from "react";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    // This parent div is already set to text-left
    <div className="py-6 md:py-8 text-left bg-sky-50">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        Find the services you need, instantly
      </h1>

      {/* CHANGED: 
        Was <div className="px-0">. 
        I added 'max-w-2xl' to limit the search bar's width.
        Since the parent is text-left, this will automatically 
        position it on the left side.
      */}
      <div className="max-w-2xl">
        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-2">
          <div className="relative flex-grow w-full mb-2 md:mb-0 md:mr-2">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for services, businesses, or locations..."
              className="w-full py-3 pl-10 pr-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-md">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;