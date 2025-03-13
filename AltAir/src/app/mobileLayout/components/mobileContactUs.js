import FormPage from "@/app/modules/formPage"
import SocialIcons from "@/app/modules/SocialIcons"

export default function ContactUs() {
    return (
        <div className="md:hidden flex flex-col justify-center items-center w-full">
            <div className="
                grid gap-[0.5vw] mt-[4vw]
                grid-cols-[repeat(30,_minmax(0,_2vw))]
                grid-rows-[repeat(70,_minmax(0,_2vw))]
            ">
                <div className="col-[6/27] row-[2/7]">
                    <h1 className="text-[10vw] text-blue-dark">Contact Us</h1>
                </div>
                <div className="col-[6/26] row-[10/20]">
                    <FormPage />
                </div>
            </div>
            <div className="flex flex-col justify-around w-[100vw] h-[80vw] bg-blue-dark">
                <div className="flex flex-col items-center">
                    <h3 className="text-blue-light text-[8vw] text-bold">PHONE</h3>
                    <p className="text-brown-light text-[3vw] text-bold">+39 38904402325</p>
                </div>
                <div className="flex flex-col items-center">
                    <h3 className="text-blue-light text-[8vw] text-bold">E-MAIL</h3>
                    <p className="text-brown-light text-[3vw] text-bold">samuele.risso30@gmail.com</p>
                </div>
                <div className="flex flex-col gap-y-[2vw] items-center">
                    <h3 className="text-blue-light text-[8vw] text-bold">SOCIAL</h3>
                    <SocialIcons color="#FFFFFF" />
                </div>
            </div>
        </div>
    )
}