import styles from "./ProdInfo.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AddAction, RemoveAction } from "../../store/cartSlice";
import { priceAfterDiscount } from "../../helper/discount";
import tooman from "../../helper/tooman";

function ProdInfo({ product }) {
  console.log(product);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <img src={product.imgSrc} className={styles.image} alt={product.name} />

      <div className={styles.info}>
        <ul>
          <li className={styles.name}>{product.name}</li>
          <li>جنس : {product.material}</li>
          <li>رنگ : {product.color}</li>
          <li>
            دسته بندی :{" "}
            {product.category.map((cat) => {
              return <p key={cat}>{cat}</p>;
            })}
          </li>
          <div className={styles.price}>
            {tooman(priceAfterDiscount(product.price, product.discount))}
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
