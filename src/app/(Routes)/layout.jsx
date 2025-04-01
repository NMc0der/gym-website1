"use client";

// import "../styles/global.scss";
import "../styles/breakpoint.scss";
// import heroImg from "../assets/scott-webb-Vn39uEkX00s-unsplash.jpg";
import heroImg2 from "../assets/sven-mieke-optBC2FxCfc-unsplash.jpg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { fugaz_one } from "../fonts/googleFonts";

const Layout = ({ children }) => {
  const pathname = usePathname();

  const pathTitle = pathname
    .slice(1)
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .toUpperCase();

  return (
    <>
      <div className="pages-hero-section">
        <h2 className={`${fugaz_one.className}`}>{pathTitle}</h2>
        {/* <p>Current pathname: {pathTitle}</p> */}
        <Image className="hero-img" src={heroImg2} alt="workout-image" />
      </div>
      {children}
    </>
  );
};

export default Layout;
