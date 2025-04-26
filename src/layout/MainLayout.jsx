import React, { useState } from 'react';
import left from '../assets/left.svg';
import github from '../assets/github.svg';
import { Link, NavLink } from 'react-router-dom';
import './layout.css';

function MainLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="pt-2 pb-2 bg-[#1B1B1B] sm:pt-1.5 sm:pb-1.5 sm:pr-2">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 sm:flex sm:gap-2">
            <Link
              to="/"
              className="title text-[22px] text-white leading-7 text-center sm:text-[18px]"
            >
              HAYOTBEK.
              <span className="text-[22px] text-[#39965F] leading-7 sm:text-[18px]">
                UZ
              </span>
            </Link>
            <img
              src={left}
              alt="Left Icon"
              className="w-8 p-1 gap-2 cursor-pointer md:hidden"
              onClick={toggleMenu}
            />
          </div>
          <div className="flex items-center gap-4 sm:flex sm:gap-3">
            <ul className="hidden md:flex items-center gap-6 text-[18px] text-white leading-5 font-normal sm:text-[16px] sm:gap-4">
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

            {isMenuOpen && (
              <div className="absolute left-0 top-12 bg-[#1B1B1B] text-white w-54 shadow-lg z-50 border border-gray-200 md:hidden sm:pl-2 sm:ml-2">
                <ul className="flex flex-col items-start gap-4 text-[18px] font-normal sm:text-[16px] sm:gap-3">
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
              </div>
            )}

            <div className="header-git">
              <a
                href="https://github.com/muzaffarovhayotbek"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-all"
              >
                <img src={github} alt="GitHub" width={32} />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-[#1B1B1B] text-white text-center py-2 sm:py-1">
        <h2 className="text-[22px] sm:text-[18px]">HAYOTBEK.UZ</h2>
      </footer>
    </div>
  );
}

export default MainLayout;
