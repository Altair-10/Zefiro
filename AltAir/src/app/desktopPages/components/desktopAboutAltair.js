import Image from 'next/image';

export default function AboutAltair() {
    return (
        <div className="hidden md:flex justify-center w-full">
            <div className="
            grid gap-[1vw] my-[5vw]
            grid-cols-[repeat(48,_minmax(0,_1vw))]
            grid-rows-[repeat(24,_minmax(0,_1vw))]
            ">


                {/* <div className="  bg-orange w-full col-[36/38] row-[2/25]" />
                <div className="  bg-blue-light h-full col-[2/48] row-[7/9]" />
                <div className="  bg-blue-medium h-full col-[2/48] row-[18/20]" />

                <div className="row-[1/22] col-[5/23] pt-[8vw]">
                    <div className="relative flex flex-col justify-center h-full bg-orange rounded-3xl">
                        <Image
                            src={`/loghi_altair/BigLogoLight.png`}
                            width={748}
                            height={333}
                            alt=''
                            className="w-[50vw] h-[15vw] absolute top-[-8vw]"
                        />
                        <p className="text-[1.5vw] font-bold text-center text-blue-dark">
                            Negli ultimi anni in Italia <br />
                            si è accumulato un enorme ritardo <br />
                            tecnologico rispetto al resto del mondo. <br />
                            Questo porta realtà italiane <br />
                            a scomparire sotto la forza di quelle straniere, <br />
                            più tecnologiche e competitive. <br />
                            &quot;take IT for future&quot; <br />
                            è la soluzione che proponiamo, <br />
                            aggiornarsi oggi per essere <br />
                            avantaggiati domani.
                        </p>
                    </div>
                </div>

                
                <div className="row-[1/12] col-[25/45] pt-[8vw]">
                    <div className="relative flex flex-col justify-center h-full font-bold bg-blue-dark rounded-3xl">
                        <h2 className="absolute top-[-3.3vw] text-[4vw] text-orange">Il Progetto</h2>
                        <p className="text-[1.2vw]  text-center text-brown-light">
                            AltAir nasce a febbraio 2025 dalla collaborazione di 4 amici <br />
                            che dopo aver condiviso 2 anni di studio  <br />
                            hanno deciso di mettersi in gioco,  <br />
                            mettendo a disposizione competenze,  <br />
                            serietà lavorativa ed affidabilità.
                        </p>
                    </div>
                </div>


                
                <div className=" col-[25/45] row-[10/22] pt-[8vw]">
                    <div className="relative flex flex-col justify-center h-full font-bold bg-blue-medium rounded-3xl">
                        <h2 className="absolute top-[-3.3vw] text-[4vw] text-orange">L&apos;idea</h2>
                        <p className="text-[1.3vw] text-center text-brown-light">
                            AltAir nasce a febbraio 2025 dalla collaborazione di 4 amici <br />
                            che dopo aver condiviso 2 anni di studio  <br />
                            hanno deciso di mettersi in gioco,  <br />
                            mettendo a disposizione competenze,  <br />
                            serietà lavorativa ed affidabilità.
                        </p>
                    </div>
                </div> */}
                <div className="col-[1/-1] row-[1/-1] flex justify-center items-center">
                    <div className="w-[30vw] h-[12vw] bg-gradient-orange relative flex justify-center items-center overflow-hidden rounded-[2vw]">
                        <div className="flex justify-center items-center z-10 relative">
                            <Image
                                src={`/loghi_altair/BigLogoDark.png`}
                                width={748}
                                height={333}
                                alt="Logo Altair"
                                className="w-[50vw] h-[15vw] object-contain"
                            />
                        </div>
                        <div
                            className="absolute w-[150%] h-[150%] bg-gradient-to-r from-[#82bfca] via-[#489fb5] to-[#16697a] animate-rotBGimg transition-all"
                            style={{
                                animation: "rotBGimg 5s linear infinite",
                            }}
                        ></div>
                        <div className="absolute inset-[0.5vw] bg-gradient-orange rounded-[1.5vw]"></div>

                        {/* Stile per l'animazione */}
                        <style>
                            {`
                                @keyframes rotBGimg {
                                    from {
                                        transform: rotate(0deg);
                                    }
                                    to {
                                        transform: rotate(360deg);
                                    }
                                }
                            `}
                        </style>
                    </div>
                </div>
            </div>
        </div>
    )
}