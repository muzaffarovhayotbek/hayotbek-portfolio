import React from 'react';
import left from '../assets/left.svg';
import github from '../assets/github.svg';
import { Link, NavLink } from 'react-router-dom';
import LeftBar from '../components/LeftBar';

function MainLayout({ children }) {
  return (
    <div className="flex min-h-dvh flex-row">
      <LeftBar />

      <div className="flex flex-col flex-grow">
        <header className="pt-[8px] pb-[8px] bg-[#1B1B1B] pl-[14px] pr-[14px]">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-[14px]">
              <img src={left} alt="" className="w-[32px] p-[2px] gap-[10px]" />
              <Link
                to="/"
                className="text-[22px] text-[#FFFFFF] leading-[28px] text-center"
              >
                HAYOTBEK.
                <span className="text-[22px] text-[#39965F] leading-[28px]">
                  UZ
                </span>
              </Link>
            </div>
            <div className="flex items-center gap-[14px]">
              <ul className="flex items-center gap-[24px] text-[16px] text-white leading-[100%] font-[400]">
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
                  <img src={github} alt="GitHub" width={32} />
                </a>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="bg-[#1B1B1B] text-white text-center py-2">
          <h2>HAYOTBEK.UZ</h2>
        </footer>
      </div>
    </div>
  );
}

export default MainLayout;
