import Facilito from "../../../../../img/payments/Facilito.jpg";
import RedActiva from "../../../../../img/payments/RedActiva.jpg";
import AstroPay from "../../../../../img/payments/Astropay.jpg";
import Agencias from "../../../../../img/payments/Betcris_Agencias.png";
import BankTransfer from "../../../../../img/payments/Bank_transfer_RET.jpg";
import Skrill from "../../../../../img/payments/Skrill.jpg";
import Neteller from "../../../../../img/payments/Neteller.jpg";
import EcoPayz from "../../../../../img/payments/Ecopayz.jpg";

const EcData = [
  {
    img: RedActiva,
    title: "RETIROS RED ACTIVA",
    url: "https://get.betcris.help/hc/es-419/articles/360014961898-Red-Activa",
    min: "$10.00",
    max: "$1,000.00",
    time: "Inmediato",
    descriptionTitle:
      "Para esta transacción no es necesario ir al Cajero virtual.",
    description: [
      "Selecciona 'Retiro' → 'Red Activa'",
      "Ingresa el monto del retiro y haz clic en 'Retirar'",
      "Revisa el código de la transacción enviado a tu correo electrónico",
      "Visita cualquier agencia Western Union que ofrezca el servicio de Red Activa, muestra el código, tu ID y retira tus fondos",
    ],
  },
  {
    img: Facilito,
    title: "FACILITO",
    url: "https://get.betcris.help/hc/es-419/articles/360018302398-Facilito",
    min: "$10.00",
    max: "$1,000.00",
    time: "Inmediato",
    descriptionTitle:
      "Para esta transacción no es necesario ir al Cajero virtual.",
    description: [
      "Selecciona 'Retiro' → 'Facilito'",
      "Ingresa el monto y haz clic en 'Retirar'",
      "Revisa tu correo electrónico y sigue las instrucciones que te enviamos allí",
    ],
  },
  {
    img: BankTransfer,
    title: "TRANSFERENCIA BANCARIA LOCAL",
    url: "https://get.betcris.help/hc/es-419/articles/360002245278-Transferencia-bancaria-local",
    min: "$10.00",
    max: "$2,500.00",
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
    url: "https://ayuda.betcris.com/es/guia-de-usuario/centro-de-ayuda/retiros/ecuador-retiros/neteller-10/",
    min: "$10.00",
    max: "$2,500.00",
    time: "Una vez aprobados, los fondos se tramitan de forma inmediata a tu cuenta.",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Selecciona 'Retiro' → 'NETELLER'",
      "Ingresa el monto que deseas retirar",
      "Completa la información de tu cuenta NETELLER la primera vez (tu información se guardará para la próxima vez)",
      "Haz clic en 'Verificar retiro'",
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
    min: "$5.00",
    max: "$1,000.00",
    time: "Inmediato",
    descriptionTitle: "Desde el Cajero de Betcris:",
    description: [
      "Selecciona 'Retiro' → 'AstroPay Card'",
      "Ingresa el monto que deseas retirar, tu cuenta (número de teléfono) y haz clic en 'Confirmar'",
    ],
  },
  {
    img: Agencias,
    title: "AGENCIAS BETCRIS",
    url: "https://get.betcris.help/hc/es-419/articles/6404449911057-Retiros-en-Agencias-Betcris",
    min: "$",
    max: "$",
    time: "Inmediato",
    descriptionTitle: "Dentro de quioscos o agencias Betcris:",
    description: [
      "Ofrecemos una variedad de formas rápidas y convenientes para retirar fondos en tu cuenta, incluyendo depósitos en las Agencias oficiales de Betcris.",
      "Para hacer tu retiro solo debes presentar tu identificación y número de cuenta, además de haber completado todos los procesos de verificación necesarios para el retiro de fondos.",
      "Contacta a tu Agencia Betcris más cercana para confirmar los montos mínimos y máximos por transacción, así como cualquier detalle adicional que necesites, ya que pueden variar según el país.",
    ],
  },
];

export default EcData;
