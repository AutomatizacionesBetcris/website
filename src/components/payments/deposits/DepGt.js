import React, { useState } from "react";
import LogoBC from "../../../img/logo-blanco.png";
import Tarjetas from "../../../img/payments/Tarjetas.jpg";
import Banktransfer from "../../../img/payments/Bank_transfer.jpg";
import AstroPay from "../../../img/payments/Astropay.jpg";
import SafetyPay from "../../../img/payments/PagoEfectivoGT.jpg";
import PayCash from "../../../img/payments/PayCashGT.jpg";
import Agencias from "../../../img/payments/Betcris_Agencias.png";
import Skrill from "../../../img/payments/Skrill.jpg";
import Neteller from "../../../img/payments/Neteller.jpg";
import SkrillTap from "../../../img/payments/Skril_tap.jpg";
import Fri from "../../../img/payments/Fri.jpg";
import { motion } from "framer-motion";

const imagesDepositos = [
  {
    img: SafetyPay,
    title: "SAFETYPAY",
    url: "https://get.betcris.help/hc/es-419/articles/360002241397-SafetyPay",
    min: "$20.00",
    max: "$900.00",
    time: "60 minutos",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Haz clic en el 'Menú Principal', en la parte superior izquierda de tu pantalla, y luego en el 'Cajero'",
      "Selecciona 'Depósito' → 'Tiendas de conveniencia' → Pagar en efectivo",
      "Ingresa el monto, selecciona un punto de pago y haz clic en 'Generar código de pago'",
      "Reporta el código de pago de 6 dígitos que te proporciona el sistema",
      "Sigue los pasos mostrados en pantalla para confirmar tu depósito.",
    ],
  },
  {
    img: PayCash,
    title: "PAYCASH",
    url: "https://get.betcris.help/hc/es-419/articles/7287493065617-PayCash-Guatemala",
    min: "$10.00",
    max: "$900.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Haz clic en el 'Menú Principal', en la parte superior izquierda de tu pantalla, y luego en el 'Cajero'",
      "Selecciona 'Depósito' → 'Pagar en efectivo'",
      "Ingresa el monto a depositar y selecciona 'Generar referencia'",
      "Copia el código de 16 dígitos que el sistema proporciona",
      "Ve a una tienda de conveniencia, dile al cajero que vas a hacer un pago de PayCash, proporciona el número de referencia y el dinero a pagar (el monto debe ser el mismo que ingresaste al Cajero en línea de Betcris).",
      "Guarda el comprobante de pago.",
    ],
  },
  {
    img: Tarjetas,
    title: "TARJETAS DE CRÉDITO Y DÉBITO",
    url: "https://get.betcris.help/hc/es-419/articles/360002208798-Tarjetas-de-cr%C3%A9dito-y-d%C3%A9bito",
    min: "$10.00",
    max: "$250.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Haz clic en 'Tarjetas de crédito y débito'",
      "Ingresa la información solicitada si esta es la primera vez que estás usando una tarjeta (para acelerar el proceso, la próxima vez que realices un depósito, los datos de tu tarjeta ya estarán almacenados) y haz clic en 'Guardar'",
      "Ingresa el monto que quieres depositar",
      "Selecciona 'Confirmar' para completar la transacción",
    ],
  },
  {
    img: Banktransfer,
    title: "TRANSFERENCIA BANCARIA LOCAL",
    url: "https://get.betcris.help/hc/es-419/articles/360002241437-Transferencias-bancarias",
    min: "$10.00",
    max: "$900.00",
    time: "Una vez aprobados, los fondos se tramitan de forma inmediata a tu cuenta.",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Haz clic en 'Transferencia Bancaria'",
      "Elige el banco donde vas a depositar, luego selecciona la cuenta y el destinatario para realizar el depósito",
      "Completa los detalles requeridos y adjunta una fotografía del depósito realizado en el banco o en línea",
      "Haz clic en 'Reportar depósito'",
    ],
  },
  {
    img: Skrill,
    title: "SKRILL",
    url: "https://get.betcris.help/hc/es-419/articles/360002218658-Skrill",
    min: "$10.00",
    max: "$100,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Haz clic en 'e-Wallet', seguido en 'Skrill'",
      "Ingresa el monto y la información de tu cuenta de Skrill, luego pulsa 'Depositar'",
      "Serás redirigido al sitio de Skrill para completar la transacción",
    ],
  },
  {
    img: SkrillTap,
    title: "SKRILL 1-TAP",
    url: "https://get.betcris.help/hc/es-419/articles/360002218838-Skrill-1-Tap",
    min: "$10.00",
    max: "$100,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Haz clic en 'e-Wallet', seguido en 'Skrill 1-Tap'",
      "Ingresa el monto, tu cuenta Skrill y haz clic en 'Depositar'",
      "Completa la transacción en la página de Skrill donde se te redirige",
    ],
  },
  {
    img: Neteller,
    title: "NETELLER",
    url: "https://get.betcris.help/hc/es-419/articles/360002208818-NETELLER",
    min: "$10.00",
    max: "$100,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Haz clic en 'e-Wallet', seguido en 'NETELLER'",
      "Ingresa la cantidad, tu número de cuenta y haz clic en 'Depositar'",
      "Serás redirigido al sitio de Skrill para completar la transacción",
      "Completa la transacción en el sitio de NETELLER al que se te redirige",
    ],
  },
  {
    img: AstroPay,
    title: "ASTROPAY",
    url: "https://get.betcris.help/hc/es-419/articles/360002212037-AstroPay-Card",
    min: "$5.00",
    max: "$10,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Haz clic en 'AstroPay'",
      "Ingresa la cantidad y presiona 'Depositar'",
      "Ingresa el monto y la información de la tarjeta y por último pulsa 'Depositar' para completar la transacción",
    ],
  },
  {
    img: Agencias,
    title: "AGENCIAS BETCRIS",
    url: "https://get.betcris.help/hc/es-419/articles/6404360144273-Dep%C3%B3sitos-en-Agencias-Betcris",
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
    img: Fri,
    title: "FRI",
    url: "https://get.betcris.help/hc/es-419/articles/14170452651537-Fri",
    min: "$6.00",
    max: "$1,270.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Haz clic en 'Fri'",
      "Seguido ingresa el monto que deseas depositar, el número de teléfono registrado en Fri y haz clic en 'Depositar'",
      "Genera la orden de depósito",
      "Ingresa a tu billetera Fri y valida la orden de Betcris",
      "Confirma la orden de depósito para acreditar tus fondos",
    ],
  },
];

const DepGt = () => {
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

export default DepGt;
