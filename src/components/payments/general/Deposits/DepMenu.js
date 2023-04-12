import React, { useState } from "react";
import { depositDataEn } from "./DepData";
import LogoBC from "../../../../img/logo-blanco.png";

const DepMenu = () => {
  const depositData = depositDataEn;
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
            <div className="text-base text-center mt-10">
              <h1>Select a country</h1>
            </div>
            <div className="grid grid-cols-2 p-5 m-10 gap-5 justify-center items-center lg:m-40 lg:p-10 bg-sky-900 bg-opacity-20 rounded-2xl shadow-lg ">
              {depositData.map((country) => (
                <div className="flex justify-center items-center">
                  <button
                    key={country.pais}
                    onClick={() => handleCountrySelect(country.pais)}
                    className="border h-10 w-28 lg:h-16 lg:w-96 rounded-2xl"
                  >
                    {country.pais}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-base text-center mt-10">
            <button
              onClick={handleBackButtonClick}
              className="border h-12 w-60 lg:h-16 lg:w-80 rounded-2xl"
            >
              Back to country selection
            </button>
          </div>
        )}
      </div>
      <div className="grid grid-cols-3 p-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-4 mt-5 sm:m-10 sm:mt-5 lg:m-56 lg:mt-5">
        {/* Mostrar la información correspondiente del país seleccionado en el grid */}
        {selectedCountry !== "" &&
          depositData
            .find((country) => country.pais === selectedCountry)
            ?.info.map((image, index) => (
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

export default DepMenu;
