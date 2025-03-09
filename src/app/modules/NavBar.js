import Image from "next/image"
import SocialButton from "../home/components/SocialButton"

export default function NavBar(){
    return(
        <>
        <div className="w-full h-[10px] sm:h-[15px] bg-blue-dark" />

        <div className="flex flex-row justify-between ml-[2vw] mr-[4.20vw] mt-4 sm:mt-8 md:mt-10 font-bold">
            {/* Logo e pulsanti */}
            <div className="flex flex-row sm:justify-start sm:gap-x-6 items-center">
                <Image 
                    src="/loghi_altair/SmallLogoLight.png"
                    width={683}
                    height={366}
                    alt="Logo" 
                    className="w-[25vw] sm:w-[15vw] md:w-[13vw] xl:w-[10vw]"
                />
                <div className="hidden sm:flex sm:text-blue-medium gap-x-6">
                    <button>SERVICE</button>
                    <button>ABOUT US</button>
                </div>
            </div>

            {/* Menu (visibile solo su dispositivi più piccoli) */}
            <div className="sm:hidden flex items-center">
                <Image 
                    src="/geometric_shapes/menu.png"
                    width={240}
                    height={240}
                    alt="Menu" 
                    className="w-[10vw] md:w-[15vw]"
                />
            </div>

            {/* Icone social (visibili su schermi medi o più grandi) */}
            <div className="hidden sm:flex gap-3">
                <SocialButton source="/loghi_social/instagram.png" alt="instagram" />
                <SocialButton source="/loghi_social/facebook.png" alt="facebook" />
                <SocialButton source="/loghi_social/linkedin.png" alt="linkedin" />
            </div>
        </div>

        </>
    )
}