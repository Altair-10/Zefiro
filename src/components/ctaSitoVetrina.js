import Image from "next/image"

export default function CTASitoVetrina() {
    return (
        <section className="relative max-w-screen-xl mx-auto py-4 px-4 md:px-8">
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
            <div className="relative z-10 gap-5 items-center lg:flex">
                <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                    <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
                        Creiamo siti web <br /><span className="text-orange">ad alte performance</span><br /> per il tuo successo online
                    </h3>
                    <p className="text-gray-500 leading-relaxed mt-3 md:pr-12">
                    Il nostro obiettivo è offrirti un sito web che non solo rispecchi la tua identità, ma che sia anche veloce, sicuro e ottimizzato per un'esperienza utente senza pari.
                    </p>
                </div>
                <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
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
