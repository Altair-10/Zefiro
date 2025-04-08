import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = {
  vetrina: {
    title: "Sito Vetrina",
    features: ["Design su misura", "Ottimizzazione SEO", "Mobile Friendly", "Form di contatto"],
    color: "#16697a"
  },
  gestionale: {
    title: "Gestionale",
    features: ["Dashboard personalizzata", "CRM integrato", "Report automatici", "Multi-utente"],
    color: "#489fb5"
  }
};

export default function ServiceSwitch() {
  const [activeService, setActiveService] = useState("vetrina");

  return (
    <div className="flex flex-col items-center gap-8 my-12">
      {/* Switch Tab */}
      <div className="flex bg-gray-100 p-1 rounded-full">
        {Object.keys(services).map((key) => (
          <button
            key={key}
            onClick={() => setActiveService(key)}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${activeService === key ? "text-white" : "text-gray-600"}`}
            style={{ background: activeService === key ? services[key].color : "transparent" }}
          >
            {services[key].title}
          </button>
        ))}
      </div>

      {/* Contenuto Animato */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeService}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-md p-6 rounded-xl shadow-lg"
          style={{ backgroundColor: services[activeService].color }}
        >
          <h3 className="text-white text-2xl font-extrabold flex justify-center mb-3">{services[activeService].title}</h3>
          <ul className="space-y-2">
            {services[activeService].features.map((feature, i) => (
              <li key={i} className="text-white/90 flex items-center gap-2">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffa62b" className="bi bi-check-all" viewBox="0 0 16 16">
                    <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                  </svg>
                </span> {feature}
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}