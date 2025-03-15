import ShapesDisplayer from "@/app/modules/ShapesDisplayer"
import Footer from "@/app/modules/footer"

export default function ContactUs() {
    return (
        <div className="hidden md:flex flex-col justify-center items-center w-full">
            <div className="
                grid gap-[1vw] md:my-[5vw]
                grid-cols-[repeat(48,_minmax(0,_1vw))]
                grid-rows-[repeat(22,_minmax(0,_1vw))]
            ">
                <h1 className="row-[1/6] col-[3/20] text-[6vw] text-blue-dark h-full">Contattaci</h1>

                <div className="row-[4/14] col-[46/48] bg-blue-light" />
                <div className="row-[3/5] col-[20/48] bg-blue-dark">
                    <ShapesDisplayer numShapes={1} imgName1="/geometric_shapes/light-8.png" position="start" spin={true} />
                </div>

                <div className="row-[20/22] col-[2/40] bg-blue-medium">
                    <ShapesDisplayer
                        numShapes={3}
                        imgName1="/geometric_shapes/dark-8.png"
                        imgName2="/geometric_shapes/light-4.png"
                        imgName3="/geometric_shapes/dark-8.png"
                        position="start" spin={true}
                    />
                </div>
                <div className="row-[16/22] col-[41/43] bg-blue-medium" />
                <div className="row-[15/17] col-[41/48] bg-blue-light" />
                <div className="row-[15/22] col-[46/48] bg-orange" />
                <div className="row-[20/22] col-[41/48] bg-blue-dark" />
                <div className="row-[20/22] col-[41/43] bg-blue-medium" />
            </div>
            <Footer />
        </div>
    )
}