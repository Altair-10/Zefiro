"use client";

import Image from 'next/image';

export default function SiteSample( {sectionTitle, urlImg1} ) {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-dark mb-16">
                    {sectionTitle}
                </h2>

                {/* Carousel demo (placeholder) */}
                <div className="flex flex-col justify-center items-center demo-carousel relative max-w-5xl mx-auto">
                    <div className="md:w-[25vw] overflow-hidden rounded-lg shadow-xl border-4 border-[#ede7e4]">
                        <Image
                            src="/sfondi/portfolioCreativo.png"
                            alt="Esempio Sito Vetrina"
                            width={1200}
                            height={675}
                        />
                    </div>

                    {/* Custom controls (placeholder) */}
                    <div className="flex justify-center mt-8 space-x-4">
                        <button className="w-12 h-12 rounded-full bg-blue-light flex items-center justify-center hover:bg-blue-medium text-white transition-colors duration-300 shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button className="w-12 h-12 rounded-full bg-blue-light flex items-center justify-center hover:bg-blue-medium text-white transition-colors duration-300 shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
