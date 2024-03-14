"use client";
import React, { useEffect, useState } from "react";
import ThemeSwitcher from "../shared/ThemeSwitcher";
import NavLink from "./NavLink";
import NavMenu from "./NavMenu";
import useHash from "@/app/hooks/useHash";
import { useParams } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [showMobNav, setShowMobNav] = useState(false);
  const { hash, setHash } = useHash();
  const params = useParams();

  useEffect(() => {
    const sections = document.getElementsByTagName("section");
    const handleScroll = () => {
      let scrollHeight = window.scrollY;
      let cumulativeSectionHeight = 0;
      for (let c = 0; c < sections.length; c++) {
        cumulativeSectionHeight += sections[c].scrollHeight;

        if (window.scrollY < cumulativeSectionHeight) {
          const newHash = "#" + sections[c].id;

          if (hash !== null && hash !== newHash) {
            setHash != null ? setHash(newHash) : "";
          }
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hash, setHash]);

  return (
    <>
      <nav className={`fixed z-30 bg-white dark:bg-dark w-full `}>
        <div className="md:container md:mx-auto flex flex-col lg:flex-row lg:justify-between items-center p-4 gap-0 lg:gap-0">
          {/* BRAND AND MOBILE MENU */}
          <div
            aria-describedby="Name Initials as Brand"
            className={`flex flex-row lg:justify-center items-center font-mudhoney font-bold  w-full lg:w-1/12 text-center dark:text-yellow-300 lg:h-[70px]`}
          >
            {/* MOBILE MENU */}
            <NavMenu onClick={() => setShowMobNav(!showMobNav)}></NavMenu>
            {/* BRAND */}
            <Link href={"/"}>
              <span className="w-2/6 text-2xl">MH</span>
            </Link>
          </div>
          {/* NAVLINKS AND THEME SWITCH */}
          <div
            className={`links-and-themeswitch transition-all ${
              showMobNav
                ? "flex animate-slideInFromLeft"
                : "hidden -translate-x-[1000px] "
            }
            md:translate-x-0 flex-col-reverse lg:flex lg:flex-row justify-center items-center w-full lg:w-11/12 h-[calc(100dvh-100px)] lg:h-[45px]`}
          >
            <div
              className={`links flex flex-col lg:flex-row justify-center items-center text-center p-10 w-full lg:w-10/12 gap-6 xl:gap-10 text-2xl lg:text-[1rem]`}
            >
              <NavLink
                href="/#about"
                label="ABOUT"
                active={hash === "#about" ? true : false}
                onClick={setShowMobNav}
              />
              <NavLink
                href="/#skills"
                label="SKILLS"
                active={hash === "#skills" ? true : false}
                onClick={setShowMobNav}
              />
              <NavLink
                href="/#projects"
                label="PROJECTS"
                active={hash === "#projects" ? true : false}
                onClick={setShowMobNav}
              />
              <NavLink
                href="/#contact"
                label="CONTACT"
                active={hash === "#contact" ? true : false}
                onClick={setShowMobNav}
              />
              <NavLink
                href="/#blog"
                label="BLOG"
                active={hash === "#blog" ? true : false}
                onClick={setShowMobNav}
              />
            </div>
            <ThemeSwitcher size={10}></ThemeSwitcher>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
