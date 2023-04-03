import React from "react";
import LogoBC from "../../../img/logo-blanco.png";
import Gif from "../../../img/autoexclusionImg/DO_movil_corto.gif";

const DoMobileC = () => {
  return (
    <div className="min-h-screen">
      {/* navbar */}
      <nav className="flex flex-col border top-0 z-50 items-center justify-center h-20 bg-sky-800">
        <img src={LogoBC} alt="Logo" className="h-12" />
      </nav>

      {/* Grid */}
      <div className="grid lg:justify-center lg:items-center">
        <div className=" text-center p-2 m-5 bg-sky-900 bg-opacity-20 rounded-2xl shadow-lg ">
          <p>
            <span className="text-white text-base font-bold">¡Recuerda!</span>
          </p>
          <p>
            <span className="text-slate-200 text-xs text-center">
              Una vez hecho este proceso no se podrá habilitar la cuenta hasta
              que dicha Autoexclusión haya terminado.
            </span>
          </p>
        </div>
        <div className="flex p-4 lg:justify-center lg:items-center">
          <img
            src={Gif}
            alt="Autoexclusión"
            className=" shadow-lg rounded-xl shadow-slate-600"
          />
        </div>

        <div className=" text-slate-200 text-xs p-5 m-5 bg-sky-900 bg-opacity-20 rounded-2xl shadow-lg">
          <p className="mb-3">
            <strong>Toma en cuenta lo siguiente:</strong>
            <ul>
              <li>
                <strong>- </strong>Las autoexclusiones son irreversibles durante
                el tiempo especificado.
              </li>
              <li>
                <strong>- </strong>Durante el período de autoexclusión, no
                podrás utilizar tu cuenta para apostar y jugar, tu cuenta se
                cerrará y se te devolverán los fondos de la cuenta.
              </li>
            </ul>
          </p>
          <p className="mb-3">
            <strong>Sigue estos pasos:</strong>
            <ul>
              <li>
                <strong>1- </strong>Ingresa a tu cuenta Betcris (el proceso se
                hace dentro de tu cuenta) por lo tanto, debes tener acceso a la
                misma.
              </li>
              <li>
                <strong>2- </strong>Una vez dentro de tu cuenta; desplazate
                hacia abajo (parte inferior de la pantalla).
              </li>
              <li>
                <strong>3- </strong>Por último haz clic en 'Autoexclusión'.
              </li>
            </ul>
          </p>
          <p className="mb-3">
            Desde ahí podrás definir el tiempo que desees para cerrar tu cuenta
            ya sea por unos meses o de manera 'indefinida'.
          </p>
          <button className=" text-center text-xs font-semibold w-full h-8 shadow-3xl shadow-black rounded-lg bg-green-600 hover:bg-green-700">
            <a
              href="https://get.betcris.help/hc/es-419/articles/360002666377-Autoexclusi%C3%B3n"
              target="_link"
              rel="noopener noreferrer"
            >
              Ver más información aquí
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoMobileC;
