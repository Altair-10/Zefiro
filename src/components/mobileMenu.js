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

// Styled components
const MobileOnlyWrapper = styled.div`
  display: none;
  
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
  }
`;

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2.5rem;
  height: 2.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 20;
  margin-right: 1rem;

  &:focus {
    outline: none;
  }

  div {
    width: 100%;
    height: 0.3rem;
    background: ${({ open }) => (open ? "#ffa62b" : "#ede7e4")};
    border-radius: 10px;
    transition: all 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    transform-origin: 1px;
  }

  div:first-child {
    transform: ${({ open }) => (open ? "rotate(45deg) scaleX(1.1)" : "rotate(0)")};
  }

  div:nth-child(2) {
    opacity: ${({ open }) => (open ? "0" : "1")};
    transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
  }

  div:nth-child(3) {
    transform: ${({ open }) => (open ? "rotate(-45deg) scaleX(1.1)" : "rotate(0)")};
  }
`;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: rgba(237, 231, 228, 0.98);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 3rem 1rem 1rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
  z-index: 15;
  overflow-y: auto;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 1rem;
  flex-grow: 1;
`;

const MenuButton = styled.button`
  font-size: 1.4rem;
  text-align: center;
  text-transform: uppercase;
  padding: 1.2rem 0;
  font-weight: bold;
  letter-spacing: 0.2rem;
  color: #16697a;
  text-decoration: none;
  transition: all 0.4s ease;
  opacity: ${({ open }) => (open ? "1" : "0")};
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(20px)")};
  position: relative;
  overflow: hidden;
  
  &:hover {
    color: #ffa62b;
    
    &::after {
      content: '→';
      margin-left: 8px;
      display: inline-block;
      animation: bounce 0.5s infinite alternate;
    }
    
    span {
      transform: rotate(12deg) scale(1.2);
    }
  }
  
  @keyframes bounce {
    from { transform: translateX(0); }
    to { transform: translateX(3px); }
  }

  &:nth-child(1) {
    transition-delay: ${({ open }) => (open ? "0.1s" : "0s")};
  }
  
  &:nth-child(2) {
    transition-delay: ${({ open }) => (open ? "0.2s" : "0s")};
  }
  
  &:nth-child(3) {
    transition-delay: ${({ open }) => (open ? "0.3s" : "0s")};
  }
`;

const MenuFooter = styled.footer`
  width: calc(100% - 2rem);
  padding: 1.5rem 0;
  margin: 0 auto;
  border-top: 1px solid rgba(22, 105, 122, 0.2);
  opacity: ${({ open }) => (open ? "1" : "0")};
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(20px)")};
  transition: all 0.4s ease;
  transition-delay: ${({ open }) => (open ? "0.4s" : "0s")};
  position: sticky;
  bottom: 0;
  background: rgba(237, 231, 228, 0.9);
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
  opacity: ${({ open }) => (open ? "1" : "0")};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;

  @media (min-width: 768px) {
    display: none;
  }
`;
const Burger = ({ open, setOpen }) => {
  return (
    <button
      className={`flex flex-col justify-around w-10 h-10 bg-transparent border-none cursor-pointer p-0 z-20 mr-4 focus:outline-none`}
      onClick={() => setOpen(!open)}
      aria-label={open ? "Close menu" : "Open menu"}
    >
      <div 
        className={`w-full h-1 bg-[#ede7e4] rounded-[10px] transition-all duration-300 origin-[1px] ${
          open ? "bg-[#ffa62b] rotate-45 scale-x-110" : "rotate-0"
        }`}
      />
      <div 
        className={`w-full h-1 bg-[#ede7e4] rounded-[10px] transition-all duration-300 origin-[1px] ${
          open ? "opacity-0 translate-x-5" : "opacity-100 translate-x-0"
        }`}
      />
      <div 
        className={`w-full h-1 bg-[#ede7e4] rounded-[10px] transition-all duration-300 origin-[1px] ${
          open ? "bg-[#ffa62b] -rotate-45 scale-x-110" : "rotate-0"
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
        className={`fixed top-0 left-0 w-full h-full bg-black/40 z-10 transition-opacity duration-300 ease-in-out ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
        onClick={() => setOpen(false)}
      />
      
      {/* Main Menu */}
      <nav 
        className={`flex flex-col bg-[rgba(237,231,228,0.98)] w-full h-full text-center pt-12 px-4 pb-4 fixed top-0 left-0 z-[15] overflow-y-auto transition-transform duration-500 ease-[cubic-bezier(0.77,0.2,0.05,1)] ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col justify-center pt-8 pb-4 flex-grow">
          {/* Services dropdown */}
          <div ref={subMenuRef}>
            <button
              className={`text-2xl text-center uppercase py-5 font-bold tracking-wider text-[#16697a] transition-all duration-400 ease-in-out relative overflow-hidden flex justify-center items-center w-full ${
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              onClick={() => setShowSubMenu(!showSubMenu)}
              style={{ transitionDelay: open ? '0.1s' : '0s' }}
            >
              Servizi
              <span 
                className="ml-2 transition-transform duration-300 ease-in-out"
                style={{ transform: showSubMenu ? 'rotate(90deg)' : 'rotate(0)' }}
              >
                ›
              </span>
            </button>

            {/* Submenu */}
            <div 
              className={`overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] mx-[20%] ${
                showSubMenu ? "max-h-48" : "max-h-0"
              }`}
            >
              <Link href="/sitoVetrina" passHref legacyBehavior>
                <a
                  className={`block text-xl py-3 w-full my-1 transition-all duration-400 ease-in-out rounded-md ${
                    open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  } text-[#ff7d00] font-medium tracking-[0.1rem] bg-[rgba(255,125,0,0.08)]`}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: showSubMenu ? '0.2s' : '0s' }}
                >
                  Sito Vetrina
                </a>
              </Link>
              <Link href="/gestionale" passHref legacyBehavior>
                <a
                  className={`block text-xl py-3 w-full my-1 transition-all duration-400 ease-in-out rounded-md ${
                    open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  } text-[#489fb5] font-medium tracking-[0.1rem] bg-[rgba(72,159,181,0.08)]`}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: showSubMenu ? '0.3s' : '0s' }}
                >
                  Gestionale
                </a>
              </Link>
            </div>
          </div>

          {/* Other menu items */}
          <button
            className={`text-2xl text-center uppercase py-5 font-bold tracking-wider text-[#16697a] transition-all duration-400 ease-in-out relative overflow-hidden ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            onClick={() => scrollToSection("aboutUs")}
            style={{ transitionDelay: open ? '0.4s' : '0s' }}
          >
            Chi Siamo
          </button>
          <button
            className={`text-2xl text-center uppercase py-5 font-bold tracking-wider text-[#16697a] transition-all duration-400 ease-in-out relative overflow-hidden ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            onClick={() => scrollToSection("contactUs")}
            style={{ transitionDelay: open ? '0.5s' : '0s' }}
          >
            Contattaci
          </button>
        </div>
        
        {/* Footer */}
        <footer 
          className={`w-[calc(100%-2rem)] py-6 mx-auto border-t border-[rgba(22,105,122,0.2)] sticky bottom-0 bg-[rgba(237,231,228,0.9)] transition-all duration-400 ease-in-out ${
            open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
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