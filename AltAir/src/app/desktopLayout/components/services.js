import ShapesDisplayer from "@/app/modules/ShapesDisplayer";
import Cards from "@/app/services/components/cards";

export default function Services(){
    return(
        <div className="flex justify-center items-center w-full">
            <div className="
            grid gap-[0.5vw] mt-[10vw] 
            grid-cols-[repeat(30,_minmax(0,_2vw))] md:grid-cols-[repeat(61,_minmax(0,_1vw))]
            grid-rows-[repeat(45,_minmax(0,_2vw))] md:grid-rows-[repeat(31,_minmax(0,_1vw))]
            ">
                <div className="hidden md:block col-[3/25] row-[1/6]">
                    <h1 className="text-[5vw] text-blue-dark font-bold">Our Services</h1>
                </div>
                <div className="hidden md:block row-[3/5] col-[25/60] bg-blue-medium">
                    <ShapesDisplayer numShapes={1} imgName1={"/geometric_shapes/dark-8.png"} position="start" spin={true} />
                </div>
                <div className="hidden md:block row-[16/18] col-[3/60] bg-blue-light">
                    <ShapesDisplayer numShapes={1} imgName1={"/geometric_shapes/orange-4.png"} spin={true} />
                </div>
                <div className="hidden md:block row-[18/20] col-[3/60] bg-blue-medium">
                    <ShapesDisplayer numShapes={1} imgName1={"/geometric_shapes/light-8.png"} spin={true} />
                </div>
                <div className="hidden md:block row-[20/22] col-[3/60] bg-blue-dark">
                    <ShapesDisplayer numShapes={1} imgName1={"/geometric_shapes/orange-4.png"} spin={true} />
                </div>
                {/* <div className="hidden md:block row-[10/30] col-[10/60]">
                    <Cards />
                </div> */}
            </div>
        </div>
    )
}