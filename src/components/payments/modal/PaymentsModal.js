import { MoreInfo, Close } from "../../Buttons";
import PaymentsMinMax from "./PaymentsMinMax";
import PaymentsVideo from "./PaymentsVideo";

const PaymentesModal = ({ selectedImage, onClose }) => {
  return (
    <>
      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex justify-center items-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="bg-white px-4 pt-5">
              <div class="justify-center">
                <div class="text-center sm:mt-0 sm:ml-4 sm:text-left">
                  {selectedImage.title !== "PAYPAL" &&
                    selectedImage.title !== "TARJETAS DE CRÉDITO Y DÉBITO" && (
                      <>
                        <h3 class="flex justify-center font-bold text-base text-gray-900">
                          {selectedImage.title}
                        </h3>
                        <hr></hr>
                      </>
                    )}

                  <ul className="mt-4 mb-4 text-xs text-start w-full p-1">
                    {selectedImage.title !== "PAYPAL" &&
                      selectedImage.title !==
                        "TARJETAS DE CRÉDITO Y DÉBITO" && (
                        <p>{selectedImage.descriptionTitle}</p>
                      )}
                    <br />
                    {selectedImage.title !== "AGENCIAS BETCRIS" ? (
                      selectedImage.title === "TARJETAS DE CRÉDITO Y DÉBITO" ||
                      selectedImage.title === "PAYPAL" ? (
                        <li
                          className="-mt-6"
                          style={{ whiteSpace: "pre-wrap" }}
                        >
                          {/* Video iFrame */}
                          <PaymentsVideo selectedImage={selectedImage} />
                        </li>
                      ) : (
                        selectedImage.description.map((description, index) => (
                          <li key={index} className="mb-2">
                            {index + 1}. {description}
                          </li>
                        ))
                      )
                    ) : (
                      <li className="mb-2" style={{ whiteSpace: "pre-wrap" }}>
                        {selectedImage.description.map((description, index) => (
                          <div key={index}>
                            {description}
                            <br />
                            <br />
                          </div>
                        ))}
                      </li>
                    )}
                  </ul>

                  {/* Min & Max Info */}
                  {selectedImage.title !== "AGENCIAS BETCRIS" && (
                    <PaymentsMinMax selectedImage={selectedImage} />
                  )}
                </div>
              </div>
            </div>

            {/* More Info Button */}
            {selectedImage.title !== "AGENCIAS BETCRIS" && (
              <MoreInfo selectedImage={selectedImage} />
            )}

            {/* Close Button */}
            <Close onClose={onClose} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentesModal;
