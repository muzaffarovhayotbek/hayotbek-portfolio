import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto md:pt-[227px] pb-[227px] pl-[159px] pr-[160px] sm:pt-[180px] sm:pb-[180px] sm:pl-[120px] sm:pr-[120px]">
        <div className="flex flex-col items-center text-center">
          <h2 className="md:text-[36px] font-bold leading-[100%] tracking-[0px] w-[633px] text-[#FFFFFF] sm:text-[32px] sm:w-[600px]">
            Assalomu alaykum, Men{' '}
            <span className="md:text-[36px] font-bold leading-[100%] tracking-[0px] text-[#39965F] block mt-2 sm:text-[32px] sm:mt-1">
              Muzaffarov Hayotbekman
            </span>
          </h2>

          <p className="md:w-[633px] text-[18px] text-center pt-4 mt-4 text-[#FFFFFFB2] sm:w-[580px] sm:text-[16px] sm:pt-2 sm:mt-3">
            Veb dasturchi va dizayner sifatida natijaga yo'naltirilgan ishchi.
            Veb-saytlar va veb-ilovalarni yaratish va boshqarish orqali umumiy
            mahsulot muvaffaqiyatiga erishish maqsadimdir.
          </p>
          <NavLink
            to="/projects"
            className="pt-[8px] pb-[8px] pl-[44px] pr-[44px] bg-[#39965F] rounded-md gap-5 text-[18px] text-center text-white mt-4 cursor-pointer"
          >
            Loyihalar
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
