import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto pt-[227px] pb-[227px] pl-[159px] pr-[160px]">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[36px] font-bold leading-[100%] tracking-[0px] w-[633px] text-[#FFFFFF]">
            Assalomu alaykum, Men{' '}
            <span className="text-[36px] font-bold leading-[100%] tracking-[0px] text-[#39965F] block mt-2">
              Muzaffarov Hayotbek
            </span>
          </h2>

          <p className="w-[633px] text-[18px] text-center pt-4 mt-4 text-[#FFFFFFB2]">
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
