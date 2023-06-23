import Banktransfer from "../../../../../img/payments/Bank_transfer.jpg";
import Retirotarjeta from "../../../../../img/payments/Pay_to_card.jpg";
import Agencias from "../../../../../img/payments/Betcris_Agencias.png";

const PaData = [
  {
    img: Banktransfer,
    title: "TRANSFERENCIA BANCARIA LOCAL",
    url: "https://ayuda.betcris.pa/guia-de-usuario/centro-de-ayuda/retiros/transferencia-bancaria-local/",
    min: "$10.00",
    max: "$10,000.00",
    time: "El tiempo de acreditación varía según el banco receptor.",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Elige 'Retiro' → 'Transferencia Bancaria'",
      "Ingresa el monto de tu retiro",
      "Completa la información de tu cuenta bancaria para tu primer retiro (tus datos estarán guardados la próxima vez)",
      "Haz clic en 'Retirar'",
    ],
  },
  {
    img: Retirotarjeta,
    title: "TARJETAS DE CRÉDITO Y DÉBITO",
    url: "https://ayuda.betcris.pa/guia-de-usuario/centro-de-ayuda/retiros/retiro-a-tarjeta/",
    min: "$10.00",
    max: "$5,000.00",
    time: "30 minutos",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Elige 'Retiro' → 'Retiro a tarjeta-Visa Direct'",
      "Ingresa la cantidad deseada",
      "Selecciona la tarjeta",
      "Haz clic en 'Retirar'",
    ],
  },
  {
    img: Agencias,
    title: "AGENCIAS BETCRIS",
    url: "https://ayuda.betcris.pa/guia-de-usuario/centro-de-ayuda/retiros/retiro-a-tarjeta/",
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

export default PaData;
