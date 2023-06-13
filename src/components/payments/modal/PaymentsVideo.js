import React from "react";

const PaymentsVideo = ({ selectedImage }) => {
  return (
    <div className="relative" style={{ paddingBottom: "56.25%" }}>
      <iframe
        title={selectedImage.title}
        src={selectedImage.videodep}
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full rounded-2xl border-4"
      ></iframe>
    </div>
  );
};

export default PaymentsVideo;
