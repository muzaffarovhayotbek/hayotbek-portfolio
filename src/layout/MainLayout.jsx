import React from 'react';
import left from '../assets/left.svg';
import github from '../assets/github.svg';
import { Link, NavLink } from 'react-router-dom';
import LeftBar from '../components/LeftBar';

function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <LeftBar />
      <header className="pt-[8px] pb-[8px] bg-[#1B1B1B] pl-[14px] pr-[14px]">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-[14px]">
            <img src={left} alt="" className="w-[32px] p-[2px] gap-[10px]" />
            <Link
              to="/"
              className="text-[22px] text-[#FFFFFF] leading-[28px] text-center"
            >
              HAYOTBEK.{''}
              <span className="text-[22px] text-[#39965F] text-center leading-[28px]">
                UZ
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-[14px]">
            <ul className="flex items-center gap-[24px] text-[16px] text-white leading-[100%] font-[400]">
              <NavLink to="/">
                <li>Bosh sahifa</li>
              </NavLink>
              <NavLink to="/about">
                <li>Haqida</li>
              </NavLink>
              <NavLink to="/projects">
                <li>Loyihalar</li>
              </NavLink>
              <NavLink to="/contact">
                <li>Bog'lanish</li>
              </NavLink>
            </ul>
            <div className="header-git">
              <a href="https://github.com/muzaffarovhayotbek">
                <img src={github} alt="github" width={32} />
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
  );
}

export default MainLayout;
