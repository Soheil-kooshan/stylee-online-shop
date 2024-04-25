import { useParams } from "react-router-dom";
import styles from "./ProdInfo.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AddAction, RemoveAction } from "../../store/cartSlice";
import { priceAfterDiscount } from "../../helper/discount";

function ProdInfo() {
  const { id } = useParams();
  const arrays = useSelector((state) => state.products.PureData.products);
  console.log(arrays);
  const product = arrays.find((product) => {
    return product.id == id;
  });
  console.log(product);

  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <img className={styles.image} src={product.imgSrc} alt={product.name} />
      <div className={styles.info}>
        <ul>
          <li className={styles.name}>{product.name}</li>
          <li>جنس : {product.material}</li>
          <li>رنگ : {product.color}</li>
          <li>سایز : large</li>
          <div className={styles.price}>
            {priceAfterDiscount(product.price, product.discount)}T
          </div>
          <button onClick={() => dispatch(AddAction(product))}>
            افزودن به سبد
          </button>
        </ul>
      </div>
    </div>
  );
}

export default ProdInfo;
