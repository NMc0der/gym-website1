// import Button from "@/components/button";
import Button from "../button";
import heroImg from "@/app/assets/daniel-apodaca-WdoQio6HPVA-unsplash.jpg";
import Image from "next/image";

import { IoIosTimer } from "react-icons/io";
import { GiWeightLiftingUp } from "react-icons/gi";
import { VscChecklist } from "react-icons/vsc";

const HomeHero = () => {
  return (
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
            Our team will work with you to create a personalized meal plan that
            helps you reach your specific health goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
