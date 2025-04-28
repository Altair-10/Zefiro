"use client"

import React, { useState } from "react";
import { getPlanItems } from "@/app/constants/subscriptionPlansCostants";

export default function PianiAbbonamento() {
    const [activePlan, setActivePlan] = useState("medium");

    // Funzione per gestire il click sulle cards con effetto di transizione
    const handlePlanChange = (plan) => {
        if (plan !== activePlan) {
            setActivePlan(plan);
        }
    };

    return (
        <section className="pt-16 md:py-20">
            <h2 className="text-3xl md:text-6xl font-bold text-center text-blue-dark mb-16">
                I Nostri Piani!
            </h2>
            <p className="text-blue-dark max-w-2xl mx-auto">
                Scegli il piano più adatto alle tue esigenze e trasforma la tua presenza online
            </p>
            {/* Mobile Version */}
            <div className="md:hidden space-y-8">
                <MobilePlanCard
                    title="Standard"
                    description="Ideale per piccole attività che vogliono iniziare online"
                    features={[
                        { included: true, text: "Sito Web Responsive" },
                        { included: true, text: "Fino a 5 pagine" },
                        { included: true, text: "SEO Base" },
                        { included: true, text: "Hosting per 1 anno" },
                        { included: false, text: "Certificato SSL" },
                        { included: false, text: "Form di contatto avanzato" },
                        { included: false, text: "eCommerce" },
                        { included: false, text: "Integrazioni API" }
                    ]}
                    isActive={activePlan === "standard"}
                    onClick={() => handlePlanChange("standard")}
                />

                <MobilePlanCard
                    title="Medium"
                    description="Per aziende che vogliono crescere e ampliare il proprio business"
                    features={[
                        { included: true, text: "Sito Web Responsive" },
                        { included: true, text: "Fino a 10 pagine" },
                        { included: true, text: "SEO Avanzato" },
                        { included: true, text: "Hosting per 1 anno" },
                        { included: true, text: "Certificato SSL" },
                        { included: true, text: "Form di contatto avanzato" },
                        { included: false, text: "eCommerce" },
                        { included: false, text: "Integrazioni API" }
                    ]}
                    isActive={activePlan === "medium"}
                    onClick={() => handlePlanChange("medium")}
                    featured={true}
                />

                <MobilePlanCard
                    title="Personal"
                    description="Soluzione completa per business esigenti con funzionalità avanzate"
                    features={[
                        { included: true, text: "Sito Web Responsive" },
                        { included: true, text: "Pagine illimitate" },
                        { included: true, text: "SEO Avanzato" },
                        { included: true, text: "Hosting per 2 anni" },
                        { included: true, text: "Certificato SSL" },
                        { included: true, text: "Form di contatto avanzato" },
                        { included: true, text: "eCommerce" },
                        { included: true, text: "Integrazioni API" }
                    ]}
                    isActive={activePlan === "personal"}
                    onClick={() => handlePlanChange("personal")}
                />
            </div>

            {/* Desktop Version */}
            <div className="hidden md:flex justify-center gap-8 lg:gap-10">
                <PlanCard
                    title="Standard"
                    description="Ideale per piccole attività che vogliono iniziare online"
                    features={[
                        { included: true, text: "Sito Web Responsive" },
                        { included: true, text: "Fino a 5 pagine" },
                        { included: true, text: "SEO Base" },
                        { included: true, text: "Hosting per 1 anno" },
                        { included: false, text: "Certificato SSL" },
                        { included: false, text: "Form di contatto avanzato" },
                        { included: false, text: "eCommerce" },
                        { included: false, text: "Integrazioni API" }
                    ]}
                    isActive={activePlan === "standard"}
                    onClick={() => setActivePlan("standard")}
                />

                <PlanCard
                    title="Medium"
                    description="Per aziende che vogliono crescere e ampliare il proprio business"
                    features={[
                        { included: true, text: "Sito Web Responsive" },
                        { included: true, text: "Fino a 10 pagine" },
                        { included: true, text: "SEO Avanzato" },
                        { included: true, text: "Hosting per 1 anno" },
                        { included: true, text: "Certificato SSL" },
                        { included: true, text: "Form di contatto avanzato" },
                        { included: false, text: "eCommerce" },
                        { included: false, text: "Integrazioni API" }
                    ]}
                    isActive={activePlan === "medium"}
                    onClick={() => setActivePlan("medium")}
                    featured={true}
                />

                <PlanCard
                    title="Personal"
                    description="Soluzione completa per business esigenti con funzionalità avanzate"
                    features={[
                        { included: true, text: "Sito Web Responsive" },
                        { included: true, text: "Pagine illimitate" },
                        { included: true, text: "SEO Avanzato" },
                        { included: true, text: "Hosting per 2 anni" },
                        { included: true, text: "Certificato SSL" },
                        { included: true, text: "Form di contatto avanzato" },
                        { included: true, text: "eCommerce" },
                        { included: true, text: "Integrazioni API" }
                    ]}
                    isActive={activePlan === "personal"}
                    onClick={() => setActivePlan("personal")}
                />
            </div>
        </section >
    );
}

