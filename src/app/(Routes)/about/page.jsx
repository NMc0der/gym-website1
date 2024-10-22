import "./about.scss";
import Image from "next/image";
import ceo from "../../assets/lance-reis-pp76Y6Fq6xw-unsplash.jpg";
import { bebas_neue, caveat, comfortaa } from "@/app/fonts/googleFonts";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const About = () => {
  return (
    <div className="ceo-container">
      <div className="ceo-image-container">
        <Image className="ceo-image" src={ceo} />
      </div>
      <div className="ceo-info-container">
        <h2 className={`${bebas_neue.className}`}>Meet The Owner</h2>
        <h3 className={`${comfortaa.className}`}>Alexander Smith</h3>
        <p className={`${caveat.className}`}>
          "I've been involved in fitness and traning all my life and while the
          Fit Zone team and I are very strong, another form of strength is the
          strength we can give others! I would like to make as many people into
          the best versions of themselves as I can."
        </p>
        <div className="ceo-links">
          <div>
            {" "}
            <FaFacebookF />
          </div>
          <div>
            <FaInstagram />
          </div>
          <div>
            <FaXTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
