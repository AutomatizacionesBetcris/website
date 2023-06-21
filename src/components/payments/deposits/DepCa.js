// https://bcautomatizaciones.com/website/#/depositos/ca

import React, { useState } from "react";
import LogoBC from "../../../img/logo-blanco.png";
import EcoPayz from "../../../img/payments/Ecopayz.jpg";
import Tarjetas from "../../../img/payments/Tarjetas.jpg";
import PaysafeCard from "../../../img/payments/PaysafeCard.jpg";
import AstroPay from "../../../img/payments/Astropay.jpg";
import { motion } from "framer-motion";

const imagesDepositos = [
  {
    img: Tarjetas,
    title: "CREDIT AND DEBIT CARDS",
    url: "https://get.betcris.help/hc/en-us/articles/360002208798-Credit-and-Debit-Cards",
    min: "$10.00",
    max: "$5,000.00",
    time: "Immediately",
    descriptionTitle: "Click on 'Cashier':",
    description: [
      "Click on 'Credit and debit cards'",
      "Add the requested information if this is the first time you are using a card (to speed up the process, the next time you make a deposit, your card details will already be stored) and click on 'Save'",
      "Enter the amount you want to deposit, your identification number, and click on 'Next'",
      "Select 'Confirm' to complete the transaction",
    ],
  },
  {
    img: PaysafeCard,
    title: "PAYSAFE CARD",
    url: "https://get.betcris.help/hc/en-us/articles/360002241357-paysafecard",
    min: "$5.00",
    max: "$2,500.00",
    time: "60 minutes",
    descriptionTitle: "Click on 'Cashier':",
    description: [
      "Click on 'PaySafecard'",
      "Enter the deposit amount and click on 'Deposit'",
      "Enter the 16-digit PaySafe card PIN",
      "Click on 'Deposit' to complete the transaction",
    ],
  },
  {
    img: EcoPayz,
    title: "ECOPAYZ",
    url: "https://get.betcris.help/hc/en-us/articles/360002218938-ecoPayz",
    min: "$10.00",
    max: "$50,000.00",
    time: "Immediately",
    descriptionTitle: "Click on 'Cashier':",
    description: [
      "Click on 'e-Wallet', followed by 'ecoPayz'",
      "Enter the amount you want to deposit, your ecoPayz account number, and click on 'Confirm'",
      "Complete the transaction on the ecoPayz website you are redirected to",
    ],
  },
  {
    img: AstroPay,
    title: "ASTROPAY",
    url: "https://get.betcris.help/hc/en-us/articles/360002212037-AstroPay-",
    min: "$6.00",
    max: "$10,000.00",
    time: "Immediately",
    descriptionTitle: "Click on 'Cashier':",
    description: [
      "Click on 'AstroPay'",
      "Enter the deposit amount and click on 'Next'",
      "Go to the AstroPay website you are redirected to",
    ],
  },
];

const DepCa = () => {
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
        <div className="grid grid-cols-4 p-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-4 mt-5 sm:m-10 sm:mt-5 lg:m-56 lg:mt-5">
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
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex justify-center items-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="justify-center">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="flex justify-center font-bold text-base text-gray-900">
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
                        <div className="grid grid-cols-3 mt-2 mb-2 text-center justify-center gap-2">
                          <p className="w-full whitespace-nowrap">
                            <strong>Minimum:</strong>
                          </p>
                          <p className="w-full whitespace-nowrap">
                            <strong>Maximum:</strong>
                          </p>
                          <p className="w-full whitespace-nowrap">
                            <strong>Time:</strong>
                          </p>
                        </div>

                        <div className="grid grid-cols-3 mb-2 text-center justify-center gap-2">
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
                    More information
                  </a>
                </footer>

                <div className="flex justify-center items-center px-4 py-3">
                  <button
                    type="button"
                    className="w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setSelectedImage(null)}
                  >
                    Close
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

export default DepCa;
