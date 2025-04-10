import React from 'react';
import gmail from '../../assets/gmail.svg';
import telegram from '../../assets/telegram.svg';
import github from '../../assets/github.svg';
function Contact() {
  return (
    <div className="flex flex-col items-center container mx-auto">
      <div className="w-[912px] pl-[20px]">
        <h2 className="text-[32px] pb-[12px] pt-[32px] text-[#FFFFFF]">
          Bog’lanish
        </h2>
        <h3 className="w-[112px] bg-[#39965F] h-4 rounded-[10px] "></h3>

      </div>
      <div className="flex items-center gap-[20px] pl-[20px] pt-[24px] mt-[24px]">
        <div className="flex flex-col items-center w-[290.67px] h-[190px] rounded-[12px] pt-[28px] pb-[28px] border-[1px] border-[#1B1B1B] bg-[#1B1B1B]">
          <img
            src={gmail}
            alt="gmil"
            className="w-[64px]  object-contain rounded-[6px]"
          />
          <h4 className="w-[96px] text-white text-[20px] pt-[8px]">E-pochta</h4>
          <p className="text-[16px] text-[#FFFFFFB2] pt-[8px]">
            hmuzfrov@gmail.com
          </p>
        </div>

        <div className="flex flex-col items-center w-[290.67px] h-[190px] rounded-[12px] pt-[28px] pb-[28px] border-[1px] border-[#1B1B1B] bg-[#1B1B1B]">
          <img src={telegram} alt="" width={64} />
          <a href="https://t.me/muzaffarvchch">
            <h2 className="text-[20px] text-[#FFFFFF] pt-[8px]">Telegram</h2>
          </a>
          <p className="text-[16px] text-[#FFFFFFB2] pt-[8px]">
            https://t.me/muzaffarvchch
          </p>
        </div>

        <div className="flex flex-col items-center text-center w-[290.67px] h-[190px] rounded-[12px] pt-[28px] pb-[28px] border-[1px] border-[#1B1B1B] bg-[#1B1B1B]">
          <img
            src={github}
            alt="gmil"
            className="w-[64px]  object-contain rounded-[6px]"
          />
          <a href="https://github.com/muzaffarovhayotbek">
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
