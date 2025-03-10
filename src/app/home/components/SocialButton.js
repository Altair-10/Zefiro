import Image from "next/image"

export default function SocialButton({source, alt}) {
    return (
        <button>
            <Image 
                src={source}
                width={1000}
                height={1000}
                alt={alt} 
                className="w-[5.5vw] md:w-[5vw] lg:w-[4vw] xl:w-[3.2vw]"
            />
        </button>
    )
}