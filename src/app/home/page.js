import Link from "next/link"
import ShapesDisplayer from "@/app/pagesComponents/shapesDisplayer"
import SendButton from "../pagesComponents/buttonContact"

const linkContattaci = "../contattaci"

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full mt-[10vw] xl:mt-[4.5vw]">
      <div className="
        grid gap-[0.5vw] md:gap-[1vw] my-[5vw]
        md:grid-rows-[repeat(19,_minmax(0,_1vw))] grid-rows-[repeat(23,_minmax(0,_2vw))]
        md:grid-cols-[repeat(48,_minmax(0,_1vw))] grid-cols-[repeat(31,_minmax(0,_2vw))]
      ">
        <div className="row-[7] col-[1] md:row-[3] md:col-[3/7]">
          <h1 className="w-[76vw] text-[10vw] md:w-[35vw] md:text-[7vw] leading-[8vw] font-serif text-blue-dark">
            <span className="inline md:block">take IT </span>
            <span className="inline md:block">for future</span>
          </h1>
        </div>
        <div className="row-[13/16] col-[7/25] md:row-[12/15] md:col-[3/13]">
          <Link href={linkContattaci}>
            <SendButton text="CONTATTACI" />
          </Link>
        </div>

{/* RETTANGOLI MOBILE */}
        <div className="md:hidden row-[3/5] col-[1/32] bg-blue-medium">
          <ShapesDisplayer 
            numShapes={1} 
            imgName1={"/FormeSVG/blue-4.svg"}
            position="center" spin={true}
          />
        </div>
        <div className="md:hidden row-[18/20] col-[1/14] bg-blue-medium">
          <ShapesDisplayer 
            numShapes={1} 
            imgName1={"/FormeSVG/orange-6.svg"}
            position="start" spin={true}
          />
        </div>
        <div className="md:hidden row-[20/22] col-[1/31] bg-blue-dark">
          <ShapesDisplayer 
            numShapes={2} 
            imgName1={"/FormeSVG/blue-4.svg"}
            imgName2={"/FormeSVG/orange-4.svg"}
            spin={true}
          />
        </div>

{/* RETTANGOLI DESKTOP */}
        {/*1° riga*/}
        <div className="hidden md:block row-[1/3] col-[20/48] bg-blue-dark">
          <ShapesDisplayer
            numShapes={2}
            imgName1="/FormeSVG/orange-6.svg"
            imgName2="/FormeSVG/blue-4.svg"
            position="start"
          />
        </div>

        {/*2° riga*/}
        <div className="hidden md:block row-[3/5] col-[24/36] bg-blue-light">
          <ShapesDisplayer
            numShapes={1}
            imgName1={"/FormeSVG/orange-12.svg"}
            position="end"
          />
        </div>
        <div className="hidden md:block row-[3/5] col-[36/44] bg-blue-medium">
          <ShapesDisplayer
            numShapes={1}
            imgName1={"/FormeSVG/blue-8.svg"}
            position="start"
          />
        </div>

        {/*rettangoli verticali*/}
        <div className="hidden md:block row-[5/12] col-[28/32] bg-blue-medium">
          <ShapesDisplayer
            numShapes={1}
            imgName1={"/FormeSVG/reactLogo.svg"}
            flexType="column"
            position="center"
            height="4vw"
            width="4vw"
          />
        </div>
        <div className="hidden md:block row-[3/12] col-[44/48] mt-[2.5vw] bg-blue-light">
          <ShapesDisplayer
            numShapes={4}
            imgName1={"/FormeSVG/pAngolari.svg"}
            imgName2={"/FormeSVG/pTonde.svg"}
            imgName3={"/FormeSVG/pGraffe.svg"}
            imgName4={"/FormeSVG/pQuadre.svg"}
            flexType="col"
            spin={false}
          />
        </div>

        {/*3° riga*/}
        <div className="hidden md:block row-[10/12] col-[32/44] bg-blue-dark">
          <ShapesDisplayer
            numShapes={3}
            imgName1={"/FormeSVG/blue-4.svg"}
            imgName2={"/FormeSVG/orange-12.svg"}
            imgName3={"/FormeSVG/blue-4.svg"}
            flexType="row"
            position="center"
          />
        </div>

        {/*4° riga*/}
        <div className="hidden md:block row-[12/14] col-[22/30] bg-blue-medium">
          <ShapesDisplayer
            numShapes={1}
            imgName1="/FormeSVG/blue-6.svg"
            position="start"
          />
        </div>
        <p className="hidden md:row-[12/14] md:col-[30/38] md:flex justify-center items-center text-xl text-blue-dark font-extrabold">
          &lt;div&gt; 🌐 &lt;/div&gt;
        </p>
        <div className="hidden md:block row-[12/14] col-[38/48] bg-blue-dark">
          <ShapesDisplayer
            numShapes={1}
            imgName1="/FormeSVG/blue-4.svg"
          />
        </div>

        {/*5° riga*/}
        <div className="hidden md:block row-[14/16] col-[26/37] bg-blue-dark">
          <ShapesDisplayer
            numShapes={1}
            imgName1="/FormeSVG/orange-4.svg"
          />
        </div>
        <div className="hidden md:block row-[14/16] col-[37/48] bg-blue-light">
          <ShapesDisplayer
            numShapes={1}
            imgName1="/FormeSVG/orange-4.svg"
            position="start"
          />
        </div>

        {/*6° riga*/}
        <div className="hidden md:block row-[16/18] col-[18/30] bg-blue-medium">
          <ShapesDisplayer
            numShapes={1}
            imgName1="/FormeSVG/blue-8.svg"
            position="start"
          />
        </div>

        <p className="hidden md:row-[16/18] md:col-[29/45] md:flex justify-center items-center text-xl text-blue-dark font-extrabold">
          const [count, setCount] = useState(0);
        </p>

        <div className="hidden md:block md:row-[16/18] md:col-[44/48] bg-blue-dark">
        <ShapesDisplayer
            numShapes={1}
            imgName1="/FormeSVG/orange-6.svg"
          />
        </div>

        {/*7° riga*/}
        <div className="hidden md:block row-[18/20] col-[10/48] bg-blue-light">
          <ShapesDisplayer
            numShapes={3}
            imgName1="/FormeSVG/blue-4.svg"
            imgName2="/FormeSVG/orange-12.svg"
            imgName3="/FormeSVG/blue-6.svg"
            position="start"
          />
        </div>
      </div>
    </div>
  )
}