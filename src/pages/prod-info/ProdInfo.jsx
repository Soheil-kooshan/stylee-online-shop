import { useParams } from "react-router-dom";
import styles from "./ProdInfo.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AddAction, RemoveAction } from "../../store/cartSlice";

function ProdInfo() {
  const { id } = useParams();
  const arrays = useSelector((state) => state.products.PureData.products);
  console.log(arrays);
  const res = arrays.filter((product) => {
    return product.id == id;
  });
  const product = res[0];
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
          <div className={styles.price}>{product.price}T</div>
          <button onClick={() => dispatch(AddAction(product))}>
            افزودن به سبد
          </button>
        </ul>
      </div>
    </div>
  );
}

export default ProdInfo;
