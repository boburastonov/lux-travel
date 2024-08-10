import React from "react";
import Header from "@/pages/xiva/header";
import Hero from "@/pages/xiva/hero";
import Video from "@/pages/xiva/video";
import Collage from "@/pages/xiva/collage";
import SelCause from "@/pages/xiva/selCause";
import RestPlaces from "@/pages/xiva/restPlaces";
import Accardion from "@/pages/xiva/accordion";
import Contact from "@/pages/xiva/contact";

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
