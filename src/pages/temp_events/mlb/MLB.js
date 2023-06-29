import { useState } from "react";
import Game23 from "../../../components/tempevents/mlb/Game23";
import BgWhiteIAndImg from "../../../components/tempevents/mlb/BgWhiteIAndImg";
import BgBlackAndInfo from "../../../components/tempevents/mlb/BgBlackAndInfo";
import Acerca from "../../../components/tempevents/mlb/Acerca";

const MLB = () => {
  const [active, setActive] = useState(false);

  return (
    <section>
      {/* Bg white & Imagen */}
      <BgWhiteIAndImg />

      <hr />

      {/* BG Black & Info */}
      <div className="flex flex-col min-h-screen bg-[#003D5B]">
        <BgBlackAndInfo setActive={setActive} />

        <div className="mb-10">
          {active ? (
            <Game23 />
          ) : (
            <div>
              <Acerca />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MLB;
