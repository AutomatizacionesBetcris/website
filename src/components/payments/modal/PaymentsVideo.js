import React from "react";

const PaymentsVideo = ({ selectedImage }) => {
  return (
    <div
      className="relative overflow-hidden border-4"
      style={{ paddingBottom: "55.25%" }}
    >
      <iframe
        src={selectedImage.video}
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        scrolling="auto"
        title={selectedImage.title}
        style={{ position: "absolute" }}
      ></iframe>
    </div>
  );
};

export default PaymentsVideo;
