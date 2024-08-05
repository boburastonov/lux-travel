import Collage from "@/pages/home/collage";
import Header from "@/pages/home/header";
import Hero from "@/pages/home/hero";
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
    </>
  );
}
