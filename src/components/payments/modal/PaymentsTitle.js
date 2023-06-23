import React from "react";

const PaymentsTitle = ({ selectedImage }) => {
  const isPaypalOrCreditCard =
    selectedImage.title === "DEPÓSITO PAYPAL" ||
    selectedImage.title === "DEPÓSITO TARJETAS DE CRÉDITO Y DÉBITO" ||
    selectedImage.title === "RETIRO NUVEI" ||
    selectedImage.title === "DEPÓSITO PAYPHONE" ||
    selectedImage.title === "DEPÓSITO RED ACTIVA";
  const showTitle = !isPaypalOrCreditCard;

  return (
    <>
      {showTitle && (
        <>
          <h3 className="flex justify-center font-bold text-base text-gray-900">
            {selectedImage.title}
          </h3>
          <hr />
        </>
      )}
    </>
  );
};

export default PaymentsTitle;
