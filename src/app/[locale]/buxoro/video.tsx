"use client";
import React from "react";
import { useTranslations } from "next-intl";

const Video: React.FC = () => {
  const t = useTranslations();
  return (
    <section className="pt-5">
      <div className="max-w-7xl py-3 mx-auto">
        <h1 className="w-[99%] lg:text-[30px] md:text-[27px] text-[23px] mb-5 font-semibold text-center">
          {t("video")}
        </h1>
        <div className="lg:w-[60%] w-[90%] h-[400px] mx-auto flex items-center justify-center">
        <iframe width="100%" height="100%" className="rounded-[10px]" src="https://www.youtube.com/embed/BlCxQ4Ci1qg?si=7eEqYQdUwVYwmsEK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </section>
  );
};

export default Video;
