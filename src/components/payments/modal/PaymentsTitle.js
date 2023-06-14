import React from "react";

const PaymentsTitle = ({ selectedImage }) => {
  const isPaypalOrCreditCard =
    selectedImage.title === "PAYPAL" ||
    selectedImage.title === "TARJETAS DE CRÉDITO Y DÉBITO" ||
    selectedImage.title === "NUVEI";
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
