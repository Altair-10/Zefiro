// components/DettagliTimeline.js
"use client";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function OurPipeline({ sectionTitle, cardTitle1, cardBody1, cardTitle2, cardBody2, cardTitle3, cardBody3 }) {
    const timelineRef = useRef(null);

    useEffect(() => {
        const timelineSteps = timelineRef.current.querySelectorAll('.timeline-step');
        timelineSteps.forEach((step, index) => {
            gsap.fromTo(
                step,
                { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                {
                    scrollTrigger: {
                        trigger: step,
                        start: 'top 75%',
                    },
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power2.out'
                }
            );
        });
    }, []);

    return (
        <div ref={timelineRef} className="container mx-auto px-4 py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-dark mb-16">{sectionTitle}</h2>

            <div className="max-w-4xl mx-auto">
                {/* Step 1 */}
                <div className="timeline-step flex flex-col md:flex-row mb-16 bg-white p-6 rounded-lg shadow-lg">
                    <div className="w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0 mb-4 md:mb-0 mx-auto md:mx-0">
                        1
                    </div>
                    <div className="md:ml-8">
                        <h3 className="text-2xl font-bold mb-4 text-blue-dark text-center md:text-left">{cardTitle1}</h3>
                        <p className="text-gray-700">
                            {cardBody1}
                        </p>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="timeline-step flex flex-col md:flex-row mb-16 bg-white p-6 rounded-lg shadow-lg">
                    <div className="w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0 mb-4 md:mb-0 mx-auto md:mx-0">
                        2
                    </div>
                    <div className="md:ml-8">
                        <h3 className="text-2xl font-bold mb-4 text-blue-dark text-center md:text-left">{cardTitle2}</h3>
                        <p className="text-gray-700">
                            {cardBody2}
                        </p>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="timeline-step flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg">
                    <div className="w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0 mb-4 md:mb-0 mx-auto md:mx-0">
                        3
                    </div>
                    <div className="md:ml-8">
                        <h3 className="text-2xl font-bold mb-4 text-blue-dark text-center md:text-left">{cardTitle3}</h3>
                        <p className="text-gray-700">
                            {cardBody3}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
