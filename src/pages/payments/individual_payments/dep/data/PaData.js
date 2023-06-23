import Sistemaclave from "../../../../../img/payments/Sistema_clave.jpg";
import PayCash from "../../../../../img/payments/PayCash.jpg";
import Puntopago from "../../../../../img/payments/Punto_Pago.jpg";
import Tarjetas from "../../../../../img/payments/Tarjetas.jpg";
import Banktransfer from "../../../../../img/payments/Bank_transfer.jpg";
import Agencias from "../../../../../img/payments/Betcris_Agencias.png";

const PaData = [
  {
    img: Sistemaclave,
    title: "SISTEMA CLAVE",
    url: "https://ayuda.betcris.pa/guia-de-usuario/sistema-clave/",
    min: "$10.00",
    max: "$5,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Elige 'Depósito' → 'Sistema Clave'",
      "Ingresa el monto que deseas y haz clic en 'Depositar'",
      "Espera un momento mientras el sistema te redirige a Paguelofacil",
      "Escribe tu correo electrónico y número telefónico y haz clic en 'Enviar Pago'",
      "Llena todos los datos solicitados para el registro de la tarjeta Clave y haz clic en 'Aceptar'",
      "Proporciona el PIN de la tarjeta Clave y haz clic en 'Confirmar'",
      "Espera que la transacción sea aprobada; el pago se acredita de forma inmediata",
    ],
  },
  {
    img: PayCash,
    title: "PAYCASH",
    url: "https://ayuda.betcris.pa/guia-de-usuario/centro-de-ayuda/depositos/paycash-panama/",
    min: "$10.00",
    max: "$300.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Elige 'Depositar' → 'Pagar en efectivo'",
      "Ingresa el monto a depositar y selecciona 'Generar referencia'",
      "Copia el código de 16 dígitos que te brinda el sistema",
      "Ve a cualquier puesto Western Union habilitado, dile al cajero que vas a hacer un pago PayCash, brinda el número de referencia y el dinero a pagar (el monto debe ser el mismo que digitaste en el Cajero en Línea de Betcris)",
      "Guarda el recibo como comprobante de pago",
    ],
  },
  {
    img: Puntopago,
    title: "PUNTO PAGO",
    url: "https://ayuda.betcris.pa/guia-de-usuario/centro-de-ayuda/depositos/punto-pago/",
    min: "$1.00",
    max: "$200.00",
    time: "Inmediato",
    descriptionTitle: "En el quiosco de Punto Pago:",
    description: [
      "Busca el botón 'Betcris'",
      "Ingresa tu número de cuenta 'PANXXXX'",
      "Revisa y confirma tus datos personales, luego ingresa el monto a recargar",
      "Haz clic en opción 'Pagar'",
      "Se te dará un recibo que confirma tu transacción.",
    ],
  },
  {
    img: Tarjetas,
    title: "DEPÓSITO TARJETAS DE CRÉDITO Y DÉBITO",
    url: "https://ayuda.betcris.pa/guia-de-usuario/centro-de-ayuda/depositos/tarjetas-de-credito-y-debito/",
    min: "$10.00",
    max: "$250.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Elige 'Depósito' → 'Tarjetas'",
      "Ingresa la información solicitada si esta es la primera vez que estás usando una tarjeta (para acelerar el proceso, la próxima vez que realices un depósito, los datos de tu tarjeta ya estarán almacenados) y haz clic en 'Guardar'",
      "Ingresa el monto que quieres depositar, tu número de identificación y haz clic en 'Siguiente'",
      "Selecciona 'Confirmar' para completar la transacción",
    ],
  },
  {
    img: Banktransfer,
    title: "TRANSFERENCIA BANCARIA LOCAL",
    url: "https://ayuda.betcris.pa/guia-de-usuario/centro-de-ayuda/depositos/transferencias-bancarias/",
    min: "$10.00",
    max: "$20,000.00",
    time: "Una vez aprobados, los fondos se tramitan de forma inmediata a tu cuenta.",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Selecciona 'Depósito' → 'Transferencia bancaria'",
      "Elige el banco donde vas a depositar",
      "Selecciona la cuenta y el destinatario para realizar el depósito",
      "Completa los detalles requeridos y adjunta una fotografía del depósito realizado en el banco o en línea",
      "Haz clic en 'Reportar depósito'",
    ],
  },
  {
    img: Agencias,
    title: "AGENCIAS BETCRIS",
    url: "https://ayuda.betcris.pa/guia-de-usuario/centro-de-ayuda/depositos/depositos-en-agencias-betcris/",
    min: "$",
    max: "$",
    time: "-",
    descriptionTitle: "Dentro de quioscos o agencias Betcris:",
    description: [
      "Ofrecemos una variedad de formas rápidas y convenientes para depositar fondos en tu cuenta, incluyendo retiros en las Agencias oficiales de Betcris.",
      "Para hacer tu depósito, solo debes presentar tu identificación y número de cuenta, junto con los fondos a depositar.",
      "Contacta a tu Agencia Betcris más cercana para confirmar los montos mínimos y máximos por transacción, así como cualquier detalle adicional que necesites, ya que pueden variar según el país.",
    ],
  },
];

export default PaData;
