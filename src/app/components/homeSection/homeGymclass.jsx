import GymClass from "./gymClass";
import GymClassList from "@/app/data/gymClassList";

const HomeGymClass = () => {
  const recentClassList = GymClassList.slice(0, 5);

  return (
    <div className="home-gym-class-container">
      <h2>View some of our Classes!</h2>
      <div className="home-gym-classes">
        {recentClassList.map((gymClass) => {
          return (
            <GymClass
              key={gymClass.name}
              gymName={gymClass.name}
              gymDay={gymClass.day}
              gymImage={gymClass.image}
              gymTime={gymClass.time}
            />
          );
        })}
        {/* <GymClass /> */}
      </div>
    </div>
  );
};

export default HomeGymClass;
