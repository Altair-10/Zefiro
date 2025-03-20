import Image from 'next/image';

export default function AboutAltair() {
return (
    <div className="flex justify-center w-full ">
        <div className="
         grid gap-[0.5vw] md:gap-[1vw] my-[5vw]
                grid-rows-[repeat(45,_minmax(0,_2vw))] md:grid-rows-[repeat(22,_minmax(0,_1vw))]
                grid-cols-[repeat(30,_minmax(0,_2vw))] md:grid-cols-[repeat(48,_minmax(0,_1vw))]
        ">
            <div className="row-[1/19] col-[1/30] md:row-[5/20] md:col-[4/20] ">
                <div className="relative flex flex-col justify-center items-center  h-full bg-orange rounded-3xl">
                    <Image
                    src={`/loghi_altair/BigLogoLight.png`}
                    width={748}
                    height={333}
                    alt=''
                    className="w-[50vw] h-[20vw] md:h-[15vw]  absolute top-[-8vw]"
                    />
                    <p className="text-[3vw] md:text-[1.5vw] px-[2vw] md:px-0 font-bold text-center pt-[4vw] md:pt-[2vw] text-blue-dark">
                    Negli ultimi anni in Italia <n/>
                    si è accumulato un enorme ritardo <n/>
                    tecnologico rispetto al resto del mondo. <n/>
                    Questo porta realtà italiane <n/>
                    a scomparire sotto la forza di quelle straniere, <n/>
                    più tecnologiche e competitive. <n/>
                    &quot;take IT for future&quot; <n/>
                    è la soluzione che proponiamo, <n/>
                    aggiornarsi oggi per essere <n/>
                    avantaggiati domani.
                    </p>
                </div>
            </div>


            <div className=" row-[22/33] col-[1/30] md:row-[5/12] md:col-[26/44] ">
                <div className=" flex flex-col justify-center h-full font-bold shadow-xl bg-blue-medium rounded-3xl">
                    <p className="text-[2.5] md:text-[1vw] px-[2vw] md:px-0 text-center text-brown-light">
                    La nostra idea nasce da un’esigenza: <n/>
                    assistere le realtà italiane incentivando la loro presenza online.<n/>
                    Essere tecnologicamente sviluppati permette di <n/>
                    poter raggiungere più clienti e facilitarne la gestione<n/>
                    rendendo piu efficiente il Proprio business.<n/>
                    Per questo offriamo e invitiamo ad usufruire dei nostri servizi.<n/>
                    </p>
                </div>
            </div>
            <div className="row-[20/23] col-[3/13] md:col-[25/35] md:row-[3/6] ">
                <div className=" flex flex-col justify-center h-full font-bold shadow-xl bg-brown-light rounded-2xl">
                    <h2 className="absolute pl-[2vw] text-[4vw] md:text-[3vw] text-blue-dark">Il Progetto</h2> 
                </div> 
            </div> 


            <div className="row-[35/45] col-[1/30]  md:row-[15/21] md:col-[26/44] ">
                <div className=" flex flex-col justify-center h-full font-bold shadow-xl bg-blue-medium rounded-3xl">
                    <p className="text-[2.5] md:text-[1vw] px-[2vw] md:px-0 text-center text-brown-light">
                    AltAir nasce a febbraio 2025 dalla collaborazione di 4 amici <n/>
                    che dopo aver condiviso 2 anni di studio <n/>
                    hanno deciso di mettersi in gioco, <n/>
                    mettendo a disposizione competenze, <n/>
                    serietà lavorativa ed affidabilità.
                    </p>
                </div>
            </div>
            <div className="row-[33/36] col-[3/10] md:row-[13/16] md:col-[26/33]  ">
                <div className=" flex flex-col justify-center h-full font-bold shadow-xl bg-brown-light rounded-2xl">
                    <h2 className="absolute pl-[2vw] text-[4vw] md:text-[3vw] text-blue-dark">L&apos;idea</h2> 
                </div> 
            </div> 
        </div>
    </div>
    )
}