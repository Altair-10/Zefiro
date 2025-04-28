"use client";

import React, { useRef, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import SocialIcons from "./socialIcons";
import Link from "next/link";

// Custom hook per rilevare la dimensione dello schermo
const useMobileView = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return isMobile;
};

// Custom hook per rilevare click esterni
const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

const Burger = ({ open, setOpen }) => {
  return (
    <button
      className={`relative flex flex-col justify-center items-center w-10 h-10 bg-transparent border-none cursor-pointer p-0 z-50 focus:outline-none group`}
      onClick={() => setOpen(!open)}
      aria-label={open ? "Close menu" : "Open menu"}
    >
      {/* Icona X animata - Versione migliorata */}
      <div className={`absolute w-6 h-6 transition-all duration-300 ${open ? "opacity-100 rotate-0" : "opacity-0 -rotate-45"}`}>
        <div className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-white transform -translate-x-1/2 -translate-y-1/2 ${open ? "rotate-45" : "rotate-0"}`}></div>
        <div className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-white transform -translate-x-1/2 -translate-y-1/2 ${open ? "-rotate-45" : "rotate-0"}`}></div>
      </div>
      
      {/* Icona hamburger animata */}
      <div className={`flex flex-col justify-between w-6 h-4 transition-all duration-300 ${open ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}>
        <div className="w-full h-0.5 bg-white rounded transition-all"></div>
        <div className="w-full h-0.5 bg-white rounded transition-all"></div>
        <div className="w-full h-0.5 bg-white rounded transition-all"></div>
      </div>
    </button>
  );
};

const Menu = ({ open, setOpen }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [showSubMenu, setShowSubMenu] = useState(false);
  const subMenuRef = useRef();
  const isHomePage = pathname === "/";

  const scrollToSection = (sectionId) => {
    setOpen(false);
    
    if (!isHomePage) {
      router.push(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, null, `/#${sectionId}`);
      }, 400);
    }
  };

  useOnClickOutside(subMenuRef, () => setShowSubMenu(false));

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setOpen(false)}
      />

      {/* Main Menu */}
      <div
        className={`fixed inset-y-0 left-0 w-4/5 max-w-sm bg-gradient-orange z-50 shadow-2xl transition-transform duration-500 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-white/20">
            <button
              onClick={() => {
                if (!isHomePage) router.push("/");
                else scrollToSection("home");
              }}
              className="focus:outline-none"
            >
              <img
                src="/loghi_altair/bigZefiro_dark.svg"
                alt="Logo Altair"
                className="w-40 h-auto"
              />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto py-4 px-6">
            <ul className="space-y-2">
              {/* Home */}
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="w-full text-left text-white font-bold py-3 px-4 rounded hover:bg-white/10 transition-colors duration-200"
                >
                  HOME
                </button>
              </li>

              {/* Servizi */}
              <li ref={subMenuRef}>
                <button
                  onClick={() => setShowSubMenu(!showSubMenu)}
                  className="w-full flex justify-between items-center text-white font-bold py-3 px-4 rounded hover:bg-white/10 transition-colors duration-200"
                >
                  <span>SERVIZI</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className={`bi bi-caret-down-fill transition-transform duration-200 ${showSubMenu ? "rotate-180" : ""}`}
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                  </svg>
                </button>

                {/* Submenu */}
                {showSubMenu && (
                  <ul className="ml-4 mt-2 space-y-1 border-l-2 border-white/20 pl-4">
                    <li>
                      <Link
                        href="/sitoVetrina"
                        className="block text-white/90 font-medium py-2 px-4 rounded hover:bg-white/10 transition-colors duration-200"
                        onClick={() => setOpen(false)}
                      >
                        Sito Vetrina
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/sitoPerEventi"
                        className="block text-white/90 font-medium py-2 px-4 rounded hover:bg-white/10 transition-colors duration-200"
                        onClick={() => setOpen(false)}
                      >
                        Sito Per Eventi
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/e-learning"
                        className="block text-white/90 font-medium py-2 px-4 rounded hover:bg-white/10 transition-colors duration-200"
                        onClick={() => setOpen(false)}
                      >
                        Piattaforma E-learning
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/portfolioCreativo"
                        className="block text-white/90 font-medium py-2 px-4 rounded hover:bg-white/10 transition-colors duration-200"
                        onClick={() => setOpen(false)}
                      >
                        Portfolio Creativo
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        className="block text-white/90 font-medium py-2 px-4 rounded hover:bg-white/10 transition-colors duration-200"
                        onClick={() => setOpen(false)}
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Chi Siamo */}
              <li>
                <button
                  onClick={() => scrollToSection("aboutUs")}
                  className="w-full text-left text-white font-bold py-3 px-4 rounded hover:bg-white/10 transition-colors duration-200"
                >
                  CHI SIAMO
                </button>
              </li>

              {/* Contattaci */}
              <li>
                <button
                  onClick={() => scrollToSection("contactUs")}
                  className="w-full text-left text-white font-bold py-3 px-4 rounded hover:bg-white/10 transition-colors duration-200"
                >
                  CONTATTACI
                </button>
              </li>
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-white/20">
            <div className="flex justify-center space-x-4 mb-4">
              <SocialIcons color="#ffffff" hoverColor="text-blue-dark" />
            </div>
            <p className="text-white/80 text-center text-sm">
              © {new Date().getFullYear()} Zefiro. Take IT for future.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const BurgerMenu = () => {
  const isMobile = useMobileView();
  const [open, setOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  if (!isMobile) return null;

  return (
    <div className="flex items-center md:hidden" ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </div>
  );
};

export default BurgerMenu;