import React from 'react';
import { NavLink } from 'react-router-dom';
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import js from '../../assets/js.svg';
import react from '../../assets/react.svg';
import tailwend from '../../assets/tailwind.svg';
import sass from '../../assets/sass.png';

function About() {
  return (
    <div className="flex flex-col items-center container mx-auto">
      <div className=" mt-[32px] w-[912px] pl-[20px] sm:mt-[28px] sm:w-[780px] sm:pl-[18px]">
        <h2 className="text-[32px]  text-[#FFFFFF] sm:text-[28px]">
          Men haqimda
        </h2>
        <h3 className="w-[112px] bg-[#39965F] h-2 rounded-[10px] sm:w-[100px] sm:h-1 sm:rounded-[8px] "></h3>
        <div className="flex flex-col gap-4 w-[912px] sm:w-[890px] sm:gap-2">
          <p className="w-[912px] text-[18px] pt-[24px] font-[400]  tracking-[0px] font-['Poppins']  text-[#FFFFFFB2] sm:w-[890px] sm:text-[17px] sm:pt-[20px]">
            Men Muzaffarov Hayotbek veb dasturchisiman. Yoshim 16 da, Farg'ona
            viloyati Farg'ona shahrida tug'ilganman. Qiziqarli, ko’p
            funksionallika ega bo’lgan va kuchli dizaynga ega bo’lgan dasturlar
            yaratishga qiziqaman.
          </p>
          <p className="w-[912px] text-[18px] pt-[24px] font-[400]  tracking-[0px] font-['Poppins']  text-[#FFFFFFB2] sm:w-[890px] sm:text-[17px] sm:pt-[20px]">
            Mening vazifam veb saytni foydalanuvchilarga qulay, sayt dizayni
            foydalanuvchilarga jalb qiluvchi lekin ayni paytda tezkor bo'lishini
            taminlashdir va saytni moslashuvchan kodlar bilan yaratishdir!
            Mening maqsadim veb sayt foydalanuvchilariga barcha qismlarini
            intuitiv va qulay bo'lishga harakat qilishga qaratilgan. Agar sizga
            men yaratgan loyihalarim qiziq bo’lsa{' '}
            <span className="text-[18px] text-[#39965F] font-[500] leading-[100%] sm:text-[16px]">
              Loyihalar
            </span>{' '}
            sahifasiga tashrif buyurishingiz mumkin :)
          </p>
        </div>
        <button className="pt-[8px] pb-[8px] pl-[44px] pr-[44px]  bg-[#39965F] mt-[24px] rounded-[8px] text-[18px] text-white text-center font-[400] sm:pt-[6px] sm:pl-[40px] sm:pr-[40px] sm:mt-[20px] sm:rounded-[6px] sm:text-[16px]">
          <NavLink to="/contact"> Bog’lanish</NavLink>
        </button>

        <div className="w-[912px] gap-[24px] sm:w-[890px] sm:gap-[20px]">
          <h2 className="text-[28px] text-[#FFFFFF] pt-[64px] pb-[8px] sm:text-[26px] sm:pt-[58px] sm:pb-[6px]">
            Asbob-uskunalar
          </h2>
          <h3 className="w-[112px] bg-[#39965F] h-2 rounded-[10px] "></h3>

          <div className="flex items-center gap-[20px] sm:mt-[24px] flex-wrap mb-[64px] md:flex sm:flex sm:gap-[18px] mt-[22px]">
            <div className="flex flex-col items-center w-[213px] h-[124px] rounded-[12px] gap-[14px] p-[20px] bg-[#1B1B1B] border border-[#FFFFFF40]">
              <img src={html} alt="html" className="w-[64px]" />
            </div>

            <div className="flex flex-col items-center w-[213px] h-[124px] rounded-[12px] gap-[14px] p-[20px] bg-[#1B1B1B] border border-[#FFFFFF40]">
              <img src={css} alt="" />
            </div>

            <div className="flex flex-col items-center w-[213px] h-[124px] rounded-[12px] gap-[14px] p-[20px] bg-[#1B1B1B] border border-[#FFFFFF40]">
              <img src={js} alt="js" className="" />
            </div>

            <div className="flex flex-col items-center w-[213px] h-[124px] rounded-[12px] gap-[14px] p-[20px] bg-[#1B1B1B] border border-[#FFFFFF40]">
              <img src={react} alt="react" className="w-[64px] h-[64px]" />
            </div>

            <div className="flex flex-col items-center w-[213px] h-[124px] rounded-[12px] gap-[14px] p-[20px] bg-[#1B1B1B] border border-[#FFFFFF40]">
              <img src={sass} alt="sass" className="w-[64px] object-cover" />
            </div>

            <div className="flex flex-col items-center w-[213px] h-[124px] rounded-[12px] gap-[14px] p-[20px] bg-[#1B1B1B] border border-[#FFFFFF40]">
              <img src={tailwend} alt="tailwend" width={64} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
