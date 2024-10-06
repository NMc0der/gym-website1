import Link from "next/link";
import Logo from "./logo";

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
      <div>navbuttons</div>
    </div>
  );
};

export default Nav;
