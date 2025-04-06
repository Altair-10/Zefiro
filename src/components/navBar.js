"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import SocialIcons from "./socialIcons";
import BurgerMenu from "./mobileMenu";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownButtonRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  const openDropdown = () => {
    clearTimeout(dropdownTimeoutRef.current);
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    // Aggiungi un piccolo ritardo per permettere il passaggio al dropdown
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  const cancelCloseDropdown = () => {
    clearTimeout(dropdownTimeoutRef.current);
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
          <Link href={"/"} className="hover:text-blue-dark">
            HOME
          </Link>
          <div
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
            ref={dropdownButtonRef}
          >
            <button
              className="flex items-center gap-1 hover:text-blue-dark"
            >
              SERVIZI
              <span
                className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""
                  }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </span>
            </button>

            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute mt-5 w-44 bg-gradient-orange shadow-lg rounded-lg py-2 z-10"
                onMouseEnter={cancelCloseDropdown}
                onMouseLeave={closeDropdown}
              >
                <Link
                  href={"/sitoVetrina"}
                  className="block w-full text-left px-4 py-2 hover:text-blue-dark"
                >
                  SITO VETRINA
                </Link>
                <Link
                  href={"/gestionale"}
                  className="block w-full text-left px-4 py-2 hover:text-blue-dark"
                >
                  GESTIONALE
                </Link>
              </div>
            )}
          </div>
          <Link href={"about"} className="hover:text-blue-dark">
            CHI SIAMO
          </Link>
          <Link href={"/contactUs"} className="hover:text-blue-dark">
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