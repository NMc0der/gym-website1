"use client";

import Link from "next/link";
import Logo from "./logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSidebar } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import JoinClassBtn from "./joinClassBtn";
import { IoMdClose } from "react-icons/io";
import { useEffect, React, useState } from "react";
// import { useState } from "react";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const x = window.matchMedia("(max-width: 1400px)");
    function showSidebar() {
      setMenu(false);
    }
    x.addListener(showSidebar);
    return () => x.removeListener(showSidebar);
  }, []);

  return (
    <div className="navbar">
      <Logo />
      <div className="navLinks">
        <Link href="/">Home</Link>
        <Link href="about">About</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/">Schedule</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/gymClasses">Classes</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="nav-icons">
        <div
          onClick={() => {
            setMenu(true);
          }}
          className="hamburger-menu"
        >
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
      <div className={menu ? "nav-menu" : "nav-menu-hidden"}>
        <div
          onClick={() => {
            setMenu(false);
          }}
          className="nav-menu-close"
        >
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

// className="nav-menu"
