import React from "react";
import Header from "@/pages/buxoro/header";
import Hero from "@/pages/buxoro/hero";
import Video from "@/pages/buxoro/video";
import Collage from "@/pages/buxoro/collage";
import SelCause from "@/pages/buxoro/selCause";
import RestPlaces from "@/pages/buxoro/restPlaces";
import Accardion from "@/pages/buxoro/accordion";
import Contact from "@/pages/buxoro/contact";

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
