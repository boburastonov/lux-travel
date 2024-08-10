import React from "react";
import Header from "@/pages/toshkent/header";
import Hero from "@/pages/toshkent/hero";
import Video from "@/pages/toshkent/video";
import Collage from "@/pages/toshkent/collage";
import SelCause from "@/pages/toshkent/selCause";
import RestPlaces from "@/pages/toshkent/restPlaces";
import Accardion from "@/pages/toshkent/accordion";
import Contact from "@/pages/toshkent/contact";

const Main = () => {
  return (
    <div>
      <main className="main md:py-[30px]">
        <Header />
        <Hero />
      </main>
      <Video />
      <Collage />
      <SelCause />
      <RestPlaces />
      <Accardion />
      <Contact />
    </div>
  );
};

export default Main;
