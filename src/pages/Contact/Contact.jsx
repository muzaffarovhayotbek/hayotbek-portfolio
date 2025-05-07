import React from 'react';
import gmail from '../../assets/gmail.svg';
import telegram from '../../assets/telegram.svg';
import github from '../../assets/github.svg';
import { GrInstagram } from 'react-icons/gr';
function Contact() {
  return (
    <div className="flex flex-col items-center container mx-auto">
      <div className="w-full px-5 sm:px-12 max-w-[912px]">
        <h2
          className="
  text-[28px] 
  sm:text-[32px] 
  md:text-[36px] 
  text-[#FFFFFF] 
  pt-[28px] 
  sm:pt-[32px] 
  md:pt-[36px] 
  pb-[8px] 
  sm:pb-[12px] 
  md:pb-[16px]
"
        >
          Bog’lanish
        </h2>

        <h3 className="w-[100px] sm:w-[112px] h-1 sm:h-2 bg-[#39965F] rounded-[8px] sm:rounded-[10px] "></h3>
      </div>

      <div
        className="flex flex-wrap items-center justify-center gap-[20px] pl-[20px] pr-[20px] pt-[24px] mt-[24px] pb-[20px] 
  sm:flex-col sm:items-center sm:gap-[18px] sm:pl-[18px] sm:pt-[16px] sm:mt-[18px] sm:pb-[20px]
  md:flex-row md:items-start md:gap-[24px] md:pl-[24px] md:pt-[20px] md:mt-[20px]"
      >
        <div className="flex flex-col items-center w-[290.67px] h-[190px] rounded-[12px] pt-[28px] pb-[28px] border-[1px] border-[#1B1B1B] bg-[#1B1B1B]">
          <img
            src={gmail}
            alt="gmil"
            className="w-[64px]  object-contain rounded-[6px]"
          />
          <a href="mailto:hmuzfrov@gmail.com">
            <h4 className="w-[96px] text-white text-[20px] pt-[8px]">
              E-pochta
            </h4>
          </a>

          <p className="text-[16px] text-[#FFFFFFB2] pt-[8px]">
            hmuzfrov@gmail.com
          </p>
        </div>

        <div className="flex flex-col items-center w-[290.67px] h-[190px] rounded-[12px] pt-[28px] pb-[28px] border-[1px] border-[#1B1B1B] bg-[#1B1B1B]">
          <img src={telegram} alt="" width={64} />
          <a
            href="https://t.me/muzaffarvchch"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="text-[20px] text-[#FFFFFF] pt-[8px] ">Telegram</h2>
          </a>
          <p className="text-[16px] text-[#FFFFFFB2] pt-[8px] ">
            https://t.me/muzaffarvchch
          </p>
        </div>

        <div className="flex flex-col items-center text-center w-[290.67px] h-[190px] rounded-[12px] pt-[28px] pb-[28px] border-[1px] border-[#1B1B1B] bg-[#1B1B1B]">
          <img
            src={github}
            alt="gmil"
            className="w-[64px]  object-contain rounded-[6px] "
          />
          <a
            href="https://github.com/muzaffarovhayotbek"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="w-[96px] text-white text-[20px] pt-[8px]">Github</h4>
          </a>
          <p className="text-[16px] text-[#FFFFFFB2] pt-[8px]">
            muzaffarovhayotbek
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
