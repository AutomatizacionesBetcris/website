// https://bcautomatizaciones.com/website/#/retiros/mx

import React, { useState } from "react";
import LogoBC from "../../../img/logo-blanco.png";
import Banktransfer from "../../../img/payments/Bank_transfer_RET.jpg";
import AstroPay from "../../../img/payments/Astropay.jpg";
import Agencias from "../../../img/payments/Betcris_Agencias.png";
import Retirotarjeta from "../../../img/payments/Pay_to_card.jpg";
import Skrill from "../../../img/payments/Skrill.jpg";
import Neteller from "../../../img/payments/Neteller.jpg";
import EcoPayz from "../../../img/payments/Ecopayz.jpg";
import Nuvei from "../../../img/payments/NUVEI.jpg";
import { motion } from "framer-motion";

const imagesRetiros = [
  {
    img: Retirotarjeta,
    title: "TARJETAS DE CRÉDITO Y DÉBITO",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/retiros/visa-direct-retiro-a-tarjeta/",
    min: "MXN 180.00",
    max: "MXN 90,000.00",
    time: "30 minutos",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Selecciona 'Retiro'",
      "Selecciona 'Visa Direct / Retiro a tarjeta'",
      "Ingresa la cantidad deseada",
      "Agrega la información de tu tarjeta: tu nombre tal como se muestra en la tarjeta, el número de 16 dígitos y la fecha de vencimiento, tu dirección de correo electrónico y número de teléfono, y la cantidad solicitada",
    ],
  },
  {
    img: Banktransfer,
    title: "TRANSFERENCIA BANCARIA LOCAL",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/retiros/transferencia-bancaria/",
    min: "MXN 180.00",
    max: "MXN 180,000.00",
    time: "El tiempo de acreditación varía según el banco receptor.",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Selecciona 'Retiro' → 'Transferencia Bancaria'",
      "Ingresa el monto que deseas retirar",
      "Completa la información de tu cuenta bancaria la primera vez (estará guardada la próxima vez)",
      "Haz clic en 'Retirar'",
    ],
  },
  {
    img: AstroPay,
    title: "ASTROPAY",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/retiros/astropay-card/",
    min: "MXN 90.00",
    max: "MXN 18,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Ingresa al 'Cajero' de tu cuenta Betcris y haz clic en 'Retiros' → 'AstroPay Card'",
      "Ingresa el monto a retirar y haz clic en 'Registrar una cuenta nueva'",
      "Ingresa tu información, la misma que usaste en la aplicación móvil: número de teléfono (incluye el código de tu país sin utilizar el signo de “+” al principio), nombre y apellido, correo electrónico e identificación personal",
    ],
  },
  {
    img: Skrill,
    title: "SKRILL",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/retiros/skrill-2/",
    min: "MXN 180.00",
    max: "MXN 45,000.00",
    time: "Una vez aprobados, los fondos se tramitan de forma inmediata a tu cuenta.",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Selecciona 'Retiro' → 'Skrill'",
      "Ingresa la cantidad que quieres retirar",
      "Agrega los datos de tu cuenta Skrill para tu primer retiro (los datos serán guardados para la siguiente vez)",
      "Pulsa 'Verificar retiro'",
    ],
  },
  {
    img: Neteller,
    title: "NETELLER",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/retiros/neteller-2/",
    min: "MXN 180.00",
    max: "MXN 45,000.00",
    time: "Una vez aprobados, los fondos se tramitan de forma inmediata a tu cuenta.",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Selecciona 'Retiro' → 'NETELLER'",
      "Ingresa la cantidad que quieres retirar",
      "Ingresa los datos de tu cuenta NETELLER",
      "Pulsa 'Verificar retiro'",
    ],
  },
  {
    img: EcoPayz,
    title: "ECOPAYZ",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/retiros/ecopayz-2/",
    min: "MXN 180.00",
    max: "MXN 45,000.00",
    time: "Una vez aprobados, los fondos se tramitan de forma inmediata a tu cuenta.",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Selecciona 'Retiro' → 'ecoPayz'",
      "Ingresa la cantidad que quieres retirar",
      "Ingresa los datos de tu cuenta ecoPayz",
      "Pulsa 'Verificar retiro'",
    ],
  },
  {
    img: Nuvei,
    title: "NUVEI",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/retiros/nuvei/",
    min: "MXN 18.00",
    max: "MXN 3,700.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Selecciona 'Retiro' → 'Retiro en efectivo'",
      "Ingresa el monto que deseas retirar, el CURP, correo electrónico y haz clic en 'Generar referencia'",
      "Revisa tu correo; allí recibirás el número de referencia",
      "Visita la tienda afiliada más cercana",
      "Solicita un retiro a PESPAY",
      "Proporciona el número de referencia y recibe tu dinero en efectivo",
    ],
  },
  {
    img: Agencias,
    title: "AGENCIAS BETCRIS",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/retiros/retiros-en-agencias-betcris/",
    min: "$",
    max: "$",
    time: "-",
    descriptionTitle: "Dentro de quioscos o agencias Betcris:",
    description: [
      "Ofrecemos una variedad de formas rápidas y convenientes para retirar fondos en tu cuenta, incluyendo depósitos en las Agencias oficiales de Betcris.",
      "Para hacer tu retiro solo debes presentar tu identificación y número de cuenta, además de haber completado todos los procesos de verificación necesarios para el retiro de fondos.",
      "Contacta a tu Agencia Betcris más cercana para confirmar los montos mínimos y máximos por transacción, así como cualquier detalle adicional que necesites, ya que pueden variar según el país.",
    ],
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
            <motion.a
              key={index}
              initial={{ opacity: 0, y: 50 }} // establece la posición inicial en la parte inferior y la opacidad en 0
              animate={{ opacity: 1, y: 0 }} // anima la opacidad a 1 y la posición a 0 (arriba)
              transition={{ duration: 1, delay: index * 0.3 }} // utiliza el índice del array para aplicar un retardo a la animación
            >
              <motion.img
                src={image.img}
                alt={`Imagen ${index + 1}`}
                onClick={() => handleImageClick(image)}
                className="w-38 rounded-lg overflow-hidden border-black shadow-lg hover:scale-110 transition-transform duration-300 ease-out"
              />
            </motion.a>
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
                      <ul className="mt-4 mb-4 text-xs text-start w-full p-1">
                        <p>{selectedImage.descriptionTitle}</p>
                        <br></br>
                        {selectedImage.title !== "AGENCIAS BETCRIS" ? (
                          selectedImage.description.map(
                            (description, index) => (
                              <li key={index} className="mb-2">
                                {index + 1}. {description}{" "}
                              </li>
                            )
                          )
                        ) : (
                          <li
                            className="mb-2"
                            style={{ whiteSpace: "pre-wrap" }}
                          >
                            {selectedImage.description.map(
                              (description, index) => (
                                <div key={index}>
                                  {description}
                                  <br />
                                  <br />
                                </div>
                              )
                            )}
                          </li>
                        )}
                      </ul>
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
