"use client"

import React, { useState } from "react";
import { getPlanItems } from "@/app/constants/subscriptionPlansCostants";

export default function PianiAbbonamento() {
    return (
        <section className="pt-16 md:py-20">
            <h2 className="text-3xl md:text-6xl font-bold text-center text-blue-dark mb-10 md:mb-16">
                I Nostri Piani!
            </h2>

            {/* Mobile Version */}
            <div className="md:hidden flex flex-col items-center gap-6 px-4">
                <MobileAccordionCard
                    cardTitle="standard"
                    cardCTA="Perfetto per chi desidera una presenza online semplice ma professionale, con strumenti essenziali per iniziare."
                    items={getPlanItems("standard")}
                />
                <MobileAccordionCard
                    cardTitle="medium"
                    cardCTA="Pensato per aziende che vogliono crescere online, con funzionalità avanzate e maggiore flessibilità operativa."
                    items={getPlanItems("business")}
                />
                <MobileAccordionCard
                    cardTitle="personal"
                    cardCTA="La soluzione completa per realtà ambiziose, con massima personalizzazione, performance e supporto dedicato."
                    items={getPlanItems("premium")}
                />
            </div>

            {/* Desktop Version */}
            <div className="hidden md:flex flex-row justify-center gap-40">
                <PlanCard
                    cardTitle="standard"
                    cardCTA="Perfetto per chi desidera una presenza online semplice ma professionale, con strumenti essenziali per iniziare."
                    items={getPlanItems("standard")}
                />
                <PlanCard
                    cardTitle="medium"
                    cardCTA="Pensato per aziende che vogliono crescere online, con funzionalità avanzate e maggiore flessibilità operativa."
                    items={getPlanItems("business")}
                />
                <PlanCard
                    cardTitle="personal"
                    cardCTA="La soluzione completa per realtà ambiziose, con massima personalizzazione, performance e supporto dedicato."
                    items={getPlanItems("premium")}
                />
            </div>
        </section>
    )
}

// VERSIONE MOBILE - CARD COMPRIMIBILE
function MobileAccordionCard({ cardTitle, cardCTA, items }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full max-w-md border border-slate-700 rounded-xl bg-slate-900 text-white mt-6">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-4 py-4 flex justify-between items-center text-left"
            >
                <div>
                    <h3 className="text-xl font-semibold uppercase text-orange">{cardTitle}</h3>
                    <p className="text-sm text-slate-400 mt-1">{cardCTA}</p>
                </div>
                <svg
                    className={`w-5 h-5 transition-transform ${isOpen ? "rotate-90" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
            {isOpen && (
                <div className="flex flex-col justify-start px-4 pb-4 gap-y-4">
                    <Content items={items} />
                </div>
            )}
        </div>
    );
}

function PlanCard({ cardTitle, cardCTA, items }) {
    return (
        <div className={`group relative w-60 md:w-80`}>
            <div
                className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 p-[1px] shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-500/25"
            >
                <div
                    className="absolute inset-0 bg-gradient-to-b from-cyan-500 to-blue-500 opacity-20"
                />
                <div
                    className="relative rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 pt-4 md:p-6"
                >
                    <div
                        className="relative rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 p-6"
                    >
                        <div
                            className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70"
                        />
                        <div
                            className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70"
                        />

                        <div
                            className="absolute -right-[1px] -top-[1px] overflow-hidden rounded-tr-2xl"
                        >
                            <div
                                className="absolute h-20 w-20 bg-gradient-to-r from-cyan-500 to-blue-500"
                            />
                            <div className="absolute h-20 w-20 bg-slate-950/90"></div>
                            <div
                                className="absolute right-0 top-[22px] h-[2px] w-[56px] rotate-45 bg-gradient-to-r from-cyan-500 to-blue-500"
                            />
                            <span
                                className="absolute right-1 top-1 text-[10px] font-semibold text-white"
                            />
                        </div>
                        <div className="relative">
                            <h3 className="text-[8vw] md:text-[2vw] font-medium uppercase text-start text-orange">
                                {cardTitle}
                            </h3>
                            <p className="mt-2 text-sm text-slate-400">
                                {cardCTA}
                            </p>
                        </div>

                        <div className="relative mt-6 space-y-4">
                            <Content items={items} />
                        </div>
                        {/* <div className="relative mt-8">
                            <button
                                className="group/btn relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-light to-blue-dark p-px font-semibold text-white shadow-[0_1000px_0_0_hsl(0_0%_100%_/_0%)_inset] transition-colors hover:shadow-[0_1000px_0_0_hsl(0_0%_100%_/_2%)_inset]"
                            >
                                <div
                                    className="relative rounded-xl bg-slate-950/50 px-4 py-3 transition-colors group-hover/btn:bg-transparent"
                                >
                                    <span className="relative flex items-center justify-center gap-2">
                                        Descrizione
                                        <svg
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                                        >
                                            <path
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                strokeWidth="2"
                                                strokeLinejoin="round"
                                                strokeLinecap="round"
                                            ></path>
                                        </svg>
                                    </span>
                                </div>
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

function Content({ items = [] }) {
    return (
        <>
            {items.map(({ title, description, active = true }, index) => (
                <div key={index} className="flex items-start gap-3">
                    <div className="flex h-6 w-4 md:w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/10">
                        {active ? (
                            <svg
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="h-4 w-4 text-blue-light"
                            >
                                <path
                                    d="M5 13l4 4L19 7"
                                    strokeWidth="2"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                />
                            </svg>
                        ) : (
                            <svg
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="h-4 w-4 text-red-600"
                            >
                                <path
                                    d="M6 6l12 12M6 18L18 6"
                                    strokeWidth="2"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                />
                            </svg>
                        )}
                    </div>
                    <div>
                        <p className="text-smfont-medium text-white">{title}</p>
                        <p className="text-xs w-70 md:w-40 text-slate-400">{description}</p>
                    </div>
                </div>
            ))}
        </>
    );
}