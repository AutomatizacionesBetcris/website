import Tarjetas from "../../../../../img/payments/Tarjetas.jpg";
import Facilito from "../../../../../img/payments/Facilito.jpg";
import RedActiva from "../../../../../img/payments/RedActiva.jpg";
import SafetyPay from "../../../../../img/payments/PagoEfectivoEC.jpg";
import PayPhone from "../../../../../img/payments/Payphone.jpg";
import AstroPay from "../../../../../img/payments/Astropay.jpg";
import Agencias from "../../../../../img/payments/Betcris_Agencias.png";
import Skrill from "../../../../../img/payments/Skrill.jpg";
import Neteller from "../../../../../img/payments/Neteller.jpg";
import EcoPayz from "../../../../../img/payments/Ecopayz.jpg";
import Skrill1Tap from "../../../../../img/payments/Skril_tap.jpg";
import BankTransfer from "../../../../../img/payments/Bank_transfer.jpg";

const EcData = [
  {
    img: RedActiva,
    title: "DEPÓSITO RED ACTIVA",
    url: "https://get.betcris.help/hc/es-419/articles/5016167802257-Red-Activa",
    min: "$10.00",
    max: "$1,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    video: "https://cdn.jwplayer.com/players/g1NEoab3-Ds0vhdRv.html",
    description: [
      "Visita una de las agencias de Red Activa en cualquier Western Union donde esté disponible",
      "Indica tu cuenta Betcris 'ECUXXXX' junto con el monto deseado a depositar",
      "Verifica tu número de cuenta antes de confirmar la transferencia",
    ],
  },
  {
    img: Facilito,
    title: "DEPOSITO FACILITO",
    url: "https://get.betcris.help/hc/es-419/articles/360016935658-Facilito",
    min: "$10.00",
    max: "$1,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    video: "https://cdn.jwplayer.com/players/PocyeBSD-Ds0vhdRv.html",
    description: [
      "Visita cualquier agencia autorizada por Facilito",
      "Ingresa tu cuenta Betcris 'ECUXXXX' junto con el monto de depósito deseado",
      "Verifica que tu cuenta Betcris sea correcta antes de confirmar el depósito",
    ],
  },
  {
    img: SafetyPay,
    title: "SAFETYPAY",
    url: "https://ayuda.betcris.com/guia-de-usuario/centro-de-ayuda/depositos/ecuador/safetypay-2/",
    min: "$10.00",
    max: "$10,000.00",
    time: "60 minutos",
    descriptionTitle: "Los bancos disponibles dependerán de tu país.",
    description: [
      "Puedes usar SafetyPay (Pagoseguro) para hacer depósitos usando efectivo a través de múltiples puntos de cobro, como agencias bancarias o tiendas de conveniencia.",
      "También tienes la opción de realizar transferencias bancarias en línea con más de 100 bancos autorizados en todo el mundo.",
    ],
  },
  {
    img: Tarjetas,
    title: "TARJETAS DE CRÉDITO Y DÉBITO",
    url: "https://get.betcris.help/hc/es-419/articles/360002208798-Tarjetas-de-cr%C3%A9dito-y-d%C3%A9bito",
    min: "$10.00",
    max: "$5,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Elige 'Depósito' → 'Tarjetas'",
      "Ingresa la información solicitada si esta es la primera vez que estás usando una tarjeta (para acelerar el proceso, la próxima vez que realices un depósito, los datos de tu tarjeta ya estarán almacenados) y haz clic en 'Guardar'",
      "Ingresa el monto que quieres depositar y tu número de identificación y haz clic en 'Siguiente'",
      "Selecciona 'Confirmar' para completar la transacción",
    ],
  },
  {
    img: PayPhone,
    title: "DEPÓSITO PAYPHONE",
    url: "https://get.betcris.help/hc/es-419/articles/360012312518-PayPhone",
    min: "$10.00",
    max: "$500.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    video: "https://cdn.jwplayer.com/players/nDQa08uP-Ds0vhdRv.html",
    description: [
      "Selecciona 'Depósito' → 'e-Wallet' → 'PayPhone'",
      "Ingresa el monto que deseas depositar, tu cuenta PayPhone (número de teléfono registrado) y haz clic en 'Depositar'",
      "Revisa tu App PayPhone, allí recibirás un enlace para completar tu depósito",
    ],
  },
  {
    img: Skrill,
    title: "SKRILL",
    url: "https://get.betcris.help/hc/es-419/articles/360002218658-Skrill",
    min: "$10.00",
    max: "$100,000.00",
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
    url: "https://ayuda.betcris.com/guia-de-usuario/centro-de-ayuda/depositos/ecuador/neteller-4/",
    min: "$10.00",
    max: "$100,000.00",
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
      "Selecciona 'Depósito' → 'ecoPayz'",
      "Ingresa el monto que quieres depositar, tu número de cuenta ecoPayz y haz clic en 'Confirmar'",
      "Completa la transacción en el sitio de ecoPayz al que se te redirige",
    ],
  },
  {
    img: AstroPay,
    title: "ASTROPAY",
    url: "https://ayuda.betcris.com/guia-de-usuario/centro-de-ayuda/depositos/ecuador/astropay-card-4/",
    min: "$5.00",
    max: "$10,000",
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
    img: BankTransfer,
    title: "TRANSFERENCIA BANCARIA",
    url: "https://get.betcris.help/hc/es-419/articles/360002241437-Transferencias-bancarias",
    min: "$5.00",
    max: "$3,500.00",
    time: "Una vez aprobados, los fondos se tramitan de forma inmediata a tu cuenta.",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Selecciona 'Depósito' → 'Transferencia Bancaria'",
      "Elige el banco donde vas a depositar",
      "Selecciona la cuenta y el destinatario para realizar el depósito",
      "Completa los detalles requeridos y adjunta una fotografía del depósito realizado en el banco o en línea",
      "Haz clic en 'Reportar depósito'",
    ],
  },
  {
    img: Agencias,
    title: "AGENCIAS BETCRIS",
    url: "https://get.betcris.help/hc/es-419/articles/6404360144273-Dep%C3%B3sitos-en-Agencias-Betcris",
    min: "$",
    max: "$",
    time: "Inmediato",
    descriptionTitle: "Dentro de quioscos o agencias Betcris:",
    description: [
      "Ofrecemos una variedad de formas rápidas y convenientes para depositar fondos en tu cuenta, incluyendo retiros en las Agencias oficiales de Betcris.",
      "Para hacer tu depósito, solo debes presentar tu identificación y número de cuenta, junto con los fondos a depositar.",
      "Contacta a tu Agencia Betcris más cercana para confirmar los montos mínimos y máximos por transacción, así como cualquier detalle adicional que necesites, ya que pueden variar según el país.",
    ],
  },
];

export default EcData;
