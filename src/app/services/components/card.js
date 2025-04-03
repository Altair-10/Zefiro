import Image from "next/image"
import { motion } from "framer-motion";

export default function Card({ reference, preTitle, title, img, calltoaction1, calltoaction2, testoBottone, animation, onClick }){
    return(
        <motion.div
          ref={reference}
          className="w-full h-full"
          initial={{ x: "-100%", opacity: 0 }}
          animate={animation}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <div className="w-full h-full group overflow-hidden relative rounded-2xl transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <div className="absolute p-[0.4vw] md:p-[0.6vw] z-10 flex-col items-start">
                <p className="text-[3vw] pt-[2vw] pl-[2vw] md:p-0 md:text-[0.6vw] text-black/60 uppercase font-bold">
                    {preTitle}
                </p>
                <h1 className="text-[6vw] pl-[2vw] md:p-0 md:text-[1.5vw] text-black/90 font-medium">
                    {title}
                </h1>
            </div>
            <Image
                width={1000}
                height={1000}
                alt="Relaxing app background"
                className="z-0 w-full h-full object-contain object-right py-[8vw] md:py-0 md:pt-[0.5vw] bg-orange"
                src={img}
            />
            <div className="absolute w-full bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-row justify-start items-center w-full h-[16vw] md:h-[4vw]">
                    <Image
                        width={1000}
                        height={1000}
                        alt="Logo Altair"
                        className="hidden md:block md:ml-[0.5vw] md:w-[2.5vw] md:h-[2vw]"
                        src="/loghi_altair/LogoSocialDark.svg"
                    />
                    <div className="flex flex-col w-2/3 ml-[4vw] md:ml-[1vw]">
                        <p className="whitespace-nowrap text-[3.3vw] md:text-[1vw] xl:text-[0.8vw] 2xl:text-[0.6vw] text-white/60">{calltoaction1}</p>
                        <p className="whitespace-nowrap text-[3.3vw] md:text-[1vw] xl:text-[0.8vw] 2xl:text-[0.6vw] text-white/60">{calltoaction2}</p>
                    </div>
                    <button 
                        onClick={onClick}
                        className="
                        transition-all duration-150 ease-in-out
                        rounded-2xl bg-brown-light mr-[2vw] md:mr-[0.5vw]
                        text-[4vw] md:text-[1vw] xl:text-[1vw] 2xl:text-[0.8vw]
                        w-[28vw] h-[10vw] md:w-[8vw] md:h-[2vw]
                        active:scale-90 whitespace-nowrap
                        ">
                        {testoBottone}
                    </button>
                </div>
            </div>
          </div>
        </motion.div>
    )
}