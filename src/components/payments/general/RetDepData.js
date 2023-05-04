import Banktransfer from "../../../img/payments/Bank_transfer.jpg";
import Agencias from "../../../img/payments/Betcris_Agencias.png";
import Facilito from "../../../img/payments/Facilito.jpg";
import RedActiva from "../../../img/payments/RedActiva.jpg";
import AstroPay from "../../../img/payments/Astropay.jpg";
import Skrill from "../../../img/payments/Skrill.jpg";
import Neteller from "../../../img/payments/Neteller.jpg";
import EcoPayz from "../../../img/payments/Ecopayz.jpg";
import Retirotarjeta from "../../../img/payments/Pay_to_card.jpg";

// Flags
import ecuador from "../../../img/flags/ecuador.png";
import guatemala from "../../../img/flags/guatemala.png";
import honduras from "../../../img/flags/honduras.png";
import peru from "../../../img/flags/peru.png";
import repdominicana from "../../../img/flags/republica-dominicana.png";
import nicaragua from "../../../img/flags/nicaragua.png";
import elsalvador from "../../../img/flags/el-salvador.png";
import chile from "../../../img/flags/chile.png";

// Depositos
const depositos = [
  {
    pais: "Ecuador",
    flag: ecuador,
    info: [
      {
        img: RedActiva,
        title: "RED ACTIVA",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/12653619971089-Red-Activa",
      },
      {
        img: Facilito,
        title: "FACILITO",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/12653149319953-Facilito",
      },
      {
        img: Retirotarjeta,
        title: "TARJETA - VISA DIRECT",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002241997-Pay-to-Card-Visa-Direct-",
      },
    ],
  },
  {
    pais: "Guatemala",
    flag: guatemala,
    info: [
      {
        img: Retirotarjeta,
        title: "TARJETAS DE CRÉDITO Y DÉBITO",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002241997-Pay-to-Card-Visa-Direct-",
      },
      {
        img: Banktransfer,
        title: "TRANSFERENCIA BANCARIA LOCAL",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002245278-Bank-Transfer",
      },
      {
        img: Skrill,
        title: "SKRILL",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002241957-Skrill",
      },

      {
        img: Agencias,
        title: "AGENCIAS BETCRIS",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/6404449911057-Withdrawals-at-Betcris-Locations",
      },
    ],
  },
  {
    pais: "Honduras",
    flag: honduras,
    info: [
      {
        img: Retirotarjeta,
        title: "TARJETAS DE CRÉDITO Y DÉBITO",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002241997-Pay-to-Card-Visa-Direct-",
      },

      {
        img: AstroPay,
        title: "ASTROPAY",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360011110557-AstroPay-Card",
      },
      {
        img: Agencias,
        title: "AGENCIAS BETCRIS",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/6404449911057-Withdrawals-at-Betcris-Locations",
      },
    ],
  },
  {
    pais: "Peru",
    flag: peru,
    info: [
      {
        img: Retirotarjeta,
        title: "TARJETAS DE CRÉDITO Y DÉBITO",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002241997-Pay-to-Card-Visa-Direct-",
      },

      {
        img: Agencias,
        title: "AGENCIAS BETCRIS",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/6404449911057-Withdrawals-at-Betcris-Locations",
      },
    ],
  },
  {
    pais: "Dominican Republic",
    flag: repdominicana,
    info: [
      {
        img: Retirotarjeta,
        title: "TARJETAS DE CRÉDITO Y DÉBITO",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",

        url: "https://get.betcris.help/hc/en-us/articles/360002241997-Pay-to-Card-Visa-Direct-",
      },
      {
        img: Banktransfer,
        title: "TRANSFERENCIA BANCARIA LOCAL",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002245278-Bank-Transfer",
      },
      {
        img: Skrill,
        title: "SKRILL",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002241957-Skrill",
      },
    ],
  },
  {
    pais: "Nicaragua",
    flag: nicaragua,
    info: [
      {
        img: Retirotarjeta,
        title: "TARJETAS DE CRÉDITO Y DÉBITO",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002241997-Pay-to-Card-Visa-Direct-",
      },
      {
        img: Skrill,
        title: "SKRILL",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002241957-Skrill",
      },
      {
        img: Neteller,
        title: "NETELLER",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002241917-NETELLER",
      },
    ],
  },
  {
    pais: "El Salvador",
    flag: elsalvador,
    info: [
      {
        img: Retirotarjeta,
        title: "TARJETAS DE CRÉDITO Y DÉBITO",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002241997-Pay-to-Card-Visa-Direct-",
      },
      {
        img: Banktransfer,
        title: "TRANSFERENCIA BANCARIA LOCAL",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002245278-Bank-Transfer",
      },
      {
        img: Skrill,
        title: "SKRILL",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002241957-Skrill",
      },
      {
        img: Neteller,
        title: "NETELLER",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002241917-NETELLER",
      },
      {
        img: EcoPayz,
        title: "ECOPAYZ",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002245158-ecoPayz",
      },
      {
        img: AstroPay,
        title: "ASTROPAY",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360011110557-AstroPay-Card",
      },
      {
        img: Agencias,
        title: "AGENCIAS BETCRIS",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/6404449911057-Withdrawals-at-Betcris-Locations",
      },
    ],
  },
  {
    pais: "Chile",
    flag: chile,
    info: [
      {
        img: Retirotarjeta,
        title: "TARJETAS DE CRÉDITO Y DÉBITO",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002241997-Pay-to-Card-Visa-Direct-",
      },
      {
        img: Banktransfer,
        title: "TRANSFERENCIA BANCARIA LOCAL",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002245278-Bank-Transfer",
      },
      {
        img: Skrill,
        title: "SKRILL",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002241957-Skrill",
      },
      {
        img: Neteller,
        title: "NETELLER",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002241917-NETELLER",
      },
      {
        img: EcoPayz,
        title: "ECOPAYZ",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002245158-ecoPayz",
      },
      {
        img: AstroPay,
        title: "ASTROPAY",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360011110557-AstroPay-Card",
      },
    ],
  },
];

