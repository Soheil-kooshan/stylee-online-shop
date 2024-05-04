import styles from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { RemoveAction } from "../../store/cartSlice";
import tooman from "../../helper/tooman";

function CartItem({ item, name, image, price, discount, id }) {
  console.log(name);

  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.image} src={image} alt="photo" />
      </div>
      <div className={styles.infoBox}>
        <span className={styles.name}>
          {name} کد {id}
        </span>
        <span className={styles.discount}>
          تخفیف: {discount == null ? "ندارد" : `%${discount}`}
        </span>
        <span className={styles.price}>قیمت : {tooman(price)}</span>
      </div>
      <img
        className={styles.delete}
        src="src\assets\icons\delete_FILL0_wght400_GRAD0_opsz24.svg"
        alt="delete"
        onClick={() => dispatch(RemoveAction(item))}
      />
    </div>
  );
}

export default CartItem;
