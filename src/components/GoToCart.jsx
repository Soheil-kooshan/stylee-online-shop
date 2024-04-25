import { Link } from "react-router-dom";
import styles from "./GoToCart.module.css";
import { useSelector } from "react-redux";
function GoToCart() {
  const number = useSelector((state) => state.cart.products).length;
  return (
    <div className={styles.container}>
      <Link to={"cart"}>
        <img
          className={styles.cart_icon}
          src="src\assets\icons\shopping_cart_FILL0_wght400_GRAD0_opsz24.svg"
          alt="shopping cart"
        />
        <div className={styles.number}>{number}</div>
      </Link>
    </div>
  );
}

export default GoToCart;
