import React from "react";
import LogoBC from "../../img/logo-blanco.png";
import test from "../../img/test.gif";

const Br = () => {
  return (
    <div className="min-h-screen">
      {/* navbar */}
      <nav className="flex flex-col border top-0 z-50 items-center justify-center h-20 bg-sky-800">
        <img src={LogoBC} alt="Logo" className="h-12" />
      </nav>

      {/* Grid */}
      <div className="grid p-3 mt-10">
        <img
          src={test}
          alt="test"
          className="w-38 rounded-lg overflow-hidden border-black shadow-lg hover:scale-110 transition-transform duration-300 ease-out"
        />
      </div>
    </div>
  );
};

export default Br;
