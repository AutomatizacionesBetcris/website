import React, { useState } from "react";
import LogoBC from "../../img/logo-blanco.png";
import Tarjetas from "../../img/Tarjetas.jpg";
import Banktransfer from "../../img/Bank_transfer.jpg";
import Retirotarjeta from "../../img/Pay_to_card.jpg";
import AstroPay from "../../img/Astropay.jpg";
import Agencias from "../../img/Betcris_Agencias.png";
import Disashop from "../../img/Disashop.jpg";
import Skrill from "../../img/Skrill.jpg";
import Neteller from "../../img/Neteller.jpg";
import EcoPayz from "../../img/Ecopayz.jpg";

const imagesDepositos = [
  {
    img: Tarjetas,
    title: "TARJETAS DE CRÉDITO Y DÉBITO",
    url: "https://get.betcris.help/hc/es-419/articles/360002208798-Tarjetas-de-cr%C3%A9dito-y-d%C3%A9bito",
    min: "$10.00",
    max: "$250.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Haz clic en 'Tarjetas de crédito y débito', ingresa la información solicitada si esta es la primera vez que estás usando una tarjeta (para acelerar el proceso, la próxima vez que realices un depósito, los datos de tu tarjeta ya estarán almacenados) y haz clic en 'Guardar', seguido ingresa el monto que quieres depositar y por último selecciona 'Confirmar' para completar la transacción.",
  },
  {
    img: Banktransfer,
    title: "TRANSFERENCIA BANCARIA LOCAL",
    url: "https://get.betcris.help/hc/es-419/articles/360002241437-Transferencias-bancarias",
    min: "$10.00",
    max: "$10,000.00",
    time: "Reportarla por el cajero, para que sea aprobado",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Haz clic en 'Transferencia Bancaria', seguido elige el banco donde vas a depositar, luego selecciona la cuenta y el destinatario para realizar el depósito, completa los detalles requeridos y adjunta una fotografía del depósito realizado en el banco o en línea y por último haz clic en 'Reportar depósito'.",
  },
  {
    img: Disashop,
    title: "DISASHOP",
    url: "https://get.betcris.help/hc/es-419/articles/360011301877-Disashop",
    min: "$1.00",
    max: "$1,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Visita cualquier Cajero o tienda autorizada de Disashop y elige 'Betcris Recarga', seguido ingresa tu número de cuenta Betcris (sólo los números, sin el prefijo ‘DOM’), luego inserta el dinero que quieres depositar y selecciona 'Confirmar'.",
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
  {
    img: Agencias,
    title: "AGENCIAS BETCRIS",
    url: "https://get.betcris.help/hc/es-419/articles/6404360144273-Dep%C3%B3sitos-en-Agencias-Betcris",
    min: "$",
    max: "$",
    time: "Inmediato",
    descriptionTitle: "Dentro de quioscos o agencias Betcris:",
    description:
      "Ofrecemos una variedad de formas rápidas y convenientes para depositar fondos en tu cuenta, incluyendo depósitos en las Agencias oficiales de Betcris. Para hacer tu depósito, solo debes presentar tu identificación y número de cuenta, junto con los fondos a depositar. Contacta a tu Agencia Betcris más cercana para confirmar los montos mínimos y máximos por transacción, así como cualquier detalle adicional que necesites, ya que pueden variar según el país.",
  },
];

const imagesRetiros = [
  {
    img: Retirotarjeta,
    title: "TARJETAS DE CRÉDITO Y DÉBITO",
    url: "https://get.betcris.help/hc/es-419/articles/360002241997-Retiro-a-Tarjeta",
    min: "$10.00",
    max: "$5,000.00",
    time: "30 minutos",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Haz clic en 'Retiro a tarjeta-Visa Direct', seguido ingresa la cantidad deseada, luego selecciona la tarjeta, y por último haz clic en 'Retirar'.",
  },
  {
    img: Banktransfer,
    title: "TRANSFERENCIA BANCARIA LOCAL",
    url: "https://get.betcris.help/hc/es-419/articles/360002245278-Transferencia-bancaria-local",
    min: "$10.00",
    max: "$10,000.00",
    time: "7 días",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Haz clic en 'Transferencia Bancaria', seguido ingresa el monto del retiro, luego completa la información de tu cuenta bancaria la primera vez (estará guardada la próxima vez) y por último haz clic en 'Retirar'.",
  },
  {
    img: Skrill,
    title: "SKRILL",
    url: "https://get.betcris.help/hc/es-419/articles/360002241957-Skrill",
    min: "$10.00",
    max: "$2,500.00",
    time: "48 horas",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Haz clic en 'Skrill', seguido ingresa el monto que deseas retirar, luego agrega la información de tu cuenta Skrill para tu primer retiro (la información se guardará para la próxima vez), y por último haz clic en 'Retirar'.",
  },
  {
    img: Neteller,
    title: "NETELLER",
    url: "https://get.betcris.help/hc/es-419/articles/360002241917-NETELLER-",
    min: "$5.00",
    max: "$2,500.00",
    time: "48 horas",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Haz clic en 'NETELLER', seguido ingresa el monto que deseas retirar, luego agrega la información de tu cuenta Skrill para tu primer retiro (la información se guardará para la próxima vez), y por último haz clic en 'Retirar'.",
  },
  {
    img: EcoPayz,
    title: "ECOPAYZ",
    url: "https://get.betcris.help/hc/es-419/articles/360002245158-ecoPayz",
    min: "$10.00",
    max: "$2,500.00",
    time: "48 horas",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Haz clic en 'ecoPayz', seguido ingresa el monto, tu número de cuenta, la forma como deseas pagar, por ejemplo, efectivo y por último haz clic en 'Retirar'.",
  },
  {
    img: AstroPay,
    title: "ASTROPAY",
    url: "https://get.betcris.help/hc/es-419/articles/360011110557-AstroPay-Card",
    min: "$5.00",
    max: "$1,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Haz clic en 'AstroPay Card', seguido ingresa el monto que deseas retirar, tu cuenta (número de teléfono) y haz clic en 'Confirmar'.",
  },
  {
    img: Agencias,
    title: "AGENCIAS BETCRIS",
    url: "https://get.betcris.help/hc/es-419/articles/6404449911057-Retiros-en-Agencias-Betcris",
    min: "$",
    max: "$",
    time: "Inmediato",
    descriptionTitle: "Dentro de quioscos o agencias Betcris:",
    description:
      "Ofrecemos una variedad de formas rápidas y convenientes para depositar fondos en tu cuenta, incluyendo depósitos en las Agencias oficiales de Betcris. Para hacer tu depósito, solo debes presentar tu identificación y número de cuenta, junto con los fondos a depositar. Contacta a tu Agencia Betcris más cercana para confirmar los montos mínimos y máximos por transacción, así como cualquier detalle adicional que necesites, ya que pueden variar según el país.",
  },
];

const Do = () => {
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
                        {selectedImage.title !== "DISASHOP" && (
                          <div>
                            <p>{selectedImage.descriptionTitle}</p>
                            <br></br>
                          </div>
                        )}
                        {selectedImage.description}
                      </p>
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

export default Do;
