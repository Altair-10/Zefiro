"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function SiteSample({ sectionTitle, images = [] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="container mx-auto px-4 py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-dark mb-16">
                {sectionTitle}
            </h2>

            <div className="flex flex-col justify-center items-center demo-carousel relative max-w-5xl mx-auto">
                {/* Fisso: larghezza/altezza + centrare immagine */}
                <div className="w-[30vw] h-[20vw] relative overflow-hidden rounded-lg shadow-xl border-4 border-[#ede7e4] flex items-center justify-center bg-gray-100">
                    <Image
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>

                <div className="flex justify-center mt-8 space-x-4">
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 rounded-full bg-blue-light flex items-center justify-center hover:bg-blue-medium text-white transition-colors duration-300 shadow-md"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 rounded-full bg-blue-light flex items-center justify-center hover:bg-blue-medium text-white transition-colors duration-300 shadow-md"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
