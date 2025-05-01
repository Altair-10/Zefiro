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
            <p className="text-white/80 text-center text-sm">
              © {new Date().getFullYear()} Zefiro. Take IT for future.
            </p>
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