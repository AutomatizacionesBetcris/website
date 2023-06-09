import { HashRouter as Router, Route, Routes } from "react-router-dom";
// Individual Payments
import DEPEC from "./pages/payments/individual_payments/dep/EcPage";
import RETEC from "./pages/payments/individual_payments/ret/EcPage";
import DEPPA from "./pages/payments/individual_payments/dep/PaPage";
import RETPA from "./pages/payments/individual_payments/ret/PaPage";
import DEPMX from "./pages/payments/individual_payments/dep/MxPage";
import RETMX from "./pages/payments/individual_payments/ret/MxPage";
import DEPPE from "./pages/payments/individual_payments/dep/PePage";
import RETPE from "./pages/payments/individual_payments/ret/PePage";
import DEPHN from "./pages/payments/individual_payments/dep/HnPage";
import RETHN from "./pages/payments/individual_payments/ret/HnPage";
import DEPSV from "./pages/payments/individual_payments/dep/SvPage";
import RETSV from "./pages/payments/individual_payments/ret/SvPage";
import DEPCL from "./pages/payments/individual_payments/dep/ClPage";
import RETCL from "./pages/payments/individual_payments/ret/ClPage";
import DEPGT from "./pages/payments/individual_payments/dep/GtPage";
import RETGT from "./pages/payments/individual_payments/ret/GtPage";
import DEPDO from "./pages/payments/individual_payments/dep/DoPage";
import RETDO from "./pages/payments/individual_payments/ret/DoPage";
import DEPNI from "./pages/payments/individual_payments/dep/NiPage";
import RETNI from "./pages/payments/individual_payments/ret/NiPage";
import DEPBR from "./pages/payments/individual_payments/dep/BrPage";
import RETBR from "./pages/payments/individual_payments/ret/BrPage";
import DEPCA from "./pages/payments/individual_payments/dep/CaPage";
import RETCA from "./pages/payments/individual_payments/ret/CaPage";

// .com Payments
import DEPCOMEN from "./components/payments/com/deposits/DepMenuEN";
import DEPCOMES from "./components/payments/com/deposits/DepMenuES";
import RETCOMEN from "./components/payments/com/withdraw/RetMenuEN";
import RETCOMES from "./components/payments/com/withdraw/RetMenuES";

// Retiros y depositos generales
import RETDEPGENERAL from "./components/payments/general/DepRet";

// Autoexclusion
// Mexico
import MXMOBILEL from "./components/autoexclusion/MX/MxMobileL";
import MXMOBILEC from "./components/autoexclusion/MX/MxMobileC";
import MXDESKTOPL from "./components/autoexclusion/MX/MxDesktopL";
import MXDESKTOPC from "./components/autoexclusion/MX/MxDesktopC";

// Panama
import PAMOBILEL from "./components/autoexclusion/PA/PaMobileL";
import PAMOBILEC from "./components/autoexclusion/PA/PaMobileC";
import PADESKTOPL from "./components/autoexclusion/PA/PaDesktopL";
import PADESKTOPC from "./components/autoexclusion/PA/PaDesktopC";

// Rep. Dominicana
import DOMOBILEL from "./components/autoexclusion/DO/DoMobileL";
import DOMOBILEC from "./components/autoexclusion/DO/DoMobileC";
import DODESKTOPL from "./components/autoexclusion/DO/DoDesktopL";
import DODESKTOPC from "./components/autoexclusion/DO/DoDesktopC";

// Brasil
import BRMOBILEL from "./components/autoexclusion/BR/BrMobileL";
import BRMOBILEC from "./components/autoexclusion/BR/BrMobileC";
import BRDESKTOPL from "./components/autoexclusion/BR/BrDesktopL";
import BRDESKTOPC from "./components/autoexclusion/BR/BrDesktopC";

// Canadá
import CAMOBILEL from "./components/autoexclusion/CA/CaMobileL";
import CAMOBILEC from "./components/autoexclusion/CA/CaMobileC";
import CADESKTOPL from "./components/autoexclusion/CA/CaDesktopL";
import CADESKTOPC from "./components/autoexclusion/CA/CaDesktopC";

// All
import MOBILEL from "./components/autoexclusion/COM/All/MobileL";
import MOBILEC from "./components/autoexclusion/COM/All/MobileC";
import DESKTOPL from "./components/autoexclusion/COM/All/DesktopL";
import DESKTOPC from "./components/autoexclusion/COM/All/DesktopC";

// El Salvador
import SVMOBILEL from "./components/autoexclusion/COM/SV/SvMobileL";
import SVMOBILEC from "./components/autoexclusion/COM/SV/SvMobileC";
import SVDESKTOPL from "./components/autoexclusion/COM/SV/SvDesktopL";
import SVDESKTOPC from "./components/autoexclusion/COM/SV/SvDesktopC";

// Temp Events
import Champions from "./pages/temp_events/champions/Champions";
import Belmont from "./pages/temp_events/belmontstakes/Belmont";
import MLB from "./pages/temp_events/mlb/MLB";
import CO from "./pages/temp_events/copa_oro/CopaOro";

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

        {/* .com Payments */}
        <Route path="/depositos/generaldepEN" element={<DEPCOMEN />} />
        <Route path="/depositos/generaldepES" element={<DEPCOMES />} />
        <Route path="/retiros/generalretEN" element={<RETCOMEN />} />
        <Route path="/retiros/generalretES" element={<RETCOMES />} />

        {/* Depositos & retiros generales */}
        <Route path="/retdepgenerales" element={<RETDEPGENERAL />} />

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

        {/* Brasil */}
        <Route path="/autoexclusion/brmobilelargo" element={<BRMOBILEL />} />
        <Route path="/autoexclusion/brmobilecorto" element={<BRMOBILEC />} />
        <Route path="/autoexclusion/brdesktoplargo" element={<BRDESKTOPL />} />
        <Route path="/autoexclusion/brdesktopcorto" element={<BRDESKTOPC />} />

        {/* Canadá */}
        <Route path="/autoexclusion/camobilelargo" element={<CAMOBILEL />} />
        <Route path="/autoexclusion/camobilecorto" element={<CAMOBILEC />} />
        <Route path="/autoexclusion/cadesktoplargo" element={<CADESKTOPL />} />
        <Route path="/autoexclusion/cadesktopcorto" element={<CADESKTOPC />} />

        {/* All */}
        <Route path="/autoexclusion/mobilelargo" element={<MOBILEL />} />
        <Route path="/autoexclusion/mobilecorto" element={<MOBILEC />} />
        <Route path="/autoexclusion/desktoplargo" element={<DESKTOPL />} />
        <Route path="/autoexclusion/desktopcorto" element={<DESKTOPC />} />

        {/* El Salvador */}
        <Route path="/autoexclusion/svmobilelargo" element={<SVMOBILEL />} />
        <Route path="/autoexclusion/svmobilecorto" element={<SVMOBILEC />} />
        <Route path="/autoexclusion/svdesktoplargo" element={<SVDESKTOPL />} />
        <Route path="/autoexclusion/svdesktopcorto" element={<SVDESKTOPC />} />

        {/* Temp Events */}
        <Route path="/champions" element={<Champions />} />
        <Route path="/belmont" element={<Belmont />} />
        <Route path="/mlb" element={<MLB />} />
        <Route path="/coro" element={<CO />} />

        {/* Playground */}
        <Route path="/playground" element={<Playground />} />
      </Routes>
    </Router>
  );
}

export default App;
