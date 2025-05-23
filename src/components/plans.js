"use client"

import React, { useState } from "react";
import { getPlanItems } from "@/app/constants/subscriptionPlansCostants";

export default function PianiAbbonamento() {
    const [activePlan, setActivePlan] = useState("medium");

    const handlePlanChange = (plan) => {
        if (plan !== activePlan) {
            setActivePlan(plan);
        }
    };

    return (
        <section className="pt-16 md:py-20">
            <h2 className="text-3xl md:text-6xl font-bold text-center text-blue-dark mb-10 md:mb-8">
                I Nostri Piani!
            </h2>
            <p className="text-blue-dark max-w-2xl mx-auto md:mb-8">
                Scegli il piano più adatto alle tue esigenze e trasforma la tua presenza online
            </p>

            {/* Mobile Version */}
            <div className="md:hidden flex flex-col items-center gap-6 px-4">
                <MobileAccordionCard
                    cardTitle="standard"
                    cardCTA="Perfetto per chi desidera una presenza online semplice ma professionale, con strumenti essenziali per iniziare."
                    items={getPlanItems("standard")}
                    isActive={activePlan === "standard"}
                    onClick={() => handlePlanChange("standard")}
                />
                <MobileAccordionCard
                    cardTitle="medium"
                    cardCTA="Pensato per aziende che vogliono crescere online, con funzionalità avanzate e maggiore flessibilità operativa."
                    items={getPlanItems("business")}
                    isActive={activePlan === "medium"}
                    onClick={() => handlePlanChange("medium")}
                    featured={true}
                />
                <MobileAccordionCard
                    cardTitle="personal"
                    cardCTA="La soluzione completa per realtà ambiziose, con massima personalizzazione, performance e supporto dedicato."
                    items={getPlanItems("premium")}
                    isActive={activePlan === "personal"}
                    onClick={() => handlePlanChange("personal")}
                />
            </div>

            {/* Desktop Version */}
            <div className="hidden md:flex flex-row justify-center gap-8 lg:gap-10">
                <PlanCard
                    cardTitle="standard"
                    cardCTA="Perfetto per chi desidera una presenza online semplice ma professionale, con strumenti essenziali per iniziare."
                    items={getPlanItems("standard")}
                    isActive={activePlan === "standard"}
                    onClick={() => handlePlanChange("standard")}
                />
                <PlanCard
                    cardTitle="medium"
                    cardCTA="Pensato per aziende che vogliono crescere online, con funzionalità avanzate e maggiore flessibilità operativa."
                    items={getPlanItems("business")}
                    isActive={activePlan === "medium"}
                    onClick={() => handlePlanChange("medium")}
                    featured={true}
                />
                <PlanCard
                    cardTitle="personal"
                    cardCTA="La soluzione completa per realtà ambiziose, con massima personalizzazione, performance e supporto dedicato."
                    items={getPlanItems("premium")}
                    isActive={activePlan === "personal"}
                    onClick={() => handlePlanChange("personal")}
                />
            </div>
        </section>
    )
}

// Mobile Accordion Card Component
function MobileAccordionCard({ cardTitle, cardCTA, items, isActive = false, onClick, featured = false }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div 
            className={`w-full max-w-md rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${isActive ? 'border-2 border-orange' : 'border border-blue-medium'}`}
            onClick={onClick}
        >
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(!isOpen);
                }}
                className="w-full px-4 py-4 flex justify-between items-center text-left bg-gradient-blue"
            >
                <div>
                    <h3 className="text-xl font-semibold uppercase text-white">{cardTitle}</h3>
                    <p className="text-sm text-white/90 mt-1">{cardCTA}</p>
                </div>
                <svg
                    className={`w-5 h-5 transition-transform text-white ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div className="flex flex-col justify-start px-4 pb-4 gap-y-4 bg-white">
                    <Content items={items} />
                    <button className={`w-full py-3 px-4 rounded-xl font-medium text-white transition-all ${isActive
                        ? 'bg-gradient-orange shadow-lg shadow-orange/30'
                        : 'bg-gradient-blue shadow-md shadow-blue-dark/10'
                        }`}>
                        Richiedi una consulenza
                    </button>
                </div>
            )}
        </div>
    );
}

// Desktop Plan Card Component
function PlanCard({ cardTitle, cardCTA, items, isActive = false, onClick, featured = false }) {
    return (
        <div 
            className={`w-full max-w-sm transform transition-all duration-300 cursor-pointer ${isActive ? 'z-20 scale-105' : 'z-0 scale-95 hover:scale-100'}`}
            onClick={onClick}
        >
            <div className={`rounded-2xl overflow-hidden shadow-xl ${isActive
                ? 'shadow-orange/30 ring-2 ring-orange'
                : featured
                    ? 'shadow-orange/20'
                    : 'shadow-blue-dark/10 hover:shadow-blue-medium/20'
                }`}>
                {/* Header */}
                <div className={`${isActive ? 'bg-gradient-orange' : 'bg-gradient-blue'} px-6 py-8 relative`}>
                    {featured && (
                        <div className="absolute top-0 right-0 left-0 py-2 bg-orange text-white font-bold text-center text-sm">
                            CONSIGLIATO
                        </div>
                    )}

                    <h3 className={`text-4xl font-extrabold text-white mb-1 ${featured && 'mt-4'}`}>
                        {cardTitle}
                    </h3>

                    <p className="text-white text-opacity-90 mt-2">
                        {cardCTA}
                    </p>
                </div>

                {/* Features */}
                <div className="bg-white p-6">
                    <div className="space-y-4 mb-8">
                        <Content items={items} />
                    </div>

                    <button className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all ${isActive
                        ? 'bg-gradient-orange shadow-lg shadow-orange/30 scale-105'
                        : featured
                            ? 'bg-gradient-blue shadow-md shadow-blue-dark/10 hover:shadow-blue-dark/20 hover:scale-105'
                            : 'bg-gradient-blue shadow-md shadow-blue-dark/10 hover:shadow-blue-dark/20 hover:scale-105'
                        }`}>
                        Richiedi una consulenza gratuita
                    </button>
                </div>
            </div>
        </div>
    );
}

// Shared Content Component
function Content({ items = [] }) {
    return (
        <>
            {items.map(({ title, description, active = true }, index) => (
                <div key={index} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/10">
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
                        <p className="text-sm font-medium text-blue-dark">{title}</p>
                        <p className="text-xs text-slate-500">{description}</p>
                    </div>
                </div>
            ))}
        </>
    );
}