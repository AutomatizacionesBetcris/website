import { HashRouter as Router, Route, Routes } from "react-router-dom";
import EC from "./components/payments/Ec";
import PA from "./components/payments/Pa";
import MX from "./components/payments/Mx";
import PE from "./components/payments/Pe";
import HN from "./components/payments/Hn";
import SV from "./components/payments/Sv";
import CL from "./components/payments/Cl";
import GT from "./components/payments/Gt";
import DO from "./components/payments/Do";
import NI from "./components/payments/Ni";
import BR from "./components/payments/Br";
import CA from "./components/payments/Ca";

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
        <Route path="/cl" element={<CL />} />
        <Route path="/gt" element={<GT />} />
        <Route path="/do" element={<DO />} />
        <Route path="/ni" element={<NI />} />
        <Route path="/br" element={<BR />} />
        <Route path="/ca" element={<CA />} />
      </Routes>
    </Router>
  );
}

export default App;
