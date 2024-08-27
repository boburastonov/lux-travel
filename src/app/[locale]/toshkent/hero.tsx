"use client";
import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Hero: React.FC = () => {
  const t = useTranslations();
  return (
    <section className="md:pt-[25px] pb-[25px]">
      <div className="max-w-7xl px-3 mx-auto">
        <h1 className="lg:w-[60%] lg:text-[42px] lg:text-left md:text-[36px] md:leading-[55px] w-full text-center text-[28px] leading-[35px] text-white font-medium mb-[10px]">
          {t("oilaviy")}
        </h1>
        <p className="lg:w-[60%] lg:text-left md:text-[18px] md:leading-[25px] md:mb-[30px] w-full text-center text-[17px] leading-[17px] mb-[10px] text-white">
          {t("tekin konsult")}
        </p>
        <ul className="flex flex-wrap items-center justify-center lg:justify-start p-0 m-0 list-none">
          <li className="card-el bg-white mr-5 mb-[30px] w-[270px] h-[120px] p-[15px] rounded-[8px] text-center">
            <h1 className="text-[24px] pt-[10px] font-semibold text-[#333]">
              {t("Tajriba")}
            </h1>
            <p className="text-[16px] text[#666] font-normal">{t("jamoa")}</p>
          </li>
          <li className="card-el bg-white mr-5 mb-[30px] w-[270px] h-[120px] p-[15px] rounded-[8px] text-center">
            <h1 className="text-[24px] pt-[10px] font-semibold text-[#333]">
              {t("Qulay narxlar")}
            </h1>
            <p className="text-[16px] text[#666] font-normal">{t("$100")}</p>
          </li>
          <li className="card-el bg-white mr-5 mb-[30px] w-[270px] h-[120px] p-[15px] rounded-[8px] text-center">
            <h1 className="text-[24px] pt-[10px] font-semibold text-[#333]">
              {t("Keng tanlov")}
            </h1>
            <p className="text-[16px] text[#666] font-normal">
              {t("Sayohatingiz davomida 10dan")}
            </p>
          </li>
        </ul>
        <ul className="flex flex-wrap justify-center lg:justify-start items-center p-0 m-0 list-none">
          <li className="btn-el md:mr-[50px] mb-[30px] bg-[#ff9548] py-[15px] px-10 transition-all duration-[0.3s] rounded-[5px] hover:shadow-[1px_1px_5px_5px_#ffffff6c]">
            <Link href={"#contact"} className="hero-btn text-white text-[17px]">
              {t("Bepul konsultatsiya")}
            </Link>
          </li>
          <li className="btn-el md:mr-[50px] mb-[30px] bg-[#5ec2ec] py-[15px] px-10 transition-all duration-[0.3s] rounded-[5px] hover:shadow-[1px_1px_5px_5px_#ffffff6c]">
            <Link href={"#contact"} className="hero-btn text-white text-[17px]">
              {t("Tayyor tur paketlar")}
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
