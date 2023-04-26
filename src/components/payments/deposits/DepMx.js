import React, { useState } from "react";
import LogoBC from "../../../img/logo-blanco.png";
import Tarjetas from "../../../img/payments/Tarjetas.jpg";
import SafetyPay from "../../../img/payments/SafetyPay.jpg";
import AstroPay from "../../../img/payments/Astropay.jpg";
import Agencias from "../../../img/payments/Betcris_Agencias.png";
import Oxxo from "../../../img/payments/Oxxo.jpg";
import PaysafeCard from "../../../img/payments/PaysafeCard.jpg";
import SPEI from "../../../img/payments/Spei.jpg";
import Paynet from "../../../img/payments/Paynet.jpg";
import Skrill from "../../../img/payments/Skrill.jpg";
import Neteller from "../../../img/payments/Neteller.jpg";
import EcoPayz from "../../../img/payments/Ecopayz.jpg";
import Paypal from "../../../img/payments/Paypal.jpg";
import Skrill1Tap from "../../../img/payments/Skril_tap.jpg";
import { motion } from "framer-motion";

const imagesDepositos = [
  {
    img: Tarjetas,
    title: "TARJETAS DE CRÉDITO Y DÉBITO",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/depositos/tarjetas-de-credito-y-debito/",
    min: "MXN 198.00",
    max: "MXN 98,750.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Haz clic en 'Tarjetas de crédito y débito'",
      "Ingresa el monto que quieres depositar, seguido selecciona 'Siguiente'",
      "Asegúrate de revisar todos los detalles y presiona 'Confirmar' para completar la transacción",
    ],
  },
  {
    img: SafetyPay,
    title: "SAFETYPAY",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/depositos/safetypay/",
    min: "MXN 395.00",
    max: "MXN 19,750.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Haz clic en 'SafetyPay'",
      "Ingresa la cantidad y presiona 'Depositar'",
      "Una vez que cargue la página de SafetyPay, elige entre Transferencia bancaria o Pagar en efectivo",
    ],
  },
  {
    img: AstroPay,
    title: "ASTROPAY",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/depositos/astropay-card-2/",
    min: "MXN 99.00",
    max: "MXN 197,500.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Haz clic en 'AstroPay Card'",
      "Ingresa el monto y la información de la tarjeta",
      "Pulsa 'Depositar' para completar la transacción",
    ],
  },
  {
    img: Oxxo,
    title: "OXXO",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/depositos/oxxo/",
    min: "MXN 190.00",
    max: "MXN 9,404.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Haz clic en 'Oxxo Pay'",
      "Ingresa el monto a depositar, haz clic en 'Depositar'",
      "Se te generará un número de transacción, el cual podrás ir a pagar al Oxxo más cercano, para que los fondos se acrediten de forma inmediata",
    ],
  },
  {
    img: PaysafeCard,
    title: "PAYSAFE CARD",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/depositos/paysafecard/",
    min: "MXN 86.00",
    max: "MXN 49,375.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Haz clic en 'Paysafecard'",
      "Ingresa el monto del depósito, luego ingresa los 16 dígitos del PIN de paysafecard",
      "Pulsa 'Depositar' para completar la transacción",
    ],
  },
  {
    img: SPEI,
    title: "SPEI",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/depositos/spei/",
    min: "MXN 198.00",
    max: "MXN 395,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Haz clic en 'SPEI'",
      "Ingresa la cantidad y los datos que se te solicitan, luego haz clic en 'Depositar'",
      "Se te brindará la información del detalle de pago que debes utilizar para que hagas la transferencia",
    ],
  },
  {
    img: Paynet,
    title: "PAYNET",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/depositos/paynet/",
    min: "MXN 99.00",
    max: "MXN 59,250.00",
    time: "24 horas",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Haz clic en 'Paynet'",
      "Ingresa el monto que deseas depositar",
      "Ingresa los datos que se te solicitan, los cuales solo se te pedirán una vez, y quedarán guardados para futuras transacciones",
      "Haz clic en 'Depositar'",
    ],
  },
  {
    img: Skrill,
    title: "SKRILL",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/depositos/skrill/",
    min: "MXN 186.00",
    max: "MXN 185,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Haz clic en 'e-Wallet', seguido en 'Skrill'",
      "Ingresa el monto y la información de tu cuenta de Skrill, luego pulsa 'Depositar'",
      "Serás redirigido al sitio de Skrill para completar la transacción",
    ],
  },
  {
    img: Neteller,
    title: "NETELLER",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/depositos/neteller/",
    min: "MXN 186.00",
    max: "MXN 185,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Haz clic en 'e-Wallet', seguido en 'NETELLER'",
      "Ingresa el monto, tu número de cuenta e identificación segura de NETELLER, luego pulsa 'Depositar'",
      "Serás redirigido al sitio de NETELLER para completar la transacción",
    ],
  },
  {
    img: Skrill1Tap,
    title: "SKRILL 1-TAP",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/depositos/skrill-1-tap/",
    min: "MXN 230.00",
    max: "MXN 185,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Haz clic en 'e-Wallet', seguido en 'Skrill 1-Tap'",
      "Ingresa el monto, y la información de tu cuenta de Skrill 1-Tap, luego pulsa 'Depositar'",
      "Serás redirigido al sitio de Skrill para completar la transacción",
    ],
  },
  {
    img: EcoPayz,
    title: "ECOPAYZ",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/depositos/ecopayz/",
    min: "MXN 230.00",
    max: "MXN 926,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Haz clic en 'e-Wallet', seguido en 'ecoPayz'",
      "Ingresa el monto y la información de tu cuenta de ecoPayz, luego pulsa 'Depositar'",
      "Serás redirigido al sitio de ecoPayz para completar la transacción",
    ],
  },
  {
    img: Agencias,
    title: "AGENCIAS BETCRIS",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/depositos/depositos-en-agencias-betcris/",
    min: "$",
    max: "$",
    time: "Inmediato",
    descriptionTitle: "Dentro de quioscos o agencias Betcris:",
    description: [
      "Ofrecemos una variedad de formas rápidas y convenientes para depositar fondos en tu cuenta, incluyendo depósitos en las Agencias oficiales de Betcris.",
      "Para hacer tu depósito, solo debes presentar tu identificación y número de cuenta, junto con los fondos a depositar.",
      "Contacta a tu Agencia Betcris más cercana para confirmar los montos mínimos y máximos por transacción, así como cualquier detalle adicional que necesites, ya que pueden variar según el país.",
    ],
  },
  {
    img: Paypal,
    title: "PAYPAL",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/depositos/como-puego-pagar-con-paypal/",
    min: "MXN 190.00",
    max: "MXN 180,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Haz clic en 'PayPal'",
      "Ingresa el monto que deseas y haz clic en 'Depositar'",
      "El sistema te redirigirá a la página de PayPal para completar tu pago",
      "Una vez que hayas iniciado sesión en la página de PayPal, selecciona la tarjeta previamente registrada en tu cuenta PayPal o puedes agregar una nueva",
      "Confirma la tarjeta y, haz clic en 'Compra completa'",
    ],
  },
];

const DepMx = () => {
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
          {imagesDepositos.map((image, index) => (
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

export default DepMx;
