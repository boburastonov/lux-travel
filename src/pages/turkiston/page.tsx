import React from "react";
import Header from "@/pages/turkiston/header";
import Hero from "@/pages/turkiston/hero";
import Video from "@/pages/turkiston/video";
import Collage from "@/pages/turkiston/collage";
import SelCause from "@/pages/turkiston/selCause";
import RestPlaces from "@/pages/turkiston/restPlaces";
import Accardion from "@/pages/turkiston/accordion";
import Contact from "@/pages/turkiston/contact";

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
