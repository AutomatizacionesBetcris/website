import { HashRouter as Router, Route, Routes } from "react-router-dom";
import EC from "./components/payments/Ec";
import PA from "./components/payments/Pa";
import Mx from "./components/payments/Mx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ec" element={<EC />} />
        <Route path="/mx" element={<Mx />} />
        <Route path="/pa" element={<PA />} />
      </Routes>
    </Router>
  );
}

export default App;
