"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../../public/logo.svg";
import Burger from "../../../public/burger.svg";
import VerticalMenu from "@/components/vertical-menu";

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <header className="pt-[30px] pb-[25px]">
      <div className="max-w-7xl px-3 mx-auto flex items-center justify-between">
        <Link
          href={"/"}
          className="flex items-center w-[60px] h-[60px] justify-center bg-white rounded-[50%] hover:opacity-90"
        >
          <Image src={Logo} width={50} height={50} alt="Logo" />
        </Link>
        <button
          className="flex justify-center bg-white p-[6px] text-[23px] cursor-pointer border-0 shadow-[1px_1px_1px_1px_#747373] rounded-[5px] hover:opacity-90"
          onClick={() => setOpen(!open)}
        >
          <Image src={Burger} width={23} height={23} alt="Menu" />
        </button>
        {open && <VerticalMenu isOpen={open} onClose={() => setOpen(false)} />}
      </div>
    </header>
  );
};

export default Header;
