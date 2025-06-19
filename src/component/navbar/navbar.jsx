import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-2">
              <img src="#" alt="Blog" className="h-8" />
              <span className="text-2xl font-semibold dark:text-white">Blog Website</span>
            </Link>
          </div>

          {/* Search Bar - Center */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search..."
                className="w-full ps-10 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  fill="none"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Nav Links - Right */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
            to={"/blog/add"}

              className="text-blue-700 dark:text-blue-500 font-medium hover:underline"
            >
              Create Blog
            </Link>
            <Link
              to={"/Register"}
              className="text-gray-700 dark:text-white hover:text-blue-700 dark:hover:text-blue-500"
            >
              Register
            </Link>
            <Link
              to={"/Login"}
              
              className="text-gray-700 dark:text-white hover:text-blue-700 dark:hover:text-blue-500"
            >
              Login
            </Link>
          </div>

          {/* Hamburger - Mobile Only */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
              aria-controls="navbar-menu"
              aria-expanded="false"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
