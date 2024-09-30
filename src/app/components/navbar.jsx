import Link from "next/link";

const Nav = () => {
  return (
    <div className="navbar">
      <div>Logo</div>
      <div className="navLinks">
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Gallery</Link>
        <Link href="/">Schedule</Link>
      </div>
      <div>navbuttons</div>
    </div>
  );
};

export default Nav;
