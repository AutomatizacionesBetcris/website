import React, { useState } from "react";
import Caballos from "../../../img/tempevents/caballos.png";

const Belmont = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      <div>
        <img
          src={Caballos}
          alt="Caballos"
          style={{ width: "100%", height: "10" }}
          className="bg-white p-12 -mt-12"
        />

        {/* Accordion  */}
        <section>
          {/* Button 1 */}
          <div className="-mt-12">
            <button
              style={{ width: "100%" }}
              className="bg-white text-sky-400 text-base font-bold border py-4 px-3 hover:text-sky-600 border-sky-400"
              onClick={() => handleAccordionClick(0)}
            >
              Belmont ‘23
            </button>
            {activeIndex === 0 && (
              <div className="bg-bluedark text-sm p-5">
                <section className="text-white text-start">
                  <p>
                    La carrera tendrá lugar el 10 de junio de 2023 en Belmont
                    Park, Elmont, Nueva York.
                    <br></br>
                    <br></br>
                    Los potenciales corredores son:
                  </p>

                  <ul className="text-gray-300 text-xs list-disc space-y-3 m-4 mt-5">
                    <li>Forte | 3-1 | Todd Pletcher | Irad Ortiz Jr.</li>
                    <li>Tapit Trice | 7-2 | Steve Asmussen | Joel Rosario</li>
                    <li>Angel of Empire | 4-1 | Todd Pletcher | Jose Ortiz</li>
                    <li>National Treasure | 6-1 | Bob Baffert | Luis Saez </li>
                    <li>Arabian Lion | 10-1 | Bob Baffert | Flavien Prat </li>
                    <li>Arcangelo | 10-1 | Todd Pletcher | Dylan Davis </li>
                    <li>Hit Show | 15-1 | Todd Pletcher | Manny Franco </li>
                    <li>
                      Red Route One | 20-1 | Steve Asmussen | Ricardo Santana
                      Jr.
                    </li>
                    <li>
                      Kingsbarns | 20-1 | Kiaran McLaughlin | Kendrick Carmouche
                    </li>
                    <li>Reincarnate | 30-1 | Todd Pletcher | Corey Lanerie </li>
                    <li>Raise Cain | 30-1 | Todd Pletcher | Florent Geroux </li>
                    <li>
                      Sun Thunder | 30-1 | Todd Pletcher | Brian Hernandez Jr.
                    </li>
                    <li>
                      Prove Worthy | 30-1 | Todd Pletcher | Javier Castellano
                    </li>
                  </ul>
                </section>
              </div>
            )}
          </div>

          {/* Button 2 */}
          <div>
            <button
              style={{ width: "100%" }}
              className="bg-white text-sky-400 text-base font-bold border py-4 px-3 hover:text-sky-600 border-sky-400"
              onClick={() => handleAccordionClick(1)}
            >
              Datos curiosos de los favoritos
            </button>
            {activeIndex === 1 && (
              <div className="text-sm p-4">
                <hr></hr>
                <h1 className="text-white text-base font-bold text-center">
                  Forte
                </h1>
                <hr></hr>
                <ul className="text-gray-300 list-disc space-y-3 m-4 mt-5">
                  <li>
                    Forte es hijo de Into Mischief, uno de los sementales más
                    exitosos del mundo.
                  </li>
                  <li>
                    Forte ha ganado 3 de sus 4 salidas, incluida una victoria en
                    el Derby de Florida.
                  </li>
                  <li>
                    Forte está entrenado por Todd Pletcher, uno de los
                    entrenadores con más éxito de la historia de las carreras de
                    caballos.
                  </li>
                </ul>

                <h1 className="text-white text-center text-sm font-bold mb-6 mt-6">
                  Rendimiento en carreras previas de la triple corona:
                </h1>

                <ul className="text-gray-300 list-disc space-y-3 m-4 mt-5 mb-5">
                  <li>
                    Preakness Stakes: Eliminado por una contusión en el pata
                    delantero derecho.
                  </li>
                  <li>
                    Derby de Kentucky: Eliminado por una contusión en la pata
                    delantera derecha.
                  </li>
                </ul>

                {/* inicia segundo caballo */}
                <hr></hr>
                <h1 className="text-white text-base font-bold text-center">
                  Tapid Trice
                </h1>
                <hr></hr>
                <ul className="text-gray-300 list-disc space-y-3 m-4 mt-5">
                  <li>
                    Tapit Trice es hijo de Tapit, otro de los sementales más
                    exitosos del mundo.
                  </li>
                  <li>
                    Tapit Trice ha ganado 2 de sus 4 salidas, incluyendo una
                    victoria en el Derby de Arkansas.
                  </li>
                  <li>
                    Tapit Trice está entrenado por Steve Asmussen, otro de los
                    entrenadores de más éxito en la historia de las carreras de
                    caballos.
                  </li>
                </ul>

                <h1 className="text-white text-center text-sm font-bold mb-6 mt-6">
                  Rendimiento en carreras previas de la triple corona:
                </h1>

                <ul className="text-gray-300 list-disc space-y-3 m-4 mt-5">
                  <li>Preakness Stakes: 1º</li>
                  <li>Derby de Kentucky: 2º</li>
                </ul>
                {/* inicia tercer caballo */}
                <hr></hr>
                <h1 className="text-white text-base font-bold text-center">
                  Angel of Empire
                </h1>
                <hr></hr>
                <ul className="text-gray-300 list-disc space-y-3 m-4 mt-5">
                  <li>
                    Angel of Empire es hijo de Empire Maker, ganador del Belmont
                    Stakes 2002.
                  </li>
                  <li>
                    Angel of Empire ha ganado 2 de sus 4 salidas, incluida una
                    victoria en el Wood Memorial.
                  </li>
                  <li>
                    Angel of Empire está entrenado por Todd Pletcher, que
                    también entrena a Forte.
                  </li>
                </ul>

                <h1 className="text-white text-center text-sm font-bold mb-6 mt-6">
                  Rendimiento en carreras previas de la triple corona:
                </h1>

                <ul className="text-gray-300 list-disc space-y-3 m-4 mt-5">
                  <li>Preakness Stakes: 3º </li>
                  <li>Derby de Kentucky: 10º </li>
                </ul>
                {/* inicia cuarto caballo */}
                <hr></hr>
                <h1 className="text-white text-base font-bold text-center">
                  National Treasure
                </h1>
                <hr></hr>
                <ul className="text-gray-300 list-disc space-y-3 m-4 mt-5">
                  <li>
                    National Treasure es hijo de American Pharoah, ganador de la
                    Triple Corona en 2015.
                  </li>
                  <li>
                    National Treasure ha ganado 1 de sus 4 salidas, pero ha
                    terminado segundo en sus otras 3 salidas.
                  </li>
                  <li>National Treasure está entrenado por Bob Baffert.</li>
                </ul>

                <h1 className="text-white text-center text-sm font-bold mb-6 mt-6">
                  Rendimiento en carreras previas de la triple corona:
                </h1>

                <ul className="text-gray-300 list-disc space-y-3 m-4 mt-5">
                  <li>Preakness Stakes: 4º </li>
                  <li>Derby de Kentucky: 4º </li>
                </ul>
              </div>
            )}
          </div>

          {/* Button 3 */}
          <div>
            <button
              style={{ width: "100%" }}
              className="bg-white text-sky-400 text-base font-bold border py-4 px-3 hover:text-sky-600 border-sky-400"
              onClick={() => handleAccordionClick(2)}
            >
              ¿Qué es Belmont Stakes?
            </button>
            {activeIndex === 2 && (
              <div className="bg-bluedark text-sm p-4">
                <ul className="text-gray-300 list-disc space-y-3 m-4 mt-5">
                  <p>
                    Belmont Stakes es una carrera de grado I para caballos
                    purasangre de (aproximadamente) tres años que se celebra
                    anualmente en junio en Belmont Park en Elmont, Nueva York.
                    Es la tercera y última etapa de la Triple Corona de Carreras
                    de Pura Sangre. La carrera se corre a una distancia de 1,5
                    millas (2,4 km) sobre tierra.
                  </p>
                  <p>
                    La Belmont Stakes se celebró por primera vez en 1867 en el
                    hipódromo Jerome Park en el Bronx, Nueva York. La carrera
                    fue nombrada en honor a August Belmont Sr., un financiero
                    adinerado y propietario de caballos que fue instrumental en
                    su creación. La Belmont Stakes se ha celebrado en su actual
                    ubicación, Belmont Park, desde 1905.
                  </p>
                  <p>
                    La Belmont Stakes es la más larga de las tres carreras de la
                    Triple Corona. También es la más difícil de ganar, ya que
                    requiere que un caballo tenga velocidad y resistencia. La
                    carrera ha sido ganada por algunos de los mejores
                    purasangres de la historia, incluidos Secretariat, Affirmed
                    y American Pharoah.
                  </p>
                  <p>
                    La Belmont Stakes es un evento deportivo importante en los
                    Estados Unidos. Es atestiguada por miles de fanáticos y se
                    transmite en vivo por televisión. La carrera también es un
                    evento financiero importante, con millones de dólares
                    apostados en el resultado.
                  </p>
                </ul>
              </div>
            )}
          </div>

          {/* Button 4 */}
          <div>
            <button
              style={{ width: "100%" }}
              className="bg-white text-sky-400 font- text-base font-bold border py-4 px-3 hover:text-sky-600 border-sky-400"
              onClick={() => handleAccordionClick(3)}
            >
              Hechos históricos
            </button>
            {activeIndex === 3 && (
              <div className="bg-bluedark text-sm p-4">
                <ul className="text-gray-300 list-disc space-y-3 m-5">
                  <li>
                    Es la carrera más antigua de EEUU. Se ha corrido 154 veces,
                    este año se corre por su edición número 155.
                  </li>
                  <li>
                    El caballo ganador en el Belmont Stakes recibe el Woodlawn
                    Vase, que es un trofeo de plata que fue donado por el
                    Woodlawn Jockey Club en 1867.
                  </li>
                  <li>
                    El Belmont Stakes ha sido ganado por 13 caballos diferentes
                    que han logrado ganar la Triple Corona.
                  </li>
                  <li>
                    La multitud más grande que ha asistido al Belmont Stakes fue
                    de 120,128 personas, lo que se estableció en 2004.
                  </li>
                  <li>
                    El tiempo récord para el Belmont Stakes es de 2:24, que fue
                    establecido por Secretariat en 1973.
                  </li>
                  <li>
                    El Belmont Stakes es una carrera de apuestas de Grado 1, que
                    es el nivel más alto de competencia en las carreras de
                    caballos americanas.
                  </li>
                </ul>
                <hr></hr>
                <h1 className="text-white text-center text-sm font-bold mb-6 mt-6">
                  Ganadores más notables
                </h1>
                <hr></hr>
                <ul className="text-gray-300 text-xs list-disc space-y-3 m-4 mt-5">
                  <li>Forte | 3-1 | Todd Pletcher | Irad Ortiz Jr.</li>
                  <li>Tapit Trice | 7-2 | Steve Asmussen | Joel Rosario</li>
                  <li>Angel of Empire | 4-1 | Todd Pletcher | Jose Ortiz</li>
                  <li>National Treasure | 6-1 | Bob Baffert | Luis Saez </li>
                </ul>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Belmont;
