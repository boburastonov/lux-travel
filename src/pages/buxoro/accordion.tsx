"use client";
import React from "react";
import Accordion from "./accordionItem";
import { useTranslations } from "next-intl";

const Accardion = () => {
  const t = useTranslations()
  return (
    <section>
      <div className="max-w-7xl px-3 mx-auto">
        <h1 className="lg:text-[33px] lg:py-[10px] md:text-[27px] md:py-8 py-5 text-[23px] font-semibold text-center">
          {t('savollar')}
        </h1>
        <div className="md:py-5 mb-5">
          <div className="md:p-6 p-3">
            <main className="max-w-2xl mx-auto">
              <Accordion title={t("savol1")}>
                <p>
                  {t("kafolat")}
                </p>
              </Accordion>
              <Accordion title={t("savol2")}>
                <p>
                  {t("kafolat")}
                </p>
              </Accordion>
              <Accordion title={t("savol3")}>
                <p>
                  {t("kafolat")}
                </p>
              </Accordion>
              <Accordion
                title={t("savol4")}
              >
                <p>
                  {t("kafolat")}
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
