import "./contact.scss";
// import ".../contact.scss";
// import ".../styles/breakpoint.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="info-section">
        <h2>We are here to train you! To shape your body.</h2>
        <p className="motivation">
          At Fit Zone, we are dedicated to helping you achieve the body of your
          dreams. Our Expert personal trainers and instructors will help you
          create a personal fitness plan and diet plan that helps you reach your
          goal!{" "}
        </p>
        <div className="buisness-info">
          <div className="location">
            <h3>New York City, USA</h3>
            <p>215 W 35th St</p>
          </div>
          <div className="hours">
            <h3>Opening Hours</h3>
            <p>Mon to Fri: 5:00am-11:00pm</p>
            <p>Sat to Sun: 5:00am-9:00pm</p>
          </div>
          <div className="contact">
            <h3>Information</h3>
            <p>800-123-4567</p>
            <p>fitzone@gmail.com</p>
          </div>
          <div className="social">
            <h3>Follow Us On</h3>
            <div className="social-media-links">
              <div>
                <FaFacebookF />
              </div>
              <div>
                <FaXTwitter />
              </div>
              <div>
                <FaPinterestP />
              </div>
              <div>
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-section">
        <h2>Leave Us Your Info</h2>
        <form action="">
          <input type="text" placeholder="Full Name*" name="" id="" />
          <input type="email" placeholder="Email Address*" />
          <select name="class-choice" id="class-choice">
            <option value="select">Select Class</option>
            <option value="bodyBuilding">Body Building</option>
            <option value="boxing">Boxing</option>
            <option value="running">Running</option>
            <option value="yoga">Yoga</option>
            <option value="cardio">Cardio</option>
            <option value="pilates">Pilates</option>
          </select>
          <textarea
            rows={5}
            cols={33}
            placeholder="Comment"
            name=""
            id=""
          ></textarea>
          <button>SUBMIT NOW</button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
