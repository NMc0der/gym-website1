import "./about.scss";
import Image from "next/image";
import ceo from "../../assets/lance-reis-pp76Y6Fq6xw-unsplash.jpg";
import workoutPic1 from "../../assets/victor-freitas-vqDAUejnwKw-unsplash.jpg";
import workoutPic2 from "../../assets/john-arano-h4i9G-de7Po-unsplash.jpg";
import { bebas_neue, caveat, comfortaa } from "@/app/fonts/googleFonts";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const About = () => {
  return (
    <>
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
            strength we can give others! I would like to make as many people
            into the best versions of themselves as I can."
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
      <div className="history-gallery-container">
        <div className="body-text">
          <h2 className={`${bebas_neue.className}`}>Our Programs</h2>
          <p>
            Here at Fit Zone we offer a wide variety of programs to accomadate
            any type of person interested in imporving their athleticism. You
            can try yoga one night and try powerlifting on the next, we have
            something for everyone!
          </p>
        </div>
        <div className="">
          <Image src={workoutPic1} />
        </div>
        <div className="">
          <Image src={workoutPic2} />
        </div>
        <div className="body-text">
          <h2 className={`${bebas_neue.className}`}>Our Trainers</h2>
          <p>
            The Trainers at Fit Zone are all dedicated and hard working
            individuals who are experts in their fields with extensive knowledge
            and experience to offer. If you have any questions or problems feel
            free to reach out to one of our many helpful trainers or employees.
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
