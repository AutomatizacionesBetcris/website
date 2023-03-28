import React, { useState } from "react";
import LogoBC from "../../../img/logo-blanco.png";
import EcoPayz from "../../../img/Ecopayz.jpg";
import Retirotarjeta from "../../../img/Pay_to_card.jpg";
import AstroPay from "../../../img/Astropay.jpg";

const imagesRetiros = [
  {
    img: EcoPayz,
    title: "ECOPAYZ",
    url: "https://get.betcris.help/hc/en-us/articles/360002245158-ecoPayz",
    min: "$10.00",
    max: "$2,500.00",
    time: "48 hours",
    descriptionTitle: "Click on 'Cashier':",
    description:
      "Click on 'ecoPayz', then enter the amount, your account number, the way you want to pay with, for example, cash, and click on 'Withdraw'.",
  },
  {
    img: Retirotarjeta,
    title: "PAY TO CARD - VISA DIRECT",
    url: "https://get.betcris.help/hc/en-us/articles/360002241997-Pay-to-Card-Visa-Direct-",
    min: "$10.00",
    max: "$5,000.00",
    time: "30 minutes",
    descriptionTitle: "Click on 'Cashier':",
    description:
      "Click on 'Pay to Card', then enter the desired amount, choose the card, and finally click on 'Withdraw'.",
  },
  {
    img: AstroPay,
    title: "ASTROPAY",
    url: "https://get.betcris.help/hc/en-us/articles/360011110557-AstroPay-Card",
    min: "$5.00",
    max: "$1,000.00",
    time: "24 hours",
    descriptionTitle: "Click on 'Cashier':",
    description:
      "Click 'AstroPay Card', then enter the amount you want to withdraw, and your account (phone number) and click on 'Confirm'.",
  },
];

const RetCa = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="min-h-screen">
      {/* navbar */}
      <nav className="flex flex-col border top-0 z-50 items-center justify-center h-20 bg-sky-800">
        <img src={LogoBC} alt="Logo" className="h-12" />
      </nav>
      <div className="p-7 flex flex-col justify-center items-center ">
        {/* Grid */}
        <div className="grid grid-cols-3 p-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-4 mt-5 sm:m-10 sm:mt-5 lg:m-56 lg:mt-5">
          {imagesRetiros.map((image, index) => (
            <img
              key={index}
              src={image.img}
              alt={`Imagen ${index + 1}`}
              className="w-38 rounded-lg overflow-hidden border-black shadow-lg hover:scale-110 transition-transform duration-300 ease-out"
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
        {selectedImage && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex justify-center items-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="justify-center">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="flex justify-center font-bold text-base text-gray-900">
                        {selectedImage.title}
                      </h3>
                      <hr></hr>
                      <p className=" mt-4 mb-4 text-sm text-justify w-full">
                        <p>{selectedImage.descriptionTitle}</p>
                        <br></br>
                        {selectedImage.description}
                      </p>
                      <div>
                        <hr></hr>
                        <div className="grid grid-cols-3 mt-2 mb-2 text-center justify-center gap-2">
                          <p className="w-full whitespace-nowrap">
                            <strong>Minimum:</strong>
                          </p>
                          <p className="w-full whitespace-nowrap">
                            <strong>Maximum:</strong>
                          </p>
                          <p className="w-full whitespace-nowrap">
                            <strong>Time:</strong>
                          </p>
                        </div>

                        <div className="grid grid-cols-3 mb-2 text-center justify-center gap-2">
                          <p>{selectedImage.min}</p>
                          <p>{selectedImage.max}</p>
                          <p>{selectedImage.time}</p>
                        </div>
                      </div>
                      <hr></hr>
                    </div>
                  </div>
                </div>
                <footer className="text-center text-gray-500 text-sm">
                  <a
                    href={selectedImage.url}
                    target="_blank"
                    className="underline hover:text-gray-700"
                    rel="noopener noreferrer"
                  >
                    More information
                  </a>
                </footer>

                <div className="flex justify-center items-center px-4 py-3">
                  <button
                    type="button"
                    className="w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setSelectedImage(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RetCa;
