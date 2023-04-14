import React, { useState } from "react";
import { testdata } from "./DataTest";

const TestMenu = () => {
  const [selectedTab, setSelectedTab] = useState("retiros");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleTabChange = (tab) => {
    setSelectedCountry(""); // Agregar esta línea para resetear el valor seleccionado del dropdown
    setSelectedTab(tab);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setIsAccordionOpen(false); // Cerrar el acordeón al cambiar de país
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
            {selectedCountry !== "" && (
              <div className="mt-5 m-5">
                <div className="flex text-sm lg:text-lg text-white">
                  <p className="lg:mr-96 ml-7 lg:ml-5">Metodo</p>
                  <p className="lg:mr-96 ml-12 lg:ml-1">Minimo</p>
                  <p className="lg:mr-96 ml-12 lg:ml-1">Maximo</p>
                </div>

                {/* Mostrar la información correspondiente del país seleccionado en el acordeón */}
                {testdata
                  .find((country) => country.pais === selectedCountry)
                  ?.info.map((image, index) => (
                    <div key={index}>
                      <button
                        className="flex items-center rounded-xl justify-between w-full h-16 bg-gray-200 text-black p-4 text-left cursor-pointer"
                        onClick={() => setIsAccordionOpen(index)}
                      >
                        <img
                          src={image.img}
                          alt={`Imagen del Método de Pago ${index + 1}`}
                          className="w-14 h-14 ml-2 rounded-lg overflow-hidden border-black shadow-lg hover:scale-110 transition-transform duration-300 ease-out"
                        />
                        <p>{image.min}</p>

                        <p>{image.max}</p>
                        <div className=" font-bold">
                          <span>
                            {isAccordionOpen === index ? "Cerrar" : "Abrir"}{" "}
                          </span>
                        </div>
                      </button>
                      {isAccordionOpen === index && (
                        <div className="p-4 bg-white rounded-lg">
                          <p>
                            Las retiradas mediante tarjeta de débito no se
                            encuentran disponibles. Para más información, vaya a
                            la sección de 'Transferencia bancaria'.
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TestMenu;
