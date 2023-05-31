import ChampionsLogo from "../../../img/tempevents/champions.PNG";
import Wave from "../../../img/tempevents/wave.svg";

function champions() {
  return (
    <div className="bg-sky-600 min-h-screen flex flex-col">
      <img src={ChampionsLogo} alt="Champions" style={{ width: "100%" }} />

      <img
        src={Wave}
        alt="Wave"
        style={{ width: "100%" }}
        className="bg-white -mt-6"
      />

      <section className="text-gray-100 text-center space-y-3 m-10">
        <p>
          La Liga de Campeones de la UEFA es una competición anual de fútbol de
          clubes organizada por la Unión de Asociaciones Europeas de Fútbol
          (UEFA) y disputada por los equipos mejor clasificados de las ligas
          europeas. Es la competición de clubes más prestigiosa del fútbol
          europeo y está ampliamente considerada como la competición de clubes
          más prestigiosa del mundo.
        </p>
        <p>
          La competición se celebró por primera vez en 1955 con el nombre de
          Copa de Europa y pasó a denominarse Liga de Campeones de la UEFA en
          1992. El formato actual de la competición consta de una fase de grupos
          seguida de una fase eliminatoria. La fase de grupos consta de 32
          equipos divididos en ocho grupos de cuatro. Los dos primeros de cada
          grupo pasan a la fase eliminatoria, que consta de los octavos de
          final, los cuartos de final, las semifinales y la final.
        </p>
        <p>
          El equipo más laureado en la historia de la Liga de Campeones de la
          UEFA es el Real Madrid, que ha ganado la competición en 14 ocasiones.
          Otros equipos de éxito son el Bayern de Múnich (6 títulos), el AC
          Milan (7 títulos), el Liverpool (6 títulos) y el Barcelona (5
          títulos).
        </p>
        <p>
          La final de la Liga de Campeones de la UEFA es uno de los
          acontecimientos deportivos más vistos del mundo. Se calcula que la
          final de 2019 entre el Liverpool y el Tottenham Hotspur fue seguida
          por 400 millones de personas en todo el mundo.
        </p>
      </section>

      <hr />

      <section>
        <h1 className="text-white text-center mt-8 font-bold text-base">
          HECHOS HISTÓRICOS
        </h1>
        <ul className="text-gray-100 list-disc space-y-3 m-10">
          <li>
            La primera final de la UEFA Champions League se celebró en 1956 y
            fue ganada por el Real Madrid contra el Stade Reims.
          </li>
          <li>
            El equipo más laureado en la historia de la Liga de Campeones de la
            UEFA es el Real Madrid, que ha ganado la competición en 14
            ocasiones.
          </li>
          <li>
            La final de la Liga de Campeones de la UEFA más vista fue la de 2019
            entre el Liverpool y el Tottenham Hotspur, que fue seguida por
            aproximadamente 400 millones de personas en todo el mundo.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default champions;
