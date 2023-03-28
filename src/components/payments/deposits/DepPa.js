import React, { useState } from "react";
import LogoBC from "../../../img/logo-blanco.png";
import Sistemaclave from "../../../img/Sistema_clave.jpg";
import PayCash from "../../../img/PayCash.jpg";
import Puntopago from "../../../img/Punto_Pago.jpg";
import Tarjetas from "../../../img/Tarjetas.jpg";
import Banktransfer from "../../../img/Bank_transfer.jpg";
import Agencias from "../../../img/Betcris_Agencias.png";

const imagesDepositos = [
  {
    img: Sistemaclave,
    title: "SISTEMA CLAVE",
    url: "https://ayuda.betcris.pa/guia-de-usuario/sistema-clave/",
    min: "$10.00",
    max: "$5,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Haz clic en 'Sistema Clave', seguido haz clic en pagar como invitado, elige 'Sistema Clave' nuevamente, ingresa tu correo electrónico y número telefónico, haz clic en la opción de enviar pago, llena los datos para el registro de la tarjeta 'CLAVE', haz clic en 'Aceptar', proporciona el PIN de la tarjeta 'CLAVE' y por último haz clic en confirmar.",
  },
  {
    img: PayCash,
    title: "PAYCASH",
    url: "https://ayuda.betcris.pa/guia-de-usuario/centro-de-ayuda/depositos/paycash-panama/",
    min: "$10.00",
    max: "$200.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Haz clic en 'Pagar en efectivo', seguido ingresa el monto a depositar y selecciona la opción 'Generar referencia', el sistema te brindará un código de 16 dígitos que debes copiar, luego debes presentarte en la tienda de conveniencia y brindar al cajero el número de referencia y el dinero a pagar (el monto debe ser el mismo que digitaste en el Cajero en Línea de Betcris). Guarda el recibo como comprobante de pago.",
  },
  {
    img: Puntopago,
    title: "PUNTO PAGO",
    url: "https://ayuda.betcris.pa/guia-de-usuario/centro-de-ayuda/depositos/punto-pago/",
    min: "$1.00",
    max: "$200.00",
    time: "Inmediato",
    descriptionTitle: "En el quiosco de Punto Pago:",
    description:
      "Busca el botón 'Betcris', seguido ingresa tu número de cuenta 'PANXXXX', revisa y confirma tus datos personales, luego ingresa el monto a recargar, haz clic en opción 'Pagar', y se te dará un recibo que confirma tu transacción.",
  },
  {
    img: Tarjetas,
    title: "TARJETAS DE CRÉDITO Y DÉBITO",
    url: "https://ayuda.betcris.pa/guia-de-usuario/centro-de-ayuda/depositos/tarjetas-de-credito-y-debito/",
    min: "$10.00",
    max: "$250.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Haz clic en 'Tarjetas de crédito y débito', Ingresa la información solicitada si esta es la primera vez que estás usando una tarjeta (para acelerar el proceso, la próxima vez que realices un depósito, los datos de tu tarjeta ya estarán almacenados) y haz clic en 'Guardar'.",
  },
  {
    img: Banktransfer,
    title: "TRANSFERENCIA BANCARIA LOCAL",
    url: "https://ayuda.betcris.pa/guia-de-usuario/centro-de-ayuda/depositos/transferencias-bancarias/",
    min: "$10.00",
    max: "$20,000.00",
    time: "Reportarla por el cajero, para que sea aprobado",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description:
      "Haz clic en 'Transferencia bancaria', selecciona el banco con el que tienes una cuenta, copia la información que se muestra en el sitio web de tu banco, luego sigue los pasos que se muestran en la pantalla para confirmar la transacción y por último haz clic en 'Reportar depósito'.",
  },
  {
    img: Agencias,
    title: "AGENCIAS BETCRIS",
    url: "https://ayuda.betcris.pa/guia-de-usuario/centro-de-ayuda/depositos/depositos-en-agencias-betcris/",
    min: "$",
    max: "$",
    time: "-",
    descriptionTitle: "Dentro de quioscos o agencias Betcris:",
    description:
      "Ofrecemos una variedad de formas rápidas y convenientes para depositar fondos en tu cuenta, incluyendo depósitos en las Agencias oficiales de Betcris. Para hacer tu depósito, solo debes presentar tu identificación y número de cuenta, junto con los fondos a depositar. Contacta a tu Agencia Betcris más cercana para confirmar los montos mínimos y máximos por transacción, así como cualquier detalle adicional que necesites, ya que pueden variar según el país.",
  },
];

const DepPa = () => {
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

export default DepPa;
