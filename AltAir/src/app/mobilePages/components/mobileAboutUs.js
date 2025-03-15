import AboutUsCard from "@/app/pagesComponents/aboutUsCard"
import ShapesDisplayer from "@/app/pagesComponents/shapesDisplayer"

export default function MobileAboutUs(){
    return(
        <div className="md:hidden flex justify-center items-center w-full">
            <div className="
            grid gap-[0.5vw]
            grid-cols-[repeat(30,_minmax(0,_2vw))]
            grid-rows-[repeat(35,_minmax(0,_2vw))]
            ">
                {/* Angolo destro */}
                <div className="bg-blue-light h-full col-[1/3] row-[3/45]">
                    <ShapesDisplayer 
                        numShapes={2} 
                        imgName1="/geometric_shapes/dark-8.png" 
                        imgName2="/geometric_shapes/medium-5.png"
                        flexType="col" position="start" spin={true}
                    />
                </div>
                <div className="bg-blue-medium h-full col-[28/30] row-[3/45]">
                    <ShapesDisplayer 
                        numShapes={2} 
                        imgName1="/geometric_shapes/dark-8.png" 
                        imgName2="/geometric_shapes/light-5.png"
                        flexType="col" position="start" spin={true}    
                    />
                </div>

                <div className="text-[10vw] text-blue-dark col-[8/25] row-[2/7]">
                    <h1>About Us</h1>
                </div>

                <div className="row-[9] col-[5/27]">
                    <AboutUsCard fileName="test.png" width="100" height="100" alt="" nome={"Samuele Risso"} descrizione={"Junior Backend developer"} />
                </div>

                <div className="row-[18] col-[5/27]">
                    <AboutUsCard fileName="test.png" width="100" height="100" alt=""/>
                </div>

                <div className="row-[27] col-[5/27]">
                    <AboutUsCard fileName="test.png" width="100" height="100" alt="" />  
                </div>

                <div className="row-[36] col-[5/27]">
                    <AboutUsCard fileName="test.png" width="100" height="100" alt=""/>
                </div>
            </div>
        </div>
    )
}