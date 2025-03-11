import ShapesDisplayer from "@/app/modules/ShapesDisplayer"
import SocialIcons from "@/app/modules/SocialIcons"
import FormPage from "./formPage"

export default function DesktopLayout() {
    return (
        <>
            <h1 className="text-[5vw] text-blue-dark col-[3/20] row-[1/6]">Contattaci</h1>

            <div className="hidden md:block row-[4/24] col-[38/40] bg-blue-light">
                <ShapesDisplayer
                    numShapes={3}
                    imgName1="/geometric_shapes/orange-4.png"
                    imgName2="/geometric_shapes/dark-8.png"
                    imgName3="/geometric_shapes/orange-4.png"
                    flexType="col" position="start" spin={true}
                />
            </div>
            <div className="hidden md:block row-[3/5] col-[20/47] bg-blue-dark">
                <ShapesDisplayer numShapes={1} imgName1="/geometric_shapes/light-8.png" position="start" spin={true} />
            </div>

            <div className="hidden md:block row-[26/28] col-[7/37] bg-blue-medium">
                <ShapesDisplayer
                    numShapes={3}
                    imgName1="/geometric_shapes/dark-8.png"
                    imgName2="/geometric_shapes/light-4.png"
                    imgName3="/geometric_shapes/dark-8.png"
                    position="start" spin={true}
                />
            </div>

            <div className="hidden md:block row-[23/30] col-[35/37] bg-blue-medium" />
            <div className="hidden md:block row-[23/25] col-[35/42] bg-blue-light" />
            <div className="hidden md:block row-[23/30] col-[40/42] bg-orange" />
            <div className="hidden md:block row-[28/30] col-[35/42] bg-blue-dark" />
            <div className="hidden md:block row-[28/30] col-[35/37] bg-blue-medium" />

            <div className="hidden md:block col-[46] bg-blue-dark w-[30vw] h-[100vw]" />

            <h3 className="hidden md:block row-[7/10] col-[48/56] text-blue-light text-[3vw] text-bold">PHONE</h3>
            <p className="hidden md:block row-[10/12] col-[48/55] text-brown-light text-[1.2vw] text-bold">+39 38904402325</p>

            <h3 className="hidden md:block row-[13/16] col-[48/58] text-blue-light text-[3vw] text-bold">E-MAIL</h3>
            <p className="hidden md:block row-[16/18] col-[48/58] text-brown-light text-[1.2vw] text-bold">samuele.risso30@gmail.com</p>

            <h3 className="hidden md:block row-[19/22] col-[48/53] text-blue-light text-[3vw] text-bold">SOCIAL</h3>
            <div className="flex flex-row justify-start row-[22/24] col-[48/58]">
                <SocialIcons color="#FFFFFF" />
            </div>

            <div className="hidden md:block bg-yellow row-[6/25] col-[7/34]">
                <FormPage />
            </div>
        </>
    )
}