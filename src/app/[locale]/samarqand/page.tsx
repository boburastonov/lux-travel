import React from "react";
import Header from "./header";
import Hero from "./hero";
import Video from "./video";
import Collage from "./collage";
import SelCause from "./selCause";
import RestPlaces from "./restPlaces";
import Accardion from "./accordion";
import Contact from "./contact";

const Main: React.FC = () => {
  return (
    <>
      <main className="samarkand pt-3 pb-[190px]">
        <Header />
        <Hero />
      </main>
      <Video />
      <Collage />
      <SelCause />
      <RestPlaces />
      <Accardion />
      <Contact />
    </>
  );
};

export default Main;
