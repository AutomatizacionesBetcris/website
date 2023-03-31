import React from "react";
import LogoBC from "../../../img/logo-blanco.png";
import MxMobileImg from "../../../img/autoexclusionImg/MX_mobile_corto.gif";

const MxMobileC = () => {
  return (
    <div className="min-h-screen">
      {/* navbar */}
      <nav className="flex flex-col border top-0 z-50 items-center justify-center h-20 bg-sky-800">
        <img src={LogoBC} alt="Logo" className="h-12" />
      </nav>

      {/* Grid */}
      <div className="grid w-full lg:justify-center lg:items-center">
        <img
          src={MxMobileImg}
          alt="Autoexclusión"
          className="rounded-lg border-black shadow-lg"
        />
      </div>
    </div>
  );
};

export default MxMobileC;
