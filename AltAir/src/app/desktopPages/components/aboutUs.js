// import AboutUsCard from "@/app/modules/AboutUsCard"
// export default function AboutUs(){
//     return(
//         <div className="flex justify-center w-full">
//             <div className="
//             grid gap-[0.5vw] mt-[10vw]
//             grid-cols-[repeat(30,_minmax(0,_2vw))] md:grid-cols-[repeat(61,_minmax(0,_1vw))]
//             grid-rows-[repeat(45,_minmax(0,_2vw))] md:grid-rows-[repeat(31,_minmax(0,_1vw))]
//             ">
//                 {/* Angolo destro */}
//                 <div className="  bg-blue-light h-full col-[59/61] row-[4/10]" />
//                 <div className="  bg-blue-medium h-full col-[20/61] row-[3/5]" />

//                 {/* Angolo sinistro */}
//                 <div className="  bg-blue-medium h-full col-[2/4] row-[10/31]" />
//                 <div className="  bg-blue-light h-full col-[2/50] row-[29/31]" />

//                 {/* Tacche basso destra */}
//                 <div className="  bg-blue-light h-full col-[53/55] row-[25/31]" />
//                 <div className="  bg-blue-medium h-full col-[56/58] row-[20/31]" />
//                 <div className="  bg-blue-dark h-full col-[59/61] row-[15/31]" />

//                 {/* Testo "About us" */}

//                 <div className="  text-[5vw] text-blue-dark col-[3/20] row-[1/6]">
//                     <h1>About Us</h1>
//                 </div>

//                 <div className="  row-[7] col-[9/28]">
//                     <AboutUsCard fileName="test.png" width="100" height="100"   alt="" nome={"Risso Samuele "} descrizione1={"Junior Backend developer"} icona1={""} descrizione2={""} icona2={""} descrizione3={""} icona3={""}  />
//                 </div>

//                 <div className="  row-[7] col-[32/51]">
//                     <AboutUsCard fileName="test.png" width="100" height="100"   alt="" nome={"La Ferrara Antonino "} descrizione={"Junior Backend developer"} icona1={""} descrizione2={""} icona2={""} descrizione3={""} icona3={""}/>
//                 </div>

//                 <div className="  row-[17] col-[9/28]">
//                     <AboutUsCard fileName="test.png" width="100" height="100"   alt="" nome={"Bamouni Stive "} descrizione={"Junior Backend developer"} icona1={""} descrizione2={""} icona2={""} descrizione3={""} icona3={""}/>  
//                 </div>

//                 <div className="  row-[17] col-[32/51]">
//                     <AboutUsCard fileName="test.png" width="100" height="100"   alt="" nome={"Donati Marco"} descrizione={"Junior Backend developer"} icona1={""} descrizione2={""} icona2={""} descrizione3={""} icona3={""}/>
//                 </div>
//             </div>
//         </div>
//     )
// }

import Image from 'next/image';
export default function idea(){
    return(
        <div className="hidden md:flex justify-center w-full">
            <div className="
            grid gap-[0.5vw] mt-[10vw]
            grid-cols-[repeat(30,_minmax(0,_2vw))] md:grid-cols-[repeat(61,_minmax(0,_1vw))]
            grid-rows-[repeat(45,_minmax(0,_2vw))] md:grid-rows-[repeat(31,_minmax(0,_1vw))]
            ">
                <div className="  bg-blue-light w-full col-[46/61] row-[2/4]" />
                {/* Angolo destro */}
                <div className="  bg-blue-light h-full col-[52/61] row-[2/4]" />
                <div className="  bg-blue-medium h-full col-[55/61] row-[5/7]" />
                <div className="  bg-blue-dark h-full col-[58/61] row-[8/10]" />

                {/* Angolo sinistro */}
                <div className="  bg-blue-medium h-full col-[2/4] row-[10/31]" />
                <div className="  bg-blue-light h-full col-[2/50] row-[29/31]" />

                {/* take IT fore future */}

                <div className="col-[5/28] row-[5/27]  bg-orange rounded-3xl">
                </div>
                <div className="col-[6/29]  ">
                
                    <Image  
                        src={`/loghi_altair/BigLogoLight.png`}
                        width={748}
                        height={333}
                        alt=''
                        className="w-[50vw] h-[15vw]"
                    />
                </div>
                <div className=" text-[1.8vw] text-black col-[7/22] row-[9]  font-serif font-bold text-right">
                    <h1>take IT for future</h1>
                </div>

                <div className=" text-[1.5vw] text-blue-dark font-bold  col-[6/27] row-[11] text-center">
                    <h1>Negli ultimi anni in Italia<br/> si è accumulato un enorme ritardo<br/> tecnologico rispetto al resto del mondo. <br/> Questo porta realtà italiane a scomparire sotto la forza di quelle straniere, più tecnologiche e competitive.<br/> &quot;take IT for future&quot;  <br/> è la soluzione che proponiamo, aggiornarsi oggi per essere avantaggiati domani.
                    </h1>  
                </div>

                 {/* Il Progetto */}
                <div className=" col-[29/55] row-[5/14]  bg-blue-dark rounded-3xl">
                </div>
                <div className=" text-[4vw] text-blue-light col-[29/44] row-[5] font-bold text-right">
                    <h1>Il Progetto</h1>
                </div>
                <div className=" text-[1vw] text-brown-light font-bold  col-[29/54] row-[9] text-center">
                    <h1>
                        AltAir nasce a febbraio 2025 dalla collaborazione di 4 amici che dopo aver condiviso 2 anni di studio hanno deciso di mettersi in gioco, mettendo a disposizione competenze, serietà lavorativa ed affidabilità
                    </h1>  
                </div>

                {/* L'idea  */}
                <div className=" col-[29/55] row-[15/27]  bg-blue-light rounded-3xl">
                </div>
                <div className=" text-[4vw] text-blue-dark col-[31] row-[13] font-bold text-right">
                    <h1>Idea</h1>
                </div>
                <div className=" text-[1.3vw] text-blue-dark font-bold  col-[30/53] row-[17] text-center">
                    <h1> 
                        La nostra idea nasce da un’esigenza: assistere le realtà italiane incentivando la loro presenza online. Essere tecnologicamente sviluppati permette di poter raggiungere più clienti e facilitarne la gestione rendendo piu efficiente il Proprio business. Per questo offriamo e invitiamo ad usufruire dei nostri servizi.
                    </h1>  
                </div>
            </div>
        </div>
    )
}