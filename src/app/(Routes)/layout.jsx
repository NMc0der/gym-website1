import "../styles/global.scss";
import heroImg from "../assets/scott-webb-Vn39uEkX00s-unsplash.jpg";
import heroImg2 from "../assets/sven-mieke-optBC2FxCfc-unsplash.jpg";
import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <>
      <div className="pages-hero-section">
        <h2>About</h2>
        <Image className="hero-img" src={heroImg2} alt="" />
      </div>
      {children};
    </>
  );
};

export default Layout;
