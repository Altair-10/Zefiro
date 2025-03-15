import SocialIcons from "@/app/pagesComponents/socialIcons"
import ContactForm from "@/app/pagesComponents/formEmail"

export default function ContactUs() {
    return (
        <div className="md:hidden flex flex-col justify-center items-center w-full">
            <div className="
                grid gap-[0.5vw] mt-[4vw]
                grid-cols-[repeat(30,_minmax(0,_2vw))]
                grid-rows-[repeat(50,_minmax(0,_2vw))]
            ">
                <div className="row-[2/7] col-[6/27]">
                    <h1 className="text-[10vw] text-blue-dark">Contact Us</h1>
                </div>
                <div className="row-[16] col-[8/23]">
                    <div className="flex flex-col justify-center items-center h-full">
                        <h1 className="text-[4vw] text-blue-medium whitespace-nowrap">Qual è il tuo obiettivo?</h1>
                        <p className="text-center text-[3vw] pt-5 whitespace-nowrap">
                            Scrivi nella sezione <br />
                            &quot;Come possiamo esserti d&apos;aiuto?&quot; <br />
                            per descriverci qual è il tuo obiettivo <br /> 
                            e in cosa possiamo aiutarti <br />
                            per raggiungerlo!
                        </p>
                    </div>
                </div>
                <div className="row-[26/36] col-[6/26]">
                    <div className="flex justify-center">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}