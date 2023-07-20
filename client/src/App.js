import "./App.css";
import Payment from "./Payment.js";
import Completion from "./Completion.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import StripePayment from "./New";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Payment />} />
          <Route path="/n" element={<StripePayment />} />
          <Route path="/completion" element={<Completion />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
