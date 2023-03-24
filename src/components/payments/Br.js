import React, { useState } from "react";
import LogoBC from "../../img/logo-blanco.png";
import Pay4Fun from "../../img/Pay4fun.jpg";
import Pix from "../../img/Pix.jpg";

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
];

const imagesRetiros = [
  {
    img: Pay4Fun,
    title: "PAY4FUN",
    url: "https://br.betcris.help/hc/pt-br/articles/9325651135377-Saque-Pay4Fun",
    min: "BRL 52",
    max: "BRL 51,600",
    time: "Imediatamente",
    description:
      "Escolha 'Pay4Fun', insira o valor do saqu,  escolha a conta Pay4Fun cadastrada ou a registre inserindo seu e-mail, finalmente clique em 'Verificar saque'.",
  },
  {
    img: Pix,
    title: "PIX",
    url: "https://br.betcris.help/hc/pt-br/articles/9325664834705-Saque-PIX",
    min: "BRL 52",
    max: "BRL 4,582",
    time: "24 Horas",
    description:
      "Escolha 'PIX', insira o valor do saque, digite seu CPF e seu primeiro nome finalmente finalmente clique em 'Verificar saque'.",
  },
];

const Br = () => {
  const [showDepositos, setShowDepositos] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleDepositosClick = () => {
    setShowDepositos(true);
  };

  const handleRetirosClick = () => {
    setShowDepositos(false);
  };

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
        {/* Payment buttons */}
        <div className="text-center mb-2 ">
          <button
            className="inline-block px-4 text-sm font-semibold border py-2 bg-green-500 hover:bg-green-600 text-white rounded-md mr-2 sm:mr-4"
            onClick={handleDepositosClick}
          >
            Depósito
          </button>
          <button
            className="inline-block px-5 text-sm font-semibold border py-2 bg-green-500 hover:bg-green-600 text-white rounded-md"
            onClick={handleRetirosClick}
          >
            Saques
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 p-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-5">
          {showDepositos
            ? imagesDepositos.map((image, index) => (
                <img
                  key={index}
                  src={image.img}
                  alt={`Imagen ${index + 1}`}
                  className="w-38 rounded-lg overflow-hidden border-black shadow-lg hover:scale-110 transition-transform duration-300 ease-out"
                  onClick={() => handleImageClick(image)}
                />
              ))
            : imagesRetiros.map((image, index) => (
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
                            <strong>Tempo:</strong>
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
                    Mais informação
                  </a>
                </footer>

                <div class="flex justify-center items-center px-4 py-3">
                  <button
                    type="button"
                    class="w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
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
    </div>
  );
};

export default Br;
