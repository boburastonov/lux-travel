// components/Drawer.tsx
import { FC } from "react";
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

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const VerticalMenu: FC<DrawerProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`z-50 fixed inset-0 bg-[#00000073] bg-opacity-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`nav fixed top-0 right-0 w-[378px] h-auto bg-white transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full "
        }`}
      >
        <div className="py-4 px-6 border border-solid border-[#050505f]">
          <button
            className="text-[#00000072] leading-[1.5] w-6 h-6 flex items-center justify-center font-semibold"
            onClick={onClose}
          >
            <RiCloseLargeLine />
          </button>
        </div>
        <div className="p-6">
          <ul className="flex items-center justify-center">
            <li className=" cursor-pointer bg-[url('../../public/uzb.jpeg')] bg-no-repeat bg-center bg-cover m-[25px] p-[15px] w-[30px] rounded-[50%] hover:opacity-90"></li>
            <li className=" cursor-pointer bg-[url('../../public/rus.png')] bg-no-repeat bg-center bg-cover m-[25px] p-[15px] w-[30px] rounded-[50%] hover:opacity-90"></li>
            <li className=" cursor-pointer bg-[url('../../public/eng.jpeg')] bg-no-repeat bg-center bg-cover m-[25px] p-[15px] w-[30px] rounded-[50%] hover:opacity-90"></li>
          </ul>
          <ul className="flex flex-col  justify-center p-0 m-0 list-none">
            <li className="my-[30px]">
              <Link href={"/"} className="place-link flex items-center">
                <Image
                  src={Home}
                  width={100}
                  height={100}
                  alt="Home"
                  className="mr-[25px] rounded-[50%] w-[100px] h-[100px]"
                />
                <span className="text-black text-[20px] transition-all duration-[0.3s]">
                  Dam olish maskanlari
                </span>
              </Link>
            </li>
            <li className="my-[30px]">
              <Link href={"/buxoro"} className="place-link flex items-center">
                <Image
                  src={Bukhara}
                  width={100}
                  height={100}
                  alt="Buxoro"
                  className="mr-[25px] rounded-[50%] w-[100px] h-[100px]"
                />
                <span className="text-black text-[20px] transition-all duration-[0.3s]">
                  Buxoro
                </span>
              </Link>
            </li>
            <li className="my-[30px]">
              <Link
                href={"/samarqand"}
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
                  Samarqand
                </span>
              </Link>
            </li>
            <li className="my-[30px]">
              <Link href={"/toshkent"} className="place-link flex items-center">
                <Image
                  src={Tashkent}
                  width={100}
                  height={100}
                  alt="Toshkent"
                  className="mr-[25px] rounded-[50%] w-[100px] h-[100px]"
                />
                <span className="text-black text-[20px] transition-all duration-[0.3s]">
                  Toshkent
                </span>
              </Link>
            </li>
            <li className="my-[30px]">
              <Link href={"/zomin"} className="place-link flex items-center">
                <Image
                  src={Zomin}
                  width={100}
                  height={100}
                  alt="Zomin"
                  className="mr-[25px] rounded-[50%] w-[100px] h-[100px]"
                />
                <span className="text-black text-[20px] transition-all duration-[0.3s]">
                  Zomin
                </span>
              </Link>
            </li>
            <li className="my-[30px]">
              <Link href={"/xiva"} className="place-link flex items-center">
                <Image
                  src={Khiva}
                  width={100}
                  height={100}
                  alt="Xiva"
                  className="mr-[25px] rounded-[50%] w-[100px] h-[100px]"
                />
                <span className="text-black text-[20px] transition-all duration-[0.3s]">
                  Xiva
                </span>
              </Link>
            </li>
            <li className="my-[30px]">
              <Link
                href={"/turkiston"}
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
                  Turkiston
                </span>
              </Link>
            </li>
            <li className="my-[30px]">
              <Link
                href={"/surxondaryo"}
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
                  Surxondaryo
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
