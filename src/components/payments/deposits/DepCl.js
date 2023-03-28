import React, { useState } from "react";
import LogoBC from "../../../img/logo-blanco.png";
import Tarjetas from "../../../img/Tarjetas.jpg";
import AstroPay from "../../../img/Astropay.jpg";
import SafetyPay from "../../../img/SafetyPay.jpg";
import Mach from "../../../img/Mach.jpg";
import Skrill from "../../../img/Skrill.jpg";
import Neteller from "../../../img/Neteller.jpg";
import EcoPayz from "../../../img/Ecopayz.jpg";

const imagesDepositos = [
  {
    img: SafetyPay,
    title: "SAFETYPAY",
    url: "https://get.betcris.help/hc/es-419/articles/360002241397-SafetyPay",
    min: "$20.00",
    max: "$2,000.00",
    time: "60 minutos",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Haz clic en 'SafetyPay', seguido ingresa la cantidad y presiona 'Depositar', una vez que cargue la página de SafetyPay, elige entre Transferencia bancaria o Pagar en efectivo.",
  },
  {
    img: Mach,
    title: "MACH",
    url: "https://get.betcris.help/hc/es-419/articles/4423322709521-MACH",
    min: "$10.00",
    max: "$479.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Haz clic en 'MACH', seguido ingresa el monto de tu depósito y haz clic en 'Depositar'. seguido genera un código QR en el sitio web al cual se te redirige, luego escanéalo con tu App, y por último realiza el pago de tu depósito en la App de MACH.",
  },
  {
    img: Tarjetas,
    title: "TARJETAS DE CRÉDITO Y DÉBITO",
    url: "https://get.betcris.help/hc/es-419/articles/360002208798-Tarjetas-de-cr%C3%A9dito-y-d%C3%A9bito",
    min: "$10.00",
    max: "$259.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Haz clic en 'Tarjetas de crédito y débito', ingresa la información solicitada si esta es la primera vez que estás usando una tarjeta (para acelerar el proceso, la próxima vez que realices un depósito, los datos de tu tarjeta ya estarán almacenados) y haz clic en 'Guardar', seguido ingresa el monto que quieres depositar y por último selecciona 'Confirmar' para completar la transacción.",
  },
  {
    img: Skrill,
    title: "SKRILL",
    url: "https://get.betcris.help/hc/es-419/articles/360002218658-Skrill",
    min: "$10.00",
    max: "$100,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Haz clic en 'e-Wallet', seguido en 'Skrill', seguido ingresa el monto y la información de tu cuenta de Skrill, luego pulsa 'Depositar'. Serás redirigido al sitio de Skrill para completar la transacción.",
  },
  {
    img: Neteller,
    title: "NETELLER",
    url: "https://get.betcris.help/hc/es-419/articles/360002208818-NETELLER",
    min: "$10.00",
    max: "$100,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Haz clic en 'e-Wallet', seguido en 'NETELLER', seguido ingresa la cantidad, tu número de cuenta y haz clic en 'Depositar', luego pulsa 'Depositar'. Serás redirigido al sitio de Skrill para completar la transacción. Completa la transacción en el sitio de NETELLER al que se te redirige.",
  },
  {
    img: EcoPayz,
    title: "ECOPAYZ",
    url: "https://get.betcris.help/hc/es-419/articles/360002218938-ecoPayz",
    min: "$10.00",
    max: "$50,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Haz clic en 'e-Wallet', seguido en 'ecoPayz', seguido ingresa el monto que quieres depositar, tu número de cuenta ecoPayz y haz clic en 'Confirmar'. Completa la transacción en el sitio de ecoPayz al que se te redirige.",
  },
  {
    img: AstroPay,
    title: "ASTROPAY",
    url: "https://get.betcris.help/hc/es-419/articles/360002212037-AstroPay-Card",
    min: "$5.00",
    max: "$10,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Haz clic en 'AstroPay', seguido ingresa la cantidad y presiona 'Depositar', luego ingresa el monto y la información de la tarjeta y por último pulsa 'Depositar' para completar la transacción.",
  },
];

const DepCl = () => {
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
                      <p className=" mt-4 mb-4 text-sm text-justify w-full">
                        <p>{selectedImage.descriptionTitle}</p>
                        <br></br>
                        {selectedImage.description}
                      </p>
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
                      </div>
                      <hr></hr>
                    </div>
                  </div>
                </div>
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

export default DepCl;
