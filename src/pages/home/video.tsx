import React from "react";

const Video = () => {
  return (
    <section className="pt-5">
      <div className="max-w-7xl py-3 mx-auto">
        <h1 className="w-full lg:text-[30px] md:text-[27px] text-[23px] mb-5 font-semibold text-center">
          Biz haqimizda quyidagi video orqali batafsil bilib oling
        </h1>
        <div className="w-[90%] mx-auto flex items-center justify-center">
          <iframe
            width="100%"
            height="100%"
            className="rounded-[10px]"
            src="https://www.youtube.com/embed/48PSJqwZVIc?si=XpYJWX7WdxQeWOc7"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Video;
