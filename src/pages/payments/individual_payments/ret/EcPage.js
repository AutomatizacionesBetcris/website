// https://bcautomatizaciones.com/website/#/retiros/ec

import React, { useState } from "react";
import NavBar from "../../../../components/NavBar";
import EcData from "./data/EcData";
import PaymentesModal from "../../../../components/payments/modal/PaymentsModal";
import PaymentGrid from "../../../../components/payments/PaymentsGrid";

const EcPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen">
      {/* navbar */}
      <NavBar />
      <div className="flex flex-col justify-center items-center ">
        {/* Grid */}
        <PaymentGrid images={EcData} handleImageClick={handleImageClick} />
        {selectedImage && (
          <PaymentesModal selectedImage={selectedImage} onClose={handleClose} />
        )}
      </div>
    </div>
  );
};

export default EcPage;
