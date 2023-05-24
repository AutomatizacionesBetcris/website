import LogoBC from "../../../img/logo-blanco.png";
import Gif from "../../../img/autoexclusionImg/BR_movil_largo.gif";

const BrMobileL = () => {
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
            <span className="text-white text-base font-bold">Lembre-se!</span>
          </p>
          <p>
            <span className="text-slate-200 text-xs text-center">
              Uma vez concluído esse processo, a conta não poderá ser reativada
              até que a autoexclusão seja encerrada.
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
            <strong>Considere o seguinte:</strong>
            <ul>
              <li>
                <strong>- </strong>As autoexclusões são irreversíveis durante o
                período especificado.
              </li>
              <li>
                <strong>- </strong>Durante o período de autoexclusão, você não
                poderá usar sua conta para apostar e jogar. Sua conta será
                fechada e os fundos serão devolvidos.
              </li>
            </ul>
          </p>
          <p className="mb-3">
            <strong>Siga estes passos:</strong>
            <ul>
              <li>
                <strong>1- </strong>Faça login na sua conta Betcris (o processo
                é feito dentro da sua conta), portanto, você deve ter acesso à
                mesma.
              </li>
              <li>
                <strong>2- </strong>Uma vez dentro da sua conta, role a página
                para baixo (parte inferior da tela).
              </li>
              <li>
                <strong>3- </strong>Clique em Jogo Responsável e, em seguida,
                clique em 'Autoexclusão'.
              </li>
            </ul>
          </p>
          <p className="mb-3">
            A partir daí, você poderá definir o tempo desejado para fechar sua
            conta, seja por alguns meses ou de forma 'indefinida'.
          </p>
          <button className=" text-center text-xs font-semibold w-full h-8 shadow-3xl shadow-black rounded-lg bg-green-600 hover:bg-green-700">
            <a
              href="https://br.betcris.help/hc/pt-br/articles/360002915418-Autoexclus%C3%A3o"
              target="_link"
              rel="noopener noreferrer"
            >
              Veja mais informações aquí.
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrMobileL;
