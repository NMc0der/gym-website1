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
    <div className="navbar-container">
      <div className="navbar">
        <Logo />
        <div className="navLinks">
          <Link href="/">Home</Link>
          <Link href="about">About</Link>
          <Link href="/gallery">Gallery</Link>
          {/* <Link href="/">Schedule</Link> */}
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
          <Link className="sign-in-icon" href="/signUp">
            <IoPersonOutline />
          </Link>
          {/* <div></div> */}
          {/* <div className="sidebar-icon">
          <FiSidebar />
        </div> */}
          <JoinClassBtn />
        </div>
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
        <div
          onClick={() => {
            setMenu(false);
          }}
        >
          <Link href="/">Home</Link>
        </div>
        <div
          onClick={() => {
            setMenu(false);
          }}
        >
          <Link href="about">About</Link>
        </div>
        {/* <div>
          <Link href="/">Schedule</Link>
        </div> */}
        <div
          onClick={() => {
            setMenu(false);
          }}
        >
          <Link href="/gallery">Gallery</Link>
        </div>
        <div
          onClick={() => {
            setMenu(false);
          }}
        >
          <Link href="/blog">Blog</Link>
        </div>
        <div
          onClick={() => {
            setMenu(false);
          }}
        >
          <Link href="/contact">Contact</Link>
        </div>
        <div
          onClick={() => {
            setMenu(false);
          }}
        >
          <Link href="/pricing">Pricing</Link>
        </div>
        <div
          onClick={() => {
            setMenu(false);
          }}
        >
          <Link href="/gymClasses">Classes</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;

// className="nav-menu"
