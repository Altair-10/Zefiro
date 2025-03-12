import AboutUsCard from "@/app/modules/AboutUsCard"
export default function AboutUs(){
    return(
        <div className="flex justify-center w-full">
            <div className="
            grid gap-[0.5vw] mt-[10vw]
            grid-cols-[repeat(30,_minmax(0,_2vw))] md:grid-cols-[repeat(61,_minmax(0,_1vw))]
            grid-rows-[repeat(45,_minmax(0,_2vw))] md:grid-rows-[repeat(31,_minmax(0,_1vw))]
            ">
                {/* Angolo destro */}
                <div className="hidden md:block bg-blue-light h-full col-[59/61] row-[4/10]" />
                <div className="hidden md:block bg-blue-medium h-full col-[20/61] row-[3/5]" />

                {/* Angolo sinistro */}
                <div className="hidden md:block bg-blue-medium h-full col-[2/4] row-[10/31]" />
                <div className="hidden md:block bg-blue-light h-full col-[2/50] row-[29/31]" />

                {/* Tacche basso destra */}
                <div className="hidden md:block bg-blue-light h-full col-[53/55] row-[25/31]" />
                <div className="hidden md:block bg-blue-medium h-full col-[56/58] row-[20/31]" />
                <div className="hidden md:block bg-blue-dark h-full col-[59/61] row-[15/31]" />

                {/* Testo "About us" */}

                <div className="hidden md:block text-[5vw] text-blue-dark col-[3/20] row-[1/6]">
                    <h1>About Us</h1>
                </div>

                <div className="hidden md:block row-[7] col-[9/28]">
                    <AboutUsCard fileName="test.png" width="100" height="100"   alt="" />
                </div>

                <div className="hidden md:block row-[7] col-[32/51]">
                    <AboutUsCard fileName="test.png" width="100" height="100"   alt=""/>
                </div>

                <div className="hidden md:block row-[17] col-[9/28]">
                    <AboutUsCard fileName="test.png" width="100" height="100"   alt="" />  
                </div>

                <div className="hidden md:block row-[17] col-[32/51]">
                    <AboutUsCard fileName="test.png" width="100" height="100"   alt=""/>
                </div>
            </div>
        </div>
    )
}