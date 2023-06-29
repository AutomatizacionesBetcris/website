const Acerca = () => {
  return (
    <div>
      <div className="text-white bg-red-500 border mt-8 mx-5 p-5">
        <h1 className="font-bold text-base mb-3">MLB ALL STAR GAME</h1>
        <p>
          El Juego de las Estrellas de la MLB, también conocido como el "Clásico
          de Mitad de Verano", es un juego anual de béisbol profesional de la
          MLB y disputado entre las estrellas de la Liga Americana (AL) y la
          Liga Nacional (NL). Los titulares son seleccionados por los fanáticos,
          los lanzadores son seleccionados por los managers y los reservas son
          seleccionados por los jugadores y los managers. El juego se lleva a
          cabo generalmente el segundo o tercer martes de julio, y se considera
          el punto medio simbólico de la temporada de la MLB.
        </p>
      </div>
      <div className="text-white bg-red-500 border mt-8 mx-5 p-5">
        {/* Viñetas */}
        <h1 className="text-white text-base font-bold mb-2">DATOS CURIOSOS</h1>
        <ul className="list-disc list-inside text-white">
          <li>La Liga Americana ganó el primer Juego de las Estrellas 4-2.</li>
          <li>
            En 2002, el Juego de las Estrellas terminó en un empate después de
            que ambos equipos agotaran todos sus jugadores y no había lanzadores
            frescos disponibles. Esto llevó a un cambio en las reglas, donde el
            ganador del Juego de las Estrellas obtendría la ventaja de campo en
            la Serie Mundial, aunque esta regla ya no está vigente.
          </li>
          <li>
            La Liga Nacional ha ganado solo tres veces en las últimas 20
            temporadas.
          </li>
          <li>
            Hank Aaron de los Braves jugó en más Juegos de las Estrellas, 25,
            que cualquier otro jugador.
          </li>
          <li>
            Solo se ha conectado un grand slam en todos los Juegos de las
            Estrellas, por Fred Lynn de los California Angels en la tercera
            entrada del juego de 1983.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Acerca;
