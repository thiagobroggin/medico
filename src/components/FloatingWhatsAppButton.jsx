
import React from "react";

const FloatingWhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511999999999"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agende sua consulta pelo WhatsApp"
    >
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48a11.98 11.98 0 00-16.96 0C.24 6.8.01 11.22 2.01 14.78L.13 21.87a1 1 0 001.2 1.2l7.09-1.88a11.98 11.98 0 0010.1-1.54c3.32-2.32 5.45-6.77 3.11-10.09-2.34-3.32-6.77-5.45-10.09-3.11-3.32 2.34-5.45 6.77-3.11 10.09a7.99 7.99 0 007.09 3.53c1.91 0 3.72-.7 5.13-2.11a8.004 8.004 0 00.44-11.38z" />
      </svg>
    </a>
  );
};

export default FloatingWhatsAppButton;
