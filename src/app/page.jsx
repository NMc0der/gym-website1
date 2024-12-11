import Image from "next/image";

import "./styles/global.scss";
import "@/app/home.scss";
import Button from "./components/button";

import HomeHero from "./components/homeSection/homeHero";
import HeroTour from "./components/homeSection/heroTour";
import HomeCoach from "./components/homeSection/homeCoach";
import HomeGymClass from "./components/homeSection/homeGymclass";

export default function Home() {
  return (
    <div className="home-container">
      <HomeHero />

      <HeroTour />
      <HomeCoach />
      <HomeGymClass />
    </div>
  );
}

{
  /* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="title">Hello Ss</div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div> */
}
