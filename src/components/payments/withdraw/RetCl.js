import React, { useState } from "react";
import LogoBC from "../../../img/logo-blanco.png";
import Banktransfer from "../../../img/payments/Bank_transfer.jpg";
import Retirotarjeta from "../../../img/payments/Pay_to_card.jpg";
import AstroPay from "../../../img/payments/Astropay.jpg";
import Skrill from "../../../img/payments/Skrill.jpg";
import Neteller from "../../../img/payments/Neteller.jpg";
import EcoPayz from "../../../img/payments/Ecopayz.jpg";
import { motion } from "framer-motion";

const imagesRetiros = [
  {
    img: Retirotarjeta,
    title: "TARJETAS DE CRÉDITO Y DÉBITO",
    url: "https://get.betcris.help/hc/es-419/articles/360002241997-Retiro-a-Tarjeta",
    min: "$10.00",
    max: "$5,000.00",
    time: "30 minutos",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Haz clic en 'Retiro a tarjeta-Visa Direct'",
      "Ingresa la cantidad deseada",
      "Selecciona la tarjeta",
      "Haz clic en 'Retirar'",
    ],
  },
  {
    img: Banktransfer,
    title: "TRANSFERENCIA BANCARIA LOCAL",
    url: "https://get.betcris.help/hc/es-419/articles/360002245278-Transferencia-bancaria-local",
    min: "$10.00",
    max: "$10,000.00",
    time: "El tiempo de acreditación varía según el banco receptor.",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Haz clic en 'Transferencia Bancaria'",
      "Ingresa el monto del retiro",
      "Completa la información de tu cuenta bancaria la primera vez (estará guardada la próxima vez)",
      "Haz clic en 'Retirar'",
    ],
  },
  {
    img: Skrill,
    title: "SKRILL",
    url: "https://get.betcris.help/hc/es-419/articles/360002241957-Skrill",
    min: "$10.00",
    max: "$2,500.00",
    time: "48 horas",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Haz clic en 'Skrill'",
      "Ingresa el monto que deseas retirar",
      "Agrega la información de tu cuenta Skrill para tu primer retiro (la información se guardará para la próxima vez)",
      "Haz clic en 'Retirar'",
    ],
  },
  {
    img: Neteller,
    title: "NETELLER",
    url: "https://get.betcris.help/hc/es-419/articles/360002241917-NETELLER-",
    min: "$10.00",
    max: "$2,500.00",
    time: "48 horas",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Haz clic en 'NETELLER'",
      "Ingresa el monto que deseas retirar",
      "Agrega la información de tu cuenta Skrill para tu primer retiro (la información se guardará para la próxima vez)",
      "Haz clic en 'Retirar'",
    ],
  },
  {
    img: EcoPayz,
    title: "ECOPAYZ",
    url: "https://get.betcris.help/hc/es-419/articles/360002245158-ecoPayz",
    min: "$10.00",
    max: "$2,500.00",
    time: "48 horas",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Haz clic en 'ecoPayz'",
      "Ingresa el monto, tu número de cuenta y la forma como deseas pagar, por ejemplo: Efectivo",
      "Haz clic en 'Retirar'",
    ],
  },
  {
    img: AstroPay,
    title: "ASTROPAY",
    url: "https://get.betcris.help/hc/es-419/articles/360011110557-AstroPay-Card",
    min: "$5.00",
    max: "$1,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Haz clic en 'AstroPay Card'",
      "Ingresa el monto que deseas retirar, tu cuenta (número de teléfono)",
      "Haz clic en 'Confirmar'",
    ],
  },
];

const RetCl = () => {
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
                        {selectedImage.description.map((description, index) => (
                          <li key={index} className="mb-2">
                            {index + 1}. {description}{" "}
                          </li>
                        ))}
                      </ul>
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

export default RetCl;
