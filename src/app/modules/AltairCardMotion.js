export default function AltairCardMotion () {
    return (
        <>
            <div className="w-[60vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] h-[24vw] sm:h-[20vw] md:h-[16vw] lg:h-[12vw] bg-gradient-orange relative flex justify-center items-center overflow-hidden rounded-[4vw] sm:rounded-[3vw] md:rounded-[2.5vw] lg:rounded-[2vw]">
                <div className="flex justify-center items-center z-10 relative">
                    <img
                        src="/loghi_altair/BigLogoDark.svg"
                        width={748}
                        height={333}
                        alt="Logo Altair"
                        className="w-[40vw] sm:w-[30vw] md:w-[25vw] lg:w-[20vw] h-auto object-contain"
                    />
                </div>
                <div
                    className="absolute w-[150%] h-[150%] bg-gradient-to-r from-[#82bfca] via-[#489fb5] to-[#16697a] animate-rotBGimg blur-[2vw] sm:blur-[1.5vw] md:blur-[1.2vw] lg:blur-[1vw]"
                    style={{
                        animation: "rotBGimg 8s linear infinite",
                    }}
                />
                <div className="absolute inset-[1vw] sm:inset-[0.8vw] md:inset-[0.6vw] lg:inset-[0.5vw] bg-gradient-orange rounded-[3vw] sm:rounded-[2.5vw] md:rounded-[2vw] lg:rounded-[1.5vw]" />
            </div>
            <style>
                {`
                    @keyframes rotBGimg {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                `}
            </style>
        </>
    )
}
