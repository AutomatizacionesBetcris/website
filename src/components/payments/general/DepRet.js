// EN CONSTRUCCION: http://localhost:3000/website/#/retdepgenerales

import { useState } from "react";
import { depositos, retiros } from "./RetDepData";
import LogoBC from "../../../img/logo-blanco.png";
import { motion } from "framer-motion";

const DepRet = () => {
  const [selectedTab, setSelectedTab] = useState("depositos");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [depRetArray, setDepRetArray] = useState(depositos); // Default to depositos array

  const handleTabChange = (tab) => {
    setSelectedCountry(""); // Agregar esta línea para resetear el valor seleccionado del dropdown
    setSelectedTab(tab);
    if (tab === "depositos") {
      setDepRetArray(depositos);
    } else if (tab === "retiros") {
      setDepRetArray(retiros);
    }
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setIsAccordionOpen(false); // Cerrar el acordeón al cambiar de país
  };

  return (
    <div>
      {/* navbar */}
      <nav className="flex flex-col border top-0 z-50 items-center justify-center h-20 bg-sky-800">
        <img src={LogoBC} alt="Logo" className="h-12" />
      </nav>

      <div className="p-5 m-5 bg-sky-900 bg-opacity-20 rounded-2xl shadow-black shadow-sm">
        <div className="text-sm lg:text-base text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }} // Aplica un retardo para que la animación del h1 se inicie después de la animación de los botones
          >
            <div className="flex justify-center items-center gap-5">
              {/* Tab de Depósitos */}
              <div
                className={`cursor-pointer rounded-lg w-28 p-3 hover:opacity-80 border-2 ${
                  selectedTab === "depositos"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
                onClick={() => handleTabChange("depositos")}
              >
                Depósitos
              </div>

              {/* Tab de Retiros */}
              <div
                className={`cursor-pointer rounded-lg w-28 p-3 hover:opacity-80 border-2 ${
                  selectedTab === "retiros"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
                onClick={() => handleTabChange("retiros")}
              >
                Retiros
              </div>
            </div>
          </motion.h1>
        </div>
      </div>

      <div>
        {/* Contenido de la pestaña seleccionada */}
        {selectedTab === "retiros" || selectedTab === "depositos" ? (
          <div>
            <div className="flex flex-col justify-center items-center">
              {/* Contenido del tab de Retiros o Depósitos */}
              <h1 className="text-center text-white text-lg mb-5">
                {selectedTab === "retiros" ? "Retiros" : "Depósitos"}
              </h1>
              {/* Dropdown de países */}
              <select
                className="w-48 p-2 border-gray-300 border-solid border-2 rounded-md"
                value={selectedCountry}
                onChange={handleCountryChange}
              >
                <option value="">Seleccione un país</option>
                {depRetArray.map((country) => (
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
                  <p className="lg:mr-96 ml-12 lg:ml-48">Minimo</p>
                  <p className="lg:mr-96 ml-12 lg:ml-48">Maximo</p>
                </div>

                {/* Mostrar la información correspondiente del país seleccionado en el acordeón */}
                {depositos
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
                      </button>
                      {isAccordionOpen === index && (
                        <div className="p-4 bg-white rounded-lg">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut et lorem vestibulum justo vehicula
                            accumsan. Pellentesque id suscipit massa. Aliquam
                            molestie semper ornare.
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
      {/* Condición para mostrar el div en fixed */}
      {selectedCountry === "" ? (
        <div className="fixed bottom-0 left-0 right-0 h-32 w-full text-center justify-center items-center text-white bg-sky-900 shadow-black shadow-sm">
          <div className=" text-xs m-2 mt-4 lg:m-10">
            <p>
              Para conocer los límites exactos de cada método de acuerdo a tu
              tipo de cuenta, por favor ingresa al cajero virtual; si aún no
              tienes acceso a nuestro cajero te invitamos a crearte una cuenta
              Betcris en el siguiente enlace:
            </p>
            <div className="mt-2">
              <a
                href="https://be.betcris.com/es/registrov3"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-500 hover:text-blue-600 font-bold hover:underline"
              >
                Crear cuenta
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className=" p-1 h-36 w-full text-center justify-center items-center text-white bg-sky-900 shadow-black shadow-sm">
          <div className=" ">
            <div className=" text-xs m-6 lg:m-5">
              <p className="mt-5 lg:m-10">
                Para conocer los límites exactos de cada método de acuerdo a tu
                tipo de cuenta, por favor ingresa al cajero virtual; si aún no
                tienes acceso a nuestro cajero te invitamos a crearte una cuenta
                Betcris en el siguiente enlace:
              </p>
              <div className="mt-2 lg:mt-0">
                <a
                  href="https://be.betcris.com/es/registrov3"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-500 hover:text-blue-600 font-bold hover:underline"
                >
                  Crear cuenta
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DepRet;
