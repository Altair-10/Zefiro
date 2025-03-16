"use client";

import { useState, useCallback, useMemo } from "react";
import { Input } from "@heroui/react"
import { Textarea } from "@heroui/input";
import SendButton from "./buttonContact";

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

  const formValues = useMemo(() => formData, [formData]);

  const InputField = ({ type = "text", name, placeholder }) => (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={formValues[name]}
      onChange={handleChange}
      className="bg-blue-light w-[34vw] h-[10vw] md:w-[12vw] md:h-[3vw] pl-2 placeholder-blue-dark rounded-xl border-2 border-blue-dark"
      required
    />
  );

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col w-[70vw] h-[90vw] md:w-[25vw] md:h-[25vw] space-y-6">
        <div className="flex flex-row justify-between">
          <div className="flex items-center justify-center">
            <div className="flex w-[10vw] md:w-[12vw] md:h-[3vw] items-end md:flex-nowrap mb-6 md:mb-0">
              <Input
                isRequired
                label="Nome"
                labelPlacement="outside"
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
              />
            </div>
            <div className="flex w-[10vw] md:w-[12vw] md:h-[3vw] ml-[1vw] items-end md:flex-nowrap mb-6 md:mb-0">
              <Input
                isRequired
                label="Cognome"
                labelPlacement="outside"
                type="text"
                name="nome"
                value={formData.cognome}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex w-[10vw] md:w-[12vw] md:h-[3vw] items-end md:flex-nowrap mb-6 md:mb-0">
            <Input
              label="Azienda"
              labelPlacement="outside"
              type="text"
              name="azienda"
              value={formData.azienda}
              onChange={handleChange}
            />
          </div>
          <div className="flex w-[10vw] md:w-[12vw] md:h-[3vw] ml-[1vw] items-end md:flex-nowrap mb-6 md:mb-0">
            <Input
              isRequired
              label="Numero di telefono"
              labelPlacement="outside"
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <Input
            isRequired
            label="Email"
            labelPlacement="outside"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <Textarea 
          isRequired
          label="Siamo qui per rendere le cose più semplici. Parlaci!"
          labelPlacement="outside"
          variant="flat"
          name="aiuto"
          value={formData.aiuto}
          onChange={handleChange}
        />

        <div className="flex justify-center">
          <SendButton 
          text={`${loading ? "Invio in corso..." : "Invia"}`} 
          type="submit" 
          width="w-[20vw]" 
          height="h-[10vw]" 
          className="mt-[1vw] md:w-[12vw] md:h-[3vw] md:text-[1.5vw]" 
          disabled={loading}
          
          />
        </div>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
}
