
import React from "react";

const ClinicLocation = () => {
  return (
    <section className="py-12 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Localização da Clínica</h2>
        <div className="w-full h-96 shadow-md rounded overflow-hidden">
          <iframe
            title="Localização da Clínica Dutra Rodrigues"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9137794083484!2d-46.650531684441735!3d-23.57330496886212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cc6f32c4f7%3A0x23bcefaeaaa34b75!2sCl%C3%ADnica%20Dutra%20Rodrigues!5e0!3m2!1spt-BR!2sbr!4v1717450058201!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ClinicLocation;
