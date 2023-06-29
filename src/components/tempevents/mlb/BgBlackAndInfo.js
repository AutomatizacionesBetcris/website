import React from "react";

const BgBlackAndInfo = ({ setActive }) => {
  return (
    <div className="text-center mt-16 space-x-4">
      <button
        className="bg-[#032C4B] hover:bg-blue-900 hover:underline text-[#DCA64A] border-[#DCA64A] border font-bold py-4 px-4 rounded w-28"
        onClick={() => setActive(false)}
      >
        Acerca
      </button>

      <button
        className="bg-[#032C4B] hover:bg-blue-900 hover:underline text-[#DCA64A] border-[#DCA64A] border font-bold py-4 px-4 rounded w-28"
        onClick={() => setActive(true)}
      >
        Juego 2023
      </button>
    </div>
  );
};

export default BgBlackAndInfo;
