import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="h-full w-full sm:w-60 bg-white p-4 sm:p-6 shadow-lg">
      <h2 className="text-lg sm:text-xl font-bold text-pink-600 mb-4 sm:mb-6 text-center sm:text-left">
        Category
      </h2>
      <nav className="flex flex-col items-center sm:items-start space-y-3 sm:space-y-4">
        <Link
          to="/bugs"
          className="text-pink-600 hover:bg-pink-100 px-4 py-2 rounded text-sm sm:text-base w-full text-center sm:text-left"
        >
          Bugs
        </Link>
        <Link
          to="/feature"
          className="text-pink-600 hover:bg-pink-100 px-4 py-2 rounded text-sm sm:text-base w-full text-center sm:text-left"
        >
          Feature
        </Link>
        <Link
          to="/improvement"
          className="text-pink-600 hover:bg-pink-100 px-4 py-2 rounded text-sm sm:text-base w-full text-center sm:text-left"
        >
          Improvement
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
