"use client";

import { useState, useCallback, useEffect } from "react";
import SubmitButton from "./submitButton";
import SuccessModal from "./SuccesModale";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    azienda: "",
    telefono: "",
    aiuto: "",
  });

  const [status, setStatus] = useState(false);
  const [errors, setErrors] = useState({ nome: "", cognome: "", telefono: "" });
  const [showModal, setShowModal] = useState(false);

  const validateInputs = (name, value) => {
    let error = "";
    if (name === "nome" || name === "cognome") {
      if (!/^[A-Za-zÀ-ÖØ-öø-ÿ'' -]{2,}$/.test(value)) {
        error = "Inserire un cognome valido.";
      }
    } else if (name === "telefono") {
      if (!/^\+?[0-9\s\-()]{8,15}$/.test(value)) {
        error = "Inserire un numero di telefono valido.";
      }
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateInputs(name, value);
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setStatus(true);

    if (errors.nome || errors.cognome || errors.telefono) {
      setStatus(false);
      return;
    }

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          azienda: formData.azienda,
          name: `${formData.nome} ${formData.cognome}`,
          email: formData.email,
          tel: formData.telefono,
          message: formData.aiuto,
        }),
      });

      if (response.ok) {
        setFormData({ azienda: "", nome: "", cognome: "", email: "", telefono: "", aiuto: "" });
        setShowModal(true);
      }
    } catch (error) {
      console.error("Errore:", error);
    } finally {
      setStatus(false);
    }
  }, [formData, errors]);

  // Chiude il modale dopo 5 secondi
  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  return (
    <>
      <form className="flex flex-col justify-center md:gap-y-2 w-full h-full" onSubmit={handleSubmit}>
        <div className="md:flex flex-row justify-between w-full gap-4 ">
          <div className="flex-1 min-w-0">
            <label className="block text-sm font-medium">Nome</label>
            <input required type="text" name="nome" value={formData.nome} onChange={handleChange} className="w-full md:h-[4vw] lg:h-[3vw] 2xl:h-[2vw] p-2 border rounded-md bg-gray-100" />
            {errors.nome && <p className="text-red-500 text-xs mt-1 whitespace-nowrap">{errors.nome}</p>}
          </div>
          <div className="flex-1 min-w-0">
            <label className="block text-sm font-medium">Cognome</label>
            <input required type="text" name="cognome" value={formData.cognome} onChange={handleChange} className="w-full md:h-[4vw] lg:h-[3vw] 2xl:h-[2vw] p-2 border rounded-md bg-gray-100" />
            {errors.cognome && <p className="text-red-500 text-xs mt-1 whitespace-nowrap">{errors.cognome}</p>}
          </div>
        </div>

        <div className="md:flex flex-row justify-between w-full gap-4">
          <div className="flex-1 min-w-0">
            <label className="block text-sm font-medium">Azienda</label>
            <input type="text" name="azienda" value={formData.azienda} onChange={handleChange} className="w-full md:h-[4vw] lg:h-[3vw] 2xl:h-[2vw] p-2 border rounded-md bg-gray-100" />
          </div>
          <div className="flex-1 min-w-0">
            <label className="block text-sm font-medium whitespace-nowrap">Numero di telefono</label>
            <input required type="tel" name="telefono" value={formData.telefono} onChange={handleChange} className="w-full md:h-[4vw] lg:h-[3vw] 2xl:h-[2vw] p-2 border rounded-md bg-gray-100" />
            {errors.telefono && <p className="text-red-500 text-xs mt-1 whitespace-nowrap">{errors.telefono}</p>}
          </div>
        </div>

        <div className="w-full">
          <label className="block text-sm font-medium">Email</label>
          <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full md:h-[4vw] lg:h-[3vw] 2xl:h-[2vw] p-2 border rounded-md bg-gray-100" />
        </div>

        <div className="w-full">
          <label className="block text-sm font-medium">Siamo qui per te. Parlaci!</label>
          <textarea
            required
            name="aiuto"
            value={formData.aiuto}
            onChange={handleChange}
            className="w-full md:h-[4vw] lg:h-[3vw] 2xl:h-[2vw] p-2 border rounded-md min-h-[8vw] bg-gray-100 resize-none"
          />
        </div>

        <div className="flex flex-row justify-center mt-5">
          <SubmitButton onGoing={status} />
        </div>
      </form>
      
      {/* Modale di successo per l'invio dell'email */}
      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
      
    </>
  );
}