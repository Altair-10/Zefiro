import React, { useEffect, useRef, useState } from "react";

const FloatingShape = ({ 
  svgPath, 
  width = 60, 
  height = 70, 
  trailCount = 5,
  viewBox = "0 0 173 198",
  randomMovement = false,
  targetRow = null
}) => {
  const shapeRef = useRef(null);
  const trailRefs = useRef([]);
  const containerRef = useRef(null);
  const [isExploding, setIsExploding] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const animationRef = useRef(null);
  const [svgContent, setSvgContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Create trail elements
  const trails = Array(trailCount).fill(null);

  // Fetch SVG content from file
  useEffect(() => {
    if (svgPath) {
      setIsLoading(true);
      fetch(svgPath)
        .then(response => response.text())
        .then(text => {
          // Extract SVG content
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(text, "image/svg+xml");
          const svgElement = svgDoc.querySelector("svg");
          
          if (svgElement) {
            // Extract viewBox if available and not provided
            if (!viewBox && svgElement.getAttribute("viewBox")) {
              viewBox = svgElement.getAttribute("viewBox");
            }
            
            // Get inner content of the SVG
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

  useEffect(() => {
    if (!shapeRef.current || !containerRef.current || isLoading) return;

    // Generate random or fixed positions for animation
    let positions;
    
    if (randomMovement) {
      // Generate random positions for movement
      const containerWidth = containerRef.current.clientWidth;
      const containerHeight = containerRef.current.clientHeight;
      
      positions = Array(5).fill().map(() => ({
        x: (Math.random() - 0.5) * containerWidth * 0.8,
        y: (Math.random() - 0.5) * containerHeight * 0.8
      }));
      
      // Always return to center as the last position
      positions.push({ x: 0, y: 0 });
    } else {
      // Default fixed positions
      positions = [
        { x: 0, y: 0 },
        { x: 40, y: -30 },
        { x: 20, y: 40 },
        { x: -40, y: 20 },
        { x: 0, y: 0 }
      ];
    }
    
    let currentPosition = 0;
    let trailPositions = Array(trailCount).fill().map(() => [...positions]);
    
    // Update shape position based on animation progress
    const animateShape = () => {
      if (isExploding) return;

      const now = Date.now();
      const animationDuration = 3000; // 3 seconds per position
      const totalDuration = animationDuration * (positions.length - 1);
      const cycleTime = now % totalDuration;
      const segment = Math.floor(cycleTime / animationDuration);
      const progress = (cycleTime % animationDuration) / animationDuration;
      
      const startPos = positions[segment];
      const endPos = positions[segment + 1];
      
      // Smooth interpolation
      const x = startPos.x + (endPos.x - startPos.x) * easeInOut(progress);
      const y = startPos.y + (endPos.y - startPos.y) * easeInOut(progress);
      
      if (shapeRef.current) {
        shapeRef.current.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
      }
      
      // Update trail positions with delay
      trailRefs.current.forEach((trail, i) => {
        if (!trail) return;
        
        // Calculate delayed progress (different for each trail element)
        const delayFactor = 0.15 * (i + 1);
        const delayedCycleTime = (now - (delayFactor * animationDuration)) % totalDuration;
        const delayedSegment = Math.floor(delayedCycleTime / animationDuration);
        const delayedProgress = (delayedCycleTime % animationDuration) / animationDuration;
        
        // Get positions for this trail element
        const trailStartPos = positions[delayedSegment >= 0 ? delayedSegment : 0];
        const trailEndPos = positions[delayedSegment + 1 < positions.length ? delayedSegment + 1 : positions.length - 1];
        
        // Calculate position with ease
        const trailX = trailStartPos.x + (trailEndPos.x - trailStartPos.x) * easeInOut(delayedProgress);
        const trailY = trailStartPos.y + (trailEndPos.y - trailStartPos.y) * easeInOut(delayedProgress);
        
        // Apply position and styling based on index
        trail.style.transform = `translate(calc(-50% + ${trailX}px), calc(-50% + ${trailY}px)) scale(${1 - (i * 0.15)})`;
        trail.style.opacity = 0.3 - (i * 0.05);
      });
      
      animationRef.current = requestAnimationFrame(animateShape);
    };
    
    // Start animation
    animationRef.current = requestAnimationFrame(animateShape);
    
    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isExploding, trailCount, isLoading, randomMovement]);

  // Easing function for smooth animation
  const easeInOut = (t) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  // Handle explosion effect when clicked
  const handleExplosion = () => {
    if (isExploding) return;
    
    setIsExploding(true);
    
    // Cancel current animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    // Generate confetti particles
    const particleCount = 30;
    const newConfetti = [];
    
    for (let i = 0; i < particleCount; i++) {
      // Create random directions and speeds for particles
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 4;
      const size = 5 + Math.random() * 10;
      
      // Calculate the target position for confetti
      // If targetRow is provided, we'll make confetti gravitate there
      let targetY = null;
      if (targetRow) {
        // Convert the target row to an approximate pixel value
        // This is an approximation - you might need to adjust based on your grid
        targetY = 200; // Default value if calculations fail
      }
      
      newConfetti.push({
        id: i,
        x: 0,
        y: 0,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        opacity: 1,
        color: `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`,
        targetY: targetY
      });
    }
    
    setConfetti(newConfetti);
    
    // Reset after animation
    setTimeout(() => {
      setIsExploding(false);
      setConfetti([]);
      
      // Restart the regular animation
      animationRef.current = requestAnimationFrame(animateShape);
    }, 2000);
  };

  // Update confetti positions
  useEffect(() => {
    if (!isExploding || confetti.length === 0) return;
    
    let frame;
    const gravity = 0.1;
    const friction = 0.98;
    const fadeSpeed = 0.01; // Reduced for slower fade
    
    const animateConfetti = () => {
      setConfetti(prevConfetti => 
        prevConfetti.map(particle => {
          // Apply physics
          let vy = particle.vy + gravity;
          const vx = particle.vx * friction;
          let y = particle.y + vy;
          
          // If we have a target row, make confetti gravitate towards it
          if (particle.targetY !== null) {
            // As particles get further away, increase their tendency to return to targetY
            const distanceToTarget = particle.targetY - particle.y;
            // Apply a force towards the target, stronger as the particle gets further away
            if (Math.abs(distanceToTarget) > 10) {
              vy += distanceToTarget * 0.01;
            }
            
            // If near the target, slow down
            if (Math.abs(distanceToTarget) < 50) {
              vy *= 0.95;
            }
          }
          
          // Calculate opacity with a more gradual fade
          // For the first second, maintain full opacity, then fade over the next second
          const lifetime = 2000; // 2 seconds total
          const now = Date.now();
          const age = now - particle.createdAt;
          let opacity = particle.opacity;
          
          if (age > lifetime * 0.5) {
            // Only start fading after half the lifetime
            opacity = Math.max(0, 1 - ((age - (lifetime * 0.5)) / (lifetime * 0.5)));
          }
          
          return {
            ...particle,
            x: particle.x + vx,
            y: y,
            vx,
            vy,
            rotation: particle.rotation + particle.rotationSpeed,
            opacity
          };
        }).filter(particle => particle.opacity > 0) // Remove completely faded particles
      );
      
      frame = requestAnimationFrame(animateConfetti);
    };
    
    const now = Date.now();
    // Add creation timestamp to each particle for age-based effects
    setConfetti(prevConfetti => 
      prevConfetti.map(particle => ({
        ...particle,
        createdAt: now
      }))
    );
    
    frame = requestAnimationFrame(animateConfetti);
    
    return () => {
      cancelAnimationFrame(frame);
    };
  }, [isExploding, confetti.length]);

  // If still loading or no SVG content, show nothing or a placeholder
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
        cursor: "pointer"
      }}
      onClick={handleExplosion}
    >
      {/* Trail elements */}
      {!isExploding && trails.map((_, i) => (
        <svg
          key={`trail-${i}`}
          ref={el => trailRefs.current[i] = el}
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
            opacity: 0.2,
            zIndex: 1,
            pointerEvents: "none"
          }}
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      ))}

      {/* Main shape */}
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
            opacity: 0.8,
            zIndex: 2,
            pointerEvents: "none"
          }}
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      )}

      {/* Explosion confetti */}
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
            borderRadius: "2px",
            transform: `translate(calc(-50% + ${particle.x}px), calc(-50% + ${particle.y}px)) rotate(${particle.rotation}deg)`,
            opacity: particle.opacity,
            zIndex: 10,
            pointerEvents: "none",
            transition: "opacity 0.3s ease-out" // Smooth opacity transition
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShape;