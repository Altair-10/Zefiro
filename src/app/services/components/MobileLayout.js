import ShapesDisplayer from "@/app/modules/ShapesDisplayer";
import Cards from "./cards";

export default function DesktopLayout(){
    return(
        <>
        <div className="md:hidden text-[10vw] text-blue-dark col-[5/28] row-[2/7]">
            <h1>Our services</h1>
        </div>
        <div className="md:hidden row-[12/14] col-[3/30] bg-blue-light">
            <ShapesDisplayer numShapes={1} imgName1={"/geometric_shapes/dark-8.png"} position="start" spin={true} />
        </div>
        <div className="md:hidden row-[14/16] col-[3/30] bg-blue-medium">
            <ShapesDisplayer numShapes={1} imgName1={"/geometric_shapes/dark-8.png"} position="start" spin={true} />
        </div>
        <div className="md:hidden row-[16/18] col-[3/30] bg-blue-dark">
            <ShapesDisplayer numShapes={1} imgName1={"/geometric_shapes/dark-8.png"} position="start" spin={true} />
        </div>

        <div className="md:hidden row-[23/25] col-[3/30] bg-blue-light">
            <ShapesDisplayer numShapes={1} imgName1={"/geometric_shapes/dark-8.png"} position="start" spin={true} />
        </div>
        <div className="md:hidden row-[25/27] col-[3/30] bg-blue-medium">
            <ShapesDisplayer numShapes={1} imgName1={"/geometric_shapes/dark-8.png"} position="start" spin={true} />
        </div>
        <div className="md:hidden row-[27/29] col-[3/30] bg-blue-dark">
            <ShapesDisplayer numShapes={1} imgName1={"/geometric_shapes/dark-8.png"} position="start" spin={true} />
        </div>

        <div className="md:hidden row-[34/36] col-[3/30] bg-blue-light">
            <ShapesDisplayer numShapes={1} imgName1={"/geometric_shapes/dark-8.png"} position="start" spin={true} />
        </div>
        <div className="md:hidden row-[36/38] col-[3/30] bg-blue-medium">
            <ShapesDisplayer numShapes={1} imgName1={"/geometric_shapes/dark-8.png"} position="start" spin={true} />
        </div>
        <div className="md:hidden row-[38/40] col-[3/30] bg-blue-dark">
            <ShapesDisplayer numShapes={1} imgName1={"/geometric_shapes/dark-8.png"} position="start" spin={true} />
        </div>
        
        </>
    )
}