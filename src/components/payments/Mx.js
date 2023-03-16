import React, { useState } from "react";
import LogoBC from "../../img/logo-blanco.png";
import Tarjetas from "../../img/Tarjetas.jpg";
import SafetyPay from "../../img/SafetyPay.jpg";
import Banktransfer from "../../img/Bank_transfer.jpg";
import EWallet from "../../img/E_wallet.jpg";
import AstroPay from "../../img/Astropay.jpg";
import Agencias from "../../img/Betcris_Agencias.png";
import Retirotarjeta from "../../img/Pay_to_card.jpg";
import Oxxo from "../../img/Oxxo.jpg";
import PaysafeCard from "../../img/PaysafeCard.jpg";
import SPEI from "../../img/Spei.jpg";
import Paynet from "../../img/Paynet.jpg";

const imagesDepositos = [
  {
    img: Tarjetas,
    title: "TARJETAS DE CRÉDITO Y DÉBITO",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/depositos/tarjetas-de-credito-y-debito/",
    min: "MXN 198.00",
    max: "MXN 98,750.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Elige Depósito, haz clic en 'Tarjetas de crédito y débito', ingresar la información solicitada (tus datos serán guardados para la próxima vez). ",
  },
  {
    img: SafetyPay,
    title: "SAFETYPAY",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/depositos/safetypay/",
    min: "MXN 395.00",
    max: "MXN 19,750.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Elige Depósito, haz clic en 'Tarjetas de crédito y débito', ingresar la información solicitada (tus datos serán guardados para la próxima vez). ",
  },
  {
    img: AstroPay,
    title: "ASTROPAY",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/depositos/astropay-card-2/",
    min: "MXN 99.00",
    max: "MXN 197,500.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Elige Depósito, haz clic en 'Tarjetas de crédito y débito', ingresar la información solicitada (tus datos serán guardados para la próxima vez). ",
  },
  {
    img: Oxxo,
    title: "OXXO",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/depositos/oxxo/",
    min: "MXN 190.00",
    max: "MXN 9,404.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Elige Depósito, haz clic en 'Tarjetas de crédito y débito', ingresar la información solicitada (tus datos serán guardados para la próxima vez). ",
  },
  {
    img: PaysafeCard,
    title: "PAYSAFE CARD",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/depositos/paysafecard/",
    min: "MXN 86.00",
    max: "MXN 49,375.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Elige Depósito, haz clic en 'Tarjetas de crédito y débito', ingresar la información solicitada (tus datos serán guardados para la próxima vez). ",
  },
  {
    img: SPEI,
    title: "SPEI",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/depositos/spei/",
    min: "MXN 198.00",
    max: "MXN 395,000.00",
    time: "-",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Elige Depósito, haz clic en 'Tarjetas de crédito y débito', ingresar la información solicitada (tus datos serán guardados para la próxima vez). ",
  },
  {
    img: Paynet,
    title: "PAYNET",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/depositos/paynet/",
    min: "MXN 99.00",
    max: "MXN 59,250.00",
    time: "24 horas",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Elige Depósito, haz clic en 'Tarjetas de crédito y débito', ingresar la información solicitada (tus datos serán guardados para la próxima vez). ",
  },
  {
    img: EWallet,
    title: "E-WALLET",
    url: "#",
    min: "$",
    max: "$",
    time: "-",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Elige Depósito, haz clic en 'Tarjetas de crédito y débito', ingresar la información solicitada (tus datos serán guardados para la próxima vez). ",
  },
  {
    img: Agencias,
    title: "AGENCIAS BETCRIS",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/depositos/depositos-en-agencias-betcris/",
    min: "$",
    max: "$",
    time: "Inmediato",
    descriptionTitle: "Dentro de quioscos o agencias Betcris:",
    description:
      "Elige Retiro, selecciona 'Transferencia Bancaria', ingresa el monto de tu retiro, seguido ingresa la información de tu cuenta bancaria para tu primer retiro por este método (tus datos serán guardados para la próxima vez), finalmente selecciona 'Retirar'.",
  },
];

const imagesRetiros = [
  {
    img: Retirotarjeta,
    title: "TARJETAS DE CRÉDITO Y DÉBITO",
    url: "https://get.betcris.help/hc/es-419/articles/360002241997-Retiro-a-Tarjeta",
    min: "MXN 198.00",
    max: "MXN 98,750.00",
    time: "30 minutos",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Elige Depósito, haz clic en 'Tarjetas de crédito y débito', ingresar la información solicitada (tus datos serán guardados para la próxima vez). ",
  },
  {
    img: Banktransfer,
    title: "TRANSFERENCIA BANCARIA LOCAL",
    url: "https://get.betcris.help/hc/es-419/articles/360002245278-Transferencia-bancaria-local",
    min: "MXN 198.00",
    max: "MXN 197,500.00",
    time: "7 días",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Elige Retiro, selecciona 'Transferencia Bancaria', ingresa el monto de tu retiro, seguido ingresa la información de tu cuenta bancaria para tu primer retiro por este método (tus datos serán guardados para la próxima vez), finalmente selecciona 'Retirar'.",
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
      "Elige Depósito, haz clic en 'Tarjetas de crédito y débito', ingresar la información solicitada (tus datos serán guardados para la próxima vez). ",
  },
  {
    img: EWallet,
    title: "E-WALLET",
    url: "#",
    min: "$",
    max: "$",
    time: "-",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Elige Depósito, haz clic en 'Tarjetas de crédito y débito', ingresar la información solicitada (tus datos serán guardados para la próxima vez). ",
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
      "Elige Retiro, selecciona 'Transferencia Bancaria', ingresa el monto de tu retiro, seguido ingresa la información de tu cuenta bancaria para tu primer retiro por este método (tus datos serán guardados para la próxima vez), finalmente selecciona 'Retirar'.",
  },
];

const Mx = () => {
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
            Depósitos
          </button>
          <button
            className="inline-block px-5 text-sm font-semibold border py-2 bg-green-500 hover:bg-green-600 text-white rounded-md"
            onClick={handleRetirosClick}
          >
            Retiros
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

export default Mx;
