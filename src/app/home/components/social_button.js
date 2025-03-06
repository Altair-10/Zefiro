import Image from "next/image"

export default function SocialButton({source, alt}) {
    return (
        <button>
            <Image 
                src={source}
                width={1000}
                height={1000}
                alt={alt} 
                className="w-[50px]"
            />
        </button>
    )}