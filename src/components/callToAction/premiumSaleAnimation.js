'use client';

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sellingPoints = [
    { text: "Convenienza", color: "#FF9A77", emoji: "💰", shadow: "0 0 15px rgba(255, 154, 119, 0.5)" },
    { text: "Velocità", color: "#7DDDD2", emoji: "⚡", shadow: "0 0 15px rgba(125, 221, 210, 0.5)" },
    { text: "Design", color: "#FFD86B", emoji: "🎨", shadow: "0 0 15px rgba(255, 216, 107, 0.5)" },
    { text: "SEO", color: "#B28AF6", emoji: "🔍", shadow: "0 0 15px rgba(178, 138, 246, 0.5)" },
    { text: "Sicurezza", color: "#7DAEFF", emoji: "🛡️", shadow: "0 0 15px rgba(125, 174, 255, 0.5)" }
]  

export default function PremiumSaleAnimation() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    const startTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % sellingPoints.length);
        }, 3000);
    };

    useEffect(() => {
        if (isMounted) {
            startTimer();
        }
        return () => clearInterval(timerRef.current);
    }, [isMounted]);

    if (!isMounted) {
        // Return a simplified version for SSR
        return (
            <div className="relative w-full h-full flex items-center justify-center rounded-xl overflow-hidden">
                <div className="absolute z-10">
                    <div
                        className="px-8 py-6 rounded-xl text-black font-extrabold text-3xl md:text-4xl flex items-center justify-center gap-3"
                        style={{
                            background: sellingPoints[0].color,
                            boxShadow: sellingPoints[0].shadow,
                        }}
                    >
                        <span className="text-4xl">{sellingPoints[0].emoji}</span>
                        <span>{sellingPoints[0].text}</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative w-full h-full flex items-center justify-center rounded-xl overflow-hidden">
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
                        className="px-8 py-6 rounded-xl text-black font-extrabold text-3xl md:text-4xl flex items-center justify-center gap-3 cursor-pointer"
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
        </div>
    );
}