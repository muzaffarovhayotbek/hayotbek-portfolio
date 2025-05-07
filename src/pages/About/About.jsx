import React from 'react';
import { NavLink } from 'react-router-dom';
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import js from '../../assets/js.svg';
import react from '../../assets/react.svg';
import tailwend from '../../assets/tailwind.svg';
import { FaSass } from 'react-icons/fa';
import figma from '../../assets/figma.png';

function About() {
  return (
    <div className="flex flex-col items-center container mx-auto bg-black px-4 md:px-8">
      <div className="mt-8 w-full max-w-[912px]">
        <h2 className="text-2xl md:text-3xl text-white font-bold">
          Men haqimda
        </h2>
        <h3 className="w-[112px] bg-[#39965F] h-2 rounded-[10px] mt-2 mb-4"></h3>

        <div className="flex flex-col gap-4">
          <p className="text-lg text-[#FFFFFFB2] leading-relaxed">
            Men Muzaffarov Hayotbek veb dasturchisiman. Yoshim 16 da, Farg'ona
            viloyati Farg'ona shahrida tug'ilganman. Qiziqarli, ko’p
            funksionallika ega bo’lgan va kuchli dizaynga ega bo’lgan dasturlar
            yaratishga qiziqaman.
          </p>
          <p className="text-lg text-[#FFFFFFB2] leading-relaxed">
            Mening vazifam veb saytni foydalanuvchilarga qulay, sayt dizayni
            foydalanuvchilarga jalb qiluvchi lekin ayni paytda tezkor bo'lishini
            taminlashdir va saytni moslashuvchan kodlar bilan yaratishdir!
            Mening maqsadim veb sayt foydalanuvchilariga barcha qismlarini
            intuitiv va qulay bo'lishga harakat qilishga qaratilgan. Agar sizga
            men yaratgan loyihalarim qiziq bo’lsa{' '}
            <span className="text-[#39965F] font-semibold">Loyihalar</span>{' '}
            sahifasiga tashrif buyurishingiz mumkin :)
          </p>
        </div>

        <button className="bg-[#39965F] mt-6 py-3 px-8 rounded-lg text-white text-[18px] font-medium">
          <NavLink to="/contact">Bog’lanish</NavLink>
        </button>

        <div className="mt-12">
          <h2 className="text-2xl text-white font-bold">Texnologiyalar</h2>
          <h3 className="w-[112px] bg-[#39965F] h-2 rounded-[10px] mt-2 mb-6"></h3>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center p-4 bg-[#1B1B1B] rounded-lg border border-[#FFFFFF40]">
              <img src={html} alt="html" className="w-16 h-16" />
              <h2 className="text-white">Html</h2>
            </div>
            <div className="flex flex-col items-center p-4 bg-[#1B1B1B] rounded-lg border border-[#FFFFFF40]">
              <img src={css} alt="css" className="w-16 h-16" />
              <h2 className="text-white">Css</h2>
            </div>
            <div className="flex flex-col items-center p-4 bg-[#1B1B1B] rounded-lg border border-[#FFFFFF40]">
              <img src={js} alt="js" className="w-16 h-16" />
              <h2 className="text-white">JavaScript</h2>
            </div>
            <div className="flex flex-col items-center p-4 bg-[#1B1B1B] rounded-lg border border-[#FFFFFF40]">
              <img src={react} alt="react" className="w-16 h-16" />
              <h2 className="text-white">React js</h2>
            </div>
            <div className="flex flex-col items-center p-4 bg-[#1B1B1B] rounded-lg border border-[#FFFFFF40]">
              <FaSass className="text-pink-500 w-16 h-16" />
              <h2 className="text-white">Sass</h2>
            </div>
            <div className="flex flex-col items-center p-4 bg-[#1B1B1B] rounded-lg border border-[#FFFFFF40]">
              <img src={tailwend} alt="tailwind" className="w-16 h-16" />
              <h2 className="text-white text-sm font-medium">Tailwind.css</h2>
            </div>
            <div className="flex flex-col items-center p-4 bg-[#1B1B1B] rounded-lg border border-[#FFFFFF40]">
              <img src={figma} alt="figma" className="w-16 h-16" />
              <h2 className="text-white text-sm font-medium pt-1">Figma</h2>
            </div>
          </div>
        </div>

        <div className="mt-12 mb-16">
          <h2 className="text-2xl font-semibold text-white">
            Men nimalar qila olaman
          </h2>
          <h3 className="w-[112px] bg-[#39965F] h-2 rounded-[10px] mt-2 mb-4"></h3>
        </div>
      </div>
    </div>
  );
}

export default About;
