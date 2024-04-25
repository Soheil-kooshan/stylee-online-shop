import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import { priceAfterDiscount } from "../../helper/discount";

function Product({ prod }) {
  return (
    <Link className={styles.container} to={`${prod.id}`}>
      <img className={styles.image} src={prod.imgSrc} alt="t-shirt" />
      {prod.discount && <div className={styles.badge}> {prod.discount}%</div>}
      <div className={styles.name}>
        {prod.name} کد {prod.id}
      </div>
      <div className={styles.price}>
        {priceAfterDiscount(prod.price, prod.discount)}T
      </div>
      {prod.discount && <div className={styles.preprice}>{prod.price}</div>}
    </Link>
  );
}

export default Product;
