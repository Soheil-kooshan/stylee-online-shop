import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import { priceAfterDiscount } from "../../helper/discount";
import tooman from "../../helper/tooman";

function Product({ prod }) {
  console.log(prod.imgSrc);
  const price = tooman(priceAfterDiscount(prod.price, prod.discount));
  return (
    <Link className={styles.container} to={`/Products/${prod.id}`}>
      <img className={styles.image} src={prod.imgSrc} alt={prod.name} />
      {prod.discount && <div className={styles.badge}> {prod.discount}%</div>}
      <div className={styles.name}>
        {prod.name} کد {prod.id}
      </div>
      <div className={styles.price}>{price}</div>
      {prod.discount && (
        <div className={styles.preprice}>{tooman(prod.price)}</div>
      )}
    </Link>
  );
}

export default Product;
