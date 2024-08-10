import React from "react";
import Header from "@/pages/zomin/header";
import Hero from "@/pages/zomin/hero";
import Video from "@/pages/zomin/video";
import Collage from "@/pages/zomin/collage";
import SelCause from "@/pages/zomin/selCause";
import RestPlaces from "@/pages/zomin/restPlaces";
import Accardion from "@/pages/zomin/accordion";
import Contact from "@/pages/zomin/contact";

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
