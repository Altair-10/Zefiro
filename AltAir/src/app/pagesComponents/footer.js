import Image from "next/image"
import SocialIcons from "./socialIcons"

export default function Footer() {
    return (
        <div className="flex flex-row justify-around items-center w-full h-[30vw] bg-blue-dark">
            <div className="flex flex-col w-[1/3] items-start">
                <Image 
                    src={`/loghi_altair/BigLogoDark.png`}
                    width={1000}
                    height={1000}
                    alt=''
                    className="w-[20vw] h-[10vw]" 
                />
                <div className="ml-[1.3vw]">
                    <p className="text-brown-light text-[1.5vw] text-bold">+39 38904402325</p>
                    <p className="text-brown-light text-[1.5vw] text-bold">samuele.risso30@gmail.com</p>
                </div>
                <div className="ml-[1.3vw] mt-[1vw]">
                    <SocialIcons color="#FFFFFF" />
                </div>
            </div>
            <div className="flex flex-col w-[1/3] items-center">
                <h3 className="text-blue-light text-[3vw] text-bold">Perchè Altair</h3>
                <p className="text-brown-light text-[1.5vw] text-bold">perche si</p>
            </div>
            <div className="flex flex-col gap-y-[0.5vw] w-[1/3] items-center">
                <h3 className="text-blue-light text-[3vw] text-bold">servizi</h3>
                <h3 className="text-brown-light text-[1.5vw] text-bold">servizi</h3>
                <h3 className="text-blue-light text-[3vw] text-bold">contattaci</h3>
                <h3 className="text-brown-light text-[1.5vw] text-bold">servizi</h3>
            </div>
        </div>
    )
}