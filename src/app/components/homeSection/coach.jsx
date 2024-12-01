import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Coach = ({ coachType, nameText, img }) => {
  return (
    <div className="coach-container">
      <div className="coach-img-container">
        <Image className="coach-img" src={img} alt="" />
      </div>
      <div className="coach-text">
        <h3>{nameText}</h3>
        <h4>{coachType}</h4>
        <div className="coach-socials">
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
  );
};

export default Coach;
