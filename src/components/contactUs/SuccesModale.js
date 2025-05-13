"use client";

import { useEffect } from "react";

export default function SuccessModal({ isOpen, onClose }) {
  // Chiude il modale dopo 5 secondi
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-11/12 max-w-md z-10 relative">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-medium mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg md:text-xl font-medium text-blue-dark mb-2">Messaggio inviato!</h3>
          <p className="text-sm md:text-base text-gray-600 mb-6">
            Grazie per averci contattato. Ti risponderemo il prima possibile.
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gradient-orange text-white rounded-md shadow-md hover:opacity-90 transition-opacity"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
}