function PlanCard({ title, description, features, featured = false, isActive = false, onClick }) {
    return (
        <div
            className={`w-full max-w-sm transform transition-all duration-300 cursor-pointer ${isActive ? 'z-20 scale-115' : 'z-0 scale-95 hover:scale-100'
                }`}
            onClick={onClick}
        >
            <div className={`rounded-2xl overflow-hidden shadow-xl ${isActive
                ? 'shadow-orange/30 ring-2 ring-orange'
                : featured
                    ? 'shadow-orange/20'
                    : 'shadow-blue-dark/10 hover:shadow-blue-medium/20'
                }`}>
                {/* Header */}
                <div className={`${isActive || (featured && isActive) ? 'bg-gradient-orange' : 'bg-gradient-blue'
                    } px-6 py-8 relative`}>
                    {featured && (
                        <div className="absolute top-0 right-0 left-0 py-2 bg-orange text-white font-bold text-center text-sm">
                            CONSIGLIATO
                        </div>
                    )}

                    <h3 className={`text-4xl font-extrabold text-white mb-1 ${featured && 'mt-4'}`}>
                        {title}
                    </h3>

                    <p className="text-white text-opacity-90 mt-2">
                        {description}
                    </p>
                </div>

                {/* Features */}
                <div className="bg-white p-6">
                    <ul className="space-y-4 mb-8">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <div className={`flex h-5 w-5 mt-0.5 shrink-0 items-center justify-center rounded-full ${feature.included
                                    ? isActive ? 'text-orange' : 'text-blue-medium'
                                    : 'text-gray-400'
                                    }`}>
                                    {feature.included ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-shield-fill-check" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793z" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                                        </svg>
                                    )}
                                </div>
                                <span className={`${feature.included
                                    ? isActive ? 'text-blue-dark font-medium' : 'text-blue-dark'
                                    : 'text-gray-500'
                                    }`}>
                                    {feature.text}
                                </span>
                            </li>
                        ))}
                    </ul>

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

function MobilePlanCard({ title, description, features, featured = false, isActive = false, onClick }) {
    return (
        <div
            className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform ${isActive
                ? 'border-2 border-orange scale-105 shadow-lg shadow-orange/20'
                : featured && !isActive
                    ? 'border-2 border-orange scale-95'
                    : 'border border-blue-medium scale-95'
                }`}
            onClick={onClick}
        >
            {/* Header */}
            <div className={`${isActive ? 'bg-gradient-orange' : 'bg-gradient-blue'
                } px-6 py-5 relative`}>
                {featured && (
                    <div className="absolute top-0 right-0 left-0 py-1 bg-orange text-white font-bold text-center text-xs">
                        CONSIGLIATO
                    </div>
                )}

                <h3 className={`text-xl font-bold text-white ${featured && 'mt-4'}`}>
                    {title}
                </h3>

                <p className="text-white text-opacity-90 text-sm mt-2">
                    {description}
                </p>
            </div>

            {/* Features */}
            <div className="bg-white p-6">
                <ul className="space-y-3 mb-6">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <div className={`flex h-5 w-5 mt-0.5 shrink-0 items-center justify-center rounded-full ${feature.included
                                ? isActive ? 'text-orange' : 'text-blue-medium'
                                : 'text-gray-400'
                                }`}>
                                {feature.included ? (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
                                        <path
                                            d="M5 13l4 4L19 7"
                                            strokeWidth="2.5"
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                ) : (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
                                        <path
                                            d="M6 18L18 6M6 6l12 12"
                                            strokeWidth="2"
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                )}
                            </div>
                            <span className={`text-sm ${feature.included
                                ? isActive ? 'text-blue-dark font-medium' : 'text-blue-dark'
                                : 'text-gray-500'
                                }`}>
                                {feature.text}
                            </span>
                        </li>
                    ))}
                </ul>

                <button className={`w-full py-3 px-4 rounded-xl font-medium text-white transition-all ${isActive
                    ? 'bg-gradient-orange shadow-lg shadow-orange/30'
                    : 'bg-gradient-blue shadow-md shadow-blue-dark/10'
                    }`}>
                    Richiedi una consulenza
                </button>
            </div>
        </div>
    );
}