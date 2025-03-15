import AboutUsCard from "@/app/pagesComponents/aboutUsCard"

export default function AboutUs(){
    return(
        <div className="hidden md:flex justify-center w-full">
            <div className="
            grid gap-[1vw] my-[5vw]
            grid-cols-[repeat(48,_minmax(0,_1vw))]
            grid-rows-[repeat(22,_minmax(0,_1vw))]
            ">
                {/* Angolo destro */}
                <div className="bg-blue-light h-full row-[4/13] col-[46/48]" />
                <div className="bg-blue-medium h-full row-[3/5] col-[17/48]" />

                {/* Angolo sinistro */}
                <div className="bg-blue-medium h-full row-[6/22] col-[2/4]" />
                <div className="bg-blue-light h-full row-[23/21] col-[2/41]" />

                {/* Tacche basso destra */}
                <div className="bg-blue-light h-full row-[20/23] col-[42/44]" />
                <div className="bg-blue-medium h-full row-[17/23] col-[44/46]" />
                <div className="bg-blue-dark h-full row-[14/23] col-[46/48]" />

                {/* Testo "About us" */}
                <h1 className="row-[1/6] col-[3/20] text-[6vw] text-blue-dark h-full">About Us</h1>

                <div className="row-[6] col-[9/26]">
                    <AboutUsCard fileName="test.png" width="100" height="100"   alt="" nome={"Risso Samuele "} descrizione1={"Junior Backend developer"} icona1={""} descrizione2={""} icona2={""} descrizione3={""} icona3={""}  />
                </div>

                <div className="row-[6] col-[24/42]">
                    <AboutUsCard fileName="test.png" width="100" height="100"   alt="" nome={"La Ferrara Antonino "} descrizione={"Junior Backend developer"} icona1={""} descrizione2={""} icona2={""} descrizione3={""} icona3={""}/>
                </div>

                <div className="row-[13] col-[9/26]">
                    <AboutUsCard fileName="test.png" width="100" height="100"   alt="" nome={"Bamouni Stive "} descrizione={"Junior Backend developer"} icona1={""} descrizione2={""} icona2={""} descrizione3={""} icona3={""}/>
                </div>

                <div className="row-[13] col-[24/42]">
                    <AboutUsCard fileName="test.png" width="100" height="100"   alt="" nome={"Donati Marco"} descrizione={"Junior Backend developer"} icona1={""} descrizione2={""} icona2={""} descrizione3={""} icona3={""}/>
                </div>
            </div>
        </div>
    )
}