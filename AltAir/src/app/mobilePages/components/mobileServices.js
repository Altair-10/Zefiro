import ShapesDisplayer from "@/app/pagesComponents/shapesDisplayer"

export default function MobileServices(){
    return(
        <div className="md:hidden flex justify-center items-center w-full">
            <div className="
                grid gap-[0.5vw] my-[5vw]
                grid-cols-[repeat(31,_minmax(0,_2vw))]
                grid-rows-[repeat(45,_minmax(0,_2vw))]
            ">
                <div className="col-[5/28] row-[2/7]">
                    <h1 className="text-[10vw] text-blue-dark ">Our services</h1>
                </div>
                <div className="row-[12/14] col-[3/30] bg-blue-light">
                    <ShapesDisplayer numShapes={1} imgName1={"/decorations/dark-8.png"} position="start" spin={true} />
                </div>
                <div className="row-[14/16] col-[3/30] bg-blue-medium">
                    <ShapesDisplayer numShapes={1} imgName1={"/decorations/dark-8.png"} position="start" spin={true} />
                </div>
                <div className="row-[16/18] col-[3/30] bg-blue-dark">
                    <ShapesDisplayer numShapes={1} imgName1={"/decorations/dark-8.png"} position="start" spin={true} />
                </div>

                <div className="row-[23/25] col-[3/30] bg-blue-light">
                    <ShapesDisplayer numShapes={1} imgName1={"/decorations/dark-8.png"} position="start" spin={true} />
                </div>
                <div className="row-[25/27] col-[3/30] bg-blue-medium">
                    <ShapesDisplayer numShapes={1} imgName1={"/decorations/dark-8.png"} position="start" spin={true} />
                </div>
                <div className="row-[27/29] col-[3/30] bg-blue-dark">
                    <ShapesDisplayer numShapes={1} imgName1={"/decorations/dark-8.png"} position="start" spin={true} />
                </div>

                <div className="row-[34/36] col-[3/30] bg-blue-light">
                    <ShapesDisplayer numShapes={1} imgName1={"/decorations/dark-8.png"} position="start" spin={true} />
                </div>
                <div className="row-[36/38] col-[3/30] bg-blue-medium">
                    <ShapesDisplayer numShapes={1} imgName1={"/decorations/dark-8.png"} position="start" spin={true} />
                </div>
                <div className="row-[38/40] col-[3/30] bg-blue-dark">
                    <ShapesDisplayer numShapes={1} imgName1={"/decorations/dark-8.png"} position="start" spin={true} />
                </div>
            </div>
        </div>
    )
}