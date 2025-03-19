import Link from "next/link"
import ShapesDisplayer from "@/app/pagesComponents/shapesDisplayer"
import SendButton from "../../pagesComponents/buttonContact"


const linkContattaci = "../contattaci"

export default function Home() {
  return (
    <div className="hidden md:flex justify-center items-center w-full mt-[10vw] xl:mt-[4.5vw]">
      <div className="
        grid gap-[1vw] my-[5vw]
        grid-cols-[repeat(48,_minmax(0,_1vw))]
        grid-rows-[repeat(19,_minmax(0,_1vw))]
      ">
        {/*1° riga*/}
        <div className="row-[1/3] col-[20/48] bg-blue-dark">
          <ShapesDisplayer
            numShapes={2}
            imgName1="/FormeSVG/orange-6.svg"
            imgName2="/FormeSVG/blue-4.svg"
            position="start"
          />
        </div>

        {/*2° riga*/}
        <div className="row-[3/5] col-[24/36] bg-blue-light">
          <ShapesDisplayer
            numShapes={1}
            imgName1={"/FormeSVG/orange-12.svg"}
            position="end"
          />
        </div>
        <div className="row-[3/5] col-[36/44] bg-blue-medium">
          <ShapesDisplayer
            numShapes={1}
            imgName1={"/FormeSVG/blue-8.svg"}
            position="start"
          />
        </div>

        {/*rettangoli verticali*/}
        <div className="row-[5/12] col-[28/32] bg-blue-medium">
          <ShapesDisplayer
            numShapes={1}
            imgName1={"/FormeSVG/reactLogo.svg"}
            flexType="column"
            position="center"
            height="4vw"
            width="4vw"
          />
        </div>
        <div className="row-[3/12] col-[44/48] bg-blue-light">
          <div className="mt-[2.5vw]">
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
        </div>

        {/*3° riga*/}
        <div className="row-[10/12] col-[32/44] bg-blue-dark">
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
        <div className="row-[12/14] col-[22/30] bg-blue-medium">
          <ShapesDisplayer
            numShapes={1}
            imgName1="/FormeSVG/blue-6.svg"
            position="start"
          />
        </div>
        <p className="row-[12/14] col-[30/38] flex justify-center items-center text-xl text-blue-dark font-extrabold">
          &lt;div&gt; 🌐 &lt;/div&gt;
        </p>
        <div className="row-[12/14] col-[38/48] bg-blue-dark">
          <ShapesDisplayer
            numShapes={1}
            imgName1="/FormeSVG/blue-4.svg"
          />
        </div>

        {/*5° riga*/}
        <div className="row-[14/16] col-[26/37] bg-blue-dark">
          <ShapesDisplayer
            numShapes={1}
            imgName1="/FormeSVG/orange-4.svg"
          />
        </div>
        <div className="row-[14/16] col-[37/48] bg-blue-light">
        <ShapesDisplayer
            numShapes={1}
            imgName1="/FormeSVG/orange-4.svg"
            position="start"
          />
        </div>

        {/*6° riga*/}
        <div className="row-[16/18] col-[18/30] bg-blue-medium">
        <ShapesDisplayer
            numShapes={1}
            imgName1="/FormeSVG/blue-8.svg"
            position="start"
          />
        </div>

        <p className="row-[16/18] col-[29/45] flex justify-center items-center text-xl text-blue-dark font-extrabold">
            const [count, setCount] = useState(0);
        </p>

        <div className="row-[16/18] col-[44/48] bg-blue-dark">
        <ShapesDisplayer
            numShapes={1}
            imgName1="/FormeSVG/orange-6.svg"
          />
        </div>

        {/*7° riga*/}
        <div className="row-[18/20] col-[10/48] bg-blue-light">
          <ShapesDisplayer
            numShapes={3}
            imgName1="/FormeSVG/blue-4.svg"
            imgName2="/FormeSVG/orange-12.svg"
            imgName3="/FormeSVG/blue-6.svg"
            position="start"
          />
        </div>


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
            < SendButton text="CONTATTACI" />
          </Link>
        </div>
      </div>
    </div>
  )
}