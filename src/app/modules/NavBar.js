"use client"
import { useState } from "react";
import Image from "next/image"
import Link from "next/link"

export default function NavBar(){
    const linkServices="./services"
    const linkAbout="./about"
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // Funzione per alternare lo stato del menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <>
        <div className="w-full h-[10px] sm:h-[15px] bg-blue-dark" />

        <div className="relative flex flex-row justify-between ml-[2vw] mr-[4.20vw] mt-4 sm:mt-8 md:mt-10 font-bold">
            {/* Logo e pulsanti */}
            <div className="relative flex flex-row sm:justify-start sm:gap-x-6 items-center">
                <Image 
                    src="/loghi_altair/SmallLogoLight.png"
                    width={683}
                    height={366}
                    alt="Logo" 
                    className="w-[25vw] sm:w-[15vw] md:w-[13vw] xl:w-[10vw]"
                />
                <div className="hidden sm:flex sm:text-blue-medium gap-x-6">
                    <Link href={linkServices}>
                        <h1 className="text-[2.5vw] md:text-[2.2vw] lg:text-[1.7vw] xl:text-[1.3vw]">SERVICE</h1>
                    </Link>
                    <Link href={linkAbout}>
                        <h1 className="text-[2.5vw] md:text-[2.2vw] lg:text-[1.7vw] xl:text-[1.3vw]">ABOUT US</h1>
                    </Link>
                </div>
            </div>

            {/* Menu (visibile solo su dispositivi più piccoli) */}
            <div className="sm:hidden flex items-center" onClick={toggleMenu}>
                <Image
                    src="/geometric_shapes/menu.png"
                    width={240}
                    height={240}
                    alt="Menu"
                    className="w-[10vw] md:w-[15vw] cursor-pointer"
                />
            </div>
            {/* Icone social (visibili su schermi medi o più grandi) */}
            <div className="hidden sm:flex gap-3">
                <button>
                    <Image 
                        src="/loghi_social/instagram.png"
                        width={1000}
                        height={1000}
                        alt="instagram"
                        className="w-[5.5vw] md:w-[5vw] lg:w-[4vw] xl:w-[3.2vw]"
                    />
                </button>
                <button>
                    <Image 
                        src="/loghi_social/facebook.png"
                        width={1000}
                        height={1000}
                        alt="facebook" 
                        className="w-[5.5vw] md:w-[5vw] lg:w-[4vw] xl:w-[3.2vw]"
                    />
                </button>
                <button>
                    <Image 
                        src="/loghi_social/linkedin.png"
                        width={1000}
                        height={1000}
                        alt="linkedin" 
                        className="w-[5.5vw] md:w-[5vw] lg:w-[4vw] xl:w-[3.2vw]"
                    />
                </button>
            </div>
        </div>
        {/* Menu a tendina */}
        {isMenuOpen && (
            <div className="flex justify-center">
                <div className="absolute sm:hidden flex flex-col bg-blue-light shadow-lg w-[90vw] pl-[3vw] rounded-md z-50">
                    <Link href={linkServices}>
                        <h1 className="text-brown-light text-[6vw] p-[1.5vw]">
                            Service
                        </h1>
                    </Link>
                    <Link href={linkAbout}>
                        <h1 className="text-brown-light text-[6vw] p-[1.5vw]">
                            About Us
                        </h1>
                    </Link>
                </div>
            </div>      
            )}
        </>
    )
}