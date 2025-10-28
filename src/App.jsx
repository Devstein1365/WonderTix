import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Ticket from "./pages/Ticket";
import EventDetails from "./pages/EventDetails";
import Checkout from "./pages/Checkout";
import PaymentProcessing from "./pages/PaymentProcessing";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFailed from "./pages/PaymentFailed";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event:id" element={<EventDetails />} />
        <Route path="/tickets" element={<Ticket />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment-processing" element={<PaymentProcessing />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-failed" element={<PaymentFailed />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
