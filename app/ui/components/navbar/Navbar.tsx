"use client";
import React, { useState } from "react";
import ThemeSwitcher from "../shared/ThemeSwitcher";
import NavLink from "./NavLink";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const [showMobNav, setShowMobNav] = useState(false);

  return (
    <>
      <nav
        className={`flex container m-auto flex-col lg:flex-row lg:justify-between items-center w-full h-[100vh] lg:h-[45px] p-10 gap-12 lg:gap-0`}
      >
        <div
          aria-describedby="Name Initials as Brand"
          className={`flex flex-row lg:justify-center items-center font-mudhoney font-bold  w-full lg:w-1/12 text-center dark:text-yellow-300 h-[70px] lg:h-full`}
        >
          <NavMenu onClick={() => setShowMobNav(!showMobNav)}></NavMenu>

          <span className="w-2/6 text-2xl">MH</span>
        </div>
        <div
          className={`links-and-themeswitch ${
            showMobNav ? "flex" : "hidden"
          } flex-col-reverse lg:flex lg:flex-row justify-end lg:justify-center items-center w-full lg:w-11/12 lg:h-[45px]`}
        >
          <div
            className={`links flex flex-col lg:flex-row justify-center items-center text-center p-10 w-full lg:w-10/12 gap-6 xl:gap-10 text-2xl lg:text-[1rem]`}
          >
            <NavLink href="#about" label="ABOUT" />
            <NavLink href="#skills" label="SKILLS" />
            <NavLink href="#projects" label="PROJECTS" />
            <NavLink href="#contact" label="CONTACT" />
            <NavLink href="#blog" label="BLOG" />
          </div>
          <ThemeSwitcher size={10}></ThemeSwitcher>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
