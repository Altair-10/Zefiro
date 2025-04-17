export default function FeatureSection({ title1, desc1, title2, desc2, title3, desc3 }) {

    const features = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-card-heading" viewBox="0 0 16 16">
                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                    <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" />
                </svg>,
            title: title1,
            desc: desc1
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>,
            title: title2,
            desc: desc2
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-graph-up" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07" />
                </svg>,
            title: title3,
            desc: desc3
        },
    ]

    return (
        <section className="pt-16 md:pt-36">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div>
                    <h1 className="text-black text-center text-3xl md:text-6xl font-semibold">
                        Funzionalità
                    </h1>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-14 gap-x-20 sm:grid-cols-2 lg:grid-cols-3 justify-center">
                        {
                            features.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="flex flex-col items-center text-center sm:items-start sm:text-left sm:flex-row gap-x-4"
                                >
                                    <div className="flex-none w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div className="mt-4 sm:mt-0 text-center">
                                        <h2 className="text-lg md:text-xl text-gray-800 font-semibold">
                                            {item.title}
                                        </h2>
                                        <p className="mt-3 mx-10 md:mx-0 break-words text-gray-600">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}