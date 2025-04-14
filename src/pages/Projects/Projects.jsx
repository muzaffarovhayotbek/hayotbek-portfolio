import React from 'react';
import bitcoin from '../../assets/bitcoin.jpg';
import unsplash from '../../assets/unsplash.png';
import uzum from '../../assets/uzum.webp';
import valyuta from '../../assets/valuta.webp';
import companyName from '../../assets/company-name.webp';

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
    image: 'https://via.placeholder.com/300x200',  // fallback rasm
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
  }
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-[#1F2937] rounded-2xl overflow-hidden shadow-lg max-w-sm w-full mx-auto hover:shadow-xl transition-shadow"
          >
            <img
              src={project.image}
              alt={project.title || 'Project image'}
              className="w-full h-48 object-cover hover:scale-105 transition-transform"
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
    </div>
  );
}

export default Projects;
