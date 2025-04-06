"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SocialIcons from "./socialIcons";
import BurgerMenu from "./mobileMenu";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div id="navbar" className="fixed w-full top-0 z-50 h-[20vw] sm:h-[13vw] md:h-[10vw] lg:h-[8vw] xl:h-[5vw] bg-gradient-orange">
      <div className="flex justify-between items-center h-full md:mx-5 pr-5 md:pr-0">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <button onClick={() => scrollToSection("home")}>
            <Image
              src="/loghi_altair/bigZefiro_dark.svg"
              width={130}
              height={60}
              alt="Logo"
              className="w-[30vw] md:w-[12vw] mx-[1vw]"
            />
          </button>
        </div>

        {/* Menu Desktop */}
        <div className="hidden sm:flex text-xl gap-[3vw] text-white font-bold">
        <Link
          href={"/"}
          className="hover:text-blue-dark"
        >
          HOME
        </Link>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-1 hover:text-blue-dark"
          >
            SERVIZI
            <span
              className={`transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          {isDropdownOpen && (
            <div className="absolute mt-2 w-44 bg-orange shadow-lg rounded-lg py-2 z-10">
              <Link
                href={"/sitoVetrina"}
                className="block w-full text-left px-4 py-2 hover:bg-blue-light"
              >
                Sito Vetrina
              </Link>
              <Link
                href={"/gestionale"}
                className="block w-full text-left px-4 py-2 hover:bg-blue-light"
              >
                Gestionale
              </Link>
            </div>
          )}
        </div>
          <Link
            href={"about"}
            className="hover:text-blue-dark"
          >
            CHI SIAMO
          </Link>
          <Link
            href={"/contactUs"}
            className="hover:text-blue-dark"
          >
            CONTATTACI
          </Link>
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