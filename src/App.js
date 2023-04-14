import { HashRouter as Router, Route, Routes } from "react-router-dom";
// Payments
import DEPEC from "./components/payments/deposits/DepEc";
import RETEC from "./components/payments/withdraw/RetEc";
import DEPPA from "./components/payments/deposits/DepPa";
import RETPA from "./components/payments/withdraw/RetPa";
import DEPMX from "./components/payments/deposits/DepMx";
import RETMX from "./components/payments/withdraw/RetMx";
import DEPPE from "./components/payments/deposits/DepPe";
import RETPE from "./components/payments/withdraw/RetPe";
import DEPHN from "./components/payments/deposits/DepHn";
import RETHN from "./components/payments/withdraw/RetHn";
import DEPSV from "./components/payments/deposits/DepSv";
import RETSV from "./components/payments/withdraw/RetSv";
import DEPCL from "./components/payments/deposits/DepCl";
import RETCL from "./components/payments/withdraw/RetCl";
import DEPGT from "./components/payments/deposits/DepGt";
import RETGT from "./components/payments/withdraw/RetGt";
import DEPDO from "./components/payments/deposits/DepDo";
import RETDO from "./components/payments/withdraw/RetDo";
import DEPNI from "./components/payments/deposits/DepNi";
import RETNI from "./components/payments/withdraw/RetNi";
import DEPBR from "./components/payments/deposits/DepBr";
import RETBR from "./components/payments/withdraw/RetBr";
import DEPCA from "./components/payments/deposits/DepCa";
import RETCA from "./components/payments/withdraw/RetCa";

// General Payments
import DEPGENERALEN from "./components/payments/general/deposits/DepMenuEN";
import DEPGENERALES from "./components/payments/general/deposits/DepMenuES";
import RETGENERALEN from "./components/payments/general/withdraw/RetMenuEN";
import RETGENERALES from "./components/payments/general/withdraw/RetMenuES";
// Payments

// Autoexclusion
// Mexico
import MXMOBILEL from "./components/autoexclusion/MxMobileL";
import MXMOBILEC from "./components/autoexclusion/MxMobileC";
import MXDESKTOPL from "./components/autoexclusion/MxDesktopL";
import MXDESKTOPC from "./components/autoexclusion/MxDesktopC";

// Panama
import PAMOBILEL from "./components/autoexclusion/PaMobileL";
import PAMOBILEC from "./components/autoexclusion/PaMobileC";
import PADESKTOPL from "./components/autoexclusion/PaDesktopL";
import PADESKTOPC from "./components/autoexclusion/PaDesktopC";

//Rep. Dominicana
import DOMOBILEL from "./components/autoexclusion/DoMobileL";
import DOMOBILEC from "./components/autoexclusion/DoMobileC";
import DODESKTOPL from "./components/autoexclusion/DoDesktopL";
import DODESKTOPC from "./components/autoexclusion/DoDesktopC";

// Playground
import Playground from "./components/playground/TestMenu";

function App() {
  return (
    <Router>
      <Routes>
        {/* Payments */}
        <Route path="/depositos/ec" element={<DEPEC />} />
        <Route path="/retiros/ec" element={<RETEC />} />
        <Route path="/depositos/pa" element={<DEPPA />} />
        <Route path="/retiros/pa" element={<RETPA />} />
        <Route path="/depositos/mx" element={<DEPMX />} />
        <Route path="/retiros/mx" element={<RETMX />} />
        <Route path="/depositos/pe" element={<DEPPE />} />
        <Route path="/retiros/pe" element={<RETPE />} />
        <Route path="/depositos/hn" element={<DEPHN />} />
        <Route path="/retiros/hn" element={<RETHN />} />
        <Route path="/depositos/sv" element={<DEPSV />} />
        <Route path="/retiros/sv" element={<RETSV />} />
        <Route path="/depositos/cl" element={<DEPCL />} />
        <Route path="/retiros/cl" element={<RETCL />} />
        <Route path="/depositos/gt" element={<DEPGT />} />
        <Route path="/retiros/gt" element={<RETGT />} />
        <Route path="/depositos/do" element={<DEPDO />} />
        <Route path="/retiros/do" element={<RETDO />} />
        <Route path="/depositos/ni" element={<DEPNI />} />
        <Route path="/retiros/ni" element={<RETNI />} />
        <Route path="/depositos/br" element={<DEPBR />} />
        <Route path="/retiros/br" element={<RETBR />} />
        <Route path="/depositos/ca" element={<DEPCA />} />
        <Route path="/retiros/ca" element={<RETCA />} />
        {/* General Payments */}
        <Route path="/depositos/generaldepEN" element={<DEPGENERALEN />} />
        <Route path="/depositos/generaldepES" element={<DEPGENERALES />} />
        <Route path="/retiros/generalretEN" element={<RETGENERALEN />} />
        <Route path="/retiros/generalretES" element={<RETGENERALES />} />
        {/* Payments */}

        {/* Autoexclusion */}
        {/* Mexico */}
        <Route path="/autoexclusion/mxmobilelargo" element={<MXMOBILEL />} />
        <Route path="/autoexclusion/mxmobilecorto" element={<MXMOBILEC />} />
        <Route path="/autoexclusion/mxdesktoplargo" element={<MXDESKTOPL />} />
        <Route path="/autoexclusion/mxdesktopcorto" element={<MXDESKTOPC />} />

        {/* Panama */}
        <Route path="/autoexclusion/pamobilelargo" element={<PAMOBILEL />} />
        <Route path="/autoexclusion/pamobilecorto" element={<PAMOBILEC />} />
        <Route path="/autoexclusion/padesktoplargo" element={<PADESKTOPL />} />
        <Route path="/autoexclusion/padesktopcorto" element={<PADESKTOPC />} />

        {/* Rep. Dominicana */}
        <Route path="/autoexclusion/domobilelargo" element={<DOMOBILEL />} />
        <Route path="/autoexclusion/domobilecorto" element={<DOMOBILEC />} />
        <Route path="/autoexclusion/dodesktoplargo" element={<DODESKTOPL />} />
        <Route path="/autoexclusion/dodesktopcorto" element={<DODESKTOPC />} />

        {/* Playground */}
        <Route path="/playground" element={<Playground />} />
      </Routes>
    </Router>
  );
}

export default App;
