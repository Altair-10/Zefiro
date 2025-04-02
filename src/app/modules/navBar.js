"use client";

import Image from "next/image";
import React, { useState } from "react";
import SocialIcons from "./socialIcons";
import BurgerMenu from "./mobileMenu";

export default function Navbar() {
  const scrollToSection = (id) => {
    if (typeof document !== "undefined") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="navbar" className="fixed w-full top-0 z-50 h-[20vw] sm:h-[13vw] md:h-[10vw] lg:h-[8vw] xl:h-[5vw] bg-gradient-orange">
      <div className="flex justify-between items-center h-full md:mx-5 pr-5 md:pr-0">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <button onClick={() => scrollToSection("home")}>
            <Image
              src="/loghi_altair/SmallLogoDark.svg"
              width={130}
              height={60}
              alt="Logo"
              className="w-[30vw] md:w-[8vw]"
            />
          </button>
        </div>

        {/* Menu Desktop */}
        <div className="hidden sm:flex text-xl gap-[3vw] text-white font-bold">
          <button
            onClick={() => scrollToSection("servizi")}
            className="hover:text-blue-dark"
          >
            SERVIZI
          </button>
          <button
            onClick={() => scrollToSection("aboutUs")}
            className="hover:text-blue-dark"
          >
            CHI SIAMO
          </button>
          <button
            onClick={() => scrollToSection("contattaci")}
            className="hover:text-blue-dark"
          >
            CONTATTACI
          </button>
        </div>

        {/* Social Icons */}
        <div className="hidden sm:flex gap-3">
          <SocialIcons color="#ffffff" hoverColor="text-blue-dark" />
        </div>

        {/* Burger Menu (Mobile) */}
        <BurgerMenu />
      </div>
    </div>
  );
}