import Banktransfer from "../../../../../img/payments/Bank_transfer_RET.jpg";
import AstroPay from "../../../../../img/payments/Astropay.jpg";
import Agencias from "../../../../../img/payments/Betcris_Agencias.png";
import Retirotarjeta from "../../../../../img/payments/Pay_to_card.jpg";
import Skrill from "../../../../../img/payments/Skrill.jpg";
import Neteller from "../../../../../img/payments/Neteller.jpg";
import EcoPayz from "../../../../../img/payments/Ecopayz.jpg";
import Nuvei from "../../../../../img/payments/NUVEI.jpg";

const MxData = [
  {
    img: Retirotarjeta,
    title: "RETIRO TARJETAS DE CRÉDITO Y DÉBITO",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/retiros/visa-direct-retiro-a-tarjeta/",
    min: "MXN 180.00",
    max: "MXN 90,000.00",
    time: "30 minutos",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Selecciona 'Retiro'",
      "Selecciona 'Visa Direct / Retiro a tarjeta'",
      "Ingresa la cantidad deseada",
      "Agrega la información de tu tarjeta: tu nombre tal como se muestra en la tarjeta, el número de 16 dígitos y la fecha de vencimiento, tu dirección de correo electrónico y número de teléfono, y la cantidad solicitada",
    ],
  },
  {
    img: Banktransfer,
    title: "TRANSFERENCIA BANCARIA LOCAL",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/retiros/transferencia-bancaria/",
    min: "MXN 180.00",
    max: "MXN 180,000.00",
    time: "El tiempo de acreditación varía según el banco receptor.",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Selecciona 'Retiro' → 'Transferencia Bancaria'",
      "Ingresa el monto que deseas retirar",
      "Completa la información de tu cuenta bancaria la primera vez (estará guardada la próxima vez)",
      "Haz clic en 'Retirar'",
    ],
  },
  {
    img: AstroPay,
    title: "ASTROPAY",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/retiros/astropay-card/",
    min: "MXN 90.00",
    max: "MXN 18,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Ingresa al 'Cajero' de tu cuenta Betcris y haz clic en 'Retiros' → 'AstroPay Card'",
      "Ingresa el monto a retirar y haz clic en 'Registrar una cuenta nueva'",
      "Ingresa tu información, la misma que usaste en la aplicación móvil: número de teléfono (incluye el código de tu país sin utilizar el signo de “+” al principio), nombre y apellido, correo electrónico e identificación personal",
    ],
  },
  {
    img: Skrill,
    title: "SKRILL",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/retiros/skrill-2/",
    min: "MXN 180.00",
    max: "MXN 45,000.00",
    time: "Una vez aprobados, los fondos se tramitan de forma inmediata a tu cuenta.",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Selecciona 'Retiro' → 'Skrill'",
      "Ingresa la cantidad que quieres retirar",
      "Agrega los datos de tu cuenta Skrill para tu primer retiro (los datos serán guardados para la siguiente vez)",
      "Pulsa 'Verificar retiro'",
    ],
  },
  {
    img: Neteller,
    title: "NETELLER",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/retiros/neteller-2/",
    min: "MXN 180.00",
    max: "MXN 45,000.00",
    time: "Una vez aprobados, los fondos se tramitan de forma inmediata a tu cuenta.",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Selecciona 'Retiro' → 'NETELLER'",
      "Ingresa la cantidad que quieres retirar",
      "Ingresa los datos de tu cuenta NETELLER",
      "Pulsa 'Verificar retiro'",
    ],
  },
  {
    img: EcoPayz,
    title: "ECOPAYZ",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/retiros/ecopayz-2/",
    min: "MXN 180.00",
    max: "MXN 45,000.00",
    time: "Una vez aprobados, los fondos se tramitan de forma inmediata a tu cuenta.",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Selecciona 'Retiro' → 'ecoPayz'",
      "Ingresa la cantidad que quieres retirar",
      "Ingresa los datos de tu cuenta ecoPayz",
      "Pulsa 'Verificar retiro'",
    ],
  },
  {
    img: Nuvei,
    title: "NUVEI",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/retiros/nuvei/",
    min: "MXN 18.00",
    max: "MXN 3,700.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    videodep: "https://cdn.jwplayer.com/players/d0EJpE9U-Ds0vhdRv.html",
    description: [
      "Selecciona 'Retiro' → 'Retiro en efectivo'",
      "Ingresa el monto que deseas retirar, el CURP, correo electrónico y haz clic en 'Generar referencia'",
      "Revisa tu correo; allí recibirás el número de referencia",
      "Visita la tienda afiliada más cercana",
      "Solicita un retiro a PESPAY",
      "Proporciona el número de referencia y recibe tu dinero en efectivo",
    ],
  },
  {
    img: Agencias,
    title: "AGENCIAS BETCRIS",
    url: "https://ayuda.betcris.mx/guia-de-usuario/centro-de-ayuda/retiros/retiros-en-agencias-betcris/",
    min: "$",
    max: "$",
    time: "-",
    descriptionTitle: "Dentro de quioscos o agencias Betcris:",
    description: [
      "Ofrecemos una variedad de formas rápidas y convenientes para retirar fondos en tu cuenta, incluyendo depósitos en las Agencias oficiales de Betcris.",
      "Para hacer tu retiro solo debes presentar tu identificación y número de cuenta, además de haber completado todos los procesos de verificación necesarios para el retiro de fondos.",
      "Contacta a tu Agencia Betcris más cercana para confirmar los montos mínimos y máximos por transacción, así como cualquier detalle adicional que necesites, ya que pueden variar según el país.",
    ],
  },
];

export default MxData;
