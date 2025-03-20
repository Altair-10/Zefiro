import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const faces = [
  { color: "#16697a", text: "Innovativo" },
  { color: "#489fb5", text: "Affidabile" },
  { color: "#82bfca", text: "Personale" },
];

export default function CubeRotation() {
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % 3);
      }, 2000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="relative w-full h-full perspective-[600px]">
        <motion.div
          className="absolute w-full h-full flex items-center justify-center"
          animate={{ rotateY: index * 120 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {faces.map((face, i) => (
            <motion.div
              key={i}
              className="absolute flex items-center justify-center text-brown-light text-[1.5vw] font-bold shadow-lg border border-gray-300"
              style={{
                backgroundColor: face.color,
                width: "10vw",
                height: "10vw",
                position: "absolute",
                backfaceVisibility: "hidden",
                transform: `rotateY(${i * 120}deg) translateZ(50px)`,
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                borderRadius: "10px"
              }}
            >
              {face.text}
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }
