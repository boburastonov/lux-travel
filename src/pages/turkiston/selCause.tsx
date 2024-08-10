import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const SelCause = () => {
  const t = useTranslations();
  return (
    <section className="sel-cause my-[30px] py-5 pb-10 bg-no-repeat bg-center bg-cover">
      {/* <div className='bg-white'></div> */}
      <div className="max-w-7xl px-3 mx-auto text-center flex flex-col items-center justify-center">
        <h1 className="py-5 text-[32px] text-white leading-[34px] font-semibold">
          {t('tanlash')}
        </h1>
        <p className="text-[19px] text-white leading-[27px] font-normal">
          {t('sabab')}
        </p>
        <ul className="flex item-center justify-center flex-wrap mt-10 mb-[10px]">
          <li className="card-sel bg-white mr-5 mb-[30px] w-[270px] h-[120px] p-[15px] rounded-[8px] text-center">
            <h1 className="text-[24px] pt-[10px] font-semibold text-[#333]">
              {t('Tajriba')}
            </h1>
            <p className="text-[16px] text[#666] font-normal">
              {t('jamoa')}
            </p>
          </li>
          <li className="card-sel bg-white mr-5 mb-[30px] w-[270px] h-[120px] p-[15px] rounded-[8px] text-center">
            <h1 className="text-[24px] pt-[10px] font-semibold text-[#333]">
              {t('Qulay narxlar')}
            </h1>
            <p className="text-[16px] text[#666] font-normal">
              {t('$100')}
            </p>
          </li>
          <li className="card-sel bg-white mr-5 mb-[30px] w-[270px] h-[120px] p-[15px] rounded-[8px] text-center">
            <h1 className="text-[24px] pt-[10px] font-semibold text-[#333]">
              {t('Keng tanlov')}
            </h1>
            <p className="text-[16px] text[#666] font-normal">
              {t('Sayohatingiz davomida 10dan')}
            </p>
          </li>
          <li className="card-sel bg-white mr-5 mb-[30px] w-[270px] h-[120px] p-[15px] rounded-[8px] text-center">
            <h1 className="text-[24px] pt-[10px] font-semibold text-[#333]">
              {t("Go'zal shaharlar")}
            </h1>
            <p className="text-[16px] text[#666] font-normal">
              {t('Sayohatingiz davomida 10dan')}
            </p>
          </li>
          <li className="card-sel bg-white mr-5 mb-[30px] w-[270px] h-[120px] p-[15px] rounded-[8px] text-center">
            <h1 className="text-[24px] pt-[10px] font-semibold text-[#333]">
              {t('Tajriba')}
            </h1>
            <p className="text-[16px] text[#666] font-normal">
              {t('jamoa')}
            </p>
          </li>
          <li className="card-sel bg-white mr-5 mb-[30px] w-[270px] h-[120px] p-[15px] rounded-[8px] text-center">
            <h1 className="text-[24px] pt-[10px] font-semibold text-[#333]">
              {t('Qulay narxlar')}
            </h1>
            <p className="text-[16px] text[#666] font-normal">
              {t('$100')}
            </p>
          </li>
          <li className="card-sel bg-white mr-5 mb-[30px] w-[270px] h-[120px] p-[15px] rounded-[8px] text-center">
            <h1 className="text-[24px] pt-[10px] font-semibold text-[#333]">
              {t('Keng tanlov')}
            </h1>
            <p className="text-[16px] text[#666] font-normal">
              {t('Sayohatingiz davomida 10dan')}
            </p>
          </li>
          <li className="card-sel bg-white mr-5 mb-[30px] w-[270px] h-[120px] p-[15px] rounded-[8px] text-center">
            <h1 className="text-[24px] pt-[10px] font-semibold text-[#333]">
              {t("Go'zal shaharlar")}
            </h1>
            <p className="text-[16px] text[#666] font-normal">
              {t('Sayohatingiz davomida 10dan')}
            </p>
          </li>
        </ul>
        <Link
          href={"#contact"}
          className="bg-[#ff9548] py-[15px] px-10 transition-all duration-[0.3s] rounded-[5px] hover:shadow-[1px_1px_5px_5px_#ffffff6c] text-white text-[17px]"
        >
          {t('Joyni band qilish')}
        </Link>
      </div>
    </section>
  );
};

export default SelCause;
