import { MoreInfo, Close } from "../../Buttons";
import PaymentsInfo from "./PaymentsInfo";
import PaymentsMinMax from "./PaymentsMinMax";
import PaymentsTitle from "./PaymentsTitle";

const PaymentesModal = ({ selectedImage, onClose }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
      <div className="bg-slate-500 bg-opacity-75 absolute inset-0" />
      <div className="relative bg-white rounded-lg w-full max-w-3xl mx-4 sm:mx-auto p-2">
        <PaymentsTitle selectedImage={selectedImage} />

        <PaymentsInfo selectedImage={selectedImage} />

        <PaymentsMinMax selectedImage={selectedImage} />

        <MoreInfo selectedImage={selectedImage} />

        <Close onClose={onClose} />
      </div>
    </div>
  );
};

export default PaymentesModal;
