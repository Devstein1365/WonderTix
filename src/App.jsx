import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Ticket from "./pages/Ticket";
import EventDetails from "./pages/EventDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event:id" element={<EventDetails />} />
        <Route path="/tickets" element={<Ticket />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
