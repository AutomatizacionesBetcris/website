import React, { useState } from "react";
import { testdata } from "./DataTest";

const TestMenu = () => {
  const [selectedTab, setSelectedTab] = useState("retiros");
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleTabChange = (tab) => {
    setSelectedCountry(""); // Agregar esta línea para resetear el valor seleccionado del dropdown
    setSelectedTab(tab);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      <div className="flex justify-center items-center rounded-lg">
        {/* Tab de Retiros */}
        <div
          className={`cursor-pointer p-4 ${
            selectedTab === "retiros"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => handleTabChange("retiros")}
        >
          Retiros
        </div>
        {/* Tab de Depósitos */}
        <div
          className={`cursor-pointer p-4 ${
            selectedTab === "depositos"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => handleTabChange("depositos")}
        >
          Depósitos
        </div>
      </div>

      <div>
        {/* Contenido de la pestaña seleccionada */}
        {selectedTab === "retiros" || selectedTab === "depositos" ? (
          <div>
            <div className="flex flex-col justify-center items-center">
              {/* Contenido del tab de Retiros o Depósitos */}
              <h1 className="text-center text-white text-lg mt-5 mb-5">
                {selectedTab === "retiros" ? "Retiros" : "Depósitos"}
              </h1>
              {/* Dropdown de países */}
              <select
                className="w-48 p-2 border-gray-300 border-solid border-2 rounded-md"
                value={selectedCountry}
                onChange={handleCountryChange}
              >
                <option value="">Seleccione un país</option>
                {testdata.map((country) => (
                  <option key={country.pais} value={country.pais}>
                    {country.pais}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-4 p-4 lg:grid-cols-6 gap-4 mt-5 sm:m-10 sm:mt-5 lg:m-56 lg:mt-5">
              {/* Mostrar la información correspondiente del país seleccionado en el grid */}
              {selectedCountry !== "" &&
                testdata
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
        ) : null}
      </div>
    </div>
  );
};

export default TestMenu;
