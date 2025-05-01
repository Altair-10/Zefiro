"use client";

import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import SocialIcons from "./socialIcons";
import Link from "next/link";

// Custom hook per rilevare la dimensione dello schermo
const useMobileView = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // Breakpoint a 768px
    };

    // Esegui al mount e aggiungi listener per resize
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
      className={`flex flex-col justify-around w-10 h-10 bg-transparent border-none cursor-pointer p-0 z-20 focus:outline-none`}
      onClick={() => setOpen(!open)}
      aria-label={open ? "Close menu" : "Open menu"}
    >
      <div
        className={`w-full h-1 bg-[#ede7e4] rounded-[10px] transition-all duration-300 origin-[1px] ${open ? "bg-[#ffa62b] rotate-45 scale-x-110" : "rotate-0"
          }`}
      />
      <div
        className={`w-full h-1 bg-[#ede7e4] rounded-[10px] transition-all duration-300 origin-[1px] ${open ? "opacity-0 translate-x-5" : "opacity-100 translate-x-0"
          }`}
      />
      <div
        className={`w-full h-1 bg-[#ede7e4] rounded-[10px] transition-all duration-300 origin-[1px] ${open ? "bg-[#ffa62b] -rotate-45 scale-x-110" : "rotate-0"
          }`}
      />
    </button>
  );
};

const Menu = ({ open, setOpen }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const subMenuRef = useRef();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    setOpen(false);

    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, null, `#${id}`);
      }, 400);
    }
  };

  useOnClickOutside(subMenuRef, () => setShowSubMenu(false));

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/40 z-10 transition-opacity duration-300 ease-in-out ${open ? "opacity-100 visible" : "opacity-0 invisible"
          } md:hidden`}
        onClick={() => setOpen(false)}
      />

      {/* Main Menu */}
      <nav
        className={`flex flex-col bg-[rgba(237,231,228,0.98)] w-full h-full text-center pt-12 px-4 pb-4 fixed top-0 left-0 z-[15] overflow-y-auto transition-transform duration-500 ease-[cubic-bezier(0.77,0.2,0.05,1)] ${open ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
      >
        <div className="flex flex-col justify-center pt-8 pb-4 flex-grow">
          {/* Services dropdown */}
          <div ref={subMenuRef}>
            <button
              className={`text-2xl text-center uppercase py-5 font-bold tracking-wider text-[#16697a] transition-all duration-400 ease-in-out relative overflow-hidden flex justify-center items-center w-full ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
              onClick={() => setShowSubMenu(!showSubMenu)}
              style={{ transitionDelay: open ? '0.1s' : '0s' }}
            >
              Servizi
              <span
                className="ml-2 transition-transform duration-300 ease-in-out"
                style={{ transform: showSubMenu ? 'rotate(180deg)' : 'rotate(0)' }}
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

            {/* Submenu */}
            <div
              className={`overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] mx-[20%] ${showSubMenu ? "max-h-auto" : "max-h-0"
                }`}
            >
              <Link href="/sitoVetrina" passHref
                className={`
                  block text-xl py-3 w-full transition-all duration-400 ease-in-out 
                  ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} 
                  text-blue-medium font-bold tracking-[0.5vw]
                `}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: showSubMenu ? '0.2s' : '0s' }}
              >
                Sito Vetrina
              </Link>
              <Link href="/sitoPerEventi" passHref
                className={`
                  block text-xl py-3 w-full transition-all duration-400 ease-in-out 
                  ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} 
                  text-[#489fb5] font-bold tracking-[0.5vw]
                `}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: showSubMenu ? '0.3s' : '0s' }}
              >
                Sito Per Eventi
              </Link>
              <Link href="/landingPagePromozionale" passHref
                className={`
                  block text-xl py-3 w-full transition-all duration-400 ease-in-out 
                  ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} 
                  text-[#489fb5] font-bold tracking-[0.5vw]
                `}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: showSubMenu ? '0.3s' : '0s' }}
              >
                Landing Page Promozionale
              </Link>
              <Link href="/portfolioCreativo" passHref
                className={`
                  block text-xl py-3 w-full transition-all duration-400 ease-in-out 
                  ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} 
                  text-[#489fb5] font-bold tracking-[0.5vw]
                `}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: showSubMenu ? '0.3s' : '0s' }}
              >
                Portfolio Creativo
              </Link>
              <Link
                href="/blog"
                passHref
                className={`
                  block text-xl py-3 w-full transition-all duration-400 ease-in-out 
                  ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} 
                 text-[#489fb5] font-bold tracking-[0.5vw]
                `}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: showSubMenu ? '0.3s' : '0s' }}
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Other menu items */}
          <button
            className={`text-2xl text-center uppercase py-5 font-bold tracking-wider text-[#16697a] transition-all duration-400 ease-in-out relative overflow-hidden ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            onClick={() => scrollToSection("aboutUs")}
            style={{ transitionDelay: open ? '0.4s' : '0s' }}
          >
            Chi Siamo
          </button>
          <button
            className={`text-2xl text-center uppercase py-5 font-bold tracking-wider text-[#16697a] transition-all duration-400 ease-in-out relative overflow-hidden ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            onClick={() => scrollToSection("contactUs")}
            style={{ transitionDelay: open ? '0.5s' : '0s' }}
          >
            Contattaci
          </button>
        </div>

        {/* Footer */}
        <footer
          className={`w-[calc(100%-2rem)] py-6 mx-auto border-t border-[rgba(22,105,122,0.2)] sticky bottom-0 bg-[rgba(237,231,228,0.9)] transition-all duration-400 ease-in-out ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          style={{ transitionDelay: open ? '0.4s' : '0s' }}
        >
          <p className="text-[#16697a] mb-5 text-base">Seguici sui social</p>
          <div className="flex justify-center mb-[3vw]">
            <SocialIcons color="#16697a" />
          </div>
          <p className="text-[#16697a] text-[3.5vw] mt-[4vw]">
            © {new Date().getFullYear()} Zefiro. Take IT for future.
          </p>
        </footer>
      </nav>
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