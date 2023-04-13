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
            <div className="p-5 m-5 bg-sky-900 bg-opacity-20 rounded-2xl shadow-black shadow-sm">
              <div className="text-sm lg:text-base text-white text-center">
                <h1>SELECT A COUNTRY</h1>
              </div>
            </div>
            <div className="grid grid-cols-3 p-5 m-5 gap-5 justify-center items-center lg:grid-cols-3 lg:m-6 lg:p-10 bg-sky-900 bg-opacity-20 rounded-2xl shadow-black shadow-md ">
              {depositData.map((country) => (
                <div className="flex justify-center items-center">
                  <button
                    key={country.pais}
                    onClick={() => handleCountrySelect(country.pais)}
                    className="h-12 w-28 text-xs lg:text-base lg:h-16 lg:w-96 rounded-lg shadow-black shadow-sm bg-blue-600 text-white hover:bg-indigo-700"
                  >
                    {country.pais}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-sm lg:text-base text-center mt-5">
            <div className="p-5 m-5 bg-sky-900 bg-opacity-20 rounded-2xl shadow-black shadow-sm">
              <div className="flex text-sm lg:text-base text-white justify-between">
                <button
                  onClick={handleBackButtonClick}
                  className="flex w-24 items-center text-white hover:scale-110 transition-transform duration-300 ease-out hover:text-gray-300 hover:underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.72 10l5.29 5.29a.75.75 0 0 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 1.06L6.72 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                  BACK
                </button>

                <img
                  src={
                    depositData.find(
                      (country) => country.pais === selectedCountry
                    )?.flag
                  }
                  alt={`Flag of ${selectedCountry}`}
                  className="h-10 w-12 rounded-lg md:h-10 md:w-12 lg:h-12 lg:w-14"
                />
              </div>
            </div>
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
