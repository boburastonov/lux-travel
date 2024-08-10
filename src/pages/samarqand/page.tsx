import React from "react";
import Header from "@/pages/samarqand/header";
import Hero from "@/pages/samarqand/hero";
import Video from "@/pages/samarqand/video";
import Collage from "@/pages/samarqand/collage";
import SelCause from "@/pages/samarqand/selCause";
import RestPlaces from "@/pages/samarqand/restPlaces";
import Accardion from "@/pages/samarqand/accordion";
import Contact from "@/pages/samarqand/contact";

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
