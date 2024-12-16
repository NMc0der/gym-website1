import Button from "@/app/components/button";
import "./signUp.scss";

const signUp = () => {
  return (
    <div className="sign-up-container">
      <form className="sign-up-form" action="">
        <h3>Sign Up Here</h3>
        <label htmlFor="signUpEmail">Email:</label>
        <input
          placeholder="Email"
          type="email"
          name="signUpEmail"
          id="signUpEmail"
        />
        <label htmlFor="signUpPassword">Password:</label>
        <input
          placeholder="Password"
          type="password"
          name="signUpPassword"
          id="signUpPassword"
        />
        <div className="sign-in-button-container">
          <Button text="Sign Up" />
        </div>
        <p className="sign-up-now-text">
          Sign up now for more information about our gym such as programs,
          instructors, and excersizes for all!{" "}
        </p>
      </form>
    </div>
  );
};

export default signUp;
