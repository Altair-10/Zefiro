import Image from "next/image"
import SocialButton from "../home/components/social_button"

export default function Navbar(){
    return(
        <>
        <div className="w-full h-[10px] sm:h-[15px] bg-blue-dark" />

        <div className="flex flex-row justify-between px-8 mt-4 sm:mt-8 md:mt-10 font-bold w-full">
            {/* Logo e pulsanti */}
            <div className="flex flex-row sm:justify-start sm:gap-x-6 items-center">
                <Image 
                    src="/loghi_altair/SmallLogoLight.png"
                    width={683}
                    height={366}
                    alt="Logo" 
                    className="w-20 sm:w-24 md:w-32"
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
                    className="w-8 sm:w-24 md:w-32"
                />
            </div>

            {/* Icone social (visibili su schermi medi o più grandi) */}
            <div className="hidden sm:flex items-center gap-3">
                <SocialButton source="/loghi_social/instagram.png" alt="instagram" />
                <SocialButton source="/loghi_social/facebook.png" alt="facebook" />
                <SocialButton source="/loghi_social/linkedin.png" alt="linkedin" />
            </div>
        </div>

        </>
    )
}