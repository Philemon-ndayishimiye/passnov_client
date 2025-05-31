import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateForm from "./components/CreateForm";
import Home from "./components/Home";
import Sidebar from "./components/SideBar";
import Bugs from "./components/Bugs";
import Improvement from "./components/Improvement";
import Feature from "./components/Feature";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="flex h-screen bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400">

        {/* Sidebar for tablet and desktop only */}
        <div className="w-60 bg-white sticky top-0 overflow-y-auto hidden sm:block">
          <Sidebar />
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col">

          {/* Top navigation bar */}
          <nav className="p-4 bg-white shadow-md flex justify-between items-center relative">
            <h1 className="text-2xl font-bold text-pink-600">FeedBack App</h1>

            {/* Hamburger button (mobile only) */}
            <button
              className="sm:hidden text-pink-600 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Navigation links */}
            <div
              className={`sm:flex sm:items-center sm:space-x-6 absolute sm:static top-full left-0 w-full sm:w-auto bg-white sm:bg-transparent transition-all duration-300 ease-in-out
                ${menuOpen ? "block" : "hidden"} sm:block
              `}
            >
              {/* Main nav links always visible */}
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 text-pink-600 hover:underline text-center sm:inline-block"
              >
                Home
              </Link>
              <Link
                to="/create"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 text-pink-600 hover:underline text-center sm:inline-block"
              >
                Create suggestion
              </Link>

              {/* Categories - only show on mobile (sm:hidden means hidden on sm and above) */}
              <div className="sm:hidden">
                <hr className="my-2 border-pink-300" />
                <Link
                  to="/bugs"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 text-pink-600 hover:underline text-center"
                >
                  Bugs
                </Link>
                <Link
                  to="/feature"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 text-pink-600 hover:underline text-center"
                >
                  Feature
                </Link>
                <Link
                  to="/improvement"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 text-pink-600 hover:underline text-center"
                >
                  Improvement
                </Link>
              </div>
            </div>
          </nav>

          {/* Page content */}
          <div className="flex-1 overflow-y-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<CreateForm />} />
              <Route path="/bugs" element={<Bugs />} />
              <Route path="/feature" element={<Feature />} />
              <Route path="/improvement" element={<Improvement />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
