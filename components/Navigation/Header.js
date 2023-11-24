"use client"
import React, { useState } from 'react';

const Header = () => {
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow(!show);
  }

  return (
    <section className="shadow-2xl  bg-gray-200">
      <div className="max-w-6xl px-4 mx-auto">
        <nav className="flex items-center justify-between py-4">
          <a href="/" className="text-3xl font-semibold leading-none dark:text-gray-400">
            Logo
          </a>
          <div className="flex lg:hidden">
            <button
              className="flex items-center px-3 py-2 text-blue-600 border border-blue-200 rounded dark:text-gray-400 navbar-burger hover:text-blue-800 hover:border-blue-300"
              onClick={toggleShow}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
            </button>
          </div>
          <ul className={`lg:flex lg:space-x-9 lg:items-center hidden lg:w-auto ${show ? 'hidden' : ''}`}>
            <li>
                <a href="/" className="text-base font-semibold text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-blue-500">
                    Home
                </a>
            </li>
            <li>
                <a href="/" className="text-base font-semibold text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-blue-500">
                    About
                </a>
            </li>
            <li>
                <a href="/" className="text-base font-semibold text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-blue-500">
                    Blogs
                </a>
            </li>
            <li>
                <a href="/" className="text-base font-semibold text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-blue-500">
                    Services
                </a>
            </li>
            {/* Other list items */}
          </ul>
          <div className={`lg:block absolute inset-0 z-10 h-screen p-3 text-gray-400 duration-500 transform bg-purple-50 w-80 ${show ? 'translate-x-0 ease-in-opacity-100' : '-translate-x-full ease-out opacity-0'}`}>
            <div className="flex justify-between lg:mb-7">
              <a className="p-2 text-2xl font-bold text-gray-700 dark:text-gray-400" href="/">Logo</a>
              <button className="p-2 text-gray-700 rounded-md dark:text-gray-400 hover:text-blue-300 lg:hidden" onClick={toggleShow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
            <ul className="px-4 text-left mt-7">
              <li className="text-base pt-6 text-gray-700 hover:text-blue-400">
                <a href="/" >Home</a>
              </li>
              <li className="text-base pt-6 text-gray-700 hover:text-blue-400">
                <a href="/" >About</a>
              </li>
              <li className="text-base pt-6 text-gray-700 hover:text-blue-400">
                <a href="/">Blogs</a>
              </li>
              <li className="text-base pt-6 text-gray-700 hover:text-blue-400">
                <a href="/">Services</a>
              </li>
              {/* Other mobile sidebar list items */}
            </ul>

            <div className="relative inline-flex mt-10 group w-full">
                    <div className="absolute w-full transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

                    <a href="#" title="" className="relative w-full inline-block px-4 py-3 mr-2 text-xs font-semibold leading-none text-center text-white transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                        Get Started
                    </a>
                </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;
