import React from "react";

const BgBlackAndInfo = ({ setActive }) => {
  return (
    <div className="text-center mt-16 space-x-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-28"
        onClick={() => setActive(false)}
      >
        Acerca
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-28"
        onClick={() => setActive(true)}
      >
        Juego 2023
      </button>
    </div>
  );
};

export default BgBlackAndInfo;
