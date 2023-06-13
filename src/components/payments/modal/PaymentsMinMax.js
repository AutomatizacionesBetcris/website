import React from "react";

const PaymentsMinMax = ({ selectedImage }) => (
  <>
    <hr />
    <div className="grid grid-cols-3 mt-2 mb-2 text-center justify-center gap-2">
      <p className="w-full whitespace-nowrap">
        <strong>Mínimo:</strong>
      </p>
      <p className="w-full whitespace-nowrap">
        <strong>Máximo:</strong>
      </p>
      <p className="w-full whitespace-nowrap">
        <strong>Tiempo:</strong>
      </p>
    </div>

    <div className="grid grid-cols-3 mb-2 text-center justify-center gap-2">
      <p>{selectedImage.min}</p>
      <p>{selectedImage.max}</p>
      <p>{selectedImage.time}</p>
    </div>
    <hr />
  </>
);

export default PaymentsMinMax;
