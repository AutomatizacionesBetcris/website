import { HashRouter as Router, Route, Routes } from "react-router-dom";
import EC from "./components/payments/Ec";
import PA from "./components/payments/Pa";
import MX from "./components/payments/Mx";
import PE from "./components/payments/Pe";
import HN from "./components/payments/Hn";
import SV from "./components/payments/Sv";
import DEPCL from "./components/payments/deposits/DepCl";
import RETCL from "./components/payments/withdraw/RetCl";
import GT from "./components/payments/Gt";
import DO from "./components/payments/Do";
import NI from "./components/payments/Ni";
import DEPBR from "./components/payments/deposits/DepBr";
import RETBR from "./components/payments/withdraw/RetBr";
import DEPCA from "./components/payments/deposits/DepCa";
import RETCA from "./components/payments/withdraw/RetCa";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ec" element={<EC />} />
        <Route path="/pa" element={<PA />} />
        <Route path="/mx" element={<MX />} />
        <Route path="/pe" element={<PE />} />
        <Route path="/hn" element={<HN />} />
        <Route path="/sv" element={<SV />} />
        <Route path="/depositos/cl" element={<DEPCL />} />
        <Route path="/retiros/cl" element={<RETCL />} />
        <Route path="/gt" element={<GT />} />
        <Route path="/do" element={<DO />} />
        <Route path="/ni" element={<NI />} />
        <Route path="/depositos/br" element={<DEPBR />} />
        <Route path="/retiros/br" element={<RETBR />} />
        <Route path="/depositos/ca" element={<DEPCA />} />
        <Route path="/retiros/ca" element={<RETCA />} />
      </Routes>
    </Router>
  );
}

export default App;
