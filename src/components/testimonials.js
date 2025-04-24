import AnimatedTitle from "./AnimatedTitle"

export default function Testimonials() {

    const testimonials = [
        {
            avatar: "https://randomuser.me/api/portraits/women/65.jpg",
            name: "Luciana Zavalloni",
            title: "Ristoratrice a Cesenatico",
            quote: "Collaborare con loro è stata una svolta per il mio ristorante. Professionalità e attenzione al dettaglio che si vedono di rado."
        },
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Giorgio Minguzzi",
            title: "Proprietario di una concessionaria a Ravenna",
            quote: "Affidabili, puntuali e sempre disponibili. Grazie a loro ho potuto migliorare l'immagine della mia attività in poco tempo."
        },
        {
            avatar: "https://api.uifaces.co/our-content/donated/NY9hnAbp.jpg",
            name: "Sandro Ricci",
            title: "Gestore di uno stabilimento balneare a Rimini",
            quote: "Ci hanno seguito passo dopo passo con idee fresche e innovative. Una vera marcia in più per la stagione estiva!"
        }
    ]
    return (
        <section className="pt-5 md:pt-10">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="w-full text-center">
                    <AnimatedTitle text="Recensioni" />
                    <h2 className="text-gray-600">
                        Le parole dei nostri clienti parlano per noi. Ogni feedback è uno stimolo a fare sempre meglio. Scopri cosa pensano di noi le persone che ci hanno scelto.
                    </h2>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            testimonials.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="flex flex-col justify-center items-center bg-gray-100 p-3 sm:p-4 rounded-xl max-w-[280px] sm:max-w-none min-h-[200px] sm:min-h-auto mx-auto"
                                >
                                    <figure>
                                        <div className="flex items-center gap-x-3 sm:gap-x-4">
                                            <img src={item.avatar} className="w-12 h-12 sm:w-16 sm:h-16 rounded-full" />
                                            <div>
                                                <span className="block text-gray-800 text-sm sm:text-base font-semibold">{item.name}</span>
                                                <span className="block text-gray-600 text-xs sm:text-sm mt-0.5">{item.title}</span>
                                            </div>
                                        </div>
                                        <blockquote>
                                            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-center text-gray-700">
                                                {item.quote}
                                            </p>
                                        </blockquote>
                                    </figure>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}