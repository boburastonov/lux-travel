import Image from "next/image";
import React from "react";
import Collage1 from "../../../public/collage-1.png";
import Collage4 from "../../../public/collage-4.png";
import Collage5 from "../../../public/collage-5.png";
import Collage6 from "../../../public/collage-6.png";
import Collage7 from "../../../public/collage-7.png";
import Collage8 from "../../../public/collage-8.png";
import Collage9 from "../../../public/collage-9.png";
import Collage10 from "../../../public/collage-10.png";
import Collage11 from "../../../public/collage-11.png";

const Collage = () => {
  return (
    <section className="py-5">
      <div className="max-w-7xl py-3 mx-auto">
        <h1 className="md:text-[27px] md:leading-[34px] text-[25px] leading-7 py-[10px] font-semibold text-center">
          2,000 dan ortiq mijozlarimiz bizning xizmatlarimizdan mamnun
        </h1>
        <p className="md:text-[18px] md:leading-6 md:pb-[30px] text-[16px] leading-5 pb-[23px] font-normal text-center text-[#333]">
          Bizga ishonch bildirgan mijozlarimizning suratlaridan namunalar
        </p>
        <div className="flex item-center justify-evenly flex-wrap gap-3">
          <div className="w-[220px] h-[140px] rounded-2 flex items-center justify-center shadow-[1px_1px_3px_3px_#a4a2a2]  rounded-lg">
            <Image
              src={Collage1}
              width={220}
              height={140}
              alt="collage"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[220px] h-[140px] rounded-2 flex items-center justify-center shadow-[1px_1px_3px_3px_#a4a2a2]  rounded-lg">
            <Image
              src={Collage4}
              width={220}
              height={140}
              alt="collage"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[220px] h-[140px] rounded-2 flex items-center justify-center shadow-[1px_1px_3px_3px_#a4a2a2]  rounded-lg">
            <h3 className="pt-5 text-[17px] leading-6 text-center font-normal text-[#333]">
              Bu yerda sizning suratingiz bo’lishi mumkin edi
            </h3>
          </div>
          <div className="w-[220px] h-[140px] rounded-2 flex items-center justify-center shadow-[1px_1px_3px_3px_#a4a2a2]  rounded-lg">
            <Image
              src={Collage5}
              width={220}
              height={140}
              alt="collage"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[220px] h-[140px] rounded-2 flex items-center justify-center shadow-[1px_1px_3px_3px_#a4a2a2]  rounded-lg">
            <Image
              src={Collage6}
              width={220}
              height={140}
              alt="collage"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[220px] h-[140px] rounded-2 flex items-center justify-center shadow-[1px_1px_3px_3px_#a4a2a2]  rounded-lg">
            <Image
              src={Collage7}
              width={220}
              height={140}
              alt="collage"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[220px] h-[140px] rounded-2 flex items-center justify-center shadow-[1px_1px_3px_3px_#a4a2a2]  rounded-lg">
            <Image
              src={Collage8}
              width={220}
              height={140}
              alt="collage"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[220px] h-[140px] rounded-2 flex items-center justify-center shadow-[1px_1px_3px_3px_#a4a2a2]  rounded-lg">
            <Image
              src={Collage9}
              width={220}
              height={140}
              alt="collage"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[220px] h-[140px] rounded-2 flex items-center justify-center shadow-[1px_1px_3px_3px_#a4a2a2]  rounded-lg">
            <Image
              src={Collage10}
              width={220}
              height={140}
              alt="collage"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[220px] h-[140px] rounded-2 flex items-center justify-center shadow-[1px_1px_3px_3px_#a4a2a2]  rounded-lg">
            <Image
              src={Collage11}
              width={220}
              height={140}
              alt="collage"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collage;
