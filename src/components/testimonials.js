
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
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl text-center md:mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Cosa dicono su di noi!
                    </h3>
                    <p className="mt-3 text-gray-600">
                        Le parole dei nostri clienti parlano per noi. Ogni feedback è uno stimolo a fare sempre meglio. Scopri cosa pensano di noi le persone che ci hanno scelto.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            testimonials.map((item, idx) => (
                                <li key={idx} className="bg-gray-100 p-4 rounded-xl">
                                    <figure>
                                        <div className="flex items-center gap-x-4">
                                            <img src={item.avatar} className="w-16 h-16 rounded-full" />
                                            <div>
                                                <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                            </div>
                                        </div>
                                        <blockquote>
                                            <p className="mt-6 text-center text-gray-700">
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