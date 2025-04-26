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
    image: 'https://via.placeholder.com/300x200',
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
      {/* Title */}
      <div className="mb-8 w-full">
        <h2 className="text-3xl sm:text-2xl font-bold text-white">
          Loyihalar
        </h2>
        <div className="w-28 h-2 bg-green-600 rounded-lg mt-2"></div>
      </div>

      {/* Projects grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-[#1F2937] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
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
                Loyihani ko‘rish →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Telegram call-to-action */}
      <div className="flex flex-col lg:flex-row items-center justify-between bg-[#1B1B1B] border-2 border-[#FFFFFF40] rounded-2xl p-6 mt-16 w-full max-w-5xl gap-6">
        <img src={telegram} alt="Telegram" className="w-40" />

        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-2xl font-bold text-white mb-4">
            Telegram kanal
          </h2>
          <p className="text-gray-300 mb-6">
            Barcha loyihalarimni Telegram kanalimda ham kuzatib borishingiz mumkin!
          </p>
          <a
            href="https://t.me/muzaffarvch_mr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#39965F] text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Ta’shrif buyurish
          </a>
        </div>

        <img
          src={megaphone}
          alt="Megaphone"
          className="w-52 transform rotate-12"
        />
      </div>
    </div>
  );
}

export default Projects;
