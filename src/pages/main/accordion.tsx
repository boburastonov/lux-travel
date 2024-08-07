"use client";
import React from "react";
import Accordion from "./accordionItem";

const Accardion = () => {
  return (
    <section>
      <div className="max-w-7xl px-3 mx-auto">
        <h1 className="lg:text-[33px] lg:py-[10px] md:text-[27px] md:py-8 py-5 text-[23px] font-semibold text-center">
          Mijozlar tomonidan berilgan savollar
        </h1>
        <div className="md:py-5 mb-5">
          {/* <Accordion
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
          </Accordion> */}
          <div className="min-h-screen p-8">
            <main className="max-w-2xl mx-auto">
              <Accordion title="Sizning mahsulotlaringizning saqlash muddati qancha?">
                <p>
                  Biz zamonaviy evropa texnologiyalari va uskunalaridan
                  foydalanamiz, bu bizning mahsulotlarimizning yuqori sifatini
                  kafolatlaydi.
                </p>
              </Accordion>
              <Accordion title="Ishlab chiqarishda qaysi texnologiyalar qo'llaniladi?">
                <p>
                  Biz zamonaviy evropa texnologiyalari va uskunalaridan
                  foydalanamiz, bu bizning mahsulotlarimizning yuqori sifatini
                  kafolatlaydi.
                </p>
              </Accordion>
              <Accordion title="Qanday tarkibiy qismlar ishlatiladi?">
                <p>
                  Biz zamonaviy evropa texnologiyalari va uskunalaridan
                  foydalanamiz, bu bizning mahsulotlarimizning yuqori sifatini
                  kafolatlaydi.
                </p>
              </Accordion>
              <Accordion
                title="Sizning mahsulotlaringizni qayerdan xarid qilishim mumkin?"
              >
                <p>
                  Biz zamonaviy evropa texnologiyalari va uskunalaridan
                  foydalanamiz, bu bizning mahsulotlarimizning yuqori sifatini
                  kafolatlaydi.
                </p>
              </Accordion>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accardion;
