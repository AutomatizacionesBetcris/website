// https://bcautomatizaciones.com/website/#/depositos/mx

import React, { useState } from "react";
import NavBar from "../../../../components/NavBar";
import MxData from "./data/MxData";
import PaymentesModal from "../../../../components/payments/modal/PaymentsModal";
import PaymentGrid from "../../../../components/payments/PaymentsGrid";

const MxPage = () => {
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
      <div className="p-5 flex flex-col justify-center items-center ">
        {/* Grid */}
        <PaymentGrid images={MxData} handleImageClick={handleImageClick} />
        {selectedImage && (
          <PaymentesModal selectedImage={selectedImage} onClose={handleClose} />
        )}
      </div>
    </div>
  );
};

export default MxPage;
