import EcoPayz from "../../../../../img/payments/Ecopayz.jpg";
import Retirotarjeta from "../../../../../img/payments/Pay_to_card.jpg";
import AstroPay from "../../../../../img/payments/Astropay.jpg";

const CaData = [
  {
    img: EcoPayz,
    title: "ECOPAYZ",
    url: "https://get.betcris.help/hc/en-us/articles/360002245158-ecoPayz",
    min: "$10.00",
    max: "$2,500.00",
    time: "Once approved, the funds are immediately transferred to your account.",
    descriptionTitle: "Click on 'Cashier':",
    description: [
      "Click on 'ecoPayz'",
      "Enter the amount, your account number, and the way you want to pay with, for example: Cash",
      "Click on 'Withdraw'",
    ],
  },
  {
    img: Retirotarjeta,
    title: "PAY TO CARD - VISA DIRECT",
    url: "https://get.betcris.help/hc/en-us/articles/360002241997-Pay-to-Card-Visa-Direct-",
    min: "$10.00",
    max: "$5,000.00",
    time: "30 minutes",
    descriptionTitle: "Click on 'Cashier':",
    description: [
      "Click on 'Pay to Card'",
      "Enter the desired amount, and choose the card",
      "Click on 'Withdraw'",
    ],
  },
  {
    img: AstroPay,
    title: "ASTROPAY",
    url: "https://get.betcris.help/hc/en-us/articles/360011110557-AstroPay-Card",
    min: "$5.00",
    max: "$1,000.00",
    time: "24 hours",
    descriptionTitle: "Click on 'Cashier':",
    description: [
      "Click 'AstroPay Card'",
      "Enter the amount you want to withdraw, and your account (phone number)",
      "Click on 'Confirm'",
    ],
  },
];

export default CaData;
