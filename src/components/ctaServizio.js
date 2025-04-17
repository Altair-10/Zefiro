import Image from "next/image"

export default function CTAServizio({ cta, desc }) {
    return (
        <section className="relative max-w-screen-xl mx-auto mt-36">
            <div className="absolute top-0 left-0 w-full h-full"></div>
            <div className="relative z-10 gap-5 items-center lg:flex">
                <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left text-start mx-14 md:mx-0">
                    <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
                        {cta}
                    </h3>
                    <p className="text-gray-500 leading-relaxed mt-3 md:pr-12">
                        {desc}
                    </p>
                </div>
                <div className="flex-1 mt-5 mx-16 sm:w-9/12 lg:mt-0 lg:w-auto">
                    <Image
                        src="/sfondi/ctaSitoVetrina.png"
                        width={1000}
                        height={1000}
                        alt=""
                        className="w-full"
                    />
                </div>
            </div>
        </section>
    )
}
