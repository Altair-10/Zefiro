import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sellingPoints = [
    { text: "Convenienza", color: "#FF6B35", emoji: "💰", shadow: "0 0 15px rgba(255, 107, 53, 0.7)" },
    { text: "Velocità", color: "#4ECDC4", emoji: "⚡", shadow: "0 0 15px rgba(78, 205, 196, 0.7)" },
    { text: "Design", color: "#FFBE0B", emoji: "🎨", shadow: "0 0 15px rgba(255, 190, 11, 0.7)" },
    { text: "SEO", color: "#8338EC", emoji: "🔍", shadow: "0 0 15px rgba(131, 56, 236, 0.7)" },
    { text: "Sicurezza", color: "#3A86FF", emoji: "🛡️", shadow: "0 0 15px rgba(58, 134, 255, 0.7)" },
];

export default function PremiumSaleAnimation() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isManualSelection, setIsManualSelection] = useState(false);
    const timerRef = useRef(null);

    const startTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % sellingPoints.length);
            setIsManualSelection(false);
        }, 3000); // Aumentato a 3 secondi
    };

    useEffect(() => {
        startTimer();
        return () => clearInterval(timerRef.current);
    }, []);

    const handleManualSelection = (index) => {
        setIsManualSelection(true);
        setCurrentIndex(index);
        startTimer(); // Riavvia il timer quando si fa una selezione manuale
    };

    return (
        <div className="relative w-full h-full flex items-center justify-center rounded-xl overflow-hidden">
            {/* Parola principale in evidenza */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    className="absolute z-10"
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.8 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <motion.div
                        className="px-8 py-6 rounded-xl text-white font-extrabold text-3xl md:text-4xl flex items-center justify-center gap-3 cursor-pointer"
                        style={{
                            background: sellingPoints[currentIndex].color,
                            boxShadow: sellingPoints[currentIndex].shadow,
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="text-4xl">{sellingPoints[currentIndex].emoji}</span>
                        <span>{sellingPoints[currentIndex].text}</span>
                    </motion.div>
                </motion.div>
            </AnimatePresence>

            {/* Effetto particellare */}
            {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                    key={`particle-${i}`}
                    className="absolute rounded-full"
                    style={{
                        width: "6px",
                        height: "6px",
                        background: sellingPoints[currentIndex].color,
                        x: Math.cos((i * 30) * Math.PI / 180) * 100,
                        y: Math.sin((i * 30) * Math.PI / 180) * 100,
                    }}
                    animate={{
                        opacity: [0.3, 0.8, 0.3],
                        scale: [0.5, 1.5, 0.5],
                        x: Math.cos((i * 30 + currentIndex * 72) * Math.PI / 180) * 120,
                        y: Math.sin((i * 30 + currentIndex * 72) * Math.PI / 180) * 120,
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Mini preview delle altre parole */}
            <div className="absolute bottom-4 flex gap-2">
                {sellingPoints.map((point, index) => (
                    <motion.div
                        key={index}
                        className="px-3 py-2 rounded-lg text-xs font-semibold cursor-pointer"
                        style={{
                            background: index === currentIndex ? point.color : "#333",
                            color: "white",
                            opacity: index === currentIndex ? 1 : 0.6,
                        }}
                        whileHover={{ scale: 1.1 }}
                        onClick={() => handleManualSelection(index)}
                    >
                        {point.emoji}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}