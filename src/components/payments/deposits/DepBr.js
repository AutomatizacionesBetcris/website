import React, { useState } from "react";
import LogoBC from "../../../img/logo-blanco.png";
import Pay4Fun from "../../../img/payments/Pay4fun.jpg";
import Pix from "../../../img/payments/Pix.jpg";
import Banktransfer from "../../../img/payments/Bank_transfer.jpg";
import { motion } from "framer-motion";

const imagesDepositos = [
  {
    img: Pay4Fun,
    title: "PAY4FUN",
    url: "https://br.betcris.help/hc/pt-br/articles/360011459957-Pay4Fun",
    min: "BRL 20",
    max: "BRL 1,290",
    time: "Imediatamente",
    description: [
      "Escolha 'Pay4Fun'",
      "Insira o valor do depósito e clique 'confirmar'",
      "Finalmente você será redirecionado para a site da Pay4Fun para completar a transação.",
    ],
  },
  {
    img: Pix,
    title: "PIX",
    url: "https://br.betcris.help/hc/pt-br/articles/360018482278-PIX",
    min: "BRL 52",
    max: "BRL 1,290,000",
    time: "Imediatamente",
    description: [
      "Selecione 'PIX'",
      "Insira o valor a ser depositado e clique em 'confirmar'",
      "Finalmente você será redirecionado para a página PIX para concluir a transação.",
    ],
  },
  {
    img: Banktransfer,
    title: "TRANSFERÊNCIA BANCÁRIA",
    url: "https://br.betcris.help/hc/pt-br/articles/360003674058-Transfer%C3%AAncia-banc%C3%A1ria-local",
    min: "BRL 20",
    max: "BRL 5,160",
    time: "Imediatamente",
    description: [
      "Selecione 'TRANSFERÊNCIA BANCÁRIA'",
      "Selecione o banco onde você tem conta",
      "Copie as informações que aparecem no site do seu banco",
      "Finalmente siga os passos exibidos na tela para confirmar a transação.",
    ],
  },
];

const Br = () => {
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

      {/* Grid */}
      <div className="grid grid-cols-2 p-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-4 mt-5 sm:m-10 sm:mt-5 lg:m-56 lg:mt-5">
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
                          <strong>Mínimo:</strong>
                        </p>
                        <p className="w-full whitespace-nowrap">
                          <strong>Máximo:</strong>
                        </p>
                        <p className="w-full whitespace-nowrap">
                          <strong>Tempo:</strong>
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
                  Mais informação
                </a>
              </footer>

              <div className="flex justify-center items-center px-4 py-3">
                <button
                  type="button"
                  className="w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setSelectedImage(null)}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Br;
