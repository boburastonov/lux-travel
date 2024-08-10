import React from "react";
import Header from "@/pages/surxondaryo/header";
import Hero from "@/pages/surxondaryo/hero";
import Video from "@/pages/surxondaryo/video";
import Collage from "@/pages/surxondaryo/collage";
import SelCause from "@/pages/surxondaryo/selCause";
import RestPlaces from "@/pages/surxondaryo/restPlaces";
import Accardion from "@/pages/surxondaryo/accordion";
import Contact from "@/pages/surxondaryo/contact";

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
