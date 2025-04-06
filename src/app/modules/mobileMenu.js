"use client";

import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import SocialIcons from "./socialIcons";

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

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  height: 100%;
`;

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger 
      open={open} 
      onClick={() => setOpen(!open)}
      aria-label={open ? "Close menu" : "Open menu"}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

const Menu = ({ open, setOpen }) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    setOpen(false);

    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
  };

  return (
    <>
      <Overlay open={open} onClick={() => setOpen(false)} />
      <StyledMenu open={open}>
        <MenuContent>
          {[
            { id: "servizi", emoji: "💸", label: "Servizi" },
            { id: "aboutUs", emoji: "💁🏻‍♂️", label: "Chi Siamo" },
            { id: "contattaci", emoji: "📩", label: "Contattaci" }
          ].map((item, i) => (
            <MenuButton 
              key={item.id}
              open={open} 
              onClick={() => scrollToSection(item.id)}
              style={{ transitionDelay: open ? `${0.1 * i}s` : '0s' }}
            >
              <span 
                role="img" 
                aria-hidden="true"
                style={{
                  display: 'inline-block',
                  marginRight: '12px',
                  transition: 'transform 0.3s ease'
                }}
              >
                {item.emoji}
              </span>
              {item.label}
            </MenuButton>
          ))}
        </MenuContent>
        
        <MenuFooter open={open}>
          <p style={{ 
            color: '#16697a',
            marginBottom: '1.2rem',
            fontSize: '1rem'
          }}>
            Seguici sui social
          </p>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            marginBottom: '1.2rem'
          }}>
            <SocialIcons 
              color="#16697a" 
            />
          </div>
          <p style={{ 
            color: 'rgba(22, 105, 122, 0.7)',
            fontSize: '0.85rem',
            marginTop: '0.5rem'
          }}>
            © {new Date().getFullYear()} Zefiro. Take IT for future.
          </p>
        </MenuFooter>
      </StyledMenu>
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
    <MobileOnlyWrapper ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </MobileOnlyWrapper>
  );
};

export default BurgerMenu;