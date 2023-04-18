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
    description:
      "Escolha 'Pay4Fun', insira o valor do depósito e clique 'confirmar', finalmente você será redirecionado para a site da Pay4Fun para completar a transação.",
  },
  {
    img: Pix,
    title: "PIX",
    url: "https://br.betcris.help/hc/pt-br/articles/360018482278-PIX",
    min: "BRL 52",
    max: "BRL 1,290,000",
    time: "Imediatamente",
    description:
      "Selecione 'PIX', insira o valor a ser depositado e clique em 'confirmar', finalmente você será redirecionado para a página PIX para concluir a transação.",
  },
  {
    img: Banktransfer,
    title: "TRANSFERÊNCIA BANCÁRIA",
    url: "https://br.betcris.help/hc/pt-br/articles/360003674058-Transfer%C3%AAncia-banc%C3%A1ria-local",
    min: "BRL 20",
    max: "BRL 5,160",
    time: "Imediatamente",
    description:
      "Selecione 'TRANSFERÊNCIA BANCÁRIA', selecione o banco onde você tem conta, copie as informações que aparecem no site do seu banco, finalmente siga os passos exibidos na tela para confirmar a transação.",
  },
];

const Br = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para manejar el clic en el botón de cerrar
  const handleClose = () => {
    // Establecer el estado de cierre a verdadero
    setIsClosing(true);
    // Retrasar la eliminación del modal para permitir que se complete la animación
    setTimeout(() => {
      // Establecer el estado de cierre a falso
      setIsClosing(false);
      // Llamar a la función para cerrar el modal
      setSelectedImage(null);
    }, 800); // Duración de la animación en milisegundos
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    // Lógica para abrir el modal y pasar la imagen seleccionada
    setIsModalOpen(true);
    // Resto de la lógica para manejar la imagen seleccionada...
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
        <motion.div
          className="fixed z-10 inset-0 overflow-y-auto"
          initial={{ opacity: 0, scale: 0.8 }} // Configuración inicial con opacidad en 0 y escala en 0.8
          animate={
            isClosing
              ? { opacity: 0, scale: 0.8 } // Configuración de animación al cerrar el modal
              : isModalOpen // Verificar si el modal está abierto
              ? { opacity: 1, scale: 1 } // Configuración de animación al abrir el modal
              : { opacity: 0, scale: 0.8 } // Configuración de animación cuando el modal está cerrado
          }
          transition={{ duration: 0.5 }} // Duración de la animación en segundos
        >
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
                    <motion.p
                      className="mt-4 mb-4 text-xs text-justify w-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 5 }}
                    >
                      {selectedImage.description}
                    </motion.p>
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
                        <motion.p
                          initial={{ opacity: 0, y: 50 }} // Configuración inicial con opacidad en 0 y desplazamiento vertical de 50px
                          animate={{ opacity: 1, y: 0 }} // Configuración de animación con opacidad en 1 y desplazamiento vertical de 0px
                          transition={{ duration: 1, delay: 0.4 }} // Duración de la animación de 1 segundo y retraso de 0.2 segundos
                        >
                          {selectedImage.min}
                        </motion.p>
                        <motion.p
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1, delay: 0.6 }} // Retraso de 0.4 segundos para que la animación se inicie después de la primera
                        >
                          {selectedImage.max}
                        </motion.p>
                        <motion.p
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1, delay: 0.8 }} // Retraso de 0.6 segundos para que la animación se inicie después de la segunda
                        >
                          {selectedImage.time}
                        </motion.p>
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
                <motion.button
                  type="button"
                  className="w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleClose}
                >
                  Fechar
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Br;
