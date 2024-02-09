import Swiper from "../../components/Swiper";
import Navbar from "../../components/navbar";
import Categories from "./Categories";
import Slider from "./Slider";
import Footer from "../../components/Footer";
import discountProducts from "../../services/discountProducts";
import newProducts from "../../services/newProducts";

function Landing() {
  return (
    <div>
      <Slider />
      <Categories />
      <Swiper name="تخفیف های ویژه" data={discountProducts} />
      <Swiper name="آخرین محصولات" data={newProducts} />
    </div>
  );
}

export default Landing;
