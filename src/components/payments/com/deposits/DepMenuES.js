// https://bcautomatizaciones.com/website/#/depositos/generaldepes

import React, { useState } from "react";
import { depositDataEs } from "./DepData";
import LogoBC from "../../../../img/logo-blanco.png";
import { motion } from "framer-motion";

const DepMenuES = () => {
  const depositData = depositDataEs;
  const [selectedCountry, setSelectedCountry] = useState(""); // Estado para manejar la selección de país

  // Función para manejar la selección de país
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  // Función para manejar el botón de volver
  const handleBackButtonClick = () => {
    setSelectedCountry("");
  };

  return (
    <div>
      <div>
        {/* navbar */}
        <nav className="flex flex-col border top-0 z-50 items-center justify-center h-20 bg-sky-800">
          <img src={LogoBC} alt="Logo" className="h-12" />
        </nav>

        {/* Seleccion de pais */}
        {selectedCountry === "" ? (
          <div>
            <div className="p-5 m-5 bg-sky-900 bg-opacity-20 rounded-2xl shadow-black shadow-sm">
              <div className="text-sm lg:text-base text-white text-center">
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: depositData.length * 0.3 }} // Aplica un retardo para que la animación del h1 se inicie después de la animación de los botones
                >
                  Por favor selecciona tu país
                </motion.h1>
              </div>
            </div>
            <div className="grid grid-cols-2 p-5 m-5 gap-5 justify-center items-center lg:grid-cols-4 lg:m-6 lg:p-10 bg-sky-900 bg-opacity-20 rounded-2xl shadow-black shadow-md">
              {depositData.map((country, index) => (
                <motion.div
                  key={country.pais}
                  className="flex justify-center items-center"
                  initial={{ opacity: 0, y: 50 }} // establece la posición inicial en la parte inferior y la opacidad en 0
                  animate={{ opacity: 1, y: 0 }} // anima la opacidad a 1 y la posición a 0 (arriba)
                  transition={{ duration: 1, delay: index * 0.3 }} // utiliza el índice del array para aplicar un retardo a la animación
                >
                  <motion.button
                    onClick={() => handleCountrySelect(country.pais)}
                    className="h-12 w-28 text-xs lg:text-base lg:h-16 lg:w-96 rounded-lg shadow-black shadow-sm bg-blue-600 text-white hover:bg-indigo-700"
                  >
                    {country.pais}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-sm lg:text-base text-center mt-5">
            <div className="p-3 m-4 bg-sky-900 bg-opacity-20 rounded-2xl shadow-black shadow-sm">
              <div className="flex text-xs lg:text-base text-white justify-between">
                <button
                  onClick={handleBackButtonClick}
                  className="flex w-24 items-center text-white hover:scale-110 transition-transform duration-300 ease-out hover:text-gray-300 hover:underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.72 10l5.29 5.29a.75.75 0 0 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 1.06L6.72 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                  VOLVER
                </button>

                <img
                  src={
                    depositData.find(
                      (country) => country.pais === selectedCountry
                    )?.flag
                  }
                  alt={`Flag of ${selectedCountry}`}
                  className="h-8 w-10 rounded-lg md:h-10 md:w-12 lg:h-12 lg:w-14"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="grid grid-cols-4 p-4 lg:grid-cols-6 gap-4 mt-5 sm:m-10 sm:mt-5 lg:m-56 lg:mt-5">
        {/* Mostrar la información correspondiente del país seleccionado en el grid */}
        {selectedCountry !== "" &&
          depositData
            .find((country) => country.pais === selectedCountry)
            ?.info.map((image, index) => (
              <motion.a
                key={index}
                href={image.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }} // establece la posición inicial en la parte inferior y la opacidad en 0
                animate={{ opacity: 1, y: 0 }} // anima la opacidad a 1 y la posición a 0 (arriba)
                transition={{ duration: 1, delay: index * 0.3 }} // utiliza el índice del array para aplicar un retardo a la animación
              >
                <motion.img
                  src={image.img}
                  alt={`Imagen ${index + 1}`}
                  className="w-38 rounded-lg overflow-hidden border-black shadow-lg hover:scale-110 transition-transform duration-300 ease-out"
                />
              </motion.a>
            ))}
      </div>
    </div>
  );
};

export default DepMenuES;
