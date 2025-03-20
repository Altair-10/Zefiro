import AboutUsCard from "@/app/pagesComponents/aboutUsCard"
import ShapesDisplayer from "@/app/pagesComponents/shapesDisplayer"

export default function AboutUs(){
    return(   
        <div className="flex justify-center w-full">
            <div className="
                grid gap-[0.5vw] md:gap-[1vw] my-[5vw]
                grid-rows-[repeat(45,_minmax(0,_2vw))] md:grid-rows-[repeat(22,_minmax(0,_1vw))]
                grid-cols-[repeat(30,_minmax(0,_2vw))] md:grid-cols-[repeat(48,_minmax(0,_1vw))]
            ">
                {/* Testo "About us" */}
                <h1 className="
                    row-[2/7] col-[8/25] md:row-[1/6] md:col-[3/20] 
                    text-[10vw] md:text-[6vw] 
                    text-blue-dark h-full
                ">
                    About Us
                </h1>

                <div className="row-[9] col-[5/27] md:row-[6] md:col-[9/26]">
                    <AboutUsCard fileName="test.png" width="100" height="100"   alt="" nome={"Risso Samuele "} descrizione1={"Junior Backend developer"} icona1={""} descrizione2={""} icona2={""} descrizione3={""} icona3={""}  />
                </div>

                <div className="row-[18] col-[5/27] md:row-[6] md:col-[24/42]">
                    <AboutUsCard fileName="test.png" width="100" height="100"   alt="" nome={"La Ferrara Antonino "} descrizione={"Junior Backend developer"} icona1={""} descrizione2={""} icona2={""} descrizione3={""} icona3={""}/>
                </div>

                <div className="row-[27] col-[5/27] md:row-[13] md:col-[9/26]">
                    <AboutUsCard fileName="test.png" width="100" height="100"   alt="" nome={"Bamouni Stive "} descrizione={"Junior Backend developer"} icona1={""} descrizione2={""} icona2={""} descrizione3={""} icona3={""}/>
                </div>

                <div className="row-[36] col-[5/27] md:row-[13] md:col-[24/42]">
                    <AboutUsCard fileName="test.png" width="100" height="100"   alt="" nome={"Donati Marco"} descrizione={"Junior Backend developer"} icona1={""} descrizione2={""} icona2={""} descrizione3={""} icona3={""}/>
                </div>

{/* RETTANGOLI MOBILE */}
                {/* Angolo destro */}
                <div className="md:hidden row-[3/45] col-[1/3] bg-blue-light h-full">
                    <ShapesDisplayer 
                        numShapes={2} 
                        imgName1="/FormeSVG/blue-8.svg" 
                        imgName2="/FormeSVG/blue-6.svg"
                        flexType="col" position="start" spin={true}
                    />
                </div>
                <div className="md:hidden row-[3/45] col-[28/30] bg-blue-medium h-full">
                    <ShapesDisplayer 
                        numShapes={2} 
                        imgName1="/FormeSVG/blue-8.svg" 
                        imgName2="/FormeSVG/blue-6.svg"
                        flexType="col" position="start" spin={true}    
                    />
                </div>

{/* RETTANGOLI DESKTOP */}
                {/* Angolo destro */}
                <div className="hidden md:block row-[4/13] col-[46/48] bg-blue-light h-full" />
                <div className="hidden md:block row-[3/5] col-[17/48] bg-blue-medium h-full" />

                {/* Angolo sinistro */}
                <div className="hidden md:block row-[6/22] col-[2/4] bg-blue-medium h-full" />
                <div className="hidden md:block row-[23/21] col-[2/41] bg-blue-light h-full" />

                {/* Tacche basso destra */}
                <div className="hidden md:block row-[20/23] col-[42/44] bg-blue-light h-full" />
                <div className="hidden md:block row-[17/23] col-[44/46] bg-blue-medium h-full" />
                <div className="hidden md:block row-[14/23] col-[46/48] bg-blue-dark h-full" />
            </div>
        </div>
    )
}