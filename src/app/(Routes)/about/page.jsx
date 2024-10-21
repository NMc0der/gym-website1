import "./about.scss";
import Image from "next/image";
import ceo from "../../assets/lance-reis-pp76Y6Fq6xw-unsplash.jpg";
const About = () => {
  return (
    <div className="hi">
      <div className="ceo-image-container">
        <Image className="ceo-image" src={ceo} />
      </div>
      <div className="ceo-info-container"></div>
    </div>
  );
};
export default About;
