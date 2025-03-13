import ShapesDisplayer from "@/app/modules/ShapesDisplayer"
import SocialIcons from "@/app/modules/SocialIcons"
import FormPage from "@/app/modules/formPage"

export default function ContactUs() {
    return (
        <div className="hidden md:flex justify-center items-center w-full">
            <div className="
                grid gap-[0.5vw] md:mt-[4vw]
                grid-cols-[repeat(61,_minmax(0,_1vw))]
                grid-rows-[repeat(30,_minmax(0,_1vw))]
            ">
                <h1 className="text-[5vw] text-blue-dark col-[3/20] row-[1/6]">Contattaci</h1>

                <div className="row-[4/24] col-[38/40] bg-blue-light"></div>
                <div className="row-[3/5] col-[20/47] bg-blue-dark">
                    <ShapesDisplayer numShapes={1} imgName1="/geometric_shapes/light-8.png" position="start" spin={true} />
                </div>

                <div className="row-[26/28] col-[7/37] bg-blue-medium">
                    <ShapesDisplayer
                        numShapes={3}
                        imgName1="/geometric_shapes/dark-8.png"
                        imgName2="/geometric_shapes/light-4.png"
                        imgName3="/geometric_shapes/dark-8.png"
                        position="start" spin={true}
                    />
                </div>

                <div className="row-[23/30] col-[35/37] bg-blue-medium" />
                <div className="row-[23/25] col-[35/42] bg-blue-light" />
                <div className="row-[23/30] col-[40/42] bg-orange" />
                <div className="row-[28/30] col-[35/42] bg-blue-dark" />
                <div className="row-[28/30] col-[35/37] bg-blue-medium" />

                <div className="col-[46] bg-blue-dark w-[30vw] h-[48.6vw]" />

                <h3 className="row-[7/10] col-[48/56] text-blue-light text-[3vw] text-bold">PHONE</h3>
                <p className="row-[10/12] col-[48/55] text-brown-light text-[1.2vw] text-bold">+39 38904402325</p>

                <h3 className="row-[13/16] col-[48/58] text-blue-light text-[3vw] text-bold">E-MAIL</h3>
                <p className="row-[16/18] col-[48/58] text-brown-light text-[1.2vw] text-bold">samuele.risso30@gmail.com</p>

                <h3 className="row-[19/22] col-[48/53] text-blue-light text-[3vw] text-bold">SOCIAL</h3>
                <div className="flex flex-row justify-start row-[22/24] col-[48/58]">
                    <SocialIcons color="#FFFFFF" />
                </div>

                {/* <div className="row-[6/25] col-[7/34] w-[38vw] h-[28vw] pt-[3vw]">
                    <FormPage />
                </div> */}
            </div>
        </div>
    )
}