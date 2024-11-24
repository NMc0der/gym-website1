import Image from "next/image";
import heroImg from "./assets/daniel-apodaca-WdoQio6HPVA-unsplash.jpg";
import "./styles/global.scss";
import "@/app/home.scss";
import Button from "./components/button";
import { IoIosTimer } from "react-icons/io";
import { GiWeightLiftingUp } from "react-icons/gi";
import { VscChecklist } from "react-icons/vsc";

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
        <div className="home-hero-cards">
          <div className="home-hero-card">
            <div className="home-hero-progress-icon">
              <IoIosTimer />
            </div>

            <h2>PROGRESSION</h2>
            <p>
              Our team of experts will work with you to create a customized plan
              that helps you achieve success one step at a time.
            </p>
          </div>
          <div className="home-hero-card">
            <div className="home-hero-progress-icon">
              <GiWeightLiftingUp />
            </div>

            <h2>WORKOUT</h2>
            <p>
              With a variety of workouts to choose from, you'll have everything
              you need to get into the best shape of your life.
            </p>
          </div>
          <div className="home-hero-card">
            <div className="home-hero-progress-icon">
              <VscChecklist />
            </div>

            <h2>NUTRITION</h2>
            <p>
              Our team will work with you to create a personalized meal plan
              that helps you reach your specific health goals.
            </p>
          </div>
        </div>
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
