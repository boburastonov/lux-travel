"use client";
import React from "react";
import Card1 from "../../../public/rest-card1.jpeg";
import Card2 from "../../../public/rest-card2.png";
import Card3 from "../../../public/rest-card3.jpeg";
import Image from "next/image";
import ReactStars from "react-stars";
import Link from "next/link";
import { GrLocation } from "react-icons/gr";
import { FiCalendar } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

const RestPlaces = () => {
  return (
    <section>
      <div className="max-w-7xl px-3 mx-auto">
        <h1 className="md:text-[34px] md:mb-[10px] text-[25px] mb-1 font-semibold text-[#333] text-center">
          Dam olish maskanlarimiz
        </h1>
        <p className="text-[18px] font-normal text-[#666] text-center mb-5">
          Quyida taklif qilingan dam olish maskanlari bilan tanishib chiqing
        </p>
        <ul className="flex items-center justify-evenly p-0 m-0 list-none flex-wrap">
          <li className="rest-card w-[300px] p-[15px] bg-white text-center transition-all duration-[0.3s] shadow-[0_4px_10px_#0000001a]">
            <Image
              src={Card1}
              width={270}
              height={200}
              alt="Rest Place"
              className="rounded-lg h-[200px]"
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center py-[5px]">
                <FiCalendar />
                <p className="text-16px font-normal">2 kun</p>
              </div>
              <div className="flex items-center py-[5px]">
                <AiOutlineUser />
                <p className="text-16px font-normal">20 ta odam</p>
              </div>
            </div>
            <div className="flex items-center justify-between py-[5px]">
              <h1 className="text-[19px] font-semibold leading-[30px]">
                Sherwood Resort
              </h1>
              <ReactStars
                count={5}
                value={5}
                size={21}
                edit={false}
                color2={"#ffa767"}
                color1={"#ccc"}
              />
            </div>
            <div className="flex items-center">
              <GrLocation />
              <p className="ml-[5px] text-[17px] ">O'zbekiston</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[18px] text-[#ffa767]">1,000 $</p>
              <del className="text-[15px]">1,200 $</del>
            </div>
            <p className="text-[14px] font-normal text-left leading-[19px] text-[#333] py-[10px]">
              Sayohat - bu yangi joylarni kashf etish, madaniyatlar bilan
              tanishish va unutilmas xotiralarni yaratish imkoniyatini beradi.
              Har bir safar - bu yangi tajriba va hayotdan zavqlanish uchun
              ajoyib imkoniyat.
            </p>
            <Link
              href={"#"}
              className="bg-[#5ec2ec] py-[15px] px-10 text-[17px] text-white rounded-[5px] transition-all duration-[0.3s] hover:opacity-90 block"
            >
              Ko'proq ma'lumot olish
            </Link>
          </li>
          <li className="rest-card w-[300px] p-[15px] bg-white text-center transition-all duration-[0.3s] shadow-[0_4px_10px_#0000001a]">
            <Image
              src={Card2}
              width={270}
              height={200}
              alt="Rest Place"
              className="rounded-lg h-[200px]"
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center py-[5px]">
                <FiCalendar />
                <p className="text-16px font-normal">2 kun</p>
              </div>
              <div className="flex items-center py-[5px]">
                <AiOutlineUser />
                <p className="text-16px font-normal">20 ta odam</p>
              </div>
            </div>
            <div className="flex items-center justify-between py-[5px]">
              <h1 className="text-[19px] font-semibold leading-[30px]">
                Wellmore Resort
              </h1>
              <ReactStars
                count={5}
                value={5}
                size={21}
                edit={false}
                color2={"#ffa767"}
                color1={"#ccc"}
              />
            </div>
            <div className="flex items-center">
              <GrLocation />
              <p className="ml-[5px] text-[17px] ">O'zbekiston</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[18px] text-[#ffa767]">1,000 $</p>
              <del className="text-[15px]">1,200 $</del>
            </div>
            <p className="text-[14px] font-normal text-left leading-[19px] text-[#333] py-[10px]">
              Sayohat - bu yangi joylarni kashf etish, madaniyatlar bilan
              tanishish va unutilmas xotiralarni yaratish imkoniyatini beradi.
              Har bir safar - bu yangi tajriba va hayotdan zavqlanish uchun
              ajoyib imkoniyat.
            </p>
            <Link
              href={"#"}
              className="bg-[#5ec2ec] py-[15px] px-10 text-[17px] text-white rounded-[5px] transition-all duration-[0.3s] hover:opacity-90 block"
            >
              Ko'proq ma'lumot olish
            </Link>
          </li>
          <li className="rest-card w-[300px] p-[15px] bg-white text-center transition-all duration-[0.3s] shadow-[0_4px_10px_#0000001a]">
            <Image
              src={Card3}
              width={270}
              height={200}
              alt="Rest Place"
              className="rounded-lg h-[200px]"
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center py-[5px]">
                <FiCalendar />
                <p className="text-16px font-normal">2 kun</p>
              </div>
              <div className="flex items-center py-[5px]">
                <AiOutlineUser />
                <p className="text-16px font-normal">20 ta odam</p>
              </div>
            </div>
            <div className="flex items-center justify-between py-[5px]">
              <h1 className="text-[19px] font-semibold leading-[30px]">
                Parkent ijod uyi
              </h1>
              <ReactStars
                count={5}
                value={5}
                size={21}
                edit={false}
                color2={"#ffa767"}
                color1={"#ccc"}
              />
            </div>
            <div className="flex items-center">
              <GrLocation />
              <p className="ml-[5px] text-[17px] ">O'zbekiston</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[18px] text-[#ffa767]">1,000 $</p>
              <del className="text-[15px]">1,200 $</del>
            </div>
            <p className="text-[14px] font-normal text-left leading-[19px] text-[#333] py-[10px]">
              Sayohat - bu yangi joylarni kashf etish, madaniyatlar bilan
              tanishish va unutilmas xotiralarni yaratish imkoniyatini beradi.
              Har bir safar - bu yangi tajriba va hayotdan zavqlanish uchun
              ajoyib imkoniyat.
            </p>
            <Link
              href={"#"}
              className="bg-[#5ec2ec] py-[15px] px-10 text-[17px] text-white rounded-[5px] transition-all duration-[0.3s] hover:opacity-90 block"
            >
              Ko'proq ma'lumot olish
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default RestPlaces;
