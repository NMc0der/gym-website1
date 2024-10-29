import "./pricing.scss";
import { bebas_neue } from "@/app/fonts/googleFonts";
import img1 from "../../assets/alexander-redl-d3bYmnZ0ank-unsplash.jpg";
import PlanTemaplate from "@/app/components/planTemplate";

const Pricing = () => {
  return (
    <>
      <div className="pricing-text-container">
        <h2 className={`${bebas_neue.className}`}>Pricing Plan</h2>
        <p>
          Sign up today with a fitness plan that works for both your schedule
          and fitness level.
        </p>
      </div>
      <div className="pricing-plan-container">
        <PlanTemaplate
          image={img1}
          name={"Beginners"}
          price={"39"}
          classes={[
            "Free Hand",
            "Gym Fitness",
            "Weight Loss",
            "Yoga",
            "Cardio",
          ]}
        />
      </div>
    </>
  );
};

export default Pricing;
