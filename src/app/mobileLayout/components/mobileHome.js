import Link from "next/link"
import NavBar from "@/app/modules/NavBar"
import ShapesDisplayer from "@/app/modules/ShapesDisplayer"

const linkContattaci="../contattaci"

export default function MobileHome(){
    return(
      <div className="flex justify-center items-center w-full">
        <div className="
          md:hidden
          grid gap-[0.5vw]
          grid-cols-[repeat(35,_minmax(0,_2vw))]
          grid-rows-[repeat(23,_minmax(0,_2vw))]
        ">
          <div className="row-[3/18] col-[1/3] bg-blue-light md:hidden" />
            <div className="row-[16/18] col-[1/9] bg-blue-light md:hidden">
              <ShapesDisplayer 
                numShapes={1} 
                imgName1={"/geometric_shapes/dark-8.png"}
                spin={true}
              />
            </div>
            <div className="row-[3/5] col-[1/11] bg-blue-medium md:hidden">
              <ShapesDisplayer 
                numShapes={1} 
                imgName1={"/geometric_shapes/light-4.png"}
                position="center" spin={true}
              />
            </div>
            <div className="row-[16/18] col-[1/9] bg-blue-light md:hidden"></div>
            <div className="row-[18/20] col-[1/14] bg-blue-medium md:hidden">
              <ShapesDisplayer 
                numShapes={1} 
                imgName1={"/geometric_shapes/orange-5.png"}
                position="start" spin={true}
              />
            </div>
            <div className="row-[20/22] col-[1/35] bg-blue-dark md:hidden">
              <ShapesDisplayer 
                numShapes={4} 
                imgName1={"/geometric_shapes/light-8.png"}
                imgName2={"/geometric_shapes/medium-4.png"}
                imgName3={"/geometric_shapes/medium-4.png"}
                imgName4={"/geometric_shapes/light-8.png"}
                spin={true}
              />
            </div>

            <div className="row-[7] col-[4] md:hidden">
              <h1 className="w-[85vw] text-[10vw] font-serif text-blue-dark">
                take IT for future
              </h1>
            </div>
            <div className="md:hidden row-[13/16] col-[10/28] bg-orange rounded-3xl">
              <Link href={linkContattaci} className="flex justify-center items-center w-full h-full">
                <h1 className="text-brown-light text-[4vw] text-center">
                  contattaci
                </h1>
              </Link>
            </div>
          </div>
        </div>
    )
}