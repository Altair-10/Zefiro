import React, { useEffect, useRef, useState } from "react";

const FloatingShape = ({ 
  svgPath, 
  width = 60, 
  height = 70, 
  viewBox = "0 0 173 198",
  speed = 1.5
}) => {
  const shapeRef = useRef(null);
  const containerRef = useRef(null);
  const [isExploding, setIsExploding] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const animationRef = useRef(null);
  const animateShapeRef = useRef(null);
  const [svgContent, setSvgContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  
  // Utilizziamo ref per mantenere lo stato della fisica tra i render
  const physicsRef = useRef({
    position: { x: 0, y: 0 },
    velocity: { x: 0, y: 0 },
    initialSpeed: speed // Aggiungiamo la velocità iniziale nel ref
  });

  // Funzione per inizializzare la velocità
  const initVelocity = () => {
    const angle = Math.random() * Math.PI * 2;
    physicsRef.current.velocity = { 
      x: Math.cos(angle) * speed,
      y: Math.sin(angle) * speed
    };
    physicsRef.current.initialSpeed = speed;
  };

  // Inizializza con una direzione casuale all'avvio
  useEffect(() => {
    initVelocity();
  }, [speed]);

  // Fetch SVG content from file
  useEffect(() => {
    if (svgPath) {
      setIsLoading(true);
      fetch(svgPath)
        .then(response => response.text())
        .then(text => {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(text, "image/svg+xml");
          const svgElement = svgDoc.querySelector("svg");
          
          if (svgElement) {
            if (!viewBox && svgElement.getAttribute("viewBox")) {
              viewBox = svgElement.getAttribute("viewBox");
            }
            
            const innerContent = svgElement.innerHTML;
            setSvgContent(innerContent);
          }
          setIsLoading(false);
        })
        .catch(error => {
          console.error("Error loading SVG:", error);
          setIsLoading(false);
        });
    }
  }, [svgPath, viewBox]);

  // Get container dimensions and set up resize observer
  useEffect(() => {
    if (!containerRef.current) return;

    const updateContainerSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      }
    };

    updateContainerSize();

    const resizeObserver = new ResizeObserver(updateContainerSize);
    resizeObserver.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!shapeRef.current || !containerRef.current || isLoading || containerSize.width === 0) return;

    const physics = physicsRef.current;
    
    const maxX = (containerSize.width / 2) - (width / 2) - 2;
    const maxY = (containerSize.height / 2) - (height / 2) - 2;

    const animateShape = () => {
      if (isExploding) return;

      physics.position.x += physics.velocity.x;
      physics.position.y += physics.velocity.y;

      if (Math.abs(physics.position.x) > maxX) {
        physics.position.x = Math.sign(physics.position.x) * maxX;
        physics.velocity.x = -physics.velocity.x;
      }

      if (Math.abs(physics.position.y) > maxY) {
        physics.position.y = Math.sign(physics.position.y) * maxY;
        physics.velocity.y = -physics.velocity.y;
      }

      // Manteniamo la velocità costante normalizzando il vettore
      const currentSpeed = Math.sqrt(
        physics.velocity.x * physics.velocity.x + 
        physics.velocity.y * physics.velocity.y
      );
      
      if (currentSpeed > 0) {
        physics.velocity.x = (physics.velocity.x / currentSpeed) * physics.initialSpeed;
        physics.velocity.y = (physics.velocity.y / currentSpeed) * physics.initialSpeed;
      }

      if (shapeRef.current) {
        shapeRef.current.style.transform = `translate(calc(-50% + ${physics.position.x}px), calc(-50% + ${physics.position.y}px))`;
      }
      
      animationRef.current = requestAnimationFrame(animateShape);
    };
    
    animateShapeRef.current = animateShape;
    animationRef.current = requestAnimationFrame(animateShape);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isExploding, isLoading, containerSize, width, height, speed]);

  const handleExplosion = () => {
    if (isExploding) return;
    
    setIsExploding(true);
    
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    const particleCount = 40;
    const newConfetti = [];
    const containerHeight = containerSize.height;
    
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 3 + Math.random() * 5;
      const size = 5 + Math.random() * 10;
      
      newConfetti.push({
        id: i,
        x: 0,
        y: 0,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 15,
        opacity: 1,
        color: `hsl(${Math.floor(Math.random() * 360)}, 80%, 60%)`,
        reachedFloor: false,
        floor: containerHeight / 2 - size - 5,
        createdAt: Date.now(),
        lifespan: 2500 + Math.random() * 1500
      });
    }
    
    setConfetti(newConfetti);
    
    setTimeout(() => {
      setIsExploding(false);
      setConfetti([]);
      
      // Resetta la posizione e la velocità
      physicsRef.current.position = { x: 0, y: 0 };
      initVelocity();
      
      if (animateShapeRef.current) {
        animationRef.current = requestAnimationFrame(animateShapeRef.current);
      }
    }, 4000);
  };

  useEffect(() => {
    if (!isExploding || confetti.length === 0) return;
    
    let frame;
    const gravity = 0.25;
    const friction = 0.98;
    const floorFriction = 0.85;
    
    const animateConfetti = () => {
      const now = Date.now();
      
      setConfetti(prevConfetti => 
        prevConfetti.map(particle => {
          let newVx = particle.vx;
          let newVy = particle.vy;
          let newX = particle.x;
          let newY = particle.y;
          let reachedFloor = particle.reachedFloor;
          let rotation = particle.rotation + particle.rotationSpeed;
          
          if (!particle.reachedFloor) {
            newVy = particle.vy + gravity;
            newVx = particle.vx * friction;
            newX = particle.x + newVx;
            newY = particle.y + newVy;
            
            if (newY >= particle.floor) {
              newY = particle.floor;
              newVy = -newVy * 0.4;
              newVx *= floorFriction;
              
              if (Math.abs(newVy) < 0.8) {
                reachedFloor = true;
                newVy = 0;
              }
            }
          } else {
            newVx *= floorFriction;
            rotation = particle.rotation + particle.rotationSpeed * 0.3;
            
            if (Math.abs(newVx) < 0.2) {
              newVx = 0;
              particle.rotationSpeed = 0;
            }
          }
          
          const age = now - particle.createdAt;
          const lifeFraction = age / particle.lifespan;
          
          let opacity = 1;
          if (lifeFraction > 0.6) {
            opacity = Math.max(0, 1 - ((lifeFraction - 0.6) / 0.4));
          }
          
          return {
            ...particle,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
            rotation,
            opacity,
            reachedFloor
          };
        }).filter(particle => particle.opacity > 0)
      );
      
      frame = requestAnimationFrame(animateConfetti);
    };
    
    frame = requestAnimationFrame(animateConfetti);
    
    return () => {
      cancelAnimationFrame(frame);
    };
  }, [isExploding, confetti.length]);

  if (isLoading || !svgContent) {
    return (
      <div ref={containerRef} style={{ position: "relative", width: "100%", height: "100%" }} />
    );
  }

  return (
    <div 
      ref={containerRef} 
      style={{ 
        position: "relative", 
        width: "100%", 
        height: "100%", 
        overflow: "hidden",
        cursor: "pointer",
      }}
      onClick={handleExplosion}
    >
      {!isExploding && (
        <svg
          ref={shapeRef}
          width={width} 
          height={height}
          viewBox={viewBox}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0.85,
            zIndex: 2,
            filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.1))",
            pointerEvents: "none"
          }}
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      )}

      {isExploding && confetti.map(particle => (
        <div 
          key={`confetti-${particle.id}`}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            transform: `translate(calc(-50% + ${particle.x}px), calc(-50% + ${particle.y}px)) rotate(${particle.rotation}deg)`,
            opacity: particle.opacity,
            zIndex: 10,
            pointerEvents: "none",
            transition: "opacity 0.3s ease-out"
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShape;