import { HashRouter as Router, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <Routes>
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
      </Routes>
    </Router>
  );
}

export default App;
