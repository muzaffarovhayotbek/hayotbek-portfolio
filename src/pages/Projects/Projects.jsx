import React from 'react';
import bitcoin from '../../assets/bitcoin.jpg';
import unsplash from '../../assets/unsplash.png';
import uzum from '../../assets/uzum.webp';
import valyuta from '../../assets/valuta.webp';
import companyName from '../../assets/company-name.webp';
import telegram from '../../assets/telegramMe.svg';
import megaphone from '../../assets/megaphone.png';

const projects = [
  {
    title: 'Uzum market',
    description: 'Uzum market.',
    vercel: 'https://it-uzum-delta.vercel.app/',
    image: uzum,
  },
  {
    title: 'Unsplash',
    description: 'Bepul yuqori sifatli suratlar kutubxonasi.',
    vercel: 'https://yakuniy-imtihon-six.vercel.app/',
    image: unsplash,
  },
  {
    title: 'CRYPTO',
    description: 'Crypto project',
    vercel: 'https://crypto-liard-nine.vercel.app/',
    image: bitcoin,
  },
  {
    title: 'Freshnesecom',
    description: 'Freshnesecom project',
    vercel: 'https://4dars-jamoviy-proekt.vercel.app/',
    image: 'https://via.placeholder.com/300x200', // fallback rasm
  },
  {
    title: 'Company name',
    description: 'Company name project',
    vercel: 'https://4oy-2-dars-team-work.vercel.app/',
    image: companyName,
  },
  {
    title: 'Valyuta Konverteri',
    description: 'Valyuta Konverteri project',
    vercel: 'https://6-oy-7-dars-vazifasi-sepia.vercel.app/',
    image: valyuta,
  },
];

function Projects() {
  return (
    <div className="flex flex-col items-center container mx-auto px-4 py-10">
      <div className="mb-6 pl-5 w-full">
        <h2 className="text-3xl text-white font-bold leading-none">
          Loyihalar
        </h2>
        <div className="w-28 bg-green-600 h-2 rounded-lg mt-2"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-[#1F2937] rounded-2xl overflow-hidden shadow-lg w-full sm:w-[47%] lg:w-[30%] max-w-sm mx-auto hover:shadow-xl transition-shadow"
          >
            <img
              src={project.image}
              alt={project.title || 'Project image'}
              className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>
              <a
                href={project.vercel}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
                Loyihani ko'rish →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[912px] mt-[64px] mb-[32px] flex gap-[20px] border-2 p-[20px] border-[#FFFFFF40] bg-[#1B1B1B] rounded-[12px]">
        <div className="w-[168px]">
          <img src={telegram} alt="telegram" width={168} />
        </div>
        <div className="w-[406px]">
          <h2 className="text-[28px] pb-[12px] leading-[100%] text-white font-[700]">
            Telegram kanal
          </h2>
          <p className="w-[406px] text-[18px] pb-[12px] font-[400] pt-[12px] text-[#FFFFFFB2]">
            Barcha loyihalarimni telegram kanalimda ham kuzatib borishingiz
            mumkin!
          </p>
          <button className="pt-[10px] pb-[10px] pl-[24px] pr-[24px] bg-[#39965F] rounded-[8px] gap-[10px] text-[18px] text-[#FFFFFF] font-[400]">
            <a
              href="https://t.me/muzaffarvch_mr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ta’shrif buyurish
            </a>
          </button>
        </div>
        <div>
          <img
            src={megaphone}
            alt="megaphone"
            className="w-[206.43px] rotate-[12deg]"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
