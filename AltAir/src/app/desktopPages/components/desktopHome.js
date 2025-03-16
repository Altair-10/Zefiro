import Link from "next/link"
import ShapesDisplayer from "@/app/pagesComponents/shapesDisplayer"
import SendButton from "../../pagesComponents/buttonContact"

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
            imgName1={"/decorations/orange-8.png"}
            imgName2={"/decorations/light-4.png"}
            flexType="row" position="start" spin={true}
          />
        </div>

        {/*2° riga*/}
        <div className="row-[3/5] col-[24/36] bg-blue-light">
          <ShapesDisplayer
            numShapes={1}
            imgName1={"/decorations/medium-5.png"}
            flexType="row" position="start" spin={true}
          />
        </div>
        <div className="row-[3/5] col-[36/44] bg-blue-medium">
          <ShapesDisplayer
            numShapes={2}
            imgName1={"/decorations/dark-8.png"}
            imgName2={"/decorations/orange-4.png"}
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
            imgName1={"/decorations/light-8.png"}
            imgName2={"/decorations/orange-4.png"}
            flexType="row" position="start" spin={true}
          />
        </div>
        <div className="row-[10/12] col-[38/42] bg-blue-medium" />
        <div className="row-[10/12] col-[42/44] bg-blue-light">
          <ShapesDisplayer
            numShapes={1}
            imgName1={"/decorations/dark-5.png"}
            flexType="row" position="start" spin={true}
          />
        </div>

        {/*4° riga*/}
        <div className="row-[12/14] col-[16/30] bg-blue-light"></div>
        <div className="row-[12/14] col-[35/40] bg-blue-light"></div>
        <div className="row-[12/14] col-[43/48] bg-blue-dark">
          <ShapesDisplayer
            numShapes={1}
            imgName1={"/decorations/dark-5.png"}
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
            < SendButton />
          </Link>
        </div>
      </div>
    </div>
  )
}