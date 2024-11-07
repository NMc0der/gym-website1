import "./gymClasses.scss";
import GymClassCard from "@/app/components/gymClassCard";
import GymClassList from "@/app/data/gymClassList";
// "../../data/gymClassList"

const GymClasses = () => {
  return (
    <div className="classes-page-container">
      <div className="gym-classes-container">
        {GymClassList.map((gymC) => {
          return (
            <GymClassCard
              key={gymC.name}
              gymClass={gymC.name}
              teacher={gymC.teacher}
              day={gymC.day}
              time={gymC.time}
              image={gymC.image}
            />
          );
        })}
      </div>
    </div>
  );
};

// return GymClassList.map((gymC) => {

// });

// return GymClassList.map((gymC) => {
//   return <GymClassCard key={gymC.name} gymClass={gymC.name} />;
// });

export default GymClasses;
