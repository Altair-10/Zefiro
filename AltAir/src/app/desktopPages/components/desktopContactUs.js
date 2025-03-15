import ContactForm from "@/app/pagesComponents/formEmail"
import ShapesDisplayer from "@/app/pagesComponents/shapesDisplayer"

export default function ContactUs() {
    return (
        <div className="hidden md:flex flex-col justify-center items-center w-full">
            <div className="
                grid gap-[1vw] md:my-[5vw]
                grid-cols-[repeat(48,_minmax(0,_1vw))]
                grid-rows-[repeat(22,_minmax(0,_1vw))]
            ">
                <h1 className="row-[1/6] col-[3/20] text-[6vw] text-blue-dark h-full">Contact Us</h1>

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
                <div className="row-[6/18] col-[3/18]">
                    <div className="flex flex-col justify-center items-center h-full">
                        <h1 className="text-[3vw] text-blue-medium whitespace-nowrap">Qual è il tuo obiettivo?</h1>
                        <p className="text-center text-[1.5vw] pt-5">
                            Descrivici nella sezione <br />
                            &quot;Come possiamo esserti d&apos;aiuto?&quot; <br />
                            qual è il tuo obiettivo, <br /> 
                            di conseguenza capiremo insieme <br />
                            come raggiungerlo!
                        </p>
                    </div>
                </div>
                <div className="row-[6] col-[24] mt-3">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}