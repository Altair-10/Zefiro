import { useEffect, useRef } from "react";
import gsap from "gsap";

const Title = ({ children, className = "" }) => {
  const titleRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out"
      }
    );
  }, []);

  return (
    <h1
      ref={titleRef}
      className={`text-transparent bg-clip-text bg-gradient-to-r from-blue-dark to-blue-medium ${className}`}
    >
      {children}
    </h1>
  );
};

export default Title;