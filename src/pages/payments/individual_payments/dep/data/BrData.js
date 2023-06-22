import Pay4Fun from "../../../../../img/payments/Pay4funDep.jpg";
import Pix from "../../../../../img/payments/Pix.jpg";
import Banktransfer from "../../../../../img/payments/Bank_transfer.jpg";

const BrData = [
  {
    img: Pay4Fun,
    title: "PAY4FUN",
    url: "https://br.betcris.help/hc/pt-br/articles/360011459957-Pay4Fun",
    min: "BRL 53",
    max: "BRL 29,000",
    time: "Imediatamente",
    description: [
      "Escolha 'Pay4Fun'",
      "Insira o valor do depósito e clique 'confirmar'",
      "Finalmente você será redirecionado para a site da Pay4Fun para completar a transação",
    ],
  },
  {
    img: Pix,
    title: "PIX",
    url: "https://br.betcris.help/hc/pt-br/articles/360018482278-PIX",
    min: "BRL 53",
    max: "BRL 1,280,000",
    time: "Imediatamente",
    description: [
      "Selecione 'PIX'",
      "Insira o valor a ser depositado e clique em 'confirmar'",
      "Finalmente você será redirecionado para a página PIX para concluir a transação",
    ],
  },
  {
    img: Banktransfer,
    title: "TRANSFERÊNCIA BANCÁRIA",
    url: "https://br.betcris.help/hc/pt-br/articles/360003674058-Transfer%C3%AAncia-banc%C3%A1ria-local",
    min: "BRL 20",
    max: "BRL 5,000",
    time: "Imediatamente",
    description: [
      "Selecione 'TRANSFERÊNCIA BANCÁRIA'",
      "Selecione o banco onde você tem conta",
      "Copie as informações que aparecem no site do seu banco",
      "Finalmente siga os passos exibidos na tela para confirmar a transação",
    ],
  },
];

export default BrData;
