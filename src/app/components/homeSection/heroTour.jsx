import { GiStrong } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { IoNutrition } from "react-icons/io5";
import Button from "../button";
import Image from "next/image";
import tourGuide from "@/app/assets/jakob-owens-qkQwDvRqQY8-unsplash.jpg";
import Link from "next/link";

const HeroTour = () => {
  return (
    <div className="virtual-tour-container">
      <div className="virtual-tour-text-container">
        <h2>Take a Virtual Tour!</h2>
        <p>
          Take a virtual tour with with one of our professional trainers, Rob
          Daniels. View are various types of equipment, diet plans, and
          exercieses and meet with some of our trainers.{" "}
        </p>
        <div className="virtual-tour-icons">
          <div className="virtual-tour-icon">
            <GiStrong />
            <h3>
              PROFESSIONAL <br /> TRAINERS
            </h3>
          </div>
          <div className="virtual-tour-icon virtual-icon-border">
            <CgGym />
            <h3>
              MODERN <br /> EQUIPMENT
            </h3>
          </div>
          <div className="virtual-tour-icon ">
            <IoNutrition />
            <h3>
              DIET <br /> PLANNING
            </h3>
          </div>
        </div>
        <div className="tour-button-container">
          <Link href="/signUp">
            <Button text={"TAKE A TOUR"} />
          </Link>
        </div>
      </div>
      <div className="virtual-tour-image-container">
        <Image alt="tour-guide" src={tourGuide} />
      </div>
    </div>
  );
};

export default HeroTour;
