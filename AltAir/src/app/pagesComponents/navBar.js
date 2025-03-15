"use client"
import { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import SocialIcons from './socialIcons'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const linkServices = "./services"
    const linkAbout = "./about"

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed w-full top-0 z-50 transition-all duration-500 ${isScrolled ? 'h-[4vw]' : 'h-[1vw]'}`}>
            {/* Linea decorativa base */}
            <div className={`absolute w-full ${isScrolled ? 
                'bg-gradient-to-r from-orange via-[#ff9a3b] to-[#ff8c00]' : 'h-0 bg-brown-light'}`}>
                
                {/* Mostra la linea solo quando la navbar non è visibile */}
                {!isScrolled && (
                    <div className="w-full h-[1vw] sm:h-[1vw] bg-gradient-to-r from-orange via-[#ff9a3b] to-[#ff8c00]" />
                )}

                {/* Contenuto della navbar */}
                <div className={`flex justify-between items-center h-full px-[5vw] ${isScrolled ? 'opacity-100 visible' : 'opacity-0 invisible'
                    } transition-opacity duration-300 delay-200`}>

                    {/* Logo */}
                    <div className="text-2xl font-bold">
                        <Image
                            src="/loghi_altair/SmallLogoDark.png"
                            width={650}
                            height={300}
                            alt="Logo"
                            className="w-[25vw] sm:w-[15vw] md:w-[13vw] xl:w-[10vw]" />
                    </div>

                    {/* Items */}
                    <div className="hidden sm:flex sm:text-brown-light gap-x-6 font-bold">
                        <Link href={linkServices}>
                            <span className="text-[2.5vw] md:text-[2.2vw] lg:text-[1.7vw] xl:text-[1.3vw] hover:text-blue-dark">SERVICE</span>
                        </Link>
                        <Link href={linkAbout}>
                            <span className="text-[2.5vw] md:text-[2.2vw] lg:text-[1.7vw] xl:text-[1.3vw]  hover:text-blue-dark">ABOUT US</span>
                        </Link>
                    </div>

                    {/* Social icons */}
                    <div className="hidden sm:flex gap-3">
                        <SocialIcons color="#ede7e4" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;