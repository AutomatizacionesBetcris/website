// https://bcautomatizaciones.com/website/#/depositos/br

import React, { useState } from "react";
import NavBar from "../../../../components/NavBar";
import BrData from "./data/BrData";
import PaymentesModal from "../../../../components/payments/modal/PaymentsModal";
import PaymentGrid from "../../../../components/payments/PaymentsGrid";

const BrPage = () => {
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
        <PaymentGrid images={BrData} handleImageClick={handleImageClick} />
        {selectedImage && (
          <PaymentesModal selectedImage={selectedImage} onClose={handleClose} />
        )}
      </div>
    </div>
  );
};

export default BrPage;
