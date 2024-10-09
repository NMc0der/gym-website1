import Link from "next/link";
import Logo from "./logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSidebar } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import JoinClassBtn from "./joinClassBtn";
import { IoMdClose } from "react-icons/io";
// const [menu, setMenu] = useState(true);

//   useEffect(() => {
//     const x = window.matchMedia("(max-width: 640px)");
//     function showSidebar() {
//       setMenu(true);
//     }
//     x.addListener(showSidebar);
//     return () => x.removeListener(showSidebar);
//   }, []);

const Nav = () => {
  return (
    <div className="navbar">
      <Logo />
      <div className="navLinks">
        <Link href="/">Home</Link>
        <Link href="about">About</Link>
        <Link href="/">Gallery</Link>
        <Link href="/">Schedule</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Pricing</Link>
        <Link href="/">Classes</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className="nav-icons">
        <div className="hamburger-menu">
          <GiHamburgerMenu />
        </div>
        <div className="sign-in-icon">
          <IoPersonOutline />
        </div>
        <div className="sidebar-icon">
          <FiSidebar />
        </div>
        <JoinClassBtn />
      </div>
      <div className="nav-menu">
        <div className="nav-menu-close">
          <IoMdClose />
        </div>
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>
          <Link href="/">About</Link>
        </div>
        <div>
          <Link href="/">Schedule</Link>
        </div>
        <div>
          <Link href="/">Gallery</Link>
        </div>
        <div>
          <Link href="/">Blog</Link>
        </div>
        <div>
          <Link href="/">Contact</Link>
        </div>
        <div>
          <Link href="/">Pricing</Link>
        </div>
        <div>
          <Link href="/">Classes</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
