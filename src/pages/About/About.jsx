import React from 'react';
import { NavLink } from 'react-router-dom';

function About() {
  return (
    <div className="flex flex-col items-center container mx-auto">
      <div className=" mt-[32px] w-[912px] pl-[20px]">
        <h2 className="text-[32px]  text-[#FFFFFF]">Men haqimda</h2>
        <h3 className="w-[112px] bg-[#39965F] h-4 rounded-[10px] "></h3>
        <div className="flex flex-col gap-4 w-[912px]">
          <p className="w-[912px] text-[18px] pt-[24px] font-[400]  tracking-[0px] font-['Poppins']  text-[#FFFFFFB2]">
            Men Muzaffarov Hayotbek veb dasturchisiman. Yoshim 16 da, Farg'ona
            viloyati Farg'ona shahrida tug'ilganman. Qiziqarli, ko’p
            funksionallika ega bo’lgan va kuchli dizaynga ega bo’lgan dasturlar
            yaratishga qiziqaman.
          </p>
          <p className="w-[912px] text-[18px] pt-[24px] font-[400]  tracking-[0px] font-['Poppins']  text-[#FFFFFFB2]">
            Mening vazifam veb saytni foydalanuvchilarga qulay, sayt dizayni
            foydalanuvchilarga jalb qiluvchi lekin ayni paytda tezkor bo'lishini
            taminlashdir va saytni moslashuvchan kodlar bilan yaratishdir!
            Mening maqsadim veb sayt foydalanuvchilariga barcha qismlarini
            intuitiv va qulay bo'lishga harakat qilishga qaratilgan. Agar sizga
            men yaratgan loyihalarim qiziq bo’lsa Loyihalar sahifasiga tashrif
            buyurishingiz mumkin :)
          </p>
        </div>
        <button className="pt-[8px] pb-[8px] pl-[44px] pr-[44px]  bg-[#39965F] mt-[24px] rounded-[8px] text-[18px] text-white text-center font-[400]">
          <NavLink to="/contact"> Bog’lanish</NavLink>
        </button>
      </div>
    </div>
  );
}

export default About;
