import Accardion from "@/pages/home/accordion";
import Collage from "@/pages/home/collage";
import Header from "@/pages/home/header";
import Hero from "@/pages/home/hero";
import RestPlaces from "@/pages/home/restPlaces";
import SelCause from "@/pages/home/selCause";
import Services from "@/pages/home/services";
import Video from "@/pages/home/video";

export default function Home() {
  return (
    <>
      <main className="main py-[30px]">
        <Header />
        <Hero />
      </main>
      <Video />
      <Collage />
      <SelCause />
      <RestPlaces />
      <Services />
      <Accardion />
    </>
  );
}
