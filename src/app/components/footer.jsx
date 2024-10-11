import Logo from "./logo";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-info">
        <Logo />
        <p className="motivation">
          Take your health and body to the next level with our comprehensive
          program designed to help you reach your fitness goals!
        </p>

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
        <p>Privacy Policy | © 2024 Fit Zone</p>
      </div>
      <div className="footer-classes">
        <h2>Our Classes</h2>
        <p>Cardio Classes</p>
        <p>Aerobics Classes</p>
        <p>Yoga Classes</p>
        <p>Equipment Introduction</p>
        <p>Full-body Workouts</p>
      </div>
      <div className="footer-hours">
        <h2>Working Hours</h2>
        <h3>Monday - Friday:</h3>
        <p> 5:00am - 11:00pm</p>
        <h3>Saturday - Sunday:</h3>
        <p>5:00am - 9:00pm</p>
      </div>
    </div>
  );
};

export default Footer;
