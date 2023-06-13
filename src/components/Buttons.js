import React from "react";

const Buttons = ({ onClose }) => {
  return <></>;
};

export const Close = ({ onClose }) => {
  return (
    <div className="flex justify-center items-center px-4 py-3">
      <button
        type="button"
        className="w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
        onClick={onClose}
      >
        Cerrar
      </button>
    </div>
  );
};

export const MoreInfo = ({ selectedImage }) => {
  return (
    <>
      {selectedImage.title !== "AGENCIAS BETCRIS" && (
        <div className="text-center text-gray-500 text-sm mt-3">
          <a
            href={selectedImage.url}
            target="_blank"
            className="underline hover:text-gray-700"
            rel="noopener noreferrer"
          >
            Más información
          </a>
        </div>
      )}
    </>
  );
};

export default Buttons;
