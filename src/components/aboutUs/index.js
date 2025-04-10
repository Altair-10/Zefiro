'use client';

import { useEffect, useRef, useState } from 'react';
import { Employee } from '../ClassEmployees';
import { useInView } from "react-intersection-observer";
import AnimatedTitle from '../AnimatedTitle';

export default function AboutUs() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const containerRef = useRef(null);
    const titleRef = useRef(null);

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const teamMembers = [
        new Employee("Antonino La Ferrara", "Full stack developer 🧩", {
            src: "/cardEmployees/AntoninoLaFerrara.png",
        }),
        new Employee("Samuele Risso", "CTO", {
            src: "/cardEmployees/MarcoDonati.jpg",
        }),
        new Employee("Stive Baumi", "Design Lead", {
            src: "/cardEmployees/MarcoDonati.jpg",
        }),
        new Employee("Marco Donati", "Creatore di bug 👾", {
            src: "/cardEmployees/MarcoDonati.jpg",
        }),
    ];

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (containerRef.current) {
                        const { top } = containerRef.current.getBoundingClientRect();
                        const progress = Math.min(
                            1,
                            Math.max(0, (window.innerHeight * 0.2 - top) / (window.innerHeight * 0.6))
                        );
                        setScrollProgress(progress);
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            ref={containerRef}
            className="flex flex-col justify-center items-center w-full min-h-[150vh] py-20 px-4 "
        >
            <AnimatedTitle text="Scopri chi c'è dietro Zefiro" />

            <div className="w-full max-w-6xl">
                <div
                    className="mb-24 transition-all duration-500 delay-100"
                    style={{
                        transform: `translateY(${(scrollProgress - 0.5) * 100}px)`,
                        opacity: scrollProgress > 0.2 ? 1 : 0,
                    }}
                >
                    <div className="bg-blue-50 border-l-4 border-blue-medium p-6 rounded-lg shadow-md">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-[1.5vw]">
                            Il nostro team
                        </h2>
                        <p className="text-lg text-gray-900 font-semibold">
                            Pionieri di soluzioni, guidati dalla curiosità e dalla voglia di cambiare le regole del gioco.
                        </p>
                    </div>
                </div>

                <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
                    <div className="container mx-auto">
                        <div className="flex flex-wrap items-center justify-between -mx-4">
                            <div className="w-full px-4 lg:w-6/12">
                                <div className="flex items-center -mx-3 sm:-mx-4">
                                    <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                        <div className="py-3 sm:py-4">
                                            <img
                                                src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                                                alt=""
                                                className="w-full rounded-2xl"
                                            />
                                        </div>
                                        <div className="py-3 sm:py-4">
                                            <img
                                                src="https://i.ibb.co/rfHFq15/image-2.jpg"
                                                alt=""
                                                className="w-full rounded-2xl"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                        <div className="relative z-10 my-4">
                                            <img
                                                src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                                                alt=""
                                                className="w-full rounded-2xl"
                                            />
                                            <span className="absolute -right-7 -bottom-7 z-[-1]">
                                                <svg
                                                    width={134}
                                                    height={106}
                                                    viewBox="0 0 134 106"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <circle
                                                        cx="1.66667"
                                                        cy={104}
                                                        r="1.66667"
                                                        transform="rotate(-90 1.66667 104)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="16.3333"
                                                        cy={104}
                                                        r="1.66667"
                                                        transform="rotate(-90 16.3333 104)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={31}
                                                        cy={104}
                                                        r="1.66667"
                                                        transform="rotate(-90 31 104)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="45.6667"
                                                        cy={104}
                                                        r="1.66667"
                                                        transform="rotate(-90 45.6667 104)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="60.3334"
                                                        cy={104}
                                                        r="1.66667"
                                                        transform="rotate(-90 60.3334 104)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="88.6667"
                                                        cy={104}
                                                        r="1.66667"
                                                        transform="rotate(-90 88.6667 104)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="117.667"
                                                        cy={104}
                                                        r="1.66667"
                                                        transform="rotate(-90 117.667 104)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="74.6667"
                                                        cy={104}
                                                        r="1.66667"
                                                        transform="rotate(-90 74.6667 104)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={103}
                                                        cy={104}
                                                        r="1.66667"
                                                        transform="rotate(-90 103 104)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={132}
                                                        cy={104}
                                                        r="1.66667"
                                                        transform="rotate(-90 132 104)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="1.66667"
                                                        cy="89.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 1.66667 89.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="16.3333"
                                                        cy="89.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 16.3333 89.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={31}
                                                        cy="89.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 31 89.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="45.6667"
                                                        cy="89.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 45.6667 89.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="60.3333"
                                                        cy="89.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 60.3333 89.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="88.6667"
                                                        cy="89.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 88.6667 89.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="117.667"
                                                        cy="89.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 117.667 89.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="74.6667"
                                                        cy="89.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 74.6667 89.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={103}
                                                        cy="89.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 103 89.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={132}
                                                        cy="89.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 132 89.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="1.66667"
                                                        cy="74.6673"
                                                        r="1.66667"
                                                        transform="rotate(-90 1.66667 74.6673)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="1.66667"
                                                        cy="31.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 1.66667 31.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="16.3333"
                                                        cy="74.6668"
                                                        r="1.66667"
                                                        transform="rotate(-90 16.3333 74.6668)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="16.3333"
                                                        cy="31.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 16.3333 31.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={31}
                                                        cy="74.6668"
                                                        r="1.66667"
                                                        transform="rotate(-90 31 74.6668)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={31}
                                                        cy="31.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 31 31.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="45.6667"
                                                        cy="74.6668"
                                                        r="1.66667"
                                                        transform="rotate(-90 45.6667 74.6668)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="45.6667"
                                                        cy="31.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 45.6667 31.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="60.3333"
                                                        cy="74.6668"
                                                        r="1.66667"
                                                        transform="rotate(-90 60.3333 74.6668)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="60.3333"
                                                        cy="30.9998"
                                                        r="1.66667"
                                                        transform="rotate(-90 60.3333 30.9998)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="88.6667"
                                                        cy="74.6668"
                                                        r="1.66667"
                                                        transform="rotate(-90 88.6667 74.6668)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="88.6667"
                                                        cy="30.9998"
                                                        r="1.66667"
                                                        transform="rotate(-90 88.6667 30.9998)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="117.667"
                                                        cy="74.6668"
                                                        r="1.66667"
                                                        transform="rotate(-90 117.667 74.6668)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="117.667"
                                                        cy="30.9998"
                                                        r="1.66667"
                                                        transform="rotate(-90 117.667 30.9998)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="74.6667"
                                                        cy="74.6668"
                                                        r="1.66667"
                                                        transform="rotate(-90 74.6667 74.6668)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="74.6667"
                                                        cy="30.9998"
                                                        r="1.66667"
                                                        transform="rotate(-90 74.6667 30.9998)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={103}
                                                        cy="74.6668"
                                                        r="1.66667"
                                                        transform="rotate(-90 103 74.6668)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={103}
                                                        cy="30.9998"
                                                        r="1.66667"
                                                        transform="rotate(-90 103 30.9998)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={132}
                                                        cy="74.6668"
                                                        r="1.66667"
                                                        transform="rotate(-90 132 74.6668)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={132}
                                                        cy="30.9998"
                                                        r="1.66667"
                                                        transform="rotate(-90 132 30.9998)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="1.66667"
                                                        cy="60.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 1.66667 60.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="1.66667"
                                                        cy="16.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 1.66667 16.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="16.3333"
                                                        cy="60.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 16.3333 60.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="16.3333"
                                                        cy="16.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 16.3333 16.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={31}
                                                        cy="60.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 31 60.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={31}
                                                        cy="16.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 31 16.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="45.6667"
                                                        cy="60.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 45.6667 60.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="45.6667"
                                                        cy="16.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 45.6667 16.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="60.3333"
                                                        cy="60.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 60.3333 60.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="60.3333"
                                                        cy="16.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 60.3333 16.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="88.6667"
                                                        cy="60.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 88.6667 60.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="88.6667"
                                                        cy="16.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 88.6667 16.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="117.667"
                                                        cy="60.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 117.667 60.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="117.667"
                                                        cy="16.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 117.667 16.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="74.6667"
                                                        cy="60.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 74.6667 60.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="74.6667"
                                                        cy="16.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 74.6667 16.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={103}
                                                        cy="60.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 103 60.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={103}
                                                        cy="16.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 103 16.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={132}
                                                        cy="60.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 132 60.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={132}
                                                        cy="16.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 132 16.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="1.66667"
                                                        cy="45.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 1.66667 45.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="1.66667"
                                                        cy="1.66683"
                                                        r="1.66667"
                                                        transform="rotate(-90 1.66667 1.66683)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="16.3333"
                                                        cy="45.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 16.3333 45.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="16.3333"
                                                        cy="1.66683"
                                                        r="1.66667"
                                                        transform="rotate(-90 16.3333 1.66683)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={31}
                                                        cy="45.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 31 45.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={31}
                                                        cy="1.66683"
                                                        r="1.66667"
                                                        transform="rotate(-90 31 1.66683)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="45.6667"
                                                        cy="45.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 45.6667 45.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="45.6667"
                                                        cy="1.66683"
                                                        r="1.66667"
                                                        transform="rotate(-90 45.6667 1.66683)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="60.3333"
                                                        cy="45.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 60.3333 45.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="60.3333"
                                                        cy="1.66683"
                                                        r="1.66667"
                                                        transform="rotate(-90 60.3333 1.66683)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="88.6667"
                                                        cy="45.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 88.6667 45.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="88.6667"
                                                        cy="1.66683"
                                                        r="1.66667"
                                                        transform="rotate(-90 88.6667 1.66683)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="117.667"
                                                        cy="45.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 117.667 45.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="117.667"
                                                        cy="1.66683"
                                                        r="1.66667"
                                                        transform="rotate(-90 117.667 1.66683)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="74.6667"
                                                        cy="45.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 74.6667 45.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="74.6667"
                                                        cy="1.66683"
                                                        r="1.66667"
                                                        transform="rotate(-90 74.6667 1.66683)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={103}
                                                        cy="45.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 103 45.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={103}
                                                        cy="1.66683"
                                                        r="1.66667"
                                                        transform="rotate(-90 103 1.66683)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={132}
                                                        cy="45.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 132 45.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={132}
                                                        cy="1.66683"
                                                        r="1.66667"
                                                        transform="rotate(-90 132 1.66683)"
                                                        fill="#3056D3"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                                <div className="mt-10 lg:mt-0">
                                    <span className="block mb-4 text-lg font-semibold text-primary">
                                        Why Choose Us
                                    </span>
                                    <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                                        Make your customers happy by giving services.
                                    </h2>
                                    <p className="mb-5 text-base text-body-color dark:text-dark-6">
                                        It is a long established fact that a reader will be distracted
                                        by the readable content of a page when looking at its layout.
                                        The point of using Lorem Ipsum is that it has a more-or-less.
                                    </p>
                                    <p className="mb-8 text-base text-body-color dark:text-dark-6">
                                        A domain name is one of the first steps to establishing your
                                        brand. Secure a consistent brand image with a domain name that
                                        matches your business.
                                    </p>
                                    <a
                                        href="javascript:void(0)"
                                        className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                                    >
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div
                    ref={ref}
                    className="md:mt-[10vw] mt-[20vw] p-[2vw] bg-blue-50 border-l-4 border-blue-medium shadow-md rounded-lg transition-all duration-500 delay-200"
                    style={{
                        transform: inView ? `translateY(${scrollProgress * -50}px)` : 'translateY(50px)',
                        opacity: inView ? 1 : 0,
                    }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-[1.5vw]">I nostri valori</h2>
                    <div className="text-lg text-gray-900 font-semibold space-y-2">
                        <div>
                            <p className="font-extrabold">🌍 Oltre i confini</p>
                            <p>Esploriamo territori inesplorati con curiosità da pionieri.</p>
                        </div>

                        <div>
                            <p className="font-extrabold">🧰 Ecosistema umano</p>
                            <p>Tecnologia che amplifica, non sostituisce l'umanità.</p>
                        </div>

                        <div>
                            <p className="font-extrabold">🍃 Bellezza funzionale</p>
                            <p>Cerchiamo l'armonia perfetta tra forma e sostanza.</p>
                        </div>

                        <div>
                            <p className="font-extrabold">🥳 Gioia contagiosa</p>
                            <p>Lavoriamo con il sorriso e lo trasmettiamo attraverso ciò che creiamo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
