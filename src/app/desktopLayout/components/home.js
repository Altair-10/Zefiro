import Link from "next/link"
import ShapesDisplayer from "@/app/modules/ShapesDisplayer"

const linkContattaci = "../contattaci"

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="
          grid gap-[0.5vw] mt-[4vw]
          grid-cols-[repeat(61,_minmax(0,_1vw))]
          grid-rows-[repeat(23,_minmax(0,_1vw))]
        ">
        <div className="hidden md:block row-[1/3] col-[16/62] bg-blue-dark">
          <ShapesDisplayer
            numShapes={2}
            imgName1={"/geometric_shapes/orange-8.png"}
            imgName2={"/geometric_shapes/light-4.png"}
            position="start" spin={true}
          />
        </div>
        <div className="hidden md:block row-[3/5] col-[24/45] bg-blue-light">
          <ShapesDisplayer
            numShapes={1}
            imgName1={"/geometric_shapes/medium-5.png"}
            position="start" spin={true}
          />
        </div>
        <div className="hidden md:block row-[3/5] col-[45/58] bg-blue-medium">
          <ShapesDisplayer
            numShapes={2}
            imgName1={"/geometric_shapes/light-8.png"}
            imgName2={"/geometric_shapes/orange-4.png"}
            position="start" spin={true}
          />
        </div>
        <div className="hidden md:block row-[5/14] col-[28/32] bg-blue-medium"></div>
        <div className="hidden md:block row-[3/14] col-[58/62] bg-blue-light"></div>
        <div className="hidden md:block row-[12/14] col-[32/44] bg-blue-light"></div>
        <div className="hidden md:block row-[12/14] col-[44/58] bg-blue-medium"></div>
        <div className="hidden md:block row-[14/16] col-[20/35] bg-blue-medium"></div>
        <div className="hidden md:block row-[14/16] col-[40/52] bg-blue-light">
          <ShapesDisplayer
            numShapes={3}
            imgName1={"/geometric_shapes/dark-4.png"}
            imgName2={"/geometric_shapes/dark-5.png"}
            imgName3={"/geometric_shapes/dark-4.png"}
            position="center" spin={true}
          />
        </div>
        <div className="hidden md:block row-[14/16] col-[52/62] bg-blue-dark"></div>
        <div className="hidden md:block row-[16/18] col-[15/20] bg-blue-dark"></div>
        <div className="hidden md:block row-[16/18] col-[20/22] bg-blue-light">
          <ShapesDisplayer
            numShapes={1}
            imgName1={"/decorations/p-graffe.png"}
          />
        </div>
        <div className="hidden md:block row-[16/18] col-[26/41] bg-blue-dark"></div>
        <div className="hidden md:block row-[16/18] col-[41/48] bg-blue-medium"></div>
        <div className="hidden md:block row-[16/18] col-[48/62] bg-blue-light"></div>
        <div className="hidden md:block row-[16/20] col-[22/26] bg-blue-light">
          <ShapesDisplayer
            numShapes={1}
            imgName1={"/geometric_shapes/dark-5.png"}
            position="center" spin={true}
          />
        </div>
        <div className="hidden md:block row-[18/20] col-[15/22] bg-blue-medium"></div>
        <div className="hidden md:block row-[18/20] col-[26/28] bg-blue-light">
          <ShapesDisplayer
            numShapes={1}
            imgName1={"/decorations/p-angolari.png"}
          />
        </div>
        <div className="hidden md:block row-[18/22] col-[28/40] bg-blue-medium">
          <ShapesDisplayer
            numShapes={1}
            imgName1={"/geometric_shapes/orange-4.png"}
            position="center" spin={true}
          />
        </div>
        <div className="hidden md:block row-[18/22] col-[56/62] bg-blue-dark">
          <ShapesDisplayer
            numShapes={2}
            imgName1={"/geometric_shapes/light-4.png"}
            imgName2={"/geometric_shapes/medium-8.png"}
            position="center" spin={true}
          />
        </div>
        <div className="hidden md:block row-[20/22] col-[12/17] bg-blue-dark">
          <ShapesDisplayer
            numShapes={1}
            imgName1={"/geometric_shapes/light-8.png"}
            spin={true}
          />
        </div>
        <div className="hidden md:block row-[22/24] col-[4/62] bg-blue-light">
          <ShapesDisplayer
            numShapes={1}
            imgName1={"/geometric_shapes/dark-8.png"}
            position="start" spin={true}
          />
        </div>

        <div className="hidden md:block row-[4] col-[1/5]">
          <h1 className="w-[35vw] text-[7vw] leading-[8vw] font-serif text-blue-dark">take IT for future</h1>
        </div>
        <div className="hidden md:block row-[16/19] col-[1/13]">
          <Link href={linkContattaci}>
            <button className="custom-button">
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                  </svg>
                </div>
              </div>
              <span>CONTATTACI</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}