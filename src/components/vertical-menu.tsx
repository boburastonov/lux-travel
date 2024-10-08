"use client";
import { FC, useEffect, useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import Home from "../../public/home.png";
import Bukhara from "../../public/bukhara.png";
import Samarkand from "../../public/samarkand.jpeg";
import Tashkent from "../../public/tashkent.jpg";
import Zomin from "../../public/zomin.png";
import Khiva from "../../public/khiva.png";
import Turkistan from "../../public/turkistan.jpg";
import Surkhandarya from "../../public/surkhandarya.jpg";
import { useLocale, useTranslations } from "next-intl";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const VerticalMenu: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  const currentLocale = useLocale();
  console.log(useLocale());
  const t = useTranslations();
  const [activeButton, setActiveButton] = useState("");

  useEffect(() => {
    setActiveButton(window?.location?.pathname);
  }, []);

  return (
    <div
      className={`flex items-center justify-end absolute z-50 inset-0 bg-[#00000073] bg-opacity-50 transition-opacity duration-500 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className="nav w-[378px] h-full overflow-y-auto bg-white [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:transparent
  dark:[&::-webkit-scrollbar-thumb]:bg-[#C1C1C1]"
      >
        <div className="py-4 px-6 border border-solid border-[#050505f] overflow-y-auto">
          <button
            className="text-[#00000072] leading-[1.5] w-6 h-6 flex items-center justify-center font-semibold"
            onClick={onClose}
          >
            <RiCloseLargeLine />
          </button>
        </div>
        <div className="p-6">
          <ul className="mb-[30px] flex items-center justify-center">
            <li
              className={`${
                activeButton === "/uz" ? "text-white" : ""
              } cursor-pointer bg-[url('../../public/uzb.jpeg')] bg-no-repeat bg-center bg-cover m-[25px] py-[10px] text-center text-white w-[40px] rounded-[50%] hover:opacity-90`}
            >
              <Link href={"/uz"}>uzb</Link>
            </li>
            <li
              className={`${
                activeButton === "/ru" ? "text-[#0000FE]" : ""
              } cursor-pointer bg-[url('../../public/rus.png')] bg-no-repeat bg-center bg-cover m-[25px] py-[10px] text-center text-[#0000FE] w-[40px] rounded-[50%] hover:opacity-90`}
            >
              {" "}
              <Link href={"/ru"}>ru</Link>
            </li>
            <li
              className={`${
                activeButton === "/eng" ? "text-[#DB261F]" : ""
              } cursor-pointer bg-[url('../../public/eng.jpeg')] bg-no-repeat bg-center bg-cover m-[25px] py-[10px] text-center text-[#DB261F] w-[40px] rounded-[50%] hover:opacity-90`}
            >
              {" "}
              <Link href={"/eng"}>en</Link>
            </li>
          </ul>
          <ul className="flex flex-col justify-center p-0 m-0 list-none">
            <li className="mb-[30px]">
              <Link href={"/"} className="place-link flex items-center">
                <Image
                  src={Home}
                  width={100}
                  height={100}
                  alt="Home"
                  className="mr-[25px] rounded-[50%] w-[100px] h-[100px]"
                />
                <span className="text-black text-[20px] transition-all duration-[0.3s]">
                  {t("dam")}
                </span>
              </Link>
            </li>
            <li className="mb-[30px]">
              <Link
                href={`${currentLocale}/buxoro`}
                className="place-link flex items-center"
              >
                <Image
                  src={Bukhara}
                  width={100}
                  height={100}
                  alt="Buxoro"
                  className="mr-[25px] rounded-[50%] w-[100px] h-[100px]"
                />
                <span className="text-black text-[20px] transition-all duration-[0.3s]">
                  {t("Buxoro")}
                </span>
              </Link>
            </li>
            <li className="mb-[30px]">
              <Link
                href={`${currentLocale}/samarqand`}
                className="place-link flex items-center"
              >
                <Image
                  src={Samarkand}
                  width={100}
                  height={100}
                  alt="Samarqand"
                  className="mr-[25px] rounded-[50%] w-[100px] h-[100px]"
                />
                <span className="text-black text-[20px] transition-all duration-[0.3s]">
                  {t("Samarqand")}
                </span>
              </Link>
            </li>
            <li className="mb-[30px]">
              <Link
                href={`${currentLocale}/toshkent`}
                className="place-link flex items-center"
              >
                <Image
                  src={Tashkent}
                  width={100}
                  height={100}
                  alt="Toshkent"
                  className="mr-[25px] rounded-[50%] w-[100px] h-[100px]"
                />
                <span className="text-black text-[20px] transition-all duration-[0.3s]">
                  {t("Toshkent")}
                </span>
              </Link>
            </li>
            <li className="mb-[30px]">
              <Link
                href={`${currentLocale}/zomin`}
                className="place-link flex items-center"
              >
                <Image
                  src={Zomin}
                  width={100}
                  height={100}
                  alt="Zomin"
                  className="mr-[25px] rounded-[50%] w-[100px] h-[100px]"
                />
                <span className="text-black text-[20px] transition-all duration-[0.3s]">
                  {t("Zomin")}
                </span>
              </Link>
            </li>
            <li className="mb-[30px]">
              <Link
                href={`${currentLocale}/xiva`}
                className="place-link flex items-center"
              >
                <Image
                  src={Khiva}
                  width={100}
                  height={100}
                  alt="Xiva"
                  className="mr-[25px] rounded-[50%] w-[100px] h-[100px]"
                />
                <span className="text-black text-[20px] transition-all duration-[0.3s]">
                  {t("Xiva")}
                </span>
              </Link>
            </li>
            <li className="mb-[30px]">
              <Link
                href={`${currentLocale}/turkiston`}
                className="place-link flex items-center"
              >
                <Image
                  src={Turkistan}
                  width={100}
                  height={100}
                  alt="Turkiston"
                  className="mr-[25px] rounded-[50%] w-[100px] h-[100px]"
                />
                <span className="text-black text-[20px] transition-all duration-[0.3s]">
                  {t("Turkiston")}
                </span>
              </Link>
            </li>
            <li className="mb-[30px]">
              <Link
                href={`${currentLocale}/surxondaryo`}
                className="place-link flex items-center"
              >
                <Image
                  src={Surkhandarya}
                  width={100}
                  height={100}
                  alt="Surxondaryo"
                  className="mr-[25px] rounded-[50%] w-[100px] h-[100px]"
                />
                <span className="text-black text-[20px] transition-all duration-[0.3s]">
                  {t("Surxondaryo")}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VerticalMenu;
