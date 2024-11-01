import "./gymClasses.scss";
import GymClassCard from "@/app/components/gymClassCard";
import GymClassList from "@/app/data/gymClassList";
// "../../data/gymClassList"

const GymClasses = () => {
  return (
    <div className="gym-classes-container">
      <GymClassCard />
    </div>
  );
};

export default GymClasses;
