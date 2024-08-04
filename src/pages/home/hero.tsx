"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import Slide1 from "../../../public/slider-1.jpg";
import Slide2 from "../../../public/slider-2.jpg";
import Slide3 from "../../../public/slider-3.jpg";
import Slide4 from "../../../public/slider-4.png";
import Slide5 from "../../../public/zomin.png";
import Slide6 from "../../../public/main-bg.png";
import Slide7 from "../../../public/bukhara.png";
import Slide8 from "../../../public/samarkand.jpeg";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  let settings = {
    speed: 3010,
    infinite: true,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: true,
    autoplaySpeed: 3000,
  };
  return (
    <section className="pt-[25px] pb-[30px]">
      <div className="max-w-7xl px-3 mx-auto">
        <h1 className="text-[42px] leading-[55px] text-white font-medium w-[60%] mb-[10px]">
          Oilaviy yoki yaqinlaringiz bilan maroqli hordiq chiqaring
        </h1>
        <p className="text-[18px] leading-[25px] text-white w-[60%] mb-[30px]">
          Bepul konsultatsiya uchun ro’yxatdan o’ting
        </p>
        <ul className="flex p-0 m-0 list-none">
          <li className="bg-white mr-5 mb-[30px] w-[270px] h-[120px] p-[15px] rounded-[8px] text-center">
            <h1 className="text-[24px] pt-[10px] font-medium text-[#333]">
              Tajriba
            </h1>
            <p className="text-[17px] text[#666] font-normal">
              10 yildan ortiq tajribaga ega jamoa
            </p>
          </li>
          <li className="bg-white mr-5 mb-[30px] w-[270px] h-[120px] p-[15px] rounded-[8px] text-center">
            <h1 className="text-[24px] pt-[10px] font-medium text-[#333]">
              Qulay narxlar
            </h1>
            <p className="text-[17px] text[#666] font-normal">
              7 kunlik sayohat $100 dan boshlanadi
            </p>
          </li>
          <li className="bg-white mr-5 mb-[30px] w-[270px] h-[120px] p-[15px] rounded-[8px] text-center">
            <h1 className="text-[24px] pt-[10px] font-medium text-[#333]">
              Keng tanlov
            </h1>
            <p className="text-[17px] text[#666] font-normal">
              Sayohatingiz davomida 10dan...
            </p>
          </li>
        </ul>
        <ul className="flex p-0 m-0 list-none">
          <li className="mr-[50px] mb-[30px] bg-[#ff9548] py-[15px] px-10 transition-all duration-[0.3s] rounded-[5px] hover:shadow-[1px_1px_5px_5px_#ffffff6c]">
            <Link href={"/contact"} className="text-white text-[17px]">
              Bepul konsultatsiya
            </Link>
          </li>
          <li className="mr-[50px] mb-[30px] bg-[#5ec2ec] py-[15px] px-10 transition-all duration-[0.3s] rounded-[5px] hover:shadow-[1px_1px_5px_5px_#ffffff6c]">
            <Link href={"/contact"} className="text-white text-[17px]">
              Tayyor tur paketlar
            </Link>
          </li>
        </ul>
        <Slider {...settings}>
          <div className="slider-pr">
            <Image
              src={Slide1}
              alt="slide"
              width={190}
              height={130}
              className="rounded-[10px] w-[190px] h-[130px]"
            />
          </div>
          <div className="slider-pr">
            <Image
              src={Slide2}
              alt="slide"
              width={190}
              height={130}
              className="rounded-[10px] w-[190px] h-[130px]"
            />
          </div>
          <div className="slider-pr">
            <Image
              src={Slide3}
              alt="slide"
              width={190}
              height={130}
              className="rounded-[10px] w-[190px] h-[130px]"
            />
          </div>
          <div className="slider-pr">
            <Image
              src={Slide4}
              alt="slide"
              width={190}
              height={130}
              className="rounded-[10px] w-[190px] h-[130px]"
            />
          </div>
          <div className="slider-pr">
            <Image
              src={Slide5}
              alt="slide"
              width={190}
              height={130}
              className="rounded-[10px] w-[190px] h-[130px]"
            />
          </div>
          <div className="slider-pr">
            <Image
              src={Slide6}
              alt="slide"
              width={190}
              height={130}
              className="rounded-[10px] w-[190px] h-[130px]"
            />
          </div>
          <div className="slider-pr">
            <Image
              src={Slide7}
              alt="slide"
              width={190}
              height={130}
              className="rounded-[10px] w-[190px] h-[130px]"
            />
          </div>
          <div className="slider-pr">
            <Image
              src={Slide8}
              alt="slide"
              width={190}
              height={130}
              className="rounded-[10px] w-[190px] h-[130px]"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
