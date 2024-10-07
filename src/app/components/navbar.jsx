import Link from "next/link";
import Logo from "./logo";
import { GiHamburgerMenu } from "react-icons/gi";

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
        <Link href="/">About</Link>
        <Link href="/">Gallery</Link>
        <Link href="/">Schedule</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Pricing</Link>
        <Link href="/">Classes</Link>
        <Link href="/">Contact</Link>
      </div>
      <div>
        <div className="hamburger-menu">
          <GiHamburgerMenu />
        </div>
        navbuttons
      </div>
    </div>
  );
};

export default Nav;
