import React, { useState } from "react";
import LogoBC from "../../img/logo-blanco.png";
import Tarjetas from "../../img/Tarjetas.jpg";
import SafetyPay from "../../img/SafetyPay.jpg";
import Banktransfer from "../../img/Bank_transfer.jpg";
import AstroPay from "../../img/Astropay.jpg";
import Agencias from "../../img/Betcris_Agencias.png";
import Retirotarjeta from "../../img/Pay_to_card.jpg";
import Oxxo from "../../img/Oxxo.jpg";
import PaysafeCard from "../../img/PaysafeCard.jpg";
import SPEI from "../../img/Spei.jpg";
import Paynet from "../../img/Paynet.jpg";
import Skrill from "../../img/Skrill.jpg";
import Neteller from "../../img/Neteller.jpg";
import EcoPayz from "../../img/Ecopayz.jpg";

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
      "Haz clic en 'Tarjetas de crédito y débito', ingresa el monto que quieres deposita, seguido selecciona 'Siguiente', luego asegúrate de revisar todos los detalles y presiona 'Confirmar' para completar la transacción.",
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
      "Haz clic en 'SafetyPay', ingresa la cantidad y presiona 'Depositar', una vez que cargue la página de SafetyPay, elige entre Transferencia bancaria o Pagar en efectivo.",
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
      "Haz clic en 'AstroPay Card', seguido ingresa el monto y la información de la tarjeta, pulsa 'Depositar' para completar la transacción.",
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
      "Haz clic en 'Oxxo Pay', seguido ingresa el monto a depositar, haz clic en 'Depositar'. Se te generará un número de transacción, el cual podrás ir a pagar al Oxxo más cercano, para que los fondos se acrediten de forma inmediata.",
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
      "Haz clic en 'Paysafecard', seguido ingresa el monto del depósito, luego ingresa los 16 dígitos del PIN de paysafecard y por último pulsa 'Depositar' para completar la transacción.",
  },
  {
    img: SPEI,
    title: "SPEI",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/depositos/spei/",
    min: "MXN 198.00",
    max: "MXN 395,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Haz clic en 'SPEI', ingresa la cantidad y los datos que se te solicitan, luego haz clic en 'Depositar'. Se te brindará la información del detalle de pago que debes utilizar para que hagas la transferencia.",
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
      "Haz clic en 'Paynet', ingresa el monto que deseas depositar, luego ingresa los datos que se te solicitan, los cuales solo se te pedirán una vez, y quedarán guardados para futuras transacciones y por último haz clic en 'Depositar'.",
  },
  {
    img: Skrill,
    title: "SKRILL",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/depositos/skrill/",
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
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/depositos/neteller/",
    min: "$10.00",
    max: "$100,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Haz clic en 'e-Wallet', seguido en 'NETELLER', seguido ingresa el monto, tu número de cuenta e identificación segura de NETELLER, luego pulsa 'Depositar'. Serás redirigido al sitio de NETELLER para completar la transacción.",
  },
  {
    img: EcoPayz,
    title: "ECOPAYZ",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/depositos/ecopayz/",
    min: "$10.00",
    max: "$50,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Haz clic en 'e-Wallet', seguido en 'ecoPayz', seguido ingresa el monto y la información de tu cuenta de ecoPayz, luego pulsa 'Depositar'. Serás redirigido al sitio de ecoPayz para completar la transacción.",
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
      "Ofrecemos una variedad de formas rápidas y convenientes para depositar fondos en tu cuenta, incluyendo depósitos en las Agencias oficiales de Betcris. Para hacer tu depósito, solo debes presentar tu identificación y número de cuenta, junto con los fondos a depositar. Contacta a tu Agencia Betcris más cercana para confirmar los montos mínimos y máximos por transacción, así como cualquier detalle adicional que necesites, ya que pueden variar según el país.",
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
      "Haz clic en 'Retiro a tarjeta-Visa Direct', seguido ingresa la cantidad deseada, selecciona la tarjeta, y por último haz clic en 'Retirar'.",
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
      "Haz clic en 'Transferencia Bancaria', seguido ingresa el monto del retiro, luego completa la información de tu cuenta bancaria la primera vez (estará guardada la próxima vez) y por último haz clic en 'Retirar'.",
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
      "Haz clic en 'AstroPay Card', seguido ingresa el monto a retirar y haz clic en 'Registrar' una cuenta nueva, luego ingresa tu información, la misma que usaste en la aplicación móvil: número de teléfono (incluye el código de tu país sin utilizar el signo de “+” al principio), nombre y apellido, correo electrónico e identificación personal.",
  },
  {
    img: Skrill,
    title: "SKRILL",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/retiros/skrill-2/",
    min: "$10.00",
    max: "$2,500.00",
    time: "48 horas",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Haz clic en 'Skrill', seguido ingresa la cantidad que quieres retirar, luego agrega los datos de tu cuenta Skrill para tu primer retiro (los datos serán guardados para la siguiente vez), y por último haz clic en 'Verificar retiro'.",
  },
  {
    img: Neteller,
    title: "NETELLER",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/retiros/neteller-2/",
    min: "$10.00",
    max: "$2,500.00",
    time: "48 horas",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Haz clic en 'NETELLER', seguido ingresa la cantidad que quieres retirar, luego ingresa los datos de tu cuenta NETELLER, y por último haz clic en 'Verificar retiro'.",
  },
  {
    img: EcoPayz,
    title: "ECOPAYZ",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/retiros/ecopayz-2/",
    min: "$10.00",
    max: "$2,500.00",
    time: "48 horas",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Haz clic en 'ecoPayz', seguido ingresa la cantidad que quieres retirar, luego ingresa los datos de tu cuenta ecoPayz y por último haz clic en 'Verificar retiro'.",
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
      "Ofrecemos una variedad de formas rápidas y convenientes para retirar fondos en tu cuenta, incluyendo depósitos en las Agencias oficiales de Betcris. Para hacer tu retiro solo debes presentar tu identificación y número de cuenta, además de haber completado todos los procesos de verificación necesarios para el retiro de fondos. Contacta a tu Agencia Betcris más cercana para confirmar los montos mínimos y máximos por transacción, así como cualquier detalle adicional que necesites, ya que pueden variar según el país.",
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

export default Mx;
