import { nunito, playfair, kanit } from "../fonts/googleFonts";
import { roboto_init } from "../fonts/googleFonts";

const Logo = () => {
  return (
    <div className="logo-container ">
      <h2 className={`${kanit.className} logo-main-text`}>
        FIT <span>ZONE</span>
      </h2>
      <h3 className="logo-sub-text">FITNESS CENTER</h3>
    </div>
  );
};

export default Logo;

// {playfair.className}

// logo-main-text
