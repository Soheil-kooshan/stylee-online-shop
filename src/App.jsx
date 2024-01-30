import "./style/style.css";
import React from "react";
import Landing from "./pages/landing/landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<p>login</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
