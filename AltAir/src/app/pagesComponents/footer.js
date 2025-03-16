"use client"

import { Copy } from "lucide-react";
import Image from "next/image"
import SocialIcons from "./socialIcons"

export default function Footer() {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert(`Copiato: ${text}`);
    }

    return (
        <div className="flex flex-col md:flex-row justify-around md:items-center w-full h-[150vw] md:h-[30vw] bg-blue-dark">
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
                        <div key={index} className="flex items-center justify-center md:justify-start gap-2">
                        <p className="text-brown-light text-[5vw] md:text-[1.5vw] font-bold">{item.text}</p>
                        <Copy
                            className="w-5 h-5 cursor-pointer text-brown-light hover:text-orange"
                            onClick={() => copyToClipboard(item.text)}
                        />
                        </div>
                    ))}
                </div>
                <div className="mt-[3vw] md:mt-[1vw] md:ml-[1.3vw] ">
                    <SocialIcons color="#FFFFFF" hoverColor="text-orange" />
                </div>
            </div>
            <div className="flex flex-col w-[1/3] items-center md:items-start">
                <h3 className="text-blue-light text-[8vw] md:text-[3vw] text-bold">Perchè Altair</h3>
                <p className="text-brown-light text-[5vw] md:text-[1.5vw] text-bold">perche si</p>
            </div>
            <div className="md:hidden flex flex-col justify-center items-center md:items-start">
                <h3 className="text-blue-light text-[8vw] text-bold">servizi</h3>
                <h3 className="text-brown-light text-[5vw] text-bold">servizi</h3>
            </div>
            <div className="md:hidden flex flex-col justify-center items-center md:items-start">
                <h3 className="text-blue-light text-[8vw] text-bold">contattaci</h3>
                <h3 className="text-brown-light text-[5vw] text-bold">servizi</h3>
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