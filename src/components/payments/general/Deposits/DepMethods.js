import React, { useState } from "react";
import { depositDataEn, depositDataEs } from "./DepData";

const DepMethods = ({ country, language }) => {
  // Estado para almacenar el idioma seleccionado
  const [selectedLanguage] = useState(language);

  // Obtener la información del país seleccionado según el idioma
  const depositData =
    selectedLanguage === "en"
      ? depositDataEn.find((data) => data.pais === country)
      : depositDataEs.find((data) => data.pais === country);

  return (
    <div>
      {/* Grid */}
      <div className="grid grid-cols-3 p-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-4 mt-5 sm:m-10 sm:mt-5 lg:m-56 lg:mt-5">
        {depositData.info.map((image, index) => (
          <a
            key={index}
            href={image.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={image.img}
              alt={`Imagen ${index + 1}`}
              className="w-38 rounded-lg overflow-hidden border-black shadow-lg hover:scale-110 transition-transform duration-300 ease-out"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default DepMethods;
