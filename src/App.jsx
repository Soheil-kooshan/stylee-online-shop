import "./style/style.css";
import React from "react";
import Landing from "./pages/landing/landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import ProdInfoPage from "./pages/prod-info/ProdInfoPage";
import ProductsPage from "./pages/PoroductList/ProductsPage";
import Cart from "./pages/cart/cart";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/ProdInfoPage" element={<ProdInfoPage />} />
        <Route path="/ProductsPage" element={<ProductsPage />} />
        <Route path="/CartPage" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
