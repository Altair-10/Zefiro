import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const faces = [
  { color: "#16697a", text: "Innovativo", icon: "🚀" },
  { color: "#489fb5", text: "Affidabile", icon: "🤝" },
  { color: "#82bfca", text: "Personale", icon: "✨" },
  { color: "#ede7e3", text: "Su Misura", icon: "✂️", textColor: "#333" }, 
];

export default function Cube() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % faces.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[40vh] flex items-center justify-center">
      <div className="w-[200px] h-[200px] perspective-[1000px]">
        <motion.div
          className="relative w-full h-full"
          animate={{ rotateY: index * 90 }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "center center",
          }}
        >
          {faces.map((face, i) => (
            <motion.div
              key={i}
              className="absolute flex flex-col items-center justify-center rounded-xl border-2 border-white/20 font-extrabold"
              style={{
                backgroundColor: face.color,
                color: face.textColor || "white",
                width: "200px",
                height: "200px",
                backfaceVisibility: "hidden",
                transform: `rotateY(${i * 90}deg) translateZ(100px)`,
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                fontSize: "2rem",
              }}
            >
              <span className="text-4xl mb-2">{face.icon}</span>
              <span className="text-xl font-bold uppercase tracking-wider">
                {face.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}