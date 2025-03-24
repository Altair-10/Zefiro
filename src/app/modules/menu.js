import React from "react";
import styled from "styled-components";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #effffa;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

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

    &:hover {
      color: #343078;
    }
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

export default Menu;