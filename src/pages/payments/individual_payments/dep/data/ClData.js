import Tarjetas from "../../../../../img/payments/Tarjetas.jpg";
import AstroPay from "../../../../../img/payments/Astropay.jpg";
import SafetyPay from "../../../../../img/payments/PagoEfectivoCL.jpg";
import Mach from "../../../../../img/payments/Mach.jpg";
import Skrill from "../../../../../img/payments/Skrill.jpg";
import Neteller from "../../../../../img/payments/Neteller.jpg";
import EcoPayz from "../../../../../img/payments/Ecopayz.jpg";
import Skrill1Tap from "../../../../../img/payments/Skril_tap.jpg";
import BankTransferCL from "../../../../../img/payments/Bank_transfer_CL.jpg";
import WebPay from "../../../../../img/payments/WebPay.jpg";

const ClData = [
  {
    img: SafetyPay,
    title: "SAFETYPAY",
    url: "https://ayuda.betcris.com/guia-de-usuario/centro-de-ayuda/depositos/chile/safetypay/",
    min: "$21.00",
    max: "$2,000.00",
    time: "60 minutos",
    description: [
      "Puedes usar SafetyPay (Pagoseguro) para hacer depósitos usando efectivo a través de múltiples puntos de cobro, como agencias bancarias o tiendas de conveniencia.",
    ],
  },
  {
    img: Mach,
    title: "MACH",
    url: "https://get.betcris.help/hc/es-419/articles/4423322709521-MACH",
    min: "$10.00",
    max: "$479.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Selecciona 'Depósito' → 'MACH'",
      "Ingresa el monto de tu depósito y haz clic en 'Depositar'",
      "Genera un código QR code en el sitio web al cual se te redirige, luego escanéalo con tu App",
      "Realiza el pago de tu depósito en la App de MACH",
    ],
  },
  {
    img: Tarjetas,
    title: "TARJETAS DE CRÉDITO Y DÉBITO",
    url: "https://get.betcris.help/hc/es-419/articles/360002208798-Tarjetas-de-cr%C3%A9dito-y-d%C3%A9bito",
    min: "$10.00",
    max: "$259.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Elige 'Depósito' → 'Tarjetas'",
      "Ingresa la información solicitada si esta es la primera vez que estás usando una tarjeta (para acelerar el proceso, la próxima vez que realices un depósito, los datos de tu tarjeta ya estarán almacenados) y haz clic en 'Guardar'",
      "Ingresa el monto que quieres depositar y tu número de identificación y haz clic en 'Siguiente'",
      "Selecciona 'Confirmar' para completar la transacción. Los fondos serán acreditados de forma inmediata",
    ],
  },
  {
    img: Skrill,
    title: "SKRILL",
    url: "https://get.betcris.help/hc/es-419/articles/360002218658-Skrill",
    min: "$10.00",
    max: "$87,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Selecciona 'Depósito' → 'Skrill'",
      "Ingresa el monto, tu cuenta Skrill y haz clic en 'Depositar'",
      "Completa la transacción en la página de Skrill que se te redirecciona",
    ],
  },
  {
    img: Neteller,
    title: "NETELLER",
    url: "https://ayuda.betcris.com/guia-de-usuario/centro-de-ayuda/depositos/chile/neteller-3/",
    min: "$10.00",
    max: "$87,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Selecciona 'Depósito' → 'NETELLER'",
      "Ingresa el monto deseado, tu número de cuenta y haz clic en 'Depositar'",
      "Completa la transacción en el sitio de NETELLER al que se te redirige",
    ],
  },
  {
    img: Skrill1Tap,
    title: "SKRILL 1-TAP",
    url: "https://get.betcris.help/hc/es-419/articles/360002218838-Skrill-1-Tap",
    min: "$10.00",
    max: "$100,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Selecciona 'Depósito' → 'Skrill 1-Tap'",
      "Ingresa el monto, tu cuenta Skrill account y haz clic en 'Depositar'",
      "Completa la transacción en la página de Skrill donde se te redirige",
    ],
  },
  {
    img: EcoPayz,
    title: "ECOPAYZ",
    url: "https://get.betcris.help/hc/es-419/articles/360002218938-ecoPayz",
    min: "$10.00",
    max: "$50,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Selecciona 'Depósito'→ 'ecoPayz'",
      "Ingresa el monto que quieres depositar, tu número de cuenta ecoPayz y haz clic en 'Confirmar'",
      "Completa la transacción en el sitio de ecoPayz al que se te redirige",
    ],
  },
  {
    img: AstroPay,
    title: "ASTROPAY",
    url: "https://ayuda.betcris.com/guia-de-usuario/centro-de-ayuda/depositos/chile/astropay-card-3/",
    min: "$5.00",
    max: "$8,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Selecciona 'Depósito' → 'AstroPay'",
      "Ingresa el monto de depósito y haz clic en 'Siguiente'",
      "Continúa el proceso en la página que te redirige el sistema",
      "Ingresa tu número de teléfono registrado en tu cuenta AstroPay",
      "Elige el método de pago, ya sea un voucher ya adquirido o el saldo disponible en tu cuenta",
      "Confirma tu depósito",
    ],
  },
  {
    img: BankTransferCL,
    title: "TRANSFERENCIA BANCARIA",
    url: "https://get.betcris.help/hc/es-419/articles/15038807673361-Transferencias-bancarias-Chile-",
    min: "$9.00",
    max: "$3,400.00",
    time: "Una vez aprobados, los fondos se tramitan de forma inmediata a tu cuenta.",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Selecciona 'Depósito' → 'Transferencia Bancaria'",
      "Ingresa el monto de tu depósito, el RUT y haz clic en 'Depositar'. Solo se solicitará tu RUT la primera vez",
      "Continúa el proceso en la página que te redirige el sistema",
      "Elige uno de los bancos disponibles",
      "Ingresa las credenciales de tu cuenta bancaria",
      "Completa el depósito",
      "Verifica la confirmación exitosa de la transacción",
      "Descarga el comprobante como respaldo",
    ],
  },
  {
    img: WebPay,
    title: "WEBPAY",
    url: "https://get.betcris.help/hc/es-419/articles/14170668409489-WebPay-",
    min: "$10.00",
    max: "$250.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Selecciona 'Depósito' → 'WebPay'",
      "Ingresa el monto que deseas depositar y haz clic en 'Depositar'",
      "Continua el proceso en la página a la que te redirige el sistema",
      "Elige la opción de pago de tu preferencia, ya sea tarjeta de crédito, de débito o Onepay",
      "Valida tu pago",
    ],
  },
];

export default ClData;
