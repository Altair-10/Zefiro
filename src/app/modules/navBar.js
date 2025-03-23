"use client"

import SocialIcons from './socialIcons'

const Navbar = () => {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="fixed w-full top-0 z-50 h-[20vw] sm:h-[13vw] md:h-[10vw] lg:h-[8vw] xl:h-[5vw] bg-gradient-orange">
            <div className="flex justify-between items-center h-full px-8">
                {/* Logo */}
                <div>
                    <button  onClick={() => scrollToSection("home")}>
                        <img
                            src="/loghi_altair/SmallLogoDark.svg"
                            width={130}
                            height={60}
                            alt="Logo"
                            className="w-32"
                        />
                    </button>
                </div>

                {/* Items */}
                <div className="hidden sm:flex text-xl gap-[3vw] text-white font-bold">
                    <button 
                        onClick={() => scrollToSection("servizi")} 
                        className="hover:text-blue-dark"
                    >
                        SERVIZI
                    </button>
                    <button 
                        onClick={() => scrollToSection("aboutUs")} 
                        className="hover:text-blue-dark"
                    >
                        CHI SIAMO
                    </button>
                    <button
                        onClick={() => scrollToSection("contattaci")}
                        className="hover:text-blue-dark"
                    >
                        CONTATTACI
                    </button>
                </div>

                {/* Social icons */}
                <div className="hidden sm:flex gap-3">
                    <SocialIcons color="#ffffff" hoverColor="text-blue-dark"/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;