import React, { useState } from "react";
import ChampionsLogo from "../../../img/tempevents/champions.gif";
import LogoBC from "../../../img/logo-blanco.png";
// import "./champions.css";

const Champions = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      {/* navbar */}
      <nav className="flex flex-col border top-0 z-50 items-center justify-center h-20 bg-sky-800">
        <img src={LogoBC} alt="Logo" className="h-12" />
      </nav>
      <div>
        <img
          src={ChampionsLogo}
          alt="Champions"
          style={{ width: "100%", height: "auto" }}
          className=" bg-blue-500 "
        />

        {/* Accordion  */}
        <section>
          {/* Button 1 */}
          <div className="-mt-2">
            <button
              style={{ width: "100%" }}
              className="bg-black text-white text-lg font-bold border py-4 px-3 hover:text-gray-500"
              onClick={() => handleAccordionClick(0)}
            >
              Final Champions League ‘23
            </button>
            {activeIndex === 0 && (
              <div className="bg-bluedark text-sm p-5">
                <section className="text-white text-start">
                  <p>
                    La Final de la Liga de Campeones de la UEFA 2022-23 se
                    jugará el 10 de junio de 2023 en el Estadio Olímpico Atatürk
                    de Estambul, Turquía. En el partido se enfrentarán el
                    Manchester City de Inglaterra y el Inter de Milán de Italia.
                  </p>

                  <ul className="text-gray-300 list-disc space-y-3 m-4 mt-5">
                    <li>
                      El Manchester City se clasificó para la final al derrotar
                      al Real Madrid en semifinales, mientras que el Inter de
                      Milán se clasificó al derrotar al Villarreal.
                    </li>
                    <li>
                      Los equipos llegarán a Estambul el 8 de junio de 2023. Se
                      alojarán en el Grand Hyatt Istanbul, situado en el corazón
                      de la ciudad.
                    </li>
                    <li>
                      El Manchester City y el Inter de Milán nunca se han
                      enfrentado antes en la Liga de Campeones. Sin embargo, se
                      han enfrentado dos veces en la Recopa de la UEFA, con una
                      victoria para cada equipo.
                    </li>
                  </ul>

                  <p>
                    Los mejores jugadores de la final serán probablemente Kevin
                    De Bruyne, por el Manchester City, y Lautaro Martínez, por
                    el Inter de Milán. De Bruyne es un centrocampista belga
                    considerado uno de los mejores jugadores del mundo. Es
                    conocido por sus pases, regates y disparos. Martínez es un
                    delantero argentino conocido por su habilidad rematadora.
                    Esta temporada ha marcado 22 goles en 36 partidos con el
                    Inter de Milán.
                  </p>

                  <ul className="text-gray-300 list-disc space-y-3 m-4 mt-5">
                    <li>
                      Será la primera vez que Manchester City e Inter de Milán
                      se enfrenten en la Liga de Campeones de la UEFA.
                    </li>
                    <li>
                      El Manchester City ha ganado sus últimos 10 partidos en
                      todas las competiciones.
                    </li>
                    <li>
                      El Inter de Milán ha ganado sus últimos 5 partidos en
                      todas las competiciones.
                    </li>
                    <li>
                      El partido será arbitrado por el francés Clément Turpin.
                    </li>
                    <li>
                      El partido será televisado en directo en más de 200 países
                      de todo el mundo.
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
              className="bg-black text-white text-base font-bold border py-4 px-3 hover:text-gray-500"
              onClick={() => handleAccordionClick(1)}
            >
              ¿Cómo llegan a la final el Manchester City?
            </button>
            {activeIndex === 1 && (
              <div className="bg-bluedark text-sm p-4">
                <ul className="text-gray-300 list-disc space-y-3 m-4 mt-5">
                  <li>Clasificación coeficiente UEFA: 1</li>
                  <li>Esta temporada W7 D5 L0 F31 A5</li>
                  <li>Grupo G: Ganadores</li>
                  <li>Octavos de final: W 8-1agg vs Leipzig</li>
                  <li>Cuartos de final: W 4-1agg vs Bayern</li>
                  <li>Semifinales: W 5-1agg vs Real Madrid</li>
                </ul>
                <hr></hr>
                <h1 className="text-white text-center font-bold text-base mb-6 mt-6">
                  Historial en Champions
                </h1>
                <hr></hr>
                <ul className="text-gray-300 list-disc space-y-3 m-4 mt-5">
                  <li>
                    Última aparición en una final: 2021 (L 0-1 vs Chelsea)
                  </li>
                  <li>
                    Última temporada: Semifinales (L 5-6agg vs Real Madrid)
                  </li>
                  <li>
                    Mejor actuación en la Copa de Europa: Subcampeón (2020/21)
                  </li>
                </ul>
                <h2 className="text-white text-center font-bold text-sm mb-6 mt-6 underline">
                  La campaña hasta ahora
                </h2>
                <p className="text-gray-300">
                  El Manchester City logró de manera rápida y consistente su
                  clasificación a los octavos de final de la Liga de Campeones
                  por décima temporada consecutiva. Sin embargo, el camino hacia
                  esta meta no fue exento de dificultades para el equipo
                  dirigido por Pep Guardiola, que cuenta con una plantilla
                  repleta de estrellas. En el mes de septiembre, el City se vio
                  obligado a remontar un partido contra el Dortmund gracias a un
                  espectacular gol del prolífico delantero Erling Haaland.
                  Además, tuvieron que afrontar más de una hora de juego con un
                  jugador menos en el empate sin goles contra el Copenhague.
                </p>
                <br></br>
                <p className="text-gray-300">
                  Tras una discreta actuación en el partido de ida de octavos de
                  final contra el Leipzig, Haaland marcó un récord de cinco
                  goles en la vuelta, antes de añadir otros dos a su cuenta
                  particular en el contundente triunfo de octavos contra el
                  Bayern. En semifinales, el City se mostró más impresionante
                  que nunca al imponerse al vigente campeón, el Real Madrid, por
                  5-1 en el global de la eliminatoria.
                </p>
                <h2 className="text-white text-center font-bold text-sm mb-6 mt-6 underline">
                  ¿Por qué pueden ganar?
                </h2>
                <p className="text-gray-300">
                  El City tiene a su disposición a uno de los estrategas más
                  astutos del deporte rey, una plantilla muy completa y uno de
                  los mejores delanteros de su generación. ¿Por qué no levantar
                  el trofeo en Estambul en junio? No hay garantías en una
                  competición en la que los márgenes suelen ser decisivos, pero
                  el equipo de Guardiola no teme a nadie. Con la suerte de su
                  lado, su primera Liga de Campeones podría estar a la vuelta de
                  la esquina.
                </p>
                <h2 className="text-white text-center font-bold text-sm mb-6 mt-6 underline">
                  Entrenador: Josep Guardiola
                </h2>
                <p className="text-gray-300">
                  El técnico de 52 años, uno de los más laureados del fútbol
                  mundial, ganó esta competición dos veces con el Barcelona,
                  pero estará ansioso por poner fin a 12 años de espera para
                  conseguir un tercer triunfo. Ganó tres títulos de liga cada
                  uno al frente del club catalán y del Bayern, y en 2021/22 sumó
                  cuatro medallas de campeón de la Premier League con el City.
                </p>
                <h2 className="text-white text-center font-bold text-sm mb-6 mt-6 underline">
                  Jugador clave: Kevin De Bruyne
                </h2>
                <p className="text-gray-300">
                  Haaland sería la elección obvia (51 goles esta temporada le
                  hacen bastante influyente, después de todo), pero De Bruyne
                  sigue siendo una figura talismán, contribuyendo con un
                  suministro constante de ocasiones para el implacable noruego.
                  El centrocampista de 31 años ha asistido 28 goles en todas las
                  competiciones esta temporada, la mayor cantidad en una sola
                  campaña para el club. El belga también tiene la costumbre de
                  estar a la altura de las grandes ocasiones, ya que 11 de sus
                  14 goles en la Liga de Campeones con el City llegaron en las
                  fases eliminatorias.
                </p>
              </div>
            )}
          </div>

          {/* Button 3 */}
          <div>
            <button
              style={{ width: "100%" }}
              className="bg-black text-white text-base font-bold border py-4 px-3 hover:text-gray-500"
              onClick={() => handleAccordionClick(2)}
            >
              ¿Cómo llegan a la final el Inter de Milán?
            </button>
            {activeIndex === 2 && (
              <div className="bg-bluedark text-sm p-4">
                <ul className="text-gray-300 list-disc space-y-3 m-4 mt-5">
                  <li>Clasificación coeficiente UEFA: 10</li>
                  <li>Esta temporada W7 D3 L2 F19 A10</li>
                  <li>Grupo C: Subcampeón</li>
                  <li>Octavos de final: W 1-0agg vs Oporto</li>
                  <li>Cuartos de final: W 5-3agg vs Benfica</li>
                  <li>Semifinales: W 3-0agg vs Milan</li>
                </ul>
                <hr></hr>
                <h1 className="text-white text-center font-bold text-base mb-6 mt-6">
                  Historial en Champions
                </h1>
                <hr></hr>
                <ul className="text-gray-300 list-disc space-y-3 m-4 mt-5">
                  <li>Última aparición en la final: 2010 (W 2-0 vs Bayern)</li>
                  <li>
                    Última temporada: Octavos de final (L 1-2agg vs Liverpool)
                  </li>
                  <li>
                    Mejor actuación en la Copa de Europa: Campeones (1963/64,
                    1964/65, 2009/10)
                  </li>
                </ul>
                <h2 className="text-white text-center font-bold text-sm mb-6 mt-6 underline">
                  La campaña hasta ahora
                </h2>
                <p className="text-gray-300">
                  Mientras que el Inter ha luchado por la regularidad en la
                  Serie A, los nerazzurri han rendido con regularidad en la Liga
                  de Campeones. Se clasificaron en un grupo potente, en el que
                  figuraban el Bayern y el Barcelona, y han llegado a la final
                  tras eliminar al Oporto, el Benfica y el Milan. En la fase de
                  eliminatorias, los Nerazzurri han realizado seis actuaciones
                  sólidas, manteniendo su portería a cero en cinco ocasiones, y
                  han merecido con creces su victoria por 3-0 en el global de la
                  eliminatoria contra sus rivales de la ciudad.
                </p>
                <h2 className="text-white text-center font-bold text-sm mb-6 mt-6 underline">
                  ¿Por qué pueden ganar?
                </h2>
                <p className="text-gray-300">
                  Porque este Inter parece diseñado para dar lo mejor de sí en
                  los partidos importantes. No hay más que ver sus resultados en
                  todas las competiciones en 2023. Los nerazzurri han perdido a
                  menudo contra equipos de menor categoría en la Serie A, pero
                  siempre han rendido ante los mejores. El partido de Estambul
                  será uno de los más importantes de la historia del club.
                </p>
                <h2 className="text-white text-center font-bold text-sm mb-6 mt-6 underline">
                  Entrenador: Simone Inzaghi
                </h2>
                <p className="text-gray-300">
                  Campeón de la Serie A y tres veces de la Coppa Italia como
                  jugador con el Lazio, el técnico de 46 años también llevó una
                  copa doméstica a Roma durante sus cinco temporadas en el
                  cargo. Sustituyó a Antonio Conte en 2021 y ganó la Supercopa y
                  la Copa de Italia en su primera campaña al frente del equipo.
                </p>
                <h2 className="text-white text-center font-bold text-sm mb-6 mt-6 underline">
                  Jugador clave: Lautaro Martínez
                </h2>
                <p className="text-gray-300">
                  Apodado "El Toro", Martínez terminó la campaña 2021/22 con 25
                  goles en 49 partidos en todas las competiciones, su mejor
                  cosecha desde que llegó a Milán procedente de Racing Club en
                  2018. Formó una prolífica sociedad con Lukaku, que regresó del
                  Chelsea pero no jugó mucho en la primera mitad de la temporada
                  debido a una lesión. La pareja se combinó de forma experta
                  para el gol de la victoria de Martínez en el partido de vuelta
                  contra el Milan.
                </p>
              </div>
            )}
          </div>

          {/* Button 4 */}
          <div>
            <button
              style={{ width: "100%" }}
              className="bg-black text-white font- text-base font-bold border py-4 px-3 hover:text-gray-500"
              onClick={() => handleAccordionClick(3)}
            >
              Hechos históricos
            </button>
            {activeIndex === 3 && (
              <div className="bg-bluedark text-sm p-4">
                <ul className="text-gray-300 list-disc space-y-3 m-5">
                  <li>
                    La primera final de la UEFA Champions League se celebró en
                    1956 y fue ganada por el Real Madrid contra el Stade Reims.
                  </li>
                  <li>
                    El equipo más laureado en la historia de la Liga de
                    Campeones de la UEFA es el Real Madrid, que ha ganado la
                    competición en 14 ocasiones.
                  </li>
                  <li>
                    La final de la Liga de Campeones de la UEFA más vista fue la
                    de 2019 entre el Liverpool y el Tottenham Hotspur, que fue
                    seguida por aproximadamente 400 millones de personas en todo
                    el mundo.
                  </li>
                  <li>
                    El jugador más caro traspasado a un club de la Liga de
                    Campeones de la UEFA es Neymar, traspasado del Barcelona al
                    París Saint-Germain por 222 millones de euros en 2017.
                  </li>
                  <li>
                    El jugador con más goles en la historia de la Liga de
                    Campeones de la UEFA es Cristiano Ronaldo, que ha marcado
                    140 goles en 181 partidos.
                  </li>
                  <li>
                    El jugador con más internacionalidades en la historia de la
                    Liga de Campeones de la UEFA es Iker Casillas, que ha
                    disputado 177 partidos con el Real Madrid.
                  </li>
                  <li>
                    La Liga de Campeones de la UEFA es uno de los
                    acontecimientos deportivos más populares del mundo y
                    constituye una importante fuente de ingresos para la UEFA y
                    los clubes participantes. La competición es también uno de
                    los principales motores de la audiencia televisiva y de los
                    ingresos por patrocinio.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Champions;
