import Link from "next/link"
import ShapesDisplayer from "@/app/pagesComponents/shapesDisplayer"

const linkContattaci = "../contattaci"

export default function Home() {
  return (
    <div className="hidden md:flex justify-center items-center w-full mt-[2.5vw]">
      <div className="
        grid gap-[1vw] my-[5vw]
        grid-cols-[repeat(48,_minmax(0,_1vw))]
        grid-rows-[repeat(19,_minmax(0,_1vw))]
      ">
        {/*1° riga*/}
        <div className="row-[1/3] col-[16/48] bg-blue-dark">
          <ShapesDisplayer
            numShapes={2}
            imgName1={"/geometric_shapes/orange-8.png"}
            imgName2={"/geometric_shapes/light-4.png"}
            flexType="row" position="start" spin={true}
          />
        </div>

        {/*2° riga*/}
        <div className="row-[3/5] col-[24/36] bg-blue-light">
          <ShapesDisplayer
            numShapes={1}
            imgName1={"/geometric_shapes/medium-5.png"}
            flexType="row" position="start" spin={true}
          />
        </div>
        <div className="row-[3/5] col-[36/44] bg-blue-medium">
          <ShapesDisplayer
            numShapes={2}
            imgName1={"/geometric_shapes/dark-8.png"}
            imgName2={"/geometric_shapes/orange-4.png"}
            flexType="row" position="start" spin={true}
          />
        </div>

        {/*rettangoli verticali*/}
        <div className="row-[5/12] col-[28/32] bg-blue-medium"></div>
        <div className="row-[3/12] col-[44/48] bg-blue-light"></div>

        {/*3° riga*/}
        <div className="row-[10/12] col-[32/38] bg-blue-dark">
          <ShapesDisplayer
            numShapes={2}
            imgName1={"/geometric_shapes/light-8.png"}
            imgName2={"/geometric_shapes/orange-4.png"}
            flexType="row" position="start" spin={true}
          />
        </div>
        <div className="row-[10/12] col-[38/42] bg-blue-medium" />
        <div className="row-[10/12] col-[42/44] bg-blue-light">
          <ShapesDisplayer
            numShapes={1}
            imgName1={"/geometric_shapes/dark-5.png"}
            flexType="row" position="start" spin={true}
          />
        </div>

        {/*4° riga*/}
        <div className="row-[12/14] col-[16/30] bg-blue-light"></div>
        <div className="row-[12/14] col-[35/40] bg-blue-light"></div>
        <div className="row-[12/14] col-[43/48] bg-blue-dark">
          <ShapesDisplayer
            numShapes={1}
            imgName1={"/geometric_shapes/dark-5.png"}
            flexType="row" position="start" spin={true}
          />
        </div>

        {/*5° riga*/}
        <div className="row-[14/16] col-[26/37] bg-blue-dark"></div>
        <div className="row-[14/16] col-[37/48] bg-blue-light"></div>

        {/*6° riga*/}
        <div className="row-[16/18] col-[10/27] bg-blue-medium"></div>
        <div className="row-[16/18] col-[44/48] bg-blue-dark"></div>

        {/*7° riga*/}
        <div className="row-[18/20] col-[10/48] bg-blue-light"></div>


        <div className="row-[3] col-[3/7]">
          <div className="row-[3] col-[3/7]">
            <h1 className="w-[35vw] text-[7vw] leading-[8vw] font-serif text-blue-dark">
              <span className="block">take IT</span>
              <span className="block">for future</span>
            </h1>
          </div>
        </div>
        <div className="row-[12/15] col-[3/13]">
          <Link href={linkContattaci}>
            <button
              className="group font-sans text-[25px] bg-gradient-to-r from-[#ffa62b] via-[#ff9a3b] to-[#ff8c00] 
                text-[#ede7e4] px-[1.2em] py-[0.8em] flex items-center justify-center border-none rounded-[25px] 
                shadow-md transition-all duration-300 w-full h-full hover:transform hover:-translate-y-[3px] hover:shadow-lg 
                hover:text-[#16697a] active:scale-95 active:shadow-sm"
            >
              <div className="transition-all duration-300">
                <div className="rounded-full mr-[0.5em] transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    fill="currentColor"
                    className="bi bi-send-fill fill-[#ede7e4] transition-all duration-300 group-hover:fill-[#16697a] group-hover:rotate-45 transform"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                  </svg>
                </div>
              </div>
              <span className="block ml-[0.4em] transition-all duration-300">CONTATTACI</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}