"use client"

import Image from "next/image";
import SocialIcons from "./socialIcons"

export default function Footer() {
    const copyToClipboard = async (text) => {
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(text);
            } else {
                const textarea = document.createElement('textarea');
                textarea.value = text;
                textarea.style.position = 'fixed';
                document.body.appendChild(textarea);
                textarea.select();
                const successful = document.execCommand('copy');
                if (!successful) throw new Error('Fallback copy failed');
                document.body.removeChild(textarea);
            }
            alert(`Copiato: ${text}`);
        } catch (err) {
            alert('Non è stato possibile copiare il testo. Selezionalo manualmente.');
            console.error('Copy failed:', err);
        }
    }

    const footerNavs = [
        {
            name: 'zefiro.it.info@gmail.com',
        },
        {
            name: '38903440325',
        },
    ]

    return (
        <footer className="text-white bg-gradient-orange px-4 py-5 w-full md:px-8">
            <div className="flex flex-col justify-center items-center">
                <Image
                    src="/loghi_altair/bigZefiro_light.svg"
                    width={1000}
                    height={1000}
                    alt="logo"
                    className="w-[60vw] md:w-[20vw]" />
                <p className="leading-relaxed md:w-[45vw] text-[4vw] sm:text-[3vw] md:text-[20px] text-center text-black font-bold">
                    Offriamo competenze, creatività e tecnologie avanzate per trasformare le tue idee in soluzioni digitali innovative, 
                    aiutandoti a comunicare meglio, crescere online e offrire esperienze uniche ai tuoi utenti.                
                </p>
            </div>

            <ul className="flex flex-col justify-center items-center mt-[2vw] gap-2">
                {footerNavs.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-800 hover:text-blue-dark cursor-pointer">
                        <span>{item.name}</span>
                        <span
                            onClick={() => copyToClipboard(item.name)}
                            className="hover:text-blue-dark active:scale-90 transition cursor-pointer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                    d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                            </svg>
                        </span>
                    </li>
                ))}
            </ul>

            <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-gray-800">
                <div className="mt-4 sm:mt-0">
                    &copy; 2025 Zefiro. Tutti i diritti riservati.
                </div>
            </div>
        </footer>
    )
}
