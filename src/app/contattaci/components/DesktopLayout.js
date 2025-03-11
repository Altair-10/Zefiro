import Image from "next/image"
import ShapesDisplayer from "@/app/modules/ShapesDisplayer"

export default function DesktopLayout(){
    return(
        <>
        <h1 className="text-[5vw] text-blue-dark col-[3/20] row-[1/6]">Contattaci</h1>
        <div className="hidden md:block row-[4/24] col-[35/37] bg-blue-light">
            <ShapesDisplayer 
                numShapes={3} 
                imgName1="/geometric_shapes/orange-4.png" 
                imgName2="/geometric_shapes/dark-8.png"
                imgName3="/geometric_shapes/orange-4.png" 
                flexType="col" position="center" spin={true}
            />
        </div>
        <div className="hidden md:block row-[3/5] col-[20/47] bg-blue-dark">
            <ShapesDisplayer numShapes={1} imgName1="/geometric_shapes/light-8.png" position="start" spin={true}/>
        </div>
        <div className="hidden md:block row-[26/28] col-[5/33] bg-blue-medium">
            <ShapesDisplayer 
                numShapes={2} 
                imgName1="/geometric_shapes/dark-8.png" 
                imgName2="/geometric_shapes/light-8.png"
                position="start" spin={true}
            />
        </div>
        <div className="hidden md:block row-[23/30] col-[32/34] bg-blue-medium">
        
        </div>
        <div className="hidden md:block row-[23/25] col-[32/38] bg-blue-light">
            
        </div>
        <div className="hidden md:block row-[23/30] col-[37/39] bg-orange" />
        <div className="hidden md:block row-[28/30] col-[33/39] bg-blue-dark" />
        <div className="hidden md:block row-[28/30] col-[32/34] bg-blue-medium" />
        <div className="hidden md:block col-[46] bg-blue-dark w-[30vw] h-[100vw]"/>
        <h1 className="hidden md:block row-[7/10] col-[48/56] text-blue-light text-[3vw] text-bold">PHONE</h1>
        <h1 className="hidden md:block row-[10/12] col-[48/55] text-brown-light text-[1vw] text-bold">(+39) 38904402325</h1>
        <h1 className="hidden md:block row-[13/16] col-[48/58] text-blue-light text-[3vw] text-bold">E-MAIL</h1>
        <h1 className="hidden md:block row-[16/18] col-[48/58] text-brown-light text-[1vw] text-bold">samuele.risso30@gmail.com</h1>
        <h1 className="hidden md:block row-[19/22] col-[48/53] text-blue-light text-[3vw] text-bold">SOCIAL</h1>
        <div className="flex flex-row justify-start row-[22/24] col-[48/58]">
            <button>
                <Image 
                    src="/loghi_social/instagram-b.png"
                    width={1000}
                    height={1000}
                    alt="instagram"
                    className="w-[5.5vw] md:w-[5vw] lg:w-[4vw] xl:w-[3.2vw]"
                />
            </button>
            <button>
                <Image 
                    src="/loghi_social/facebook-b.png"
                    width={1000}
                    height={1000}
                    alt="facebook" 
                    className="w-[5.5vw] md:w-[5vw] lg:w-[4vw] xl:w-[3.2vw]"
                />
            </button>
            <button>
                <Image 
                    src="/loghi_social/linkedin-b.png"
                    width={1000}
                    height={1000}
                    alt="linkedin" 
                    className="w-[5.5vw] md:w-[5vw] lg:w-[4vw] xl:w-[3.2vw]"
                />
            </button>
        </div>
        </>
    )
}