import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const faces = [
  { color: "linear-gradient(135deg, #16697a, #1a7a8c)", text: "Innovativo", emoji: "💡" },
  { color: "linear-gradient(135deg, #489fb5, #5ab1c7)", text: "Affidabile", emoji: "🤝" },
  { color: "linear-gradient(135deg, #82bfca, #94d1dc)", text: "Personale", emoji: "👤" },
];

export default function CubeRotation() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % 3);
    }, 2500);
    
    return () => clearInterval(interval);
  }, [isHovered]);

  // Evita il rendering lato server del cubo
  if (!isMounted) {
    return (
      <div className="relative w-full h-full perspective-[1000px]">
        <div className="absolute w-full h-full flex items-center justify-center">
          {faces.map((face, i) => (
            <div
              key={i}
              className="absolute flex flex-col items-center justify-center text-white font-bold rounded-2xl"
              style={{
                background: face.color,
                width: "12vw",
                height: "12vw",
                minWidth: "120px",
                minHeight: "120px",
                opacity: i === 0 ? 1 : 0 // Mostra solo la prima faccia durante SSR
              }}
            >
              <span className="text-4xl mb-2">{face.emoji}</span>
              <span className="text-xl">{face.text}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full h-full perspective-[1000px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute w-full h-full flex items-center justify-center"
        animate={{ 
          rotateY: index * 120,
          scale: isHovered ? 1.1 : 1
        }}
        transition={{ 
          duration: 1.5, 
          ease: [0.16, 1, 0.3, 1],
          scale: { duration: 0.3 }
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {faces.map((face, i) => (
          <motion.div
            key={i}
            className="absolute flex flex-col items-center justify-center text-white font-bold rounded-2xl"
            style={{
              background: face.color,
              width: "12vw",
              height: "12vw",
              minWidth: "120px",
              minHeight: "120px",
              position: "absolute",
              backfaceVisibility: "hidden",
              transform: `rotateY(${i * 120}deg) translateZ(6vw)`,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-4xl mb-2">{face.emoji}</span>
            <span className="text-xl">{face.text}</span>
          </motion.div>
        ))}
        
        <motion.div
          className="absolute bg-black rounded-full"
          style={{
            width: "10vw",
            height: "1vw",
            bottom: "-3vw",
            filter: "blur(10px)",
            opacity: 0.3,
          }}
          animate={{ 
            opacity: isHovered ? 0.4 : 0.2,
            scaleX: isHovered ? 1.2 : 1
          }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </div>
  );
}