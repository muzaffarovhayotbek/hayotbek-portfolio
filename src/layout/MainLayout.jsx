import React from 'react';
import left from '../assets/left.svg';
import github from '../assets/github.svg';
import { Link, NavLink } from 'react-router-dom';

function MainLayout({ children }) {
  return (
    <div className="flex min-h-dvh flex-row">

      <div className="flex flex-col flex-grow">
        <header className="pt-[8px] pb-[8px] bg-[#1B1B1B] pl-[14px] pr-[14px] sm:pt-[6px] sm:pb-[6px] sm:pl-[12px] sm:pr-[12px]">
          <div className="container mx-auto flex items-center justify-between md:flex-row sm:flex-col">
            <div className="flex items-center gap-[14px] md:flex sm:gap-[10px]">
              <img
                src={left}
                alt=""
                className="w-[32px] p-[2px] gap-[10px] sm:w-[28px]"
              />
              <Link
                to="/"
                className="text-[22px] text-[#FFFFFF] leading-[28px] text-center sm:text-[18px]"
              >
                HAYOTBEK.
                <span className="text-[22px] text-[#39965F] leading-[28px] sm:text-[18px]">
                  UZ
                </span>
              </Link>
            </div>
            <div className="flex items-center gap-[14px] sm:gap-[12px]">
              <ul className="flex items-center gap-[24px] text-[16px] text-white leading-[100%] font-[400] sm:gap-[20px] sm:text-[15px]">
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
                    className="sm:w-[28px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="bg-[#1B1B1B] text-white text-center py-2">
          <h2 className="text-[20px] sm:text-[18px]">HAYOTBEK.UZ</h2>
        </footer>
      </div>
    </div>
  );
}

export default MainLayout;
