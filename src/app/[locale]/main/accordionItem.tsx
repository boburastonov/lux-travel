"use client";
import React, { useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <span className="font-semibold">{title}</span>
          <span className="flex items-center justify-center w-5 h-5 rounded-[50%] hover:bg-[#222] hover:text-white">{isOpen ? "-" : "+"}</span>
        </div>
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

export default Accordion;
