import { Image } from "@heroui/react";

export default function CardFooterContent({ testo1, testo2 }){
    return(
      <>
      <div className="flex flex-row justify-start items-center gap-2 w-full">
          <Image
          alt="Logo Altair"
          className="hidden md:block md:w-[2.5vw] md:h-[2vw]"
          src="/loghi_altair/LogoSocialDark.svg"
          />
          <div className="flex flex-col">
            <p className="text-[3.3vw] md:text-[0.6vw] xl:text-[0.8vw] 2xl:text-[0.6vw] text-white/60">{testo1}</p>
            <p className="text-[3.3vw] md:text-[0.6vw] xl:text-[0.8vw] 2xl:text-[0.6vw] text-white/60">{testo2}</p>
          </div>
        </div>
          <div className="flex justify-end items-end">
            <button radius="full" className="
              transition-all duration-150 ease-in-out
              rounded-2xl bg-brown-light 
              text-[5vw] md:text-[0.8vw] xl:text-[1vw] 2xl:text-[0.8vw]
              w-[28vw] h-[10vw] md:w-[3vw] md:h-[3vw] xl:w-[6vw] xl:h-[2vw]
              active:scale-90
            ">
              contattaci
            </button>
          </div>
        
      </>
        
    )
}