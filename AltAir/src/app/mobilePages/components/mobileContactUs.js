import ContactForm from "@/app/pagesComponents/formEmail"

export default function ContactUs() {
    return (
        <div className="md:hidden flex flex-col justify-center items-center w-full">
            <div className="
                grid gap-[0.5vw] my-[5vw]
                grid-cols-[repeat(30,_minmax(0,_2vw))]
                grid-rows-[repeat(58,_minmax(0,_2vw))]
            ">
                {/* quadratini sinistra esterni */}
                <div className="bg-blue-dark row-[10/12] col-[3/5]" />
                <div className="bg-blue-medium row-[10/12] col-[1/3]" />
                <div className="bg-blue-light row-[12/14] col-[1/3]" />
                <div className="bg-blue-medium row-[14/16] col-[1/3]" />
                <div className="bg-blue-dark row-[16/18] col-[1/3]" />
                <div className="bg-blue-medium row-[18/20] col-[1/3]" />
                <div className="bg-blue-light row-[20/22] col-[1/3]" />
                <div className="bg-blue-medium row-[22/24] col-[1/3]" />
                <div className="bg-blue-dark row-[24/26] col-[1/3]" />
                <div className="bg-blue-medium row-[24/26] col-[3/5]" />

                {/* quadratini destra esterni */}
                <div className="bg-blue-dark row-[10/12] col-[27/29]" />
                <div className="bg-blue-medium row-[10/12] col-[29/31]" />
                <div className="bg-blue-light row-[12/14] col-[29/31]" />
                <div className="bg-blue-medium row-[14/16] col-[29/31]" />
                <div className="bg-blue-dark row-[16/18] col-[29/31]" />
                <div className="bg-blue-medium row-[18/20] col-[29/31]" />
                <div className="bg-blue-light row-[20/22] col-[29/31]" />
                <div className="bg-blue-medium row-[22/24] col-[29/31]" />
                <div className="bg-blue-dark row-[24/26] col-[29/31]" />
                <div className="bg-blue-medium row-[24/26] col-[27/29]" />

                <div className="row-[2/7] col-[6/27]">
                    <h1 className="text-[10vw] text-blue-dark">Contattaci</h1>
                </div>
                <div className="row-[16] col-[8/23]">
                    <div className="flex flex-col justify-center items-center h-full">
                        <h1 className="text-[4vw] text-blue-medium whitespace-nowrap">Qual è il tuo obiettivo?</h1>
                        <p className="text-center text-[3vw] pt-5 whitespace-nowrap text-orange">
                            Descrivici nella sezione <br />
                            &quot;Come possiamo esserti d&apos;aiuto?&quot; <br />
                            qual è il tuo obiettivo, <br /> 
                            di conseguenza capiremo insieme <br />
                            come raggiungerlo!
                        </p>
                    </div>
                </div>
                <div className="row-[29/39] col-[6/26]">
                    <div className="flex justify-center">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}