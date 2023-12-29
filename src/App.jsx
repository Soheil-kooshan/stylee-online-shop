import Navbar from "./components/navbar";
import Slider from "./components/slider";
import Discountbox from "./components/Discountbox";
import Footer from "./components/Footer";
import discountProducts from "./services/discounthandling";
import data from "./services/data";
import "./style/style.css";
import React from "react";
import Categories from "./components/Categories";
function App() {
  console.log(discountProducts());
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <Discountbox />
      <Discountbox />
      <Footer />
    </div>
  );
}

export default App;
