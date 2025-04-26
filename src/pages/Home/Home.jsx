import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 md:px-16 lg:px-32 py-16 sm:py-20">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-2xl md:text-4xl font-bold text-white">
            Assalomu alaykum, Men{' '}
            <span className="text-[#39965F] mt-2 block">
              Muzaffarov Hayotbekman
            </span>
          </h2>

          <p className="text-lg sm:text-base text-[#FFFFFFB2] mt-4 md:w-[633px] sm:w-full px-4 sm:px-8">
            Veb dasturchi va dizayner sifatida natijaga yo'naltirilgan ishchi.
            Veb-saytlar va veb-ilovalarni yaratish va boshqarish orqali umumiy
            mahsulot muvaffaqiyatiga erishish maqsadimdir.
          </p>
          <NavLink
            to="/projects"
            className="mt-6 px-6 py-3 bg-[#39965F] text-white text-lg rounded-md"
          >
            Loyihalar
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
