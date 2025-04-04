"use client"

import Image from "next/image"

export default function Footer() {
    const copyToClipboard = async (text) => {
        try {
            // Metodo moderno (funziona su Chrome mobile, Firefox mobile)
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(text);
            } 
            // Fallback per browser più vecchi/Safari mobile
            else {
                // Creiamo un elemento textarea temporaneo
                const textarea = document.createElement('textarea');
                textarea.value = text;
                textarea.style.position = 'fixed';  // Evita scrolling
                document.body.appendChild(textarea);
                textarea.select();
                
                try {
                    // Fallback per iOS
                    const successful = document.execCommand('copy');
                    if (!successful) throw new Error('Fallback copy failed');
                } catch (err) {
                    console.error('Fallback copy failed', err);
                    throw err;
                } finally {
                    document.body.removeChild(textarea);
                }
            }
            alert(`Copiato: ${text}`);
        } catch (err) {
            alert('Non è stato possibile copiare il testo. Selezionalo manualmente.');
            console.error('Copy failed:', err);
        }
    }

    const info = [
        { text: "+39 38904402325" },
        { text: "zefiro.it.info@gmail.com" }
    ]

    return (
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-[10vw] w-full h-[60vw] md:h-[12vw] bg-gradient-orange">
                <Image
                    src={`/loghi_altair/bigZefiro_light.svg`}
                    width={1000}
                    height={1000}
                    alt=''
                    className="w-[50vw] h-[25vw] md:w-[20vw] md:h-[10vw] ml-3 md:ml-0"
                />
                <div className="ml-[1.3vw] text-center md:text-start">
                    {info.map((item, index) => (
                        <div key={index} className="flex justify-center items-center gap-2 group">
                            <p className="text-white text-[5vw] md:text-[1.5vw] font-bold group-hover:text-blue-dark">{item.text}</p>
                            <div className="w-[4.5vw] h-[3.5vw] md:w-[2vw] md:h-[1.5vw] cursor-pointer text-white group-hover:text-blue-dark">
                                <button onClick={() => copyToClipboard(item.text)} title="Copy" className="block">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    )
}