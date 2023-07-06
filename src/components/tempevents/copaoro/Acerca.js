const Acerca = () => {
  return (
    <div>
      <div className="text-white bg-[#032C4B] rounded-3xl mt-8 mx-5 p-5">
        <h1 className="font-bold text-base mb-3 text-[#DCA64A]">COPA ORO</h1>
        <div className=" space-y-3">
          <p>
            La Copa Oro es el torneo de selecciones más importante de la
            Confederación de Fútbol de Norte, Centroamérica y el Caribe
            (Concacaf). Su primera edición se llevó a cabo en 1963 bajo el
            nombre de Campeonato de Naciones de Concacaf, con el objetivo de
            promover y fortalecer el fútbol en la región. El torneo se ha
            realizado de manera periódica desde entonces, convirtiéndose en una
            competencia emblemática de este deporte en la zona.
          </p>
          <p>
            La primera edición se celebró en El Salvador, donde participaron
            nueve equipos: Antillas Neerlandesas, Costa Rica, El Salvador,
            Guatemala, Honduras, Jamaica, México, Nicaragua y Panamá. Fue Costa
            Rica la primera selección que se proclamó como campeona ya que
            terminó la Fase Final en primer lugar.
          </p>
          <p>
            A lo largo de los años, la Copa Oro ha crecido en popularidad y en
            la calidad de los equipos participantes. Se agregaron más
            selecciones a medida que la Concacaf se expandía, lo que desde
            entonces generó una competencia cada vez más intensa. Hasta la
            fecha, y con la edición de 2023, el torneo se ha disputado 27 veces
            donde México ha sido el país que más veces ha levantado el trofeo
            con 11, seguido de Estados Unidos con siete.
          </p>
          <p>
            Desde 1996, la Copa Oro de la Concacaf se ha acostumbrado a tener
            equipos invitados que no pertenecen a esta confederación. En total,
            siete selecciones han participado como invitadas, representando a la
            CONMEBOL, AFC y CAF. Entre los equipos invitados, Brasil y Colombia
            son las selecciones más recurrentes, con tres participaciones cada
            una. Brasil ha tenido el mejor desempeño, logrando dos
            subcampeonatos en 1996 y 2003.
          </p>
        </div>
      </div>

      <div className="text-white bg-[#032C4B]  mt-8 mx-5 p-5 rounded-3xl">
        {/* Viñetas */}

        <h1 className=" text-base font-bold mb-2 text-[#DCA64A] ">
          DATOS CURIOSOS
        </h1>

        <ul className="list-disc list-inside text-white space-y-3">
          <li>
            México es el equipo más exitoso en la historia del torneo, con once
            victorias.
          </li>

          <li>Estados Unidos le sigue con siete trofeos.</li>

          <li>Costa Rica ha ganado el torneo tres veces.</li>

          <li>Canadá ha ganado el torneo dos veces.</li>

          <li>
            Guatemala, Haití y Honduras se han titulado campeones una sola
            ocasión.
          </li>
          <li>
            La Copa Oro 2021 estrenó un nuevo formato con una Fase Preliminar
            para definir algunos clasificados.
          </li>
          <li>
            Qatar se convirtió en el séptimo elenco invitado al certamen en
            2021.
          </li>
          <li>
            Cuba fue descalificado de la Copa Oro 2021 por problemas de visado.
          </li>
          <li>
            Andrés Guardado no jugó la Copa Oro 2021, por lo que no hubo ningún
            futbolista entre los principales goleadores históricos de la
            competición.
          </li>
          <li>
            Landon Donovan es el máximo goleador histórico del torneo con 18
            goles.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Acerca;
