"use client";

import { useState } from "react";
import Form from 'next/form'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    azienda: "",
    telefono: "",
    aiuto: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

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
        setMessage("Email inviata con successo!");
        setFormData({ azienda: "", nome: "", cognome: "", email: "", telefono: "", aiuto: "" });
      } else {
        setMessage("Errore durante l'invio dell'email.");
      }
    } catch (error) {
      console.error("Errore:", error);
      setMessage("Si è verificato un problema.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="flex flex-col w-[70vw] h-[90vw] md:w-[25vw] md:h-[25vw] space-y-6">
        <div className="flex flex-row justify-between">
          <div className="flex items-center justify-center">
            <div className="relative">
              <input
                className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-orange transition-colors focus:outline-none peer bg-inherit"
                id="username"
                name="nome"
                type="text"
                value={formData.nome} 
                onChange={handleChange} 
                required
              />
              <label
                for="username"
                className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-orange"
              >Name
              </label>
            </div>
          </div>



          {/* <input className="bg-blue-light w-[34vw] h-[10vw] md:w-[12vw] md:h-[3vw] pl-2 placeholder-blue-dark rounded-xl" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} required /> */}
          <input className="bg-blue-light w-[34vw] h-[10vw] md:w-[12vw] md:h-[3vw] pl-2 placeholder-blue-dark rounded-xl" name="cognome" placeholder="Cognome" value={formData.cognome} onChange={handleChange} required />
        </div>
        <div className="flex flex-row justify-between">
          <input className="bg-blue-light w-[34vw] h-[10vw] md:w-[12vw] md:h-[3vw] pl-2 placeholder-blue-dark rounded-xl" name="azienda" placeholder="Azienda" value={formData.azienda} onChange={handleChange} required />
          <input type="tel" className="bg-blue-light w-[34vw] h-[10vw] md:w-[12vw] md:h-[3vw] pl-2 placeholder-blue-dark rounded-xl" name="telefono" placeholder="Telefono" value={formData.telefono} onChange={handleChange} required />
        </div>

        <input type="email" className="bg-blue-light w-full h-[10vw] md:h-[3vw] pl-2 placeholder-blue-dark rounded-xl" name="email" placeholder="Email aziendale" value={formData.email} onChange={handleChange} required />
        <textarea className="bg-blue-light w-full h-[20vw] md:h-[7vw] pl-2 pt-2 placeholder-blue-dark rounded-xl" name="aiuto" placeholder="Come possiamo esserti d'aiuto?" value={formData.aiuto} onChange={handleChange} required />
        <div className="flex justify-center">
          <button type="submit" className="w-[20vw] h-[10vw] md:w-[10vw] md:h-[3vw] bg-orange rounded-xl" disabled={loading}>
            {loading ? "Invio in corso..." : "Invia"}
          </button>
        </div>

      </Form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
}
