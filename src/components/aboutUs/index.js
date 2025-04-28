'use client';

import { useInView } from 'react-intersection-observer';
import AnimatedTitle from '../AnimatedTitle';

export default function AboutUs() {
    const sectionClass = 'p-[6vw] md:p-[2vw] shadow-xl rounded-3xl transition-all duration-700 ease-out bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100';

    const animationStyle = (inView) => ({
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        opacity: inView ? 1 : 0,
    });

    const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.3 });
    const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.3 });
    const [approachRef, approachInView] = useInView({ triggerOnce: true, threshold: 0.3 });
    const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <div className="flex flex-col justify-center items-center w-full px-4 md:my-[2vw]">
            <div>
                <AnimatedTitle text="Chi siamo" doubleRow={false} />

            </div>
            <div className="w-full max-w-6xl space-y-8">

                {/* IL NOSTRO TEAM */}
                <div
                    ref={teamRef}
                    className={sectionClass}
                    style={animationStyle(teamInView)}
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-3xl text-blue-600">👥</span>
                        <h2 className="text-2xl md:text-4xl font-bold text-blue-dark">Il nostro team</h2>
                    </div>
                    <p className="md:text-lg text-gray-900 font-semibold">
                        Pionieri di soluzioni, guidati dalla <span className="font-bold text-blue-600">curiosità</span> e dalla voglia di cambiare le regole del gioco.
                    </p>
                </div>

                {/* LA NOSTRA MISSIONE */}
                <div
                    ref={missionRef}
                    className={sectionClass}
                    style={animationStyle(missionInView)}
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-3xl text-blue-600">🎯</span>
                        <h2 className="text-2xl md:text-4xl font-bold text-blue-dark">La nostra missione</h2>
                    </div>
                    <p className="md:text-lg text-gray-900 font-semibold">
                        Aiutare aziende, professionisti e creativi a raccontarsi online in modo autentico, con strumenti digitali <span className="font-bold text-blue-600">semplici ma potenti</span>.
                        Crediamo che ogni brand, anche il più piccolo, meriti una presenza digitale solida e coerente.
                    </p>
                </div>

                {/* IL NOSTRO APPROCCIO */}
                <div
                    ref={approachRef}
                    className={sectionClass}
                    style={animationStyle(approachInView)}
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-3xl text-blue-600">🔄</span>
                        <h2 className="text-2xl md:text-4xl font-bold text-blue-dark">Il nostro approccio</h2>
                    </div>
                    <p className="md:text-lg text-gray-900 font-semibold">
                        Siamo <span className="font-bold text-blue-600">partner</span>, non fornitori. Lavoriamo fianco a fianco con i nostri clienti, costruendo insieme progetti digitali che durano nel tempo.
                    </p>
                </div>

                {/* COME LAVORIAMO */}
                <div
                    ref={processRef}
                    className={sectionClass}
                    style={animationStyle(processInView)}
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-3xl text-blue-600">⚙️</span>
                        <h2 className="text-2xl md:text-4xl font-bold text-blue-dark">Come lavoriamo</h2>
                    </div>
                    <div className="text-lg text-gray-900 font-semibold space-y-6">
                        <div className="flex items-start gap-4">
                            <span className="text-lg mt-1">🧠</span>
                            <p>
                                <strong>Analisi e confronto:</strong> iniziamo da un dialogo per comprendere contesto, <span className="font-bold text-blue-600">esigenze</span> e finalità.
                            </p>
                        </div>

                        <div className="flex items-start gap-4">
                            <span className="text-lg mt-1">🧩</span>
                            <p>
                                <strong>Progettazione mirata:</strong> definiamo una struttura chiara, funzionale e adatta alla <span className="font-bold text-blue-600">comunicazione del brand</span>.
                            </p>
                        </div>

                        <div className="flex items-start gap-4">
                            <span className="text-lg mt-1">✨</span>
                            <p>
                                <strong>Cura dei dettagli:</strong> prestiamo attenzione all’esperienza dell’utente, alla qualità visiva e all’ordine del <span className="font-bold text-blue-600">codice</span>.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
