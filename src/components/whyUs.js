"use client";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function PercheSceglierci({ sectionTitle, icon1, cardTitle1, cardBody1, icon2, cardTitle2, cardBody2, icon3, cardTitle3, cardBody3 }) {
    const cardsRef = useRef(null);

    useEffect(() => {
        const cards = cardsRef.current.querySelectorAll('.feature-card');
        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    opacity: 0,
                    y: 50,
                    rotateY: index % 2 === 0 ? -5 : 5
                },
                {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                    },
                    opacity: 1,
                    y: 0,
                    rotateY: 0,
                    duration: 0.8,
                    ease: 'power3.out'
                }
            );
        });

        const iconWrappers = cardsRef.current.querySelectorAll('.icon-wrapper');
        iconWrappers.forEach((icon) => {
            gsap.to(icon.querySelector('div'), {
                scrollTrigger: {
                    trigger: icon,
                    start: 'top 70%',
                },
                rotate: 360,
                duration: 1.5,
                ease: 'elastic.out(1, 0.3)'
            });
        });
    }, []);

    return (
        <div ref={cardsRef} className="container mx-auto px-4 py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-dark mb-16">{sectionTitle}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        icon: icon1,
                        title: cardTitle1,
                        description: cardBody1
                    },
                    {
                        icon: icon2,
                        title: cardTitle2,
                        description: cardBody2
                    },
                    {
                        icon: icon3,
                        title: cardTitle3,
                        description: cardBody3
                    }
                ].map((card, i) => (
                    <div key={i} className="feature-card bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#489fb5]">
                        <div className="icon-wrapper mb-6 text-5xl text-[#489fb5] flex justify-center">
                            <div className="transform transition-transform duration-300 hover:rotate-12 bg-brown-light p-4 rounded-full">
                                {card.icon}
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-blue-dark text-center">{card.title}</h3>
                        <p className="text-gray-700 text-center">
                            {card.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
