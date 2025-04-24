import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const background = () => {
    const svgRef = useRef(null);
    const titleRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
            svgRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 2, ease: "power2.out" }
        )
            .fromTo(
                titleRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
                "-=1"
            )
            .fromTo(
                buttonRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
                "-=0.5"
            );
    }, []);

    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden  text-white">
            {/* Gradiente animato */}
            <div className="absolute inset-0 bg-gradient-blue animate-gradient" />

            {/* SVG */}
            <svg
                ref={svgRef}
                className="absolute w-full h-full object-cover z-0"
                viewBox="0 0 800 600"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="8" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <circle cx="400" cy="300" r="150" fill="#ffffff" opacity="0.1" filter="url(#glow)" />
                <circle cx="200" cy="150" r="60" fill="#ffffff" opacity="0.05" filter="url(#glow)" />
                <circle cx="600" cy="450" r="80" fill="#ffffff" opacity="0.07" filter="url(#glow)" />
            </svg>

            {/* Contenuto */}
            <div className="relative z-10 text-center px-6">
                <h1
                    ref={titleRef}
                    className="text-4xl md:text-6xl font-extrabold mb-1 bg-gradient-to-r from-[#ffa62b] to-[#ede7e4] text-transparent bg-clip-text"
                >
                    Sito Vetrina
                </h1>
                <h4
                    ref={titleRef}
                    className="text-lg md:text-2xl bold mb-6 bg-gradient-to-r from-[#ffa62b] to-[#ede7e4] text-transparent bg-clip-text"
                >
                    <p>La tua vetrina digitale sempre aperta.</p>
                    <span>Design su misura, mobile-friendly e ottimizzato per convertire visitatori in clienti.</span>
                </h4>
                <button
                    ref={buttonRef}
                    className="px-6 py-3 bg-[#ffa62b] text-white rounded-full font-semibold hover:bg-[#ff8c00] transition-all duration-300 shadow-lg relative overflow-hidden group"
                >
                    <span className="relative z-10">Scopri di più</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ffa62b] to-[#ff8c00] opacity-30 blur-xl group-hover:opacity-60 transition-all duration-500" />
                </button>
            </div>
        </section>
    );
};

export default background;
