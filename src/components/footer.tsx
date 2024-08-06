import React from "react";
import Image from "next/image";
import FooterLogo from "../../public/footer-logo.png";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { SiMessenger } from "react-icons/si";
import { FaTwitter, FaInfinity, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="max-w-7xl px-3 py-5 mx-auto">
        <ul className="flex flex-wrap items-center md:justify-between justify-center p-0 m-0 list-none">
          <li className="md:px-[30px] md:w-[30%] w-[90%] flex items-center flex-col justify-center md:self-start">
            <Link href={"/"} className="w-[150px] h-[103px]">
              <Image
                src={FooterLogo}
                width={150}
                height={102}
                alt="Logo"
                className="w-full h-auto"
              />
            </Link>
            <p className="text-[14px] text-[#333]">
              O’zbekiston va qo’shni davlatlar bo’ylab tur xizmatlari
            </p>
            <div className="py-5 flex justify-center gap-[10px] text-orange-400 text-[20px]">
              <BiLogoLinkedin />
              <SiMessenger />
              <FaTwitter />
              <FaInfinity />
              <FaInstagram />
              <FaYoutube />
            </div>
          </li>
          <li className="md:px-[30px] md:w-[30%] w-[90%] flex items-center flex-col justify-center md:self-start">
            <h1 className="text-[24px] font-semibold pt-[25px]">Kompaniya</h1>
            <a href="#" className="text-[17px] pt-[10px] text-[#333]">
              Biz haqimizda
            </a>
            <a href="#" className="text-[17px] pt-[10px] text-[#333]">
              Nega biz?
            </a>
            <a href="#" className="text-[17px] pt-[10px] text-[#333]">
              Bog’lanish
            </a>
            <a href="#" className="text-[17px] pt-[10px] text-[#333]">
              Xizmatlar
            </a>
          </li>
          <li className="md:px-[30px] md:w-[30%] w-[90%] flex items-center flex-col justify-center md:self-start">
            <h1 className="text-[24px] font-semibold pt-[25px]">Yo’nalishlar</h1>
            <a href="#" className="text-[17px] pt-[10px] text-[#333]">
              Buxoro
            </a>
            <a href="#" className="text-[17px] pt-[10px] text-[#333]">
              Toshkent
            </a>
            <a href="#" className="text-[17px] pt-[10px] text-[#333]">
              Samarqand
            </a>
            <a href="#" className="text-[17px] pt-[10px] text-[#333]">
              Zomin
            </a>
            <a href="#" className="text-[17px] pt-[10px] text-[#333]">
              Xiva
            </a>
            <a href="#" className="text-[17px] pt-[10px] text-[#333]">
              Turkiston
            </a>
            <a href="#" className="text-[17px] pt-[10px] text-[#333]">
              Surxondaryo
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
