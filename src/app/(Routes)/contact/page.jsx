import "./contact.scss";
// import ".../contact.scss";
// import ".../styles/breakpoint.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="contact-section">
        <div className="info-section">
          <h2>We are here to train you! To shape your body.</h2>
          <p className="motivation">
            At Fit Zone, we are dedicated to helping you achieve the body of
            your dreams. Our Expert personal trainers and instructors will help
            you create a personal fitness plan and diet plan that helps you
            reach your goal!{" "}
          </p>
          <div className="buisness-info">
            <div className="location">
              <h3>New York, NY 10019</h3>
              <p> 423 W 55th St</p>
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
      <div className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.35377141794!2d-74.0516311652541!3d40.75903219798922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1729147476267!5m2!1sen!2sus"
          width="100%"
          height="550"
          // style="border:0;"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};
export default Contact;
