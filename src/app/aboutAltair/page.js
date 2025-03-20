import Image from 'next/image';

export default function AboutAltair() {
return (
    <div className="hidden md:flex justify-center w-full ">
        <div className="
        grid gap-[1vw] my-[5vw]
        grid-cols-[repeat(48,_minmax(0,_1vw))]
        grid-rows-[repeat(24,_minmax(0,_1vw))]
        ">
            <div className="row-[5/21] col-[4/20] ">
                <div className="relative flex flex-col justify-center h-full bg-orange rounded-3xl">
                    <Image
                    src={`/loghi_altair/BigLogoLight.png`}
                    width={748}
                    height={333}
                    alt=''
                    className="w-[50vw] h-[15vw] absolute top-[-8vw]"
                    />
                    <p className="text-[1.5vw] font-bold text-center pt-[2vw] text-blue-dark">
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


            <div className="col-[26/44] row-[5/12] ">
                <div className=" flex flex-col justify-center h-full font-bold shadow-xl bg-blue-medium rounded-3xl">
                    <p className="text-[1vw] text-center text-brown-light">
                    La nostra idea nasce da un’esigenza: <br/>
                    assistere le realtà italiane incentivando la loro presenza online.<br/>
                    Essere tecnologicamente sviluppati permette di <br/>
                    poter raggiungere più clienti e facilitarne la gestione<br/>
                    rendendo piu efficiente il Proprio business.<br/>
                    Per questo offriamo e invitiamo ad usufruire dei nostri servizi.<br/>
                    </p>
                </div>
            </div>
            <div className="col-[25/35] row-[3/6] ">
                <div className=" flex flex-col justify-center h-full font-bold shadow-xl bg-brown-light rounded-2xl">
                    <h2 className="absolute pl-[2vw] text-[3vw] text-blue-dark">Il Progetto</h2> 
                </div> 
            </div> 


            <div className="col-[26/44] row-[15/21]">
                <div className=" flex flex-col justify-center h-full font-bold shadow-xl bg-blue-medium rounded-3xl">
                    <p className="text-[1vw] text-center text-brown-light">
                    AltAir nasce a febbraio 2025 dalla collaborazione di 4 amici <br />
                    che dopo aver condiviso 2 anni di studio <br />
                    hanno deciso di mettersi in gioco, <br />
                    mettendo a disposizione competenze, <br />
                    serietà lavorativa ed affidabilità.
                    </p>
                </div>
            </div>
            <div className="col-[25/32] row-[13/16] ">
                <div className=" flex flex-col justify-center h-full font-bold shadow-xl bg-brown-light rounded-2xl">
                    <h2 className="absolute pl-[2vw] text-[3vw] text-blue-dark">L&apos;idea</h2> 
                </div> 
            </div> 
        </div>
    </div>
    )
}