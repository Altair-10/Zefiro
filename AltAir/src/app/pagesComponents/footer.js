"use client"

import Link from "next/link";
import Image from "next/image"
import SocialIcons from "./socialIcons"

export default function Footer() {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert(`Copiato: ${text}`);
    }

    return (
        <div className="flex flex-col md:flex-row justify-around md:items-center w-full h-[150vw] md:h-[30vw] bg-gradient-orange">
            <div className="flex flex-col items-center md:items-start">
                <Image
                    src={`/loghi_altair/BigLogoDark.png`}
                    width={1000}
                    height={1000}
                    alt=''
                    className="w-[50vw] h-[25vw] md:w-[20vw] md:h-[10vw] ml-6 md:ml-0"
                />
                <div className="ml-[1.3vw] text-center md:text-start">
                    {[
                        { text: "+39 38904402325" },
                        { text: "altair-info@gmail.com" },
                    ].map((item, index) => (
                        <div key={index} className="flex items-center justify-center md:justify-start gap-2 group">
                            <p className="text-white text-[5vw] md:text-[1.5vw] font-bold group-hover:text-blue-dark">{item.text}</p>
                            <div className="w-[4.5vw] h-[3.5vw] md:w-[2vw] md:h-[1.5vw] cursor-pointer text-white group-hover:text-blue-dark">
                                <button onClick={() => copyToClipboard(item.text)} title="Copy">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pt-[4vw] md:mt-[1vw] md:ml-[1.3vw] ">
                    <SocialIcons color="#FFFFFF" hoverColor="text-blue-dark" />
                </div>
            </div>
            <div className="flex flex-col w-[1/3] items-center md:items-start">
                <h3 className="text-blue-light text-[8vw] md:text-[3vw] text-bold">Perchè Altair</h3>
                <Link href="" className="text-brown-light text-[5vw] md:text-[1.5vw] text-bold">perche si</Link>
            </div>
            <div className="md:hidden flex flex-col justify-center items-center md:items-start">
                <h3 className="text-blue-light text-[8vw] text-bold">servizi</h3>
                <h3 className="text-brown-light text-[5vw] text-bold">servizi</h3>
            </div>
            <div className="md:hidden flex flex-col justify-center items-center md:items-start">
                <h3 className="text-blue-light text-[8vw] text-bold">contattaci</h3>
                <Link href="" className="text-brown-light text-[5vw] text-bold">servizi</Link>
            </div>
            <div className="hidden md:flex flex-col gap-y-[0.5vw] items-start">
                <h3 className="text-blue-light text-[3vw] text-bold">servizi</h3>
                <h3 className="text-brown-light text-[1.5vw] text-bold">servizi</h3>
                <h3 className="text-blue-light text-[3vw] text-bold">contattaci</h3>
                <h3 className="text-brown-light text-[1.5vw] text-bold">servizi</h3>
            </div>
        </div>
    )
}