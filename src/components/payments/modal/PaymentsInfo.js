import PaymentsVideo from "./PaymentsVideo";

const PaymentsInfo = ({ selectedImage }) => {
  const isPaypalOrCreditCard =
    selectedImage.title === "DEPÓSITO PAYPAL" ||
    selectedImage.title === "DEPÓSITO TARJETAS DE CRÉDITO Y DÉBITO" ||
    selectedImage.title === "RETIRO NUVEI" ||
    selectedImage.title === "DEPÓSITO PAYPHONE" ||
    selectedImage.title === "DEPÓSITO RED ACTIVA";
  const showTitle = !isPaypalOrCreditCard;

  return (
    <>
      <ul className="mt-4 mb-4 text-xs text-start w-full p-2">
        {showTitle && <p>{selectedImage.descriptionTitle}</p>}
        <br />
        {selectedImage.title !== "AGENCIAS BETCRIS" ? (
          isPaypalOrCreditCard ? (
            <li className="-mt-8" style={{ whiteSpace: "pre-wrap" }}>
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
    </>
  );
};

export default PaymentsInfo;
