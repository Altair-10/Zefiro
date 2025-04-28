'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import AnimatedButton from './services/AnimatedButton';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function ServiceCTA({ question, cta }) {
    const ctaRef = useRef(null);

    useEffect(() => {
        if (!ctaRef.current) return;

        // Ingresso con GSAP
        gsap.fromTo(
            ctaRef.current,
            { opacity: 0, scale: 0.9 },
            {
                scrollTrigger: {
                    trigger: ctaRef.current,
                    start: 'top 80%',
                },
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'elastic.out(1, 0.5)',
            }
        );

        // Effetto shine ricorsivo
        const shineAnimation = () => {
            const shineElement = ctaRef.current?.querySelector('.shine-effect');
            if (shineElement) {
                gsap.fromTo(
                    shineElement,
                    { left: '-100%', opacity: 0.5 },
                    {
                        left: '200%',
                        opacity: 0,
                        duration: 1.5,
                        ease: 'power2.inOut',
                        onComplete: () => {
                            gsap.set(shineElement, { left: '-100%' });
                            setTimeout(shineAnimation, 3000);
                        },
                    }
                );
            }
        };

        setTimeout(shineAnimation, 2000);
    }, []);

    return (
        <div ref={ctaRef} className="container mx-auto px-4 text-center text-white py-24">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-black">
                {question}
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-12">
                {cta}
            </p>

            <div className="relative inline-block overflow-hidden group">
                <AnimatedButton mode="scroll" />
                <div className="shine-effect absolute top-0 left-0 w-full h-full bg-white bg-opacity-30 transform -skew-x-45"></div>
            </div>
        </div>
    );
}
