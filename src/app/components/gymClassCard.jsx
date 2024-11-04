import "../(Routes)/gymClasses/gymClasses.scss";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import Button from "./button";

import Image from "next/image";

const GymClassCard = ({ gymClass, teacher, day, time, image }) => {
  return (
    <div
      className="gym-class-template"
      // style={{
      //   backgroundSize: "cover",
      //   backgroundImage: `url(${image.src})`,
      // }}
    >
      <div
        className="background-img-div"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${image.src})`,
          filter: "brightness(70%)",
        }}
      ></div>
      <div className="card-text-container">
        <h2>{gymClass}</h2>
        <div>
          <span className="teacher-container">
            <div>
              <IoPersonOutline />
            </div>
            {teacher}{" "}
          </span>
          <span className="day-container">
            <div>
              <FaRegClock />
            </div>
            {day}:
          </span>
          <span className="time-container">{time}</span>
        </div>
        <div className="button-container">
          <Button text={"JOIN NOW"} />
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="class-card-img">
        <Image className="class-card-img" src={image} />
      </div> */
}

export default GymClassCard;
