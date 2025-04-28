"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import SocialIcons from "./socialIcons";
import BurgerMenu from "./mobileBurger";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownButtonRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  const isHomePage = pathname === "/";

  // Observer per aggiornare l'URL durante lo scroll
  useEffect(() => {
    if (!isHomePage) return;

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            clearTimeout(scrollTimeoutRef.current);
            scrollTimeoutRef.current = setTimeout(() => {
              const id = entry.target.getAttribute("id");
              window.history.replaceState(null, "", `/#${id}`);
            }, 300);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      clearTimeout(scrollTimeoutRef.current);
    };
  }, [isHomePage]);

  const openDropdown = () => {
    clearTimeout(dropdownTimeoutRef.current);
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  const cancelCloseDropdown = () => {
    clearTimeout(dropdownTimeoutRef.current);
  };

  const scrollToSection = (sectionId) => {
    if (!isHomePage) {
      router.push(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `/#${sectionId}`);
    }
  };

  const handleLogoClick = () => {
    if (!isHomePage) {
      router.push("/");
    } else {
      scrollToSection("home");
      window.history.replaceState(null, "", "/");
    }
  };

  return (
    <div id="navbar" className="fixed w-full top-0 z-50 h-[20vw] sm:h-[13vw] md:h-[10vw] lg:h-[8vw] xl:h-[5vw] bg-gradient-orange">
      <div className="flex justify-between items-center h-full md:mx-5 pr-5 md:pr-0">
        {/* Logo che sostituisce il pulsante HOME */}
        <div className="flex items-center justify-center">
          <button
            onClick={handleLogoClick}
            className="focus:outline-none hover:opacity-80 transition-opacity"
            aria-label="Torna alla home"
          >
            <Image
              src="/loghi_altair/bigZefiro_dark.svg"
              width={130}
              height={60}
              alt="Logo Altair - Torna alla home"
              className="w-[30vw] md:w-[12vw] mx-[1vw] cursor-pointer"
              priority
            />
          </button>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex text-xl gap-[3vw] text-white font-bold">
        <button
            onClick={() => scrollToSection("home")}
            className="hover:text-blue-dark cursor-pointer"
          >
            HOME
          </button>
          {/* Servizi con dropdown */}
          <div
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
            ref={dropdownButtonRef}
          >
            <button
              className="flex items-center gap-1 hover:text-blue-dark cursor-pointer"
              onClick={() => scrollToSection("services")}
              aria-expanded={isDropdownOpen}
            >
              SERVIZI
              <span
                className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""
                  }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </span>
            </button>


            {isDropdownOpen && (

              <div
                ref={dropdownRef}
                className="absolute mt-5 w-96 bg-gradient-orange shadow-lg rounded-lg py-2 z-10"
                onMouseEnter={cancelCloseDropdown}
                onMouseLeave={closeDropdown}
              >
                <Link
                  href="/sitoVetrina"
                  className="block w-full text-left px-4 py-2 hover:text-blue-dark"
                >
                  SITO VETRINA
                </Link>
                <Link
                  href="/sitoPerEventi"
                  className="block w-full text-left px-4 py-2 hover:text-blue-dark"
                >
                  SITO PER EVENTI
                </Link>
                <Link
                  href="/e-learning"
                  className="block w-full text-left px-4 py-2 hover:text-blue-dark"
                >
                  PIATTAFORMA E-LEARNING
                </Link>
                <Link
                  href="/portfolioCreativo"
                  className="block w-full text-left px-4 py-2 hover:text-blue-dark"
                >
                  PORTFOLIO CREATIVO
                </Link>
                <Link
                  href="/blog"
                  className="block w-full text-left px-4 py-2 hover:text-blue-dark"
                >
                  BLOG
                </Link>
              </div>
            )}
          </div>
          <button
            onClick={() => scrollToSection("aboutUs")}
            className="hover:text-blue-dark cursor-pointer"
          >
            CHI SIAMO
          </button>
          <button
            onClick={() => scrollToSection("contactUs")}
            className="hover:text-blue-dark cursor-pointer"
          >
            CONTATTACI
          </button>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex gap-3">
          <SocialIcons color="#ffffff" hoverColor="text-blue-dark" />
        </div>

        {/* Burger Menu (Mobile) */}
        <BurgerMenu />
      </div>
    </div>
  );
}