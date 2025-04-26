import React from 'react';
import bitcoin from '../../assets/bitcoin.jpg';
import unsplash from '../../assets/unsplash.png';
import uzum from '../../assets/uzum.webp';
import valyuta from '../../assets/valuta.webp';
import companyName from '../../assets/company-name.webp';
import telegram from '../../assets/telegramMe.svg';
import megaphone from '../../assets/megaphone.png';
import github from '../../assets/github.svg';
import website from '../../assets/website.svg';

const projects = [
  {
    title: 'my unplash',
    description: 'Bepul yuqori sifatli suratlar kutubxonasi.',
    vercel: 'https://yakuniy-imtihon-six.vercel.app/',
    image: unsplash,
  },
];

function Projects() {
  return (
    <div className="flex flex-col items-center container mx-auto px-4 py-10">
      <div className="mb-8 w-full">
        <h2 className="text-3xl sm:text-2xl font-bold text-white">Loyihalar</h2>
        <div className="w-28 h-2 bg-green-600 rounded-lg mt-2"></div>
      </div>

      <div className="flex flex-wrap gap-6 justify-center w-full relative">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-[#1F2937] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
            />
            <div className="absolute top-39  rounded bg-black/40 px-3 py-1 text-[16px] font-semibold text-white">
              my web-unsplash
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex items-center gap-4 justify-center">
                <a
                  href="https://github.com/muzaffarovhayotbek/yakuniy-imtihon"
                  className="flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="github icon" />
                  <h2 className="text-blue-400 hover:text-blue-800">Github</h2>
                </a>
                <a
                  href={project.vercel}
                  className="flex items-center gap-2 mt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-5.5 h-5.5"
                    src={website}
                    alt="website icon"
                  />
                  <h2 className="text-blue-400 hover:text-blue-700">Website</h2>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Telegram Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between bg-[#1B1B1B] border-2 border-[#FFFFFF40] rounded-2xl p-6 mt-16 w-full max-w-5xl gap-6">
        <img src={telegram} alt="Telegram" className="w-40" />

        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-2xl font-bold text-white mb-4">Telegram kanal</h2>
          <p className="text-gray-300 mb-6">
            Barcha loyihalarimni Telegram kanalimda ham kuzatib borishingiz
            mumkin!
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
