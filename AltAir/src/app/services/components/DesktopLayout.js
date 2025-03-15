import ShapesDisplayer from "@/app/modules/shapesDisplayer";
import Cards from "./cards";

export default function DesktopLayout(){
    return(
        <>
        <div className="hidden md:block text-[5vw] text-blue-dark col-[3/25] row-[1/6]">
            <h1>Our services</h1>
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
        </>
    )
}