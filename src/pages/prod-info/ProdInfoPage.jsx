import Swiper from "../../components/Swiper";
import ProdInfo from "./prodInfo";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ProdInfoPage() {
  const { id } = useParams();
  console.log(useSelector((state) => state));
  const arrays = useSelector((state) => state.products.PureData.products);
  const product = arrays.find((product) => {
    return product.id == id;
  });

  return (
    <>
      <ProdInfo product={product} />
      <Swiper name="محصولات مرتبط" category={product.category} />
    </>
  );
}

export default ProdInfoPage;
