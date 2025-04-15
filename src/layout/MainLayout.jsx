import React from 'react';
import left from '../assets/left.svg';
import github from '../assets/github.svg';
import { Link, NavLink } from 'react-router-dom';

function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-row">

      <div className="flex flex-col flex-grow">
        <header className="pt-2 pb-2 bg-[#1B1B1B] px-4 sm:pt-1 sm:pb-1 sm:px-3">
        <div className="container mx-auto flex items-center justify-between flex-col sm:flex-col md:flex-row">


            <div className="flex items-center gap-4 sm:gap-2">
              <img
                src={left}
                alt="Left Icon"
                className="w-8 p-1 gap-2 sm:w-7"
              />
              <Link
                to="/"
                className="text-xl text-white leading-7 text-center sm:text-lg"
              >
                HAYOTBEK.
                <span className="text-xl text-[#39965F] leading-7 sm:text-lg">
                  UZ
                </span>
              </Link>
            </div>
            <div className="flex items-center gap-4 sm:gap-3">
              <ul className="flex items-center gap-6 text-lg text-white leading-5 font-normal sm:gap-5 sm:text-base">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? 'text-[#39965F]' : 'hover:text-[#39965F]'
                    }
                  >
                    Bosh sahifa
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? 'text-[#39965F]' : 'hover:text-[#39965F]'
                    }
                  >
                    Haqida
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                      isActive ? 'text-[#39965F]' : 'hover:text-[#39965F]'
                    }
                  >
                    Loyihalar
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? 'text-[#39965F]' : 'hover:text-[#39965F]'
                    }
                  >
                    Bog'lanish
                  </NavLink>
                </li>
              </ul>
              <div className="header-git">
                <a
                  href="https://github.com/muzaffarovhayotbek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-all"
                >
                  <img
                    src={github}
                    alt="GitHub"
                    width={32}
                    className="sm:w-7"
                  />
                </a>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="bg-[#1B1B1B] text-white text-center py-2">
          <h2 className="text-2xl sm:text-xl">HAYOTBEK.UZ</h2>
        </footer>
      </div>
    </div>
  );
}

export default MainLayout;
