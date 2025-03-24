"use client";

import { useState, useCallback, useMemo } from "react";
import SendButton from "../../modules/contactButton";
import { Input } from "@heroui/react";
import { Textarea } from "@heroui/react";

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

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);

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
  }, [formData]);

  return (
    <form
    onSubmit={handleSubmit}
    className="flex flex-col justify-center md:gap-y-2 w-full h-full"
    >
      <div className="flex flex-row justify-between w-full gap-4">
        <Input
          isRequired
          label="Nome"
          labelPlacement="outside"
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          className="flex-1 min-w-0"
        />
        <Input
          isRequired
          label="Cognome"
          labelPlacement="outside"
          type="text"
          name="cognome"
          value={formData.cognome}
          onChange={handleChange}
          className="flex-1 min-w-0"
        />
      </div>
    
      <div className="flex flex-row justify-between w-full gap-4">
        <Input
          label="Azienda"
          labelPlacement="outside"
          type="text"
          name="azienda"
          value={formData.azienda}
          onChange={handleChange}
          className="flex-1 min-w-0"
        />
        <Input
          isRequired
          label="Numero di telefono"
          labelPlacement="outside"
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          className="flex-1 min-w-0"
        />
      </div>
    
      <div className="w-full">
        <Input
          isRequired
          label="Email"
          labelPlacement="outside"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full"
        />
      </div>
    
      <div className="w-full">
        <Textarea
          isRequired
          label="Siamo qui per te. Parlaci!"
          labelPlacement="outside"
          variant="flat"
          name="aiuto"
          value={formData.aiuto}
          onChange={handleChange}
          className="w-full min-h-[8vw]"
        />
      </div>
    
      <div className="flex flex-row justify-center">
        <SendButton
          text={`${loading ? "Invio in corso..." : "Invia"}`}
          type="submit"
          className="w-[40vw] text-lg md:w-1/3 md:text-base"
          disabled={loading}
        />
      </div>
    </form>  
  );
}
