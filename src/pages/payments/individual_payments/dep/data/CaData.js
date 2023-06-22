import EcoPayz from "../../../../../img/payments/Ecopayz.jpg";
import Tarjetas from "../../../../../img/payments/Tarjetas.jpg";
import PaysafeCard from "../../../../../img/payments/PaysafeCard.jpg";
import AstroPay from "../../../../../img/payments/Astropay.jpg";

const CaData = [
  {
    img: Tarjetas,
    title: "CREDIT AND DEBIT CARDS",
    url: "https://get.betcris.help/hc/en-us/articles/360002208798-Credit-and-Debit-Cards",
    min: "$10.00",
    max: "$5,000.00",
    time: "Immediately",
    descriptionTitle: "Click on 'Cashier':",
    description: [
      "Click on 'Credit and debit cards'",
      "Add the requested information if this is the first time you are using a card (to speed up the process, the next time you make a deposit, your card details will already be stored) and click on 'Save'",
      "Enter the amount you want to deposit, your identification number, and click on 'Next'",
      "Select 'Confirm' to complete the transaction",
    ],
  },
  {
    img: PaysafeCard,
    title: "PAYSAFE CARD",
    url: "https://get.betcris.help/hc/en-us/articles/360002241357-paysafecard",
    min: "$5.00",
    max: "$2,500.00",
    time: "60 minutes",
    descriptionTitle: "Click on 'Cashier':",
    description: [
      "Click on 'PaySafecard'",
      "Enter the deposit amount and click on 'Deposit'",
      "Enter the 16-digit PaySafe card PIN",
      "Click on 'Deposit' to complete the transaction",
    ],
  },
  {
    img: EcoPayz,
    title: "ECOPAYZ",
    url: "https://get.betcris.help/hc/en-us/articles/360002218938-ecoPayz",
    min: "$10.00",
    max: "$50,000.00",
    time: "Immediately",
    descriptionTitle: "Click on 'Cashier':",
    description: [
      "Click on 'e-Wallet', followed by 'ecoPayz'",
      "Enter the amount you want to deposit, your ecoPayz account number, and click on 'Confirm'",
      "Complete the transaction on the ecoPayz website you are redirected to",
    ],
  },
  {
    img: AstroPay,
    title: "ASTROPAY",
    url: "https://get.betcris.help/hc/en-us/articles/360002212037-AstroPay-",
    min: "$6.00",
    max: "$10,000.00",
    time: "Immediately",
    descriptionTitle: "Click on 'Cashier':",
    description: [
      "Click on 'AstroPay'",
      "Enter the deposit amount and click on 'Next'",
      "Go to the AstroPay website you are redirected to",
    ],
  },
];

export default CaData;
