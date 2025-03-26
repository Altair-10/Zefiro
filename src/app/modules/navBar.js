"use client";

import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import SocialIcons from "./socialIcons";

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
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

export default function Navbar () {
  const scrollToSection = (id) => {
    if (typeof document !== "undefined") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div id="navbar" className="fixed w-full top-0 z-50 h-[20vw] sm:h-[13vw] md:h-[10vw] lg:h-[8vw] xl:h-[5vw] bg-gradient-orange">
        <div className="flex justify-between items-center h-full md:mx-5 pr-5 md:pr-0">
            {/* Logo */}
            <div>
                <button onClick={() => scrollToSection("home")}>
                    <img
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
            <div ref={node} className="flex md:hidden items-center">
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
        </div>
    </div>
  );
};

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#ffa62b" : "#ede7e4")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  :first-child {
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }

  :nth-child(2) {
    opacity: ${({ open }) => (open ? "0" : "1")};
    transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
  }

  :nth-child(3) {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)} className="hover:text-blue-dark">
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ede7e4;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  width: 100vw;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  button {
    font-size: 1.4rem;
    text-align: center;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;
    color: #16697a;
  }
`;

const Menu = ({ open, setOpen }) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
    setOpen(false);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };
  return (
    <StyledMenu open={open}>
      <button onClick={() => scrollToSection("servizi")}>
        <span role="img" aria-label="about us">
          💸
        </span>
        Servizi
      </button>
      <button onClick={() => scrollToSection("aboutUs")}>
        <span role="img" aria-label="price">
          💁🏻‍♂️
        </span>
        Chi Siamo
      </button>
      <button onClick={() => scrollToSection("contattaci")}>
        <span role="img" aria-label="contact">
          📩
        </span>
        Contattaci
      </button>
    </StyledMenu>
  );
};
