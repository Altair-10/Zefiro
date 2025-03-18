import ContactUsCard from "@/app/pagesComponents/contactUsCard"
import ContactForm from "@/app/pagesComponents/formEmail"

export default function ContactUs() {
    return (
        <div className="md:hidden flex flex-col justify-center items-center w-full">
            <div className="
                grid gap-[0.5vw] my-[5vw]
                grid-cols-[repeat(31,_minmax(0,_2vw))]
                grid-rows-[repeat(95,_minmax(0,_2vw))]
            ">
                <div className="row-[2/7] col-[9/26]">
                    <h1 className="text-[10vw] text-blue-dark">Contattaci</h1>
                </div>
                
                <div className="row-[10/40] col-[3/34]">
                    <ContactUsCard />
                </div>
                <div className="row-[50/95] col-[2/35]">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}