// Retiros
const retiros = [
  {
    pais: "Ecuador",
    flag: ecuador,
    info: [
      {
        img: RedActiva,
        title: "RED ACTIVA",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/12653619971089-Red-Activa",
      },
      {
        img: Facilito,
        title: "FACILITO",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/12653149319953-Facilito",
      },
      {
        img: Retirotarjeta,
        title: "TARJETA - VISA DIRECT",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002241997-Pay-to-Card-Visa-Direct-",
      },
    ],
  },
  {
    pais: "Guatemala",
    flag: guatemala,
    info: [
      {
        img: Retirotarjeta,
        title: "TARJETAS DE CRÉDITO Y DÉBITO",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002241997-Pay-to-Card-Visa-Direct-",
      },
      {
        img: Banktransfer,
        title: "TRANSFERENCIA BANCARIA LOCAL",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002245278-Bank-Transfer",
      },
      {
        img: Skrill,
        title: "SKRILL",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002241957-Skrill",
      },

      {
        img: Agencias,
        title: "AGENCIAS BETCRIS",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/6404449911057-Withdrawals-at-Betcris-Locations",
      },
    ],
  },
  {
    pais: "Honduras",
    flag: honduras,
    info: [
      {
        img: Retirotarjeta,
        title: "TARJETAS DE CRÉDITO Y DÉBITO",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002241997-Pay-to-Card-Visa-Direct-",
      },

      {
        img: AstroPay,
        title: "ASTROPAY",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360011110557-AstroPay-Card",
      },
      {
        img: Agencias,
        title: "AGENCIAS BETCRIS",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/6404449911057-Withdrawals-at-Betcris-Locations",
      },
    ],
  },
  {
    pais: "Peru",
    flag: peru,
    info: [
      {
        img: Retirotarjeta,
        title: "TARJETAS DE CRÉDITO Y DÉBITO",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002241997-Pay-to-Card-Visa-Direct-",
      },

      {
        img: Agencias,
        title: "AGENCIAS BETCRIS",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/6404449911057-Withdrawals-at-Betcris-Locations",
      },
    ],
  },
  {
    pais: "Dominican Republic",
    flag: repdominicana,
    info: [
      {
        img: Retirotarjeta,
        title: "TARJETAS DE CRÉDITO Y DÉBITO",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",

        url: "https://get.betcris.help/hc/en-us/articles/360002241997-Pay-to-Card-Visa-Direct-",
      },
      {
        img: Banktransfer,
        title: "TRANSFERENCIA BANCARIA LOCAL",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002245278-Bank-Transfer",
      },
      {
        img: Skrill,
        title: "SKRILL",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002241957-Skrill",
      },
    ],
  },
  {
    pais: "Nicaragua",
    flag: nicaragua,
    info: [
      {
        img: Retirotarjeta,
        title: "TARJETAS DE CRÉDITO Y DÉBITO",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002241997-Pay-to-Card-Visa-Direct-",
      },
      {
        img: Skrill,
        title: "SKRILL",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002241957-Skrill",
      },
      {
        img: Neteller,
        title: "NETELLER",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002241917-NETELLER",
      },
    ],
  },
  {
    pais: "El Salvador",
    flag: elsalvador,
    info: [
      {
        img: Retirotarjeta,
        title: "TARJETAS DE CRÉDITO Y DÉBITO",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002241997-Pay-to-Card-Visa-Direct-",
      },
      {
        img: Banktransfer,
        title: "TRANSFERENCIA BANCARIA LOCAL",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002245278-Bank-Transfer",
      },
      {
        img: Skrill,
        title: "SKRILL",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002241957-Skrill",
      },
      {
        img: Neteller,
        title: "NETELLER",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002241917-NETELLER",
      },
      {
        img: EcoPayz,
        title: "ECOPAYZ",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002245158-ecoPayz",
      },
      {
        img: AstroPay,
        title: "ASTROPAY",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360011110557-AstroPay-Card",
      },
      {
        img: Agencias,
        title: "AGENCIAS BETCRIS",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/6404449911057-Withdrawals-at-Betcris-Locations",
      },
    ],
  },
  {
    pais: "Chile",
    flag: chile,
    info: [
      {
        img: Retirotarjeta,
        title: "TARJETAS DE CRÉDITO Y DÉBITO",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002241997-Pay-to-Card-Visa-Direct-",
      },
      {
        img: Banktransfer,
        title: "TRANSFERENCIA BANCARIA LOCAL",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002245278-Bank-Transfer",
      },
      {
        img: Skrill,
        title: "SKRILL",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002241957-Skrill",
      },
      {
        img: Neteller,
        title: "NETELLER",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002241917-NETELLER",
      },
      {
        img: EcoPayz,
        title: "ECOPAYZ",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360002245158-ecoPayz",
      },
      {
        img: AstroPay,
        title: "ASTROPAY",
        min: "$5.00",
        max: "$10,000.00",
        time: "Immediately",
        url: "https://get.betcris.help/hc/en-us/articles/360011110557-AstroPay-Card",
      },
    ],
  },
];

export { depositos, retiros };
