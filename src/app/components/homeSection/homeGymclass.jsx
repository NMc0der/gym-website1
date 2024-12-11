import GymClass from "./gymClass";
import GymClassList from "@/app/data/gymClassList";

const HomeGymClass = () => {
  return (
    <div className="home-gym-class-container">
      <h2>View some of our Classes!</h2>
      <div className="home-gym-classes">
        <GymClass />
      </div>
    </div>
  );
};

export default HomeGymClass;
