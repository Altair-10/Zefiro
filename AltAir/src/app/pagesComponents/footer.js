import Image from "next/image"
import SocialIcons from "./socialIcons"

export default function Footer() {
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
                    <p className="text-brown-light text-[5vw] md:text-[1.5vw] text-bold">+39 38904402325</p>
                    <p className="text-brown-light text-[5vw] md:text-[1.5vw] text-bold">samuele.risso30@gmail.com</p>
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