import ShapesDisplayer from "@/app/modules/ShapesDisplayer";
import Cards from "./cards";

export default function DesktopLayout(){
    return(
        <>
        <h1 className="text-[5vw] text-blue-dark col-[3/20] row-[1/6]">Contattaci</h1>
        <div className="row-[16/18] col-[10/60] bg-blue-light">
            <ShapesDisplayer numShapes={1} imgName1={"/geometric_shapes/orange-8.png"} spin={true} />
        </div>
        <div className="row-[18/20] col-[10/60] bg-blue-medium">
            <ShapesDisplayer
                numShapes={2}
                imgName1={"/geometric_shapes/orange-8.png"}
                imgName2={"/geometric_shapes/light-4.png"}
                spin={true}
            />
        </div>
        <div className="row-[20/22] col-[10/60] bg-blue-dark">
            <ShapesDisplayer numShapes={1} imgName1={"/geometric_shapes/orange-8.png"} spin={true} />
        </div>
        <div className="row-[10/30] col-[10/60]">
            <Cards />
        </div>
        </>
    )}