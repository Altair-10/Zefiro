import AboutUsCard from "@/app/modules/AboutUsCard"
export default function AboutUs(){
    return(
        <div className="hidden md:flex justify-center w-full">
            <div className="
            grid gap-[1vw] my-[5vw]
            grid-cols-[repeat(48,_minmax(0,_1vw))]
            grid-rows-[repeat(31,_minmax(0,_1vw))]
            ">
                {/* Angolo destro */}
                {/* <div className="bg-blue-light h-full col-[59/61] row-[4/10]" />
                <div className="bg-blue-medium h-full col-[20/61] row-[3/5]" /> */}

                {/* Angolo sinistro */}
                {/* <div className="bg-blue-medium h-full col-[2/4] row-[10/27]" />
                <div className="bg-blue-light h-full col-[2/54] row-[26/28]" /> */}

                {/* Tacche basso destra */}
                {/* <div className="bg-blue-light h-full col-[55/57] row-[25/28]" />
                <div className="bg-blue-medium h-full col-[57/59] row-[20/28]" />
                <div className="bg-blue-dark h-full col-[59/61] row-[15/28]" /> */}

                {/* Testo "About us" */}
                {/* <div className="col-[3/20] row-[1/6]">
                    <h1 className="text-[5vw] text-blue-dark">About Us</h1>
                </div> */}

                {/* <div className="row-[6] col-[11/30]">
                    <AboutUsCard fileName="test.png" width="100" height="100"   alt="" nome={"Risso Samuele "} descrizione1={"Junior Backend developer"} icona1={""} descrizione2={""} icona2={""} descrizione3={""} icona3={""}  />
                </div>

                <div className="row-[6] col-[33/52]">
                    <AboutUsCard fileName="test.png" width="100" height="100"   alt="" nome={"La Ferrara Antonino "} descrizione={"Junior Backend developer"} icona1={""} descrizione2={""} icona2={""} descrizione3={""} icona3={""}/>
                </div>

                <div className="row-[16] col-[11/30]">
                    <AboutUsCard fileName="test.png" width="100" height="100"   alt="" nome={"Bamouni Stive "} descrizione={"Junior Backend developer"} icona1={""} descrizione2={""} icona2={""} descrizione3={""} icona3={""}/>
                </div>

                <div className="row-[16] col-[33/52]">
                    <AboutUsCard fileName="test.png" width="100" height="100"   alt="" nome={"Donati Marco"} descrizione={"Junior Backend developer"} icona1={""} descrizione2={""} icona2={""} descrizione3={""} icona3={""}/>
                </div> */}
            </div>
        </div>
    )
}