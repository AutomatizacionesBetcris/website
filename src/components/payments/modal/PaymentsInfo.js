import PaymentsVideo from "./PaymentsVideo";

const PaymentsInfo = ({ selectedImage }) => {
  const isPaypalOrCreditCard =
    selectedImage.title === "PAYPAL" ||
    selectedImage.title === "TARJETAS DE CRÉDITO Y DÉBITO" ||
    selectedImage.title === "NUVEI";
  const showTitle = !isPaypalOrCreditCard;

  return (
    <>
      <ul className="mt-4 mb-4 text-xs text-start w-full p-1">
        {showTitle && <p>{selectedImage.descriptionTitle}</p>}
        <br />
        {selectedImage.title !== "AGENCIAS BETCRIS" ? (
          isPaypalOrCreditCard ? (
            <li className="-mt-6" style={{ whiteSpace: "pre-wrap" }}>
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
