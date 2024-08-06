"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Accardion = () => {
  const Content1 =
    "Biz zamonaviy evropa texnologiyalari va uskunalaridan foydalanamiz, bu bizning mahsulotlarimizning yuqori sifatini kafolatlaydi.";
  const Content2 =
    "Biz zamonaviy evropa texnologiyalari va uskunalaridan foydalanamiz, bu bizning mahsulotlarimizning yuqori sifatini kafolatlaydi.";
  const Content3 =
    "Biz zamonaviy evropa texnologiyalari va uskunalaridan foydalanamiz, bu bizning mahsulotlarimizning yuqori sifatini kafolatlaydi.";
  const Content4 =
    "Biz zamonaviy evropa texnologiyalari va uskunalaridan foydalanamiz, bu bizning mahsulotlarimizning yuqori sifatini kafolatlaydi.";
  return (
    <section>
      <div className="max-w-7xl px-3 mx-auto">
        <h1 className="text-[33px] font-semibold text-center py-[10px]">
          Mijozlar tomonidan berilgan savollar
        </h1>
        <Accordion
          variant="splitted"
          className="w-[80%] mx-auto border border-solid border-[#d9d9d9] rounded-[8px] bg-[#FAFAFA]"
        >
          <AccordionItem
            key="1"
            aria-label="Sizning mahsulotlaringizning saqlash muddati qancha?"
            title="Sizning mahsulotlaringizning saqlash muddati qancha?"
          >
            {Content1}
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Ishlab chiqarishda qaysi texnologiyalar qo'llaniladi?"
            title="Ishlab chiqarishda qaysi texnologiyalar qo'llaniladi?"
          >
            {Content2}
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Qanday tarkibiy qismlar ishlatiladi?"
            title="Qanday tarkibiy qismlar ishlatiladi?"
          >
            {Content3}
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Sizning mahsulotlaringizni qayerdan xarid qilishim mumkin?"
            title="Sizning mahsulotlaringizni qayerdan xarid qilishim mumkin?"
          >
            {Content4}
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Accardion;
