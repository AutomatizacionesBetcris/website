import Banktransfer from "../../../../../img/payments/Bank_transfer_RET.jpg";
import Retirotarjeta from "../../../../../img/payments/Pay_to_card.jpg";
import AstroPay from "../../../../../img/payments/Astropay.jpg";
import Skrill from "../../../../../img/payments/Skrill.jpg";
import Neteller from "../../../../../img/payments/Neteller.jpg";
import EcoPayz from "../../../../../img/payments/Ecopayz.jpg";

const ClData = [
  {
    img: Retirotarjeta,
    title: "TARJETAS DE CRÉDITO Y DÉBITO",
    url: "https://get.betcris.help/hc/es-419/articles/360002241997-Retiro-a-Tarjeta",
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
    img: Banktransfer,
    title: "TRANSFERENCIA BANCARIA LOCAL",
    url: "https://get.betcris.help/hc/es-419/articles/360002245278-Transferencia-bancaria-local",
    min: "$10.00",
    max: "$10,000.00",
    time: "El tiempo de acreditación varía según el banco receptor.",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Selecciona 'Retiro' → 'Transferencia Bancaria'",
      "Ingresa el monto del retiro",
      "Completa la información de tu cuenta bancaria la primera vez (estará guardada la próxima vez)",
      "Haz clic en 'Retirar'",
    ],
  },
  {
    img: Skrill,
    title: "SKRILL",
    url: "https://get.betcris.help/hc/es-419/articles/360002241957-Skrill",
    min: "$10.00",
    max: "$2,500.00",
    time: "Una vez aprobados, los fondos se tramitan de forma inmediata a tu cuenta.",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Selecciona 'Retiro' → 'Skrill'",
      "Ingresa el monto que deseas retirar",
      "Agrega la información de tu cuenta Skrill para tu primer retiro (la información se guardará para la próxima vez)",
      "Haz clic en 'Verificar retiro'",
    ],
  },
  {
    img: Neteller,
    title: "NETELLER",
    url: "https://get.betcris.help/hc/es-419/articles/360002241917-NETELLER-",
    min: "$10.00",
    max: "$2,500.00",
    time: "Una vez aprobados, los fondos se tramitan de forma inmediata a tu cuenta.",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Selecciona 'Retiro' → 'NETELLER'",
      "Ingresa el monto que deseas retirar",
      "Completa la información de tu cuenta NETELLER la primera vez (tu información se guardará para la próxima vez)",
      "Haz clic en 'Verificar retiro'.",
    ],
  },
  {
    img: EcoPayz,
    title: "ECOPAYZ",
    url: "https://get.betcris.help/hc/es-419/articles/360002245158-ecoPayz",
    min: "$10.00",
    max: "$2,500.00",
    time: "Una vez aprobados, los fondos se tramitan de forma inmediata a tu cuenta.",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Selecciona 'Retiro' → 'ecoPayz'",
      "Ingresa el monto, tu número de cuenta, la forma como deseas pagar, por ejemplo, efectivo y haz clic en 'Verificar retiro'",
    ],
  },
  {
    img: AstroPay,
    title: "ASTROPAY",
    url: "https://get.betcris.help/hc/es-419/articles/360011110557-AstroPay-Card",
    min: "$6.00",
    max: "$1,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Selecciona 'Retiro' → 'AstroPay Card'",
      "Ingresa el monto que deseas retirar, tu cuenta (número de teléfono) y haz clic en 'Confirmar'",
    ],
  },
];

export default ClData;
