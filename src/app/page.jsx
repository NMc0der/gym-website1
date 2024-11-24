import Image from "next/image";
import heroImg from "./assets/daniel-apodaca-WdoQio6HPVA-unsplash.jpg";
import "./styles/global.scss";
import "@/app/home.scss";
import Button from "./components/button";
export default function Home() {
  return (
    <div>
      <div className="home-hero-section">
        <div className="home-hero-text">
          <h2>MAKE YOUR BODY</h2>
          <h3>FIT & PERFECT</h3>
          <div className="home-hero-button">
            <Button text={"OUR CLASSES"} />
          </div>
          {/* <div className="home-hero-socials">hiiii</div> */}
        </div>

        <Image className="home-hero-img" src={heroImg} />
      </div>
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
