import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const faces = [
  { color: "#16697a", text: "Innovativo" },
  { color: "#489fb5", text: "Affidabile" },
  { color: "#82bfca", text: "Personale" },
];

export default function TrianglePrism() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % faces.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[40vh] flex items-center justify-center">
      <div className="w-[15vw] h-[30vh] perspective-[1200px]">
        <motion.div
          className="relative w-full h-full"
          animate={{ rotateY: index * 120 }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "center center",
          }}
        >
          {faces.map((face, i) => (
            <motion.div
              key={i}
              className="absolute flex items-center justify-center text-white text-[1.5vw] font-semibold uppercase tracking-wide rounded-xl"
              style={{
                background: `linear-gradient(135deg, ${face.color} 0%, ${shadeColor(face.color, -20)} 100%)`,
                width: "15vw",
                height: "30vh",
                backfaceVisibility: "hidden",
                transform: `rotateY(${i * 120}deg) translateZ(8vw) rotateX(5deg)`,
                boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
              }}
            >
              {face.text}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// Funzione per scurire un colore esadecimale
function shadeColor(color, percent) {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  R = parseInt((R * (100 + percent)) / 100);
  G = parseInt((G * (100 + percent)) / 100);
  B = parseInt((B * (100 + percent)) / 100);

  R = Math.min(255, R);
  G = Math.min(255, G);
  B = Math.min(255, B);

  const RR = R.toString(16).padStart(2, "0");
  const GG = G.toString(16).padStart(2, "0");
  const BB = B.toString(16).padStart(2, "0");

  return `#${RR}${GG}${BB}`;
}
