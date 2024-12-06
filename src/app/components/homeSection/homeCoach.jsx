import Coach from "./coach";
// import weights1 from "@/app/assets/coach/sam-sabourin-PiFA6HIAfBA-unsplash.jpg";
import weights1 from "@/app/assets/coach/samuel-girven-Ppua0I4VjqE-unsplash.jpg";
import crossfit1 from "@/app/assets/coach/joey-nicotra-du1DgQJvlTg-unsplash.jpg";
import yoga1 from "@/app/assets/coach/julia-rekamie-Z72YujnOrlY-unsplash.jpg";
const HomeCoach = () => {
  return (
    <div className="home-coach-container">
      <div className="home-coach-text">
        <h2>Team Of Expert Coaches</h2>
        <p>
          View some of our expert coaches and trainers that are willing to do
          whatever it takes to help you reach your fitness goals and plans.
        </p>
      </div>
      <div className="coaches">
        <Coach
          coachType={"Weight Trainer"}
          nameText={"John Lewis"}
          img={weights1}
        />
        <Coach
          coachType={"Crossfit Trainer"}
          nameText={"Janice Martin"}
          img={crossfit1}
        />
        <Coach coachType={"Yoga Trainer"} nameText={"Katy Smith"} img={yoga1} />
      </div>
    </div>
  );
};

export default HomeCoach;
