import LogoBC from "../../../img/logo-blanco.png";
import Gif from "../../../img/autoexclusionImg/COM_EN_movil_largo.gif";

const CaMobileL = () => {
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
            <span className="text-white text-base font-bold">Remember!</span>
          </p>
          <p>
            <span className="text-slate-200 text-xs text-center">
              Once you have done this process, you won't be able to enable your
              account until the self-exclusion period has ended.
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
            <strong>Take into account the following:</strong>
            <ul>
              <li>
                <strong>- </strong>Self-exclusions are irreversible for the
                specified time.
              </li>
              <li>
                <strong>- </strong>During the self-exclusion time you won't be
                able to gamble or use your account; your account will be closed
                and your funds will be sent back to your account.
              </li>
            </ul>
          </p>
          <p className="mb-3">
            <strong>Follow these steps:</strong>
            <ul>
              <li>
                <strong>1- </strong>Log in to your betcris account (the process
                is done once you are in); therefore, you will need to have
                access to it.
              </li>
              <li>
                <strong>2- </strong>Scroll down to the footer of the screen.
              </li>
              <li>
                <strong>3- </strong>Lastly, click on 'Self-exclusion'.
              </li>
            </ul>
          </p>
          <p className="mb-3">
            There, you will be able to set the time frame you want to close your
            account, either just for a few months or indefinetely.
          </p>
          <button className=" text-center text-xs font-semibold w-full h-8 shadow-3xl shadow-black rounded-lg bg-green-600 hover:bg-green-700">
            <a
              href="https://get.betcris.help/hc/en-us/articles/360002666377-Self-Exclusion"
              target="_link"
              rel="noopener noreferrer"
            >
              More information here
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaMobileL;
