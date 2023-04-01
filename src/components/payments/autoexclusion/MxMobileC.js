import React from "react";
import LogoBC from "../../../img/logo-blanco.png";
import Gif from "../../../img/autoexclusionImg/MX_mobile_corto.gif";

const MxMobileC = () => {
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

        <div className=" text-slate-200 text-xs text-justify p-5 m-5 bg-sky-900 bg-opacity-20 rounded-2xl shadow-lg">
          <p className="mb-3">
            En Betcris nos preocupamos por tu bienestar, si sientes que podrías
            estar en riesgo de desarrollar un problema de juego, o estás seguro
            de que actualmente tienes un problema de juego, considera usar
            nuestra función de autoexclusión, la cual te impide usar nuestros
            servicios durante un período específico de tiempo.
          </p>
          <p className="mb-3">
            Toma en cuenta lo siguiente:
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
            Sigue estos pasos:
            <ul>
              <li>
                <strong>1- </strong>Ingresa a tu cuenta Betcris (el proceso se
                hace dentro de tu cuenta) por lo tanto, debes tener acceso a la
                misma.
              </li>
              <li>
                <strong>2- </strong>Usuarios móviles: clic en ícono de persona y
                luego opción de 'Juego Responsable' (Icono de una mano).
              </li>
              <li>
                <strong>3- </strong>Por último clic en 'Autoexclusión' Usuario
                de desktop/escritorio: en la parte superior de la pantalla: clic
                en la opción de 'Juego Responsable' (Icono de una mano) y verás
                la opción de 'Autoexclusión'.
              </li>
            </ul>
          </p>
          <p className="mb-3">
            Desde ahí podrás definir el tiempo que desees para cerrar tu cuenta
            ya sea por unos meses o de manera 'indefinida'.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MxMobileC;
