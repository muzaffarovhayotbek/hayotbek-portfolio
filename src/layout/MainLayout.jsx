import React, { useState, useEffect, useRef } from 'react';
import left from '../assets/left.svg';
import github from '../assets/github.svg';
import { Link, NavLink } from 'react-router-dom';
import './layout.css';

function MainLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Tashqariga bosganda menyuni yopish
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="pt-2 pb-2 bg-[#1B1B1B] sm:pt-1.5 sm:pb-1.5 sm:pr-2">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 sm:flex sm:gap-2">
            <Link
              to="/"
              className="text-[22px] text-white leading-7 text-center sm:text-[18px]"
              onClick={closeMenu}
            >
              HAYOTBEK.
              <span className="text-[22px] text-[#39965F] leading-7 sm:text-[18px]">
                UZ
              </span>
            </Link>
            <img
              src={left}
              alt="Left Icon"
              aria-label="Toggle Menu"
              className="w-8 p-1 gap-2 cursor-pointer md:hidden"
              onClick={toggleMenu}
            />
          </div>

          <div className="flex items-center gap-4 sm:flex sm:gap-3">
            <ul className="hidden md:flex items-center gap-6 text-[18px] text-white leading-5 font-normal sm:text-[16px] sm:gap-4">
              {['/', '/about', '/projects', '/contact'].map((path, index) => (
                <li key={index}>
                  <NavLink
                    to={path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      isActive ? 'text-[#39965F]' : 'hover:text-[#39965F]'
                    }
                  >
                    {path === '/' ? "Bosh sahifa" : 
                     path === '/about' ? "Haqida" :
                     path === '/projects' ? "Loyihalar" : "Bog'lanish"}
                  </NavLink>
                </li>
              ))}
            </ul>

            {isMenuOpen && (
              <div
                ref={menuRef}
                className="absolute left-0 top-14 bg-[#1B1B1B] text-white w-52 shadow-lg z-50 border border-gray-700 md:hidden sm:pl-2 sm:ml-2"
              >
                <ul className="flex flex-col items-start gap-4 p-4 text-[18px] font-normal sm:text-[16px] sm:gap-3">
                  {['/', '/about', '/projects', '/contact'].map((path, index) => (
                    <li key={index}>
                      <NavLink
                        to={path}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                          isActive ? 'text-[#39965F]' : 'hover:text-[#39965F]'
                        }
                      >
                        {path === '/' ? "Bosh sahifa" : 
                         path === '/about' ? "Haqida" :
                         path === '/projects' ? "Loyihalar" : "Bog'lanish"}
                      </NavLink>
                    </li>
                  ))}
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
