import { MoreInfo, Close } from "../../Buttons";
import PaymentsInfo from "./PaymentsInfo";
import PaymentsMinMax from "./PaymentsMinMax";
import PaymentsTitle from "./PaymentsTitle";

const PaymentesModal = ({ selectedImage, onClose }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex justify-center items-center min-h-screen px-4 pb-20 p-2 text-center">
        <div className="fixed inset-0 transition-opacity bg-slate-500 opacity-75" />
        <div className="inline-block align-bottom bg-white px-4 pt-2 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full">
          <PaymentsTitle selectedImage={selectedImage} />

          <PaymentsInfo selectedImage={selectedImage} />

          <PaymentsMinMax selectedImage={selectedImage} />

          <MoreInfo selectedImage={selectedImage} />

          <Close onClose={onClose} />
        </div>
      </div>
    </div>
  );
};

export default PaymentesModal;
