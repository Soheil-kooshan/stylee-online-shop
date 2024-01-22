import Navbar from "./components/navbar";
import Slider from "./components/slider";
import Swiper from "./components/Swiper";
import Footer from "./components/Footer";
import newProducts from "./services/newProducts";
import discountProducts from "./services/discounthandling";
import data from "./services/data";
import "./style/style.css";
import React from "react";
import Categories from "./components/Categories";
// import Swiper from "swiper";
function App() {
  console.log(discountProducts());
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <Swiper name="تخفیف های ویژه" data={discountProducts} />
      <Swiper name="آخرین محصولات" data={newProducts} />
      <Footer />
    </div>
  );
}

export default App;
