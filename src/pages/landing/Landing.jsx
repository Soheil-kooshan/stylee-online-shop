import Swiper from "../../components/Swiper";
import Categories from "./Categories";
import Slider from "./Slider";
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
