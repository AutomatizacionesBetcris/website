import React, { useState } from "react";
import LogoBC from "../../../img/logo-blanco.png";
import Banktransfer from "../../../img/payments/Bank_transfer.jpg";
import AstroPay from "../../../img/payments/Astropay.jpg";
import Agencias from "../../../img/payments/Betcris_Agencias.png";
import Retirotarjeta from "../../../img/payments/Pay_to_card.jpg";
import Skrill from "../../../img/payments/Skrill.jpg";
import Neteller from "../../../img/payments/Neteller.jpg";
import EcoPayz from "../../../img/payments/Ecopayz.jpg";

const imagesRetiros = [
  {
    img: Retirotarjeta,
    title: "TARJETAS DE CRÉDITO Y DÉBITO",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/retiros/visa-direct-retiro-a-tarjeta/",
    min: "MXN 198.00",
    max: "MXN 98,750.00",
    time: "30 minutos",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Haz clic en 'Retiro a tarjeta-Visa Direct', seguido ingresa la cantidad deseada, selecciona la tarjeta, y por último haz clic en 'Retirar'.",
  },
  {
    img: Banktransfer,
    title: "TRANSFERENCIA BANCARIA LOCAL",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/retiros/transferencia-bancaria/",
    min: "MXN 198.00",
    max: "MXN 197,500.00",
    time: "7 días",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Haz clic en 'Transferencia Bancaria', seguido ingresa el monto del retiro, luego completa la información de tu cuenta bancaria la primera vez (estará guardada la próxima vez) y por último haz clic en 'Retirar'.",
  },
  {
    img: AstroPay,
    title: "ASTROPAY",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/retiros/astropay-card/",
    min: "MXN 99.00",
    max: "MXN 19,750.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Haz clic en 'AstroPay Card', seguido ingresa el monto a retirar y haz clic en 'Registrar' una cuenta nueva, luego ingresa tu información, la misma que usaste en la aplicación móvil: número de teléfono (incluye el código de tu país sin utilizar el signo de “+” al principio), nombre y apellido, correo electrónico e identificación personal.",
  },
  {
    img: Skrill,
    title: "SKRILL",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/retiros/skrill-2/",
    min: "$10.00",
    max: "$2,500.00",
    time: "48 horas",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Haz clic en 'Skrill', seguido ingresa la cantidad que quieres retirar, luego agrega los datos de tu cuenta Skrill para tu primer retiro (los datos serán guardados para la siguiente vez), y por último haz clic en 'Verificar retiro'.",
  },
  {
    img: Neteller,
    title: "NETELLER",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/retiros/neteller-2/",
    min: "$10.00",
    max: "$2,500.00",
    time: "48 horas",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Haz clic en 'NETELLER', seguido ingresa la cantidad que quieres retirar, luego ingresa los datos de tu cuenta NETELLER, y por último haz clic en 'Verificar retiro'.",
  },
  {
    img: EcoPayz,
    title: "ECOPAYZ",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/retiros/ecopayz-2/",
    min: "$10.00",
    max: "$2,500.00",
    time: "48 horas",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Haz clic en 'ecoPayz', seguido ingresa la cantidad que quieres retirar, luego ingresa los datos de tu cuenta ecoPayz y por último haz clic en 'Verificar retiro'.",
  },
  {
    img: Agencias,
    title: "AGENCIAS BETCRIS",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/retiros/retiros-en-agencias-betcris/",
    min: "$",
    max: "$",
    time: "-",
    descriptionTitle: "Dentro de quioscos o agencias Betcris:",
    description:
      "Ofrecemos una variedad de formas rápidas y convenientes para retirar fondos en tu cuenta, incluyendo depósitos en las Agencias oficiales de Betcris. Para hacer tu retiro solo debes presentar tu identificación y número de cuenta, además de haber completado todos los procesos de verificación necesarios para el retiro de fondos. Contacta a tu Agencia Betcris más cercana para confirmar los montos mínimos y máximos por transacción, así como cualquier detalle adicional que necesites, ya que pueden variar según el país.",
  },
];

const RetMx = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="min-h-screen">
      {/* navbar */}
      <nav className="flex flex-col border top-0 z-50 items-center justify-center h-20 bg-sky-800">
        <img src={LogoBC} alt="Logo" className="h-12" />
      </nav>
      <div className="p-7 flex flex-col justify-center items-center ">
        {/* Grid */}
        <div className="grid grid-cols-3 p-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-4 mt-5 sm:m-10 sm:mt-5 lg:m-56 lg:mt-5">
          {imagesRetiros.map((image, index) => (
            <img
              key={index}
              src={image.img}
              alt={`Imagen ${index + 1}`}
              className="w-38 rounded-lg overflow-hidden border-black shadow-lg hover:scale-110 transition-transform duration-300 ease-out"
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
        {selectedImage && (
          <div class="fixed z-10 inset-0 overflow-y-auto">
            <div class="flex justify-center items-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div class="justify-center">
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 class="flex justify-center font-bold text-base text-gray-900">
                        {selectedImage.title}
                      </h3>
                      <hr></hr>
                      <p className=" mt-4 mb-4 text-xs text-justify w-full">
                        <p>{selectedImage.descriptionTitle}</p>
                        <br></br>
                        {selectedImage.description}
                      </p>
                      {selectedImage.title !== "AGENCIAS BETCRIS" && (
                        <div>
                          <hr></hr>
                          <div class="grid grid-cols-3 mt-2 mb-2 text-center justify-center gap-2">
                            <p class="w-full whitespace-nowrap">
                              <strong>Mínimo:</strong>
                            </p>
                            <p class="w-full whitespace-nowrap">
                              <strong>Máximo:</strong>
                            </p>
                            <p class="w-full whitespace-nowrap">
                              <strong>Tiempo:</strong>
                            </p>
                          </div>

                          <div class="grid grid-cols-3 mb-2 text-center justify-center gap-2">
                            <p>{selectedImage.min}</p>
                            <p>{selectedImage.max}</p>
                            <p>{selectedImage.time}</p>
                          </div>
                          <hr></hr>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {selectedImage.title !== "AGENCIAS BETCRIS" && (
                  <footer className="text-center text-gray-500 text-sm">
                    <a
                      href={selectedImage.url}
                      target="_blank"
                      className="underline hover:text-gray-700"
                      rel="noopener noreferrer"
                    >
                      Más información
                    </a>
                  </footer>
                )}

                <div class="flex justify-center items-center px-4 py-3">
                  <button
                    type="button"
                    class="w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setSelectedImage(null)}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RetMx;